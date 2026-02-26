"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function CheckoutHeader() {
    const router = useRouter();

    return (
        <div className="relative flex items-center justify-center pb-2">
            <button
                onClick={() => router.back()}
                className="absolute left-0 p-2 rounded-full hover:bg-gray-100 transition"
            >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>

            <h1 className="text-[18px] font-semibold leading-[28px] tracking-[-0.45px] text-gray-900">
                Secure Checkout
            </h1>
        </div>
    );
}