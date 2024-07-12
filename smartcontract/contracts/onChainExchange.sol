// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract CryptoExchange is Ownable {
    event ExchangeInitiated(
        address indexed user,
        uint256 btcAmount,
        uint256 ethAmount,
        string btcAddress,
        address ethAddress
    );
    event ExchangeCompleted(
        address indexed user,
        uint256 btcAmount,
        uint256 ethAmount
    );

    mapping(address => uint256) public pendingExchanges; // Track pending exchanges

    address public admin;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Caller is not the admin");
        _;
    }

    function initiateExchange(
        string memory btcAddress,
        address ethAddress,
        uint256 btcAmount,
        uint256 ethAmount
    ) external onlyAdmin {
        // Log the exchange details
        emit ExchangeInitiated(
            msg.sender,
            btcAmount,
            ethAmount,
            btcAddress,
            ethAddress
        );

        // Record the pending exchange
        pendingExchanges[ethAddress] = ethAmount;
    }

    function completeExchange(
        address user,
        uint256 btcAmount,
        uint256 ethAmount
    ) external onlyAdmin {
        require(
            pendingExchanges[user] >= ethAmount,
            "Insufficient pending amount"
        );

        // Transfer ETH to user
        payable(user).transfer(ethAmount);

        // Clear the pending exchange
        pendingExchanges[user] -= ethAmount;

        emit ExchangeCompleted(user, btcAmount, ethAmount);
    }

    function depositETH() external payable onlyOwner {
        // Allow admin to deposit ETH into the contract
    }

    function withdrawETH(uint256 amount) external onlyOwner {
        require(address(this).balance >= amount, "Insufficient balance");
        payable(msg.sender).transfer(amount);
    }
}
