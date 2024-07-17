// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MultiCryptoExchange is Ownable {
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

    struct Exchange {
        string fromCurrency;
        string toCurrency;
        uint256 fromAmount;
        uint256 toAmount;
        address recipient;
        bool completed;
    }

    mapping(address => Exchange[]) public exchanges;

    function initiateExchange(
        string memory fromCurrency,
        string memory toCurrency,
        uint256 fromAmount,
        uint256 toAmount,
        address recipient
    ) external {
        exchanges[recipient].push(
            Exchange({
                fromCurrency: fromCurrency,
                toCurrency: toCurrency,
                fromAmount: fromAmount,
                toAmount: toAmount,
                recipient: recipient,
                completed: false
            })
        );

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
