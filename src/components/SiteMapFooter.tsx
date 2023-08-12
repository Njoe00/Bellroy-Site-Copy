import react from "react";

export default function SiteMapFooter() {
  return (
    <div className="bg-background-site-footer-colour">
      <div className="px-14 pb-5 gap-2 pt-6 font-sans w-full h-[400px] flex flex-row justify-center text-gray-400 font-[400]">
        {sectionTitle.map((title, index) => (
          <ul className="flex-column text-xs w-56 h-6" key={index}>
            {title}
            {subSection[title].map((section: string, index: number) => (
              <li className="text-xs flex pt-2 w-56 h-6 hover:text-orange-400 cursor-pointer">
                {section}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

const sectionTitle = ["HELP", "SHOP PRODUCTS", "SHOP COLLECTIONS", "ABOUT"];
const subSection = {
  HELP: [
    "Customer Care",
    "Shipping and Returns",
    "3-Year Warranty",
    "Contact Us",
    "Terms & Conditions",
    "Privacy Policy",
    "Cookie Policy",
  ],

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
};
