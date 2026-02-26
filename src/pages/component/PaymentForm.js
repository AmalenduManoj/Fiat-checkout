import { CiCreditCard1 } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { MdOutlineContactless } from "react-icons/md";
import { IoMdLock } from "react-icons/io";

export default function PaymentForm() {
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
          className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="text-sm  text-black">
          Card Number
        </label>
        <div className="relative mt-1">
          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            className="w-full p-3 pr-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <MdOutlineContactless
            size={22}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-sm text-black">
            Expiry Date
          </label>
          <input
            type="text"
            placeholder="MM/YY"
            className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex-1">
          <label className="text-sm text-black">
            CVV
          </label>
          <input
            type="text"
            placeholder="123"
            className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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