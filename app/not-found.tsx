import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#dce1e8]/30 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Oops! الموقع قيد التحديث 🛠️</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        كنقادو ليكم شي حاجة ناضية! الموقع غيكون واجد قريب بزااف. شكراً على الصبر ديالكم.
      </p>
      <Link 
        href="/"
        className="px-8 py-3 bg-accent text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
      >
        رجوع للصفحة الرئيسية
      </Link>
    </div>
  )
}
