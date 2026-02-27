import { CiCreditCard1 } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { MdOutlineContactless } from "react-icons/md";
import { IoMdLock } from "react-icons/io";

export default function PaymentForm({ formData, errors, onChange }) {
  const baseInput =
    "w-full mt-1 p-3 rounded-xl border focus:outline-none focus:ring-2";
  const validInput = "border-gray-300 focus:ring-blue-500";
  const invalidInput = "border-red-500 focus:ring-red-500";

  const inputClass = (field) =>
    `${baseInput} ${errors[field] ? invalidInput : validInput}`;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-gray-800 text-[18px]">
          Card Payment
        </h2>
        <div className="flex">
          <CiCreditCard1 size={24} className="text-[#94A3B8]" />
          <CiWallet size={24} className="text-[#94A3B8]" />
        </div>
      </div>

      <div>
        <label className="text-sm text-black">
          Cardholder Name
        </label>
        <input
          type="text"
          placeholder="Enter name on card"
          value={formData.cardholderName}
          onChange={(e) => onChange("cardholderName", e.target.value)}
          className={inputClass("cardholderName")}
        />
        {errors.cardholderName && (
          <p className="text-red-500 text-xs mt-1">{errors.cardholderName}</p>
        )}
      </div>

      <div>
        <label className="text-sm text-black">
          Card Number
        </label>
        <div className="relative mt-1">
          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            value={formData.cardNumber}
            onChange={(e) => {
              const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
              const formatted = raw.replace(/(\d{4})(?=\d)/g, "$1 ");
              onChange("cardNumber", formatted);
            }}
            className={`w-full p-3 pr-12 rounded-xl border focus:outline-none focus:ring-2 ${
              errors.cardNumber
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          <MdOutlineContactless
            size={22}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
        </div>
        {errors.cardNumber && (
          <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
        )}
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-sm text-black">
            Expiry Date
          </label>
          <input
            type="text"
            placeholder="MM/YY"
            maxLength={5}
            value={formData.expiryDate}
            onChange={(e) => {
              let val = e.target.value.replace(/[^\d/]/g, "");
              if (val.length === 2 && !val.includes("/") && formData.expiryDate.length < 2) {
                val = val + "/";
              }
              onChange("expiryDate", val);
            }}
            className={inputClass("expiryDate")}
          />
          {errors.expiryDate && (
            <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>
          )}
        </div>

        <div className="flex-1">
          <label className="text-sm text-black">
            CVV
          </label>
          <input
            type="password"
            placeholder="123"
            maxLength={4}
            value={formData.cvv}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "");
              onChange("cvv", val);
            }}
            className={inputClass("cvv")}
          />
          {errors.cvv && (
            <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
          )}
        </div>
      </div>

      <div className="w-full flex justify-center items-center text-[12px] text-green-600 mt-10">
        <IoMdLock color="#16A34A"/>
        <p>Your payment is secured with 256-bit encryption</p>
      </div>

      <div className="text-center cursor-pointer space-y-2">
        <p className="text-blue-600 text-[14px]">Other Payment Methods &gt;</p>
        <p className="text-[10px]">By tapping Pay Now, you agree to our Terms of Service and
Privacy Policy.</p>
      </div>

    </div>
  );
}