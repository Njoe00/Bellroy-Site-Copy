import react from "react";
import SiteMapFooterTextContent from "./SiteMapFooterTextContent";

export default function SiteMapFooter() {
  return (
    <div className="bg-background-site-footer-colour">
      <div className="px-14 pb-5 gap-2 pt-6 font-sans w-full h-[400px] flex flex-row justify-center text-gray-400 font-[400]">
        {footerContent.map((content, index) => (
          <ul className="flex-column text-xs w-56 h-6" key={index}>
            {content.title}
            <SiteMapFooterTextContent content={content.body} />
          </ul>
        ))}
      </div>
    </div>
  );
}

const footerContent = [
  {
    title: "HELP",
    body: [
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
    title: "SHOP PRODUCTS",
    body: [
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
    title: "SHOP COLLECTIONS",
    body: [
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
];
