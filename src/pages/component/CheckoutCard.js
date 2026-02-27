import { useState } from "react";
import { useRouter } from "next/router";
import CheckoutHeader from "./CheckoutHeader";
import ItemSummary from "./ItemSummary";
import PaymentForm from "./PaymentForm";
import PayButton from "./PayButton";

export default function CheckoutCard() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = (data) => {
    const newErrors = {};

    if (!data.cardholderName.trim()) {
      newErrors.cardholderName = "Cardholder name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(data.cardholderName.trim())) {
      newErrors.cardholderName = "Name must contain only letters and spaces";
    }

    const digitsOnly = data.cardNumber.replace(/\s/g, "");
    if (!digitsOnly) {
      newErrors.cardNumber = "Card number is required";
    } else if (!/^\d{16}$/.test(digitsOnly)) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    if (!data.expiryDate.trim()) {
      newErrors.expiryDate = "Expiry date is required";
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(data.expiryDate.trim())) {
      newErrors.expiryDate = "Use MM/YY format";
    } else {
      const [month, year] = data.expiryDate.split("/");
      const expiry = new Date(2000 + parseInt(year), parseInt(month));
      if (expiry < new Date()) {
        newErrors.expiryDate = "Card has expired";
      }
    }

    if (!data.cvv.trim()) {
      newErrors.cvv = "CVV is required";
    } else if (!/^\d{3,4}$/.test(data.cvv.trim())) {
      newErrors.cvv = "CVV must be 3 or 4 digits";
    }

    return newErrors;
  };

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    if (submitted) {
      const newErrors = validate(updated);
      setErrors(newErrors);
    }
  };

  const handleSubmit = async () => {
    setSubmitted(true);
    setApiError("");
    const newErrors = validate(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cardholderName: formData.cardholderName,
          cardNumber: formData.cardNumber.replace(/\s/g, ""),
          expiryDate: formData.expiryDate,
          amount: 14900,
          currency: "INR",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Payment failed");
      }

      router.push({
        pathname: "/success",
        query: { transactionId: data.transactionId },
      });
    } catch (err) {
      setApiError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        w-full 
        max-w-md
        bg-zinc-100
        rounded-2xl 
        shadow-xl 
        p-6 
        space-y-6
        md:max-w-md
      "
    >
      <CheckoutHeader />

      <ItemSummary />
      <PaymentForm
        formData={formData}
        errors={errors}
        onChange={handleChange}
      />

      {apiError && (
        <div className="bg-red-50 border border-red-300 text-red-700 text-sm px-4 py-3 rounded-xl">
          {apiError}
        </div>
      )}

      <PayButton onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}