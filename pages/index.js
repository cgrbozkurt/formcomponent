import Image from 'next/image'
import { Inter } from 'next/font/google'
import Table from '@/components/table'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Table/>
    </>
  )
}
