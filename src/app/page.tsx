import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Convex | Welcome',
  description: 'Convert currency in real-time with live exchange rates',
  icons: {
    icon: '/mclogo.png'
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
      <img src="mclogo.png" className='h-auto max-w-50' alt="Logo" />
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        CONVEX
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Convert currency instantly with style.
      </p>
      <Link href="/convert">
        <Button>
          Get Started
        </Button>
      </Link>
    </div>

  )
}