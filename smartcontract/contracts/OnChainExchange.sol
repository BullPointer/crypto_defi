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
        uint256 exchange_id;
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
    mapping(bytes => Exchange) public exchanges;
    mapping(bytes => bool) private exchangeExists;

    function getExchangeStatus(string calldata exchange_id) 
        external 
        view 
        returns (ExchangeStatus) 
    {
        require(exchangeExists[bytes(exchange_id)], "Exchange data by ID not found");
        return exchanges[bytes(exchange_id)].status;
    }

    function getExchangeData(string calldata exchange_id) 
        public 
        view 
        returns (Exchange memory) 
    {
        require(exchangeExists[bytes(exchange_id)], "Exchange data by ID not found");
        return exchanges[bytes(exchange_id)];
    }

    function getAllExchanges()
        external
        view
        onlyOwner
        returns (Exchange[] memory)
    {
        return exchangesArr;
    }


    // Function to generate a pseudo-random unique identifier
    function generateUniqueID( 
            uint256 fromAmount,
            uint256 toAmount,
            address recipient
        ) internal view returns (string memory) {
        bytes32 hash = keccak256(abi.encodePacked(fromAmount, toAmount, recipient, block.timestamp));
        
        // Convert the hash to a base-36 string (using 0-9 and a-z)
        return toBase36(uint256(hash));
    }

    // Helper function to convert a uint256 to a base-36 string
    function toBase36(uint256 value) internal pure returns (string memory) {
        bytes memory alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
        bytes memory result = new bytes(16); 
        for (uint256 i = 0; i < 16; i++) {
            result[15 - i] = alphabet[value % 36];
            value /= 36;
        }
        return string(result);
    }

    function exchangeTypeFunc(string exType) {
        if (exType == ExchangeType.CRYPTO_TO_CRYPTO) {
            return ExchangeType.CRYPTO_TO_CRYPTO;
        } else if(exType == ExchangeType.CRYPTO_TO_FIAT) {
            return ExchangeType.CRYPTO_TO_FIAT;
        } else {
            revert("Oops! Unknown exchange type");
        }
    }

    function initiateExchange(
        uint256 fromAmount,
        uint256 toAmount,
        address receiveToSend;
        address refundAddress;
        address recipient,
        string memory fromCurrency,
        string memory toCurrency,
        string email;
        bool makeRefund;
        string memory exType;
    ) external {
        
        ExchangeType memory exchangeType = exchangeTypeFunc(exType);
        string memory exchange_id = generateUniqueID(fromAmount, toAmount, recipient);

        exchanges[bytes(exchange_id)] = 
            Exchange({
                exchange_id: exchange_id;
                fromAmount: fromAmount;
                toAmount: toAmount;
                timestamp: block.timestamp;
                charges: 132000;
                sender: msg.sender;
                receiveToSend: receiveToSend;
                refundAddress: refundAddress;
                recipient: recipient;
                fromCurrency: fromCurrency;
                toCurrency: toCurrency;
                email: email;
                makeRefund: makeRefund;
                exchangeType: exchangeType;
                status: ExchangeStatus.PENDING;
            });

        exchangeExists[bytes(exchange_id)] = true;

        emit ExchangeInitiated(
            msg.sender,
            fromCurrency,
            toCurrency,
            fromAmount,
            toAmount,
            recipient
        );
    }

    function confirmReceivedTransaction(string calldata exchange_id) external  {
        require(exchangeExists[bytes(exchange_id)], "Exchange data by ID not found");
        
        Exchange storage exchange = exchanges[bytes(exhange_id)];
        require(exchage.status == ExchangeStatus.PENDING, "Transaction is not Pending");

        exchange.status = ExchangeStatus.IN_TRANSIT;
    }

    function completeExchange(
        string calldata exchange_id
    ) external onlyOwner {
        require(exchangeExists[bytes(exchange_id)], "Exchange data by ID not found");

        Exchange storage exchage = exchanges[bytes(exchange_id)];

        require(exchage.status == ExchangeStatus.IN_TRANSIT, "Exchange already completed");

        if (
            keccak256(abi.encodePacked(exchage.toCurrency)) ==
            keccak256(abi.encodePacked("ETH"))
        ) {
            payable(exchage.recipient).transfer(exchage.toAmount);
        } else {
            IERC20 token = IERC20(getTokenAddress(exchage.toCurrency));
            token.transfer(exchage.recipient, exchage.toAmount);
        }

        exchage.status = ExchangeStatus.SUCCESS;

        emit ExchangeCompleted(
            exchage.recipient,
            exchage.fromCurrency,
            exchage.toCurrency,
            exchage.fromAmount,
            exchage.toAmount
        );
    }

    function getTokenAddress(
        string memory currency
    ) private pure returns (address) {
        // Map currency symbol to token address
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
