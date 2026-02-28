import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { IoCloseCircle } from "react-icons/io5";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Failure() {
  const router = useRouter();
  const { message } = router.query;

  return (
    <div
      className={`${inter.className} flex min-h-screen items-center justify-center`}
    >
      <div className="w-full max-w-md bg-zinc-100 rounded-2xl shadow-xl p-8 text-center space-y-6">
        <div className="flex justify-center">
          <IoCloseCircle className="text-red-500" size={72} />
        </div>

        <h1 className="text-2xl font-semibold text-gray-800">
          Payment Failed
        </h1>

        <p className="text-gray-500 text-sm">
          {message || "Something went wrong while processing your payment. Please try again."}
        </p>

        <button
          onClick={() => router.push("/")}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
