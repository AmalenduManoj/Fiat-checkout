import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { IoCheckmarkCircle } from "react-icons/io5";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Success() {
  const router = useRouter();
  const { transactionId } = router.query;

  return (
    <div
      className={`${inter.className} flex min-h-screen items-center justify-center`}
    >
      <div className="w-full max-w-md bg-zinc-100 rounded-2xl shadow-xl p-8 text-center space-y-6">
        <div className="flex justify-center">
          <IoCheckmarkCircle className="text-green-500" size={72} />
        </div>

        <h1 className="text-2xl font-semibold text-gray-800">
          Payment Successful!
        </h1>

        <p className="text-gray-500 text-sm">
          Your payment of <span className="font-semibold text-gray-800">₹14,900</span> has been
          processed successfully.
        </p>

        {transactionId && (
          <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3">
            <p className="text-xs text-gray-500">Transaction ID</p>
            <p className="text-sm font-semibold text-gray-800">{transactionId}</p>
          </div>
        )}

        <button
          onClick={() => router.push("/")}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
