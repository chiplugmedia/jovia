// ---------------------------------------------------------------
// Plans
// ---------------------------------------------------------------
export const PLANS = [
  {
    id: "Silver",
    name: "Jovia Silver",
    subscriptionFee: "Access Fee",
    price: "₦9,000",
    features: [
      {
        title: "Smash Bonus",
        value: "₦9,000",
      },
      {
        title: "Sales Earnings",
        value: "₦7,000",
      },
      {
        title: "Celebrity Videos (30sec)",
        value: "₦1,500",
      },
      {
        title: "Fun Games (60sec WIN/LOSE)",
        value: "₦3,000",
      },
      {
        title: "Meta Activities",
        value: "₦2,000",
      },
      {
        title: "Music Streaming",
        value: "₦1,000",
      },
      {
        title: "Spillovers",
        value: "₦200 - ₦400",
      },
      {
        title: "Activate Debit Card",
        value: "$3 Bonus (OPT)",
      },
      {
        title: "Friday Bonus (FBR)",
        value: "NOT ACTIVE",
        status: "INACTIVE",
      },
      {
        title: "Jovia AI",
        value: "NOT ACTIVE",
        status: "INACTIVE",
      },
      {
        title: "Countdown Time",
        value: "Fixed (No changes)",
      },
    ],
    featured: false,
  },

  {
    id: "Gold",
    name: "Jovia Gold",
    subscriptionFee: "Access Fee",
    price: "₦15,000",
    features: [
      {
        title: "Smash Bonus",
        value: "₦15,000",
      },
      {
        title: "Sales Earnings",
        value: "₦13,000",
      },
      {
        title: "Celebrity Videos (30sec)",
        value: "₦3,000",
      },
      {
        title: "Fun Games (60sec WIN/LOSE)",
        value: "₦6,000",
      },
      {
        title: "Meta Activities",
        value: "₦3,000",
      },
      {
        title: "Music Streaming",
        value: "₦2,000",
      },
      {
        title: "Spillovers",
        value: "₦400 - ₦600",
      },
      {
        title: "Activate Debit Card",
        value: "$6 Bonus (OPT)",
      },
      {
        title: "Friday Bonus (FBR)",
        value: "Tap & Withdraw $10",
        status: "PRIORITY",
      },
      {
        title: "Jovia AI",
        value: "Ready to Assist",
        status: "PRIORITY",
      },
      {
        title: "Countdown Time",
        value: "Adjustable (30sec to 1hr)",
      },
    ],
    featured: true,
  },
];

// ---------------------------------------------------------------
// Payment details
// ---------------------------------------------------------------
// IMPORTANT: Replace these with your real, verified account details
// before deploying. Every signed-up user is shown this SAME account —
// it is not generated per-user. Do not randomize or fabricate bank
// details; only display an account you actually control.
export const BANK_DETAILS = {
  bankName: "YOUR BANK NAME",
  accountNumber: "0000000000",
  accountName: "YOUR BUSINESS ACCOUNT NAME",
};

// ---------------------------------------------------------------
// Support / Telegram
// ---------------------------------------------------------------
export const TELEGRAM_HANDLE = "nextelconnect_support";
export const TELEGRAM_URL = `https://t.me/${TELEGRAM_HANDLE}`;
export const TELEGRAM_PREFILLED_URL = `${TELEGRAM_URL}?text=${encodeURIComponent(
  "Hello Nextel Connect, I have made payment and would like to send my proof of payment. Please activate my line. Thank you!",
)}`;
