import CheckoutHeader from "./CheckoutHeader";
import ItemSummary from "./ItemSummary";
import PaymentForm from "./PaymentForm";
import PayButton from "./PayButton";

export default function CheckoutCard() {
  return (
    <div
      className="
        w-full 
        max-w-md 
        bg-white 
        rounded-2xl 
        shadow-xl 
        p-6 
        space-y-6
        md:max-w-lg
      "
    >
      {/* Header with Back Arrow */}
      <CheckoutHeader />

      <ItemSummary />
      <PaymentForm />
      <PayButton />
    </div>
  );
}