import Image from "next/image";

export default function ItemSummary() {
  return (
    <div className="bg-white rounded-xl p-4 flex gap-4 items-center">
      
      <div className="w-16 h-16 relative">
        <Image
          src="/headphones.png"
          alt="Headphones"
          fill
          className="object-contain rounded-lg"
        />
      </div>

      <div>
        <p className="text-[12px] text-gray-500 uppercase">
          Item Summary
        </p>
        <h2 className="font-bold text-[16px] text-black">
          Premium Wireless Headphones
        </h2>
        <p className="text-blue-600 font-semibold mt-1">
          ₹14,900
        </p>
      </div>
    </div>
  );
}