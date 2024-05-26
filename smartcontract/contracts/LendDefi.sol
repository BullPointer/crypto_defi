// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/erc20/contracts/token/ERC20/IERC20.sol";

contract LendDefi {
    enum DefiStatus {
        PENDING,
        IN_TRANSIT,
        TRANSACTION_COMPLETE
    }

    struct Lend {
        address borrower;
        uint256 amount;
        uint256 apy;
        string currency;
        uint256 duration;
        uint256 timestamp;
        DefiStatus status;
    }

    event LendingEvent(address lender, uint256 amount, DefiStatus status);

    mapping(address => Lend[]) lenders;

    address owner;

    uint256 public ethAPY;
    uint256 public lthAPY;
    uint256 public usdcAPY;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(owner == msg.sender);
        _;
    }

    function toLowerCase(string memory strings) pure returns (string memory) {
        bytes memory byteStrings = bytes(strings);
        bytes memory bytesLowerCase = new bytes(byteStrings.length);

        for (uint256 count = 0; count < byteStrings.length; count++) {
            if (byteStrings[count] >= 0x41 && byteStrings[count] <= 0x5A) {
                bytesLowerCase[count] = bytes1(uint8(byteStrings[count]) + 32);
            } else {
                bytesLowerCase[count] = byteStrings[count];
            }
        }

        return string(bytesLowerCase);
    }

    function editAllAPY(
        string memory _eth,
        string memory _lth,
        string memory _usdc,
        uint256 _ethApyValue,
        uint256 _lthApyValue,
        uint256 _usdcApyValue
    ) external onlyOwner {
        require(
            toLowerCase(_eth) == "eth" &&
                toLowerCase(_lth) == "lth" &&
                toLowerCase(_usdc) == "usdc",
            "Unidentified error. Make sure currencies are 'eth', 'lth', 'usdc'"
        );

        ethAPY = _ethApyValue;
        lthAPY = _lthApyValue;
        usdcAPY = _usdcApyValue;
    }

    function editSingleAPY(
        string memory _coin,
        uint256 _apyValue
    ) external onlyOwner {
        require(
            toLowerCase(_coin) == "eth" ||
                toLowerCase(_coin) == "lth" ||
                toLowerCase(_coin) ==
                "usdc"
                "Unsupported Currency(make sure to choose any of eth/lth/usdc)"
        );

        if (toLowerCase(_coin) == "eth") {
            ethAPY = _apyValue;
        }
        if (toLowerCase(_coin) == "lth") {
            lthAPY = _apyValue;
        }
        if (toLowerCase(_coin) == "usdc") {
            usdcAPY = _apyValue;
        }
        return (
            "Unsupported Currency(make sure to choose any of eth/lth/usdc)"
        );
    }

    function lendETH(uint256 _amount) external payable {
        require(_amount == msg.value, "Amount sent not equal to amount passed");
        require(_amount > 0, "Investment amount should be greater than 0");

        Lend storage lender = Lend(
            msg.sender,
            _amount,
            ethAPY,
            "ETH",
            "duration",
            block.timestamp,
            DefiStatus.TRANSACTION_COMPLETE
        );
        lenders[msg.sender].push(lender);

        emit LendingEvent(msg.sender, _amount, DefiStatus.TRANSACTION_COMPLETE);
    }

    function lendLTH(uint256 _amount, address _lthToken) external {
        require(_amount == msg.value, "Error in value input(amount)");
        require(_amount > 0, "amount must not be 0");
        require(address(_lthToken).balance > _amount, "Insufficient balance");
        require(
            _lthToken.transferFrom(msg.sender, address(this), _amount),
            "Error in Transaction"
        );

        Lend storage lender = Lend(
            msg.sender,
            _amount,
            lthAPY,
            "LTH",
            "duration",
            block.timestamp,
            DefiStatus.TRANSACTION_COMPLETE
        );

        lenders[msg.sender].push(lender);

        emit LendingEvent(msg.sender, _amount, DefiStatus.TRANSACTION_COMPLETE);
    }

    function lendUSDC(uint256 _amount, address _usdcToken) external {
        require(_amount == msg.value, "Error in value input(amount)");
        require(_amount > 0, "amount must not be 0");
        require(address(_usdcToken).balance > _amount, "Insufficient balance");

        require(
            _usdcToken.transferFrom(msg.sender, address(this), _amount),
            "Error in Transaction"
        );

        Lend storage lender = Lend(
            msg.sender,
            _amount,
            usdcAPY,
            "USDC",
            "duration",
            block.timestamp,
            DefiStatus.TRANSACTION_COMPLETE
        );

        lenders[msg.sender].push(lender);

        emit LendingEvent(msg.sender, _amount, DefiStatus.TRANSACTION_COMPLETE);
    }
}
