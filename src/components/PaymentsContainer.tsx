import react from "react";

export default function PayMentsContainer() {
  return (
    <div className="bg-background-payments-colour flex  flex-col p-10 w-full">
      <div className="text-black flex justify-center text-2xl font-sans">
        Safe, easy payment options
      </div>
      {PaymentIcons.map((icon, index) => (
        <div />
      ))}
    </div>
  );
}

const PaymentIcons = [
  "/payment-icons-visa.avif",
  "/payment-icons-mastercard-2.avif",
  "/payment-icons-paypal.avif",
  "/payment-icons-applepay.avif",
];
