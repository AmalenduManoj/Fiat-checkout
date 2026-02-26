import Image from "next/image";

export default function ItemSummary() {
  return (
    <div className="bg-zinc-100 rounded-xl p-4 flex gap-4 items-center">
      
      <div className="w-16 h-16 relative">
        <Image
          src="/headphones.png"
          alt="Headphones"
          fill
          className="object-contain rounded-lg"
        />
      </div>

      <div>
        <p className="text-xs text-gray-500 uppercase">
          Item Summary
        </p>
        <h2 className="font-semibold">
          Premium Wireless Headphones
        </h2>
        <p className="text-blue-600 font-semibold mt-1">
          ₹14,900
        </p>
      </div>
    </div>
  );
}