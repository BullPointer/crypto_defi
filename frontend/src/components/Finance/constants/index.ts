export const formData = [
    {
        label: "First Name",
        name: "firstname",
        placeholder: "First Name",
        type: "text",
        required: false,
    },
    {
        label: "Last Name",
        name: "lastname",
        placeholder: "Last Name",
        type: "text",
        required: false,
    },
    {
        label: "Middle Name",
        name: "middlename",
        placeholder: "Middle Name",
        type: "text",
        required: false,
    },
    {
        label: "City",
        name: "city",
        placeholder: "City",
        type: "text",
        required: false,
    },
    {
        label: "Zip Code",
        name: "zipcode",
        placeholder: "Zip Code",
        type: "text",
        required: false,
    },
    {
        label: "Date of Birth(DoB)",
        name: "dateofbirth",
        placeholder: "Zip Code",
        type: "date",
        required: false,
    },
    {
        label: "Social Security Number or Tax ID Number",
        name: "idnum",
        placeholder: "ID Number",
        type: "text",
        required: false,
    },
];

export const notificationsData = [
    {
        _id: 0,
        title: "Alerts",
        subtitle: "Deposit, withdrawals, exchange-completion, account, loan repayment ",
        action: [
            {
                _id: 0,
                checked: true,
                inputStyling: "w-[40px] h-[20px]",
                name: "email",
                required: true,
            },
            {
                _id: 1,
                checked: false,
                inputStyling: "w-[40px] h-[20px]",
                name: "sms",
                required: false,
            },
            {
                _id: 2,
                checked: false,
                inputStyling: "w-[40px] h-[20px]",
                name: "call",
                required: false,
            },
        ],
    },
    {
        _id: 1,
        title: "Updates",
        subtitle: "Price alert, offers, product, insights",
        action: [
            {
                _id: 0,
                checked: true,
                inputStyling: "w-[40px] h-[20px]",
                name: "email",
                required: true,
            },
            {
                _id: 1,
                checked: false,
                inputStyling: "w-[40px] h-[20px]",
                name: "sms",
                required: false,
            },
            {
                _id: 2,
                checked: false,
                inputStyling: "w-[40px] h-[20px]",
                name: "call",
                required: false,
            },
        ],
    },
];

export const portfolioListingData = [
    {
        _id: 0,
        icon: "cryptocurrency-color:btc",
        currency: "Bitcoin",
        currencyAbbriev: "BTC",
        currencyBalance: 0.00,
        usdBalance: 0.00,
        eurBalance: 0.00,
        currencyPrice: 653232.53,
        currencyPercentageRate: "-0.02%",

    },
    {
        _id: 1,
        icon: "cryptocurrency-color:usdt",
        currency: "Litcoin",
        currencyAbbriev: "ltc",
        currencyBalance: 0.00,
        usdBalance: 0.00,
        eurBalance: 0.00,
        currencyPrice: 2536545.53,
        currencyPercentageRate: "0.22%",

    },
    {
        _id: 2,
        icon: "cryptocurrency-color:usd",
        currency: "USD",
        currencyAbbriev: "usd",
        currencyBalance: 0.00,
        usdBalance: 0.00,
        eurBalance: 0.00,
        currencyPrice: 111111.53,
        currencyPercentageRate: "0.05%",

    },
]