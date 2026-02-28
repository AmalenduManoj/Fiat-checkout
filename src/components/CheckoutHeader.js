"use client";

import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function CheckoutHeader() {
  const router = useRouter();

  return (
    <div className="-mx-6 bg-gray-100 border-b border-gray-300">
      <div className="relative flex items-center justify-center h-16 -mt-4">
        <button
          onClick={() => router.back()}
          className="absolute left-4 flex items-center justify-center h-full"
        >
          <MdOutlineKeyboardArrowLeft
            size={28}
            className="text-gray-800"
          />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">
          Secure Checkout
        </h1>

      </div>
    </div>
  );
}