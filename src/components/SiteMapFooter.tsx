import react from "react";

export default function SiteMapFooter() {
  return (
    <div className="bg-background-site-footer-colour w-full h-[400px] flex flex-col">
      {sectionTitle.map((title, index) => (
        <div className="flex flex-col text-white" key={index}>
          {subSection.map((section, index) => (
            <div className="flex flex-start flex-col">{section[title]}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

const sectionTitle = ["HELP", "SHOP PRODUCTS", "SHOP COLLECTIONS", "ABOUT"];
const subSection = [
  {
    HELP: [
      "Customer Care",
      "Shipping and Returns",
      "3-Year Warranty",
      "Contact Us",
      "Terms & Conditions",
      "Privacy Policy",
      "Cookie Policy",
    ],
  },
  {
    "SHOP PRODUCTS": [
      "Wallets",
      "Passport Holders",
      "RFID Protected",
      "Bags",
      "Phone Cases",
      "Work Accessories",
      "Travel",
      "Pouches",
      "Key Holders",
      "Black Friday Exclusive",
    ],
  },
  {
    "SHOP COLLECTIONS": [
      "New Releases",
      "Bestsellers",
      "Coming soon",
      "Premium",
      "Venture",
      " For Tech Lovers",
      "Small Bags",
      "Recycled",
      "Slim Your Wallet",
      "Apex",
      "Materials Hub",
      "Value Sets",
      "The Outlet",
      "Travel",
      "Lite Collection",
    ],
  },
  {
    ABOUT: [
      "Our Story",
      "Our Materials",
      "Responsible Business",
      "Ambassadors",
      "Journal",
      "Collaborations",
      "Find In-Store",
      "Affiliate Program",
      "Corporate Gifting",
      "Press",
      "Careers",
    ],
  },
];
