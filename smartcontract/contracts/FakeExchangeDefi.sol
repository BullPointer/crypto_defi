// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExchangeDefi {
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
        uint256 timestamp;
        uint256 amountFrom;
        uint256 amountTo;
        uint256 charges;
        address sender;
        address recipient;
        address receiveToSend;
        address refundAddress;
        string currencyFrom;
        string currencyTo;
        string email;
        bool makeRefund;
        ExchangeType exchangeType;
        ExchangeStatus status;
    }

    Exchange[] private exchangeDataArr;
    mapping(uint256 => Exchange) private exchangeData;
    mapping(uint256 => bool) private exchangeExists;

    address private owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    function addExchange(Exchange memory exchange) public {
        require(
            !exchangeExists[exchange.exchange_id],
            "Exchange ID already exists"
        );
        exchangeDataArr.push(exchange);
        exchangeData[exchange.exchange_id] = exchange;
        exchangeExists[exchange.exchange_id] = true;
    }

    function getExchangeData(
        uint256 exchange_id
    ) public view returns (Exchange memory) {
        require(exchangeExists[exchange_id], "Exchange data by ID not found");
        return exchangeData[exchange_id];
    }

    function getAllExchangeData()
        public
        view
        onlyOwner
        returns (Exchange[] memory)
    {
        return exchangeDataArr;
    }

    function getExchangeStatus(
        uint256 exchange_id
    ) external view returns (ExchangeStatus) {
        require(exchangeExists[exchange_id], "Exchange data by ID not found");
        return exchangeData[exchange_id].status;
    }
}
