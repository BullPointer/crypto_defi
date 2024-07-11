// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExchangeDefi {
    enum ExchangeStatus {
        PENDING,
        INTRASIT,
        SUCCESS
    }

    enum ExchangeType {
        CRYPTO_TO_CRYPTO,
        CRYPTO_TO_FIAT,
    }

    struct ExchangePair {
        address sender;
        address recipient;
        uint256 amount;
        string currencyFrom;
        string currencyTo;
        uint256 timestamp;
        ExchangeType exchangeType;
        ExchangeStatus status;
    }
}
