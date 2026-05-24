import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center">
      <div className="text-center">
        <div
          className="text-8xl font-black text-white mb-4"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          404
        </div>
        <p className="text-white/40 mb-8">This page doesn&apos;t exist.</p>
        <Link
          href="/"
          className="px-6 py-3 rounded-full text-sm font-semibold text-white"
          style={{ background: "linear-gradient(135deg, #FF2D55, #BF5AF2)" }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
