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
    mapping(uint256 => Exchange) public exchanges;
    mapping(uint256 => bool) private exchangeExists;

    function getExchangeStatus(
        uint256 exchange_id
    ) external view returns (ExchangeStatus) {
        require(exchangeExists[exchange_id], "Exchange data by ID not found");
        return exchanges[exchange_id].status;
    }

    function getExchangeData(
        address user,
        uint256 exchangeIndex
    ) public view returns (Exchange memory) {
        require(exchangeExists[exchange_id], "Exchange data by ID not found");
        return exchanges[exchange_id];
    }

    function getAllExchanges()
        external
        view
        onlyOwner
        returns (Exchange[] memory)
    {
        return exchangesArr;
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
        uint256 exchange_id,
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
        
        exchanges[exchange_id] = 
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
            })

        emit ExchangeInitiated(
            msg.sender,
            fromCurrency,
            toCurrency,
            fromAmount,
            toAmount,
            recipient
        );
    }

    function completeExchange(
        address user,
        uint256 exchangeIndex
    ) external onlyOwner {
        Exchange storage ex = exchanges[user][exchangeIndex];
        require(!ex.completed, "Exchange already completed");

        if (
            keccak256(abi.encodePacked(ex.toCurrency)) ==
            keccak256(abi.encodePacked("ETH"))
        ) {
            payable(user).transfer(ex.toAmount);
        } else {
            IERC20 token = IERC20(getTokenAddress(ex.toCurrency));
            token.transfer(user, ex.toAmount);
        }

        ex.completed = true;
        emit ExchangeCompleted(
            user,
            ex.fromCurrency,
            ex.toCurrency,
            ex.fromAmount,
            ex.toAmount
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
