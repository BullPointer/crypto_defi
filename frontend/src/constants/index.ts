
export const faqHeaderList = [
  "Main",
  "Deposit",
  "Fiat Deposit",
  "Withdrawn",
  "Buy",
  "Sell",
  "Coin",
  "Wallet",
  "Trade",
  "P2P",
  "Gift Card",
];

export const countryNames = [
  "Argentina",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Belgium",
  "Brazil",
  "Bulgaria",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Croatia",
  "Czech Republic",
  "Denmark",
  "Dominican Republic",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Luxembourg",
  "Malaysia",
  "Malta",
  "Mexico",
  "Moldova",
  "Monaco",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Oman",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Romania",
  "Saudi Arabia",
  "Serbia",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Vietnam",
];
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  file02,
  homeSmile,
  plusSquare,
  searchMd,
  yourlogo,
} from "../assets";

export const homeNavigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
];

export const navigation = [
  {
    id: "0",
    title: "Docs",
    url: "docs",
    onlyMobile: false,
  },
  {
    id: "1",
    title: "About Us",
    url: "about-us",
    onlyMobile: false,
  },
  {
    id: "2",
    title: "Blog",
    url: "blog",
    onlyMobile: false,
  },
  {
    id: "3",
    title: "Products",
    url: "products",
    subLink: [
      {
        id: "0",
        title: "Lend",
        url: "fi/lend",
      },
      {
        id: "1",
        title: "Loans",
        url: "fi/borrow",
      },
      {
        id: "2",
        title: "Exchange",
        url: "fi/exchange",
      },
    ],
    isList: true,
    onlyMobile: false,

  },
  {
    id: "4",
    title: "New account",
    url: "signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "login",
    onlyMobile: true,
  },
];


export const financeNavigation = [
  {
    id: "0",
    title: "Discover",
    url: "discover",
    isList: false,
  },
  {
    id: "1",
    title: "Markets",
    url: "markets",
    isList: false,
  },
  {
    id: "2",
    title: "Products",
    url: "products",
    subLink: [
      {
        id: "0",
        icon: "streamline:money-cash-bag-dollar-bag-payment-cash-money-finance",
        title: "Lend",
        url: "lend",
      },
      {
        id: "1",
        icon: "streamline:money-bank-institution-money-saving-bank-payment-finance",
        title: "Loans",
        url: "borrow",
      },
      {
        id: "2",
        icon: "fluent-emoji-high-contrast:currency-exchange",
        title: "Exchange",
        url: "exchange",
      },
    ],
    isList: true,
  },

  {
    id: "3",
    title: "Portfolio",
    url: "wallet",
    isList: false,
  },
  {
    id: "4",
    title: "Governance",
    url: "governance",
    isList: false,
  },
  {
    id: "5",
    title: "Profile",
    url: "profile",
    isList: true,
    subLink: [
      {
        id: 0,
        icon: "material-symbols:account-circle-full",
        title: "Account",
        url: "profile/account",
      },

      {
        id: 1,
        icon: "pajamas:information-o",
        title: "Personal Info",
        url: "profile/personal-info",
      },
      {
        id: 2,
        icon: "material-symbols:edit-notifications-outline-sharp",
        title: "Notifications",
        url: "profile/notifications",
      },
      {
        id: 3,
        icon: "ic:round-help-outline",
        title: "Help",
        url: "profile/help",
      },
      {
        id: 4,
        icon: "material-symbols:rule-settings-rounded",
        title: "Application Settings",
        url: "profile/application-settings",
      },
    ]
  },
];

export const footerNavigation = [
  {
    id: "_0",
    title: "Disclaimer",
    subData: [
      {
        _id: "_1",
        text: "Community governance",
        link: "/community-governance",
      },
    ],
    isLink: true,
  },
  {
    id: "_0",
    title: "About Us",
    subData: [
      {
        _id: "_1",
        text: "Careers",
        link: "/careers",
      },
      {
        _id: "_1",
        text: "Security",
        link: "/security",
      },
      {
        _id: "_1",
        text: "Blog",
        link: "/blog",
      },
      {
        _id: "_1",
        text: "Help",
        link: "/help",
      },
    ],
    isLink: true,
  },
  {
    id: "_0",
    title: "Company",
    subData: [
      {
        _id: "_1",
        text: "Terms & Conditions",
        link: "/terms-and-conditions",
      },
      {
        _id: "_1",
        text: "Privacy policy",
        link: "/privacy-policy",
      },
    ],
    isLink: true,
  },
];



export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];




export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: "akar-icons:discord-fill",
    url: "#",
  },
  {
    id: "1",
    title: "Linkedin",
    iconUrl: "radix-icons:linkedin-logo",
    url: "#",
  },
  {
    id: "2",
    title: "X",
    iconUrl: "iconoir:x",
    url: "#",
  },
  {
    id: "3",
    title: "Instagram",
    iconUrl: "jam:instagram",
    url: "#",
  },
  {
    id: "4",
    title: "Telegram",
    iconUrl: "jam:telegram",
    url: "#",
  },
  {
    id: "5",
    title: "Facebook",
    iconUrl: "akar-icons:facebook-fill",
    url: "#",
  },

];
