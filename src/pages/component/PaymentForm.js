export default function PaymentForm() {
  return (
    <div className="space-y-4">

      <h2 className="font-semibold text-gray-800">
        Card Payment
      </h2>

      {/* Cardholder Name */}
      <div>
        <label className="text-sm text-gray-600">
          Cardholder Name
        </label>
        <input
          type="text"
          placeholder="Enter name on card"
          className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Card Number */}
      <div>
        <label className="text-sm text-gray-600">
          Card Number
        </label>
        <input
          type="text"
          placeholder="0000 0000 0000 0000"
          className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Expiry + CVV */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-sm text-gray-600">
            Expiry Date
          </label>
          <input
            type="text"
            placeholder="MM/YY"
            className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex-1">
          <label className="text-sm text-gray-600">
            CVV
          </label>
          <input
            type="text"
            placeholder="123"
            className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Secure text */}
      <p className="text-xs text-green-600">
        Your payment is secured with 256-bit encryption
      </p>

      <p className="text-blue-600 text-sm text-center cursor-pointer">
        Other Payment Methods &gt;
      </p>

    </div>
  );
}