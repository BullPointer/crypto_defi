// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LendDefi {
    enum DefiStatus {
        PENDING,
        IN_TRANSIT,
        TRANSACTION_COMPLETE
    }

    enum Currency {
        ETH,
        LTH,
        USDC
    }

    struct Lend {
        address lender;
        uint256 amount;
        uint256 apy;
        Currency currency;
        uint256 duration;
        uint256 timestamp;
        DefiStatus status;
    }

    event LendingEvent(address lender, uint256 amount, DefiStatus status);

    mapping(address => Lend[]) public lenders;

    address public owner;

    uint256 public ethAPY;
    uint256 public lthAPY;
    uint256 public usdcAPY;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "Caller is not the owner");
        _;
    }

    // Function for editing all APY at once
    function editAllAPY(
        uint256 _ethApyValue,
        uint256 _lthApyValue,
        uint256 _usdcApyValue
    ) external onlyOwner {
        ethAPY = _ethApyValue;
        lthAPY = _lthApyValue;
        usdcAPY = _usdcApyValue;
    }

    // Function for editing only one APY at a time
    function editSingleAPY(
        string memory _coin,
        uint256 _apyValue
    ) external onlyOwner {
        if (_coin == Currency.ETH) {
            ethAPY = _apyValue;
        } else if (_coin == Currency.LTH) {
            lthAPY = _apyValue;
        } else if (_coin == Currency.USDC) {
            usdcAPY = _apyValue;
        } else {
            revert("Unsupported Currency");
        }
    }

    // Functions for lending ETH, LTH, USDC
    function lendETH(uint256 _amount) external payable {
        require(_amount == msg.value, "Amount sent not equal to amount passed");
        require(_amount > 0, "Investment amount should be greater than 0");

        Lend memory lender = Lend(
            msg.sender,
            _amount,
            ethAPY,
            Currency.ETH,
            0,
            block.timestamp,
            DefiStatus.TRANSACTION_COMPLETE
        );
        lenders[msg.sender].push(lender);

        emit LendingEvent(msg.sender, _amount, DefiStatus.TRANSACTION_COMPLETE);
    }

    function lendLTH(uint256 _amount, address _lthToken) external {
        require(_amount > 0, "Amount must not be 0");
        require(_amount == msg.value, "Amount sent not equal to amount passed");
        require(
            IERC20(_lthToken).balanceOf(msg.sender) >= _amount,
            "Insufficient balance"
        );
        require(
            IERC20(_lthToken).transferFrom(msg.sender, address(this), _amount),
            "Error in Transaction"
        );

        Lend memory lender = Lend(
            msg.sender,
            _amount,
            lthAPY,
            Currency.LTH,
            0,
            block.timestamp,
            DefiStatus.TRANSACTION_COMPLETE
        );

        lenders[msg.sender].push(lender);

        emit LendingEvent(msg.sender, _amount, DefiStatus.TRANSACTION_COMPLETE);
    }

    function lendUSDC(uint256 _amount, address _usdcToken) external {
        require(_amount > 0, "Amount must not be 0");
        require(_amount == msg.value, "Amount sent not equal to amount passed");
        require(
            IERC20(_usdcToken).balanceOf(msg.sender) >= _amount,
            "Insufficient balance"
        );

        require(
            IERC20(_usdcToken).transferFrom(msg.sender, address(this), _amount),
            "Error in Transaction"
        );

        Lend memory lender = Lend(
            msg.sender,
            _amount,
            usdcAPY,
            Currency.USDC,
            0,
            block.timestamp,
            DefiStatus.TRANSACTION_COMPLETE
        );

        lenders[msg.sender].push(lender);

        emit LendingEvent(msg.sender, _amount, DefiStatus.TRANSACTION_COMPLETE);
    }

    // Functions to get the balance of ETH, LTH, and USDC in the contract
    function getETHBalance() public view returns (uint256) onlyOwner {
        return address(this).balance;
    }

    function getLTHBalance(address _lthToken) public view returns (uint256) onlyOwner {
        return IERC20(_lthToken).balanceOf(address(this));
    }

    function getUSDCBalance(address _usdcToken) public view returns (uint256) onlyOwner {
        return IERC20(_usdcToken).balanceOf(address(this));
    }
}
