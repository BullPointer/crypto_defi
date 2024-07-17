// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract OnChainExchange is Ownable {
    event ExchangeInitiated(
        address indexed user,
        string fromCurrency,
        string toCurrency,
        uint256 fromAmount,
        uint256 toAmount,
        address recipient
    );
    event ExchangeCompleted(
        address indexed user,
        string fromCurrency,
        string toCurrency,
        uint256 fromAmount,
        uint256 toAmount
    );

    enum ExchangeStatus {
        PENDING,
        IN_TRANSIT,
        SUCCESS
    }

    enum ExchangeType {
        CRYPTO_TO_CRYPTO,
        CRYPTO_TO_FIAT
    }

    struct Exchange {
        string exchange_id;
        uint256 fromAmount;
        uint256 toAmount;
        uint256 timestamp;
        uint256 charges;
        address sender;
        address receiveToSend;
        address refundAddress;
        address recipient;
        string fromCurrency;
        string toCurrency;
        string email;
        bool makeRefund;
        ExchangeType exchangeType;
        ExchangeStatus status;
    }

    Exchange[] private exchangesArr;
    mapping(bytes32 => Exchange) public exchanges;
    mapping(bytes32 => bool) private exchangeExists;

    function getExchangeStatus(
        string calldata exchange_id
    ) external view returns (ExchangeStatus) {
        bytes32 idHash = keccak256(abi.encodePacked(exchange_id));
        require(exchangeExists[idHash], "Exchange data by ID not found");
        return exchanges[idHash].status;
    }

    function getExchangeData(
        string calldata exchange_id
    ) public view returns (Exchange memory) {
        bytes32 idHash = keccak256(abi.encodePacked(exchange_id));
        require(exchangeExists[idHash], "Exchange data by ID not found");
        return exchanges[idHash];
    }

    function getAllExchanges()
        external
        view
        onlyOwner
        returns (Exchange[] memory)
    {
        return exchangesArr;
    }

    uint256 private nonce;

    function generateUniqueID(
        uint256 fromAmount,
        uint256 toAmount,
        address recipient
    ) internal returns (string memory) {
        nonce++;
        bytes32 hash = keccak256(
            abi.encodePacked(
                fromAmount,
                toAmount,
                recipient,
                block.timestamp,
                block.difficulty,
                nonce
            )
        );

        return toBase36(uint256(hash));
    }

    function toBase36(uint256 value) internal pure returns (string memory) {
        bytes memory alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
        bytes memory result = new bytes(16);
        for (uint256 i = 0; i < 16; i++) {
            result[15 - i] = alphabet[value % 36];
            value /= 36;
        }
        return string(result);
    }

    function exchangeTypeFunc(
        string memory exType
    ) internal pure returns (ExchangeType) {
        if (
            keccak256(abi.encodePacked(exType)) ==
            keccak256(abi.encodePacked("CRYPTO_TO_CRYPTO"))
        ) {
            return ExchangeType.CRYPTO_TO_CRYPTO;
        } else if (
            keccak256(abi.encodePacked(exType)) ==
            keccak256(abi.encodePacked("CRYPTO_TO_FIAT"))
        ) {
            return ExchangeType.CRYPTO_TO_FIAT;
        } else {
            revert("Oops! Unknown exchange type");
        }
    }

    function initiateExchange(
        uint256 fromAmount,
        uint256 toAmount,
        address receiveToSend,
        address refundAddress,
        address recipient,
        string memory fromCurrency,
        string memory toCurrency,
        string memory email,
        bool makeRefund,
        string memory exType
    ) external {
        ExchangeType exchangeType = exchangeTypeFunc(exType);
        string memory exchange_id = generateUniqueID(
            fromAmount,
            toAmount,
            recipient
        );
        bytes32 idHash = keccak256(abi.encodePacked(exchange_id));

        exchanges[idHash] = Exchange({
            exchange_id: exchange_id,
            fromAmount: fromAmount,
            toAmount: toAmount,
            timestamp: block.timestamp,
            charges: 132000,
            sender: msg.sender,
            receiveToSend: receiveToSend,
            refundAddress: refundAddress,
            recipient: recipient,
            fromCurrency: fromCurrency,
            toCurrency: toCurrency,
            email: email,
            makeRefund: makeRefund,
            exchangeType: exchangeType,
            status: ExchangeStatus.PENDING
        });

        exchangeExists[idHash] = true;
        exchangesArr.push(exchanges[idHash]);

        emit ExchangeInitiated(
            msg.sender,
            fromCurrency,
            toCurrency,
            fromAmount,
            toAmount,
            recipient
        );
    }

    function confirmReceivedTransaction(string calldata exchange_id) external {
        bytes32 idHash = keccak256(abi.encodePacked(exchange_id));
        require(exchangeExists[idHash], "Exchange data by ID not found");

        Exchange storage exchange = exchanges[idHash];
        require(
            exchange.status == ExchangeStatus.PENDING,
            "Transaction is not Pending"
        );

        exchange.status = ExchangeStatus.IN_TRANSIT;
    }

    function completeExchange(string calldata exchange_id) external onlyOwner {
        bytes32 idHash = keccak256(abi.encodePacked(exchange_id));
        require(exchangeExists[idHash], "Exchange data by ID not found");

        Exchange storage exchange = exchanges[idHash];

        require(
            exchange.status == ExchangeStatus.IN_TRANSIT,
            "Exchange already completed"
        );

        if (
            keccak256(abi.encodePacked(exchange.toCurrency)) ==
            keccak256(abi.encodePacked("ETH"))
        ) {
            payable(exchange.recipient).transfer(exchange.toAmount);
        } else {
            IERC20 token = IERC20(getTokenAddress(exchange.toCurrency));
            token.transfer(exchange.recipient, exchange.toAmount);
        }

        exchange.status = ExchangeStatus.SUCCESS;

        emit ExchangeCompleted(
            exchange.recipient,
            exchange.fromCurrency,
            exchange.toCurrency,
            exchange.fromAmount,
            exchange.toAmount
        );
    }

    function getTokenAddress(
        string memory currency
    ) private pure returns (address) {
        if (
            keccak256(abi.encodePacked(currency)) ==
            keccak256(abi.encodePacked("USDT"))
        ) {
            return 0x1234567890abcdef1234567890abcdef12345678; // Example address
        }
        // Add more mappings as needed
        return address(0);
    }

    function depositETH() external payable onlyOwner {
        // Allow admin to deposit ETH into the contract
    }

    function withdrawETH(uint256 amount) external onlyOwner {
        require(address(this).balance >= amount, "Insufficient balance");
        payable(msg.sender).transfer(amount);
    }

    function depositERC20(address token, uint256 amount) external onlyOwner {
        IERC20(token).transferFrom(msg.sender, address(this), amount);
    }

    function withdrawERC20(address token, uint256 amount) external onlyOwner {
        IERC20(token).transfer(msg.sender, amount);
    }
}
