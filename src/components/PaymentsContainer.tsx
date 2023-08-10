import Image from "next/image";

export default function PaymentsContainer() {
  return (
    <div className="bg-background-payments-colour flex items-center flex-col px-2.5 py-7 font-normal w-full">
      <div className="text-black flex justify-center text-2xl font-serif mb-7">
        Safe, easy payment options
      </div>
      <div className="flex justify-center flex-row items-center space-x-24">
        {PaymentIcons.map((icon, index) => (
          <Image
            className="flex items-center"
            src={icon.icon}
            height={icon.height}
            width={icon.width}
            alt="test"
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
7;
const PaymentIcons = [
  {
    icon: "/payment-icons-visa.avif",
    width: 64.63,
    height: 22,
  },
  {
    icon: "/payment-icons-mastercard-2.avif",
    width: 51.42,
    height: 40,
  },
  {
    icon: "/payment-icons-paypal.avif",
    width: 81.7,
    height: 22,
  },
  {
    icon: "/payment-icons-applepay.avif",
    width: 51.69,
    height: 22,
  },
];
