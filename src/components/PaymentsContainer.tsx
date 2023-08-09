import react from "react";
import Image from "next/image";

export default function PayMentsContainer() {
  return (
    <div className="bg-background-payments-colour flex items-center flex-col w-full">
      <div className="text-black flex justify-center text-2xl font-sans">
        Safe, easy payment options
      </div>
      <ul className="flex justify-center flex-row items-center">
        {PaymentIcons.map((icon, index) => (
          <Image className="flex items-center m-10" src={icon.icon} height={icon.size[1]} width={icon.size[0]} alt="test" key={index} />
        ))}
      </ul>
    </div>
  );
}

const PaymentIcons = [
  {
    icon: "/payment-icons-visa.avif",
    size: [64.63, 22],
  },
  {
    icon: "/payment-icons-mastercard-2.avif",
    size: [51.42, 40],
  },
  {
    icon: "/payment-icons-paypal.avif",
    size: [81.7, 22],
  },
  {
    icon: "/payment-icons-applepay.avif",
    size: [51.69, 22],
  },
];
