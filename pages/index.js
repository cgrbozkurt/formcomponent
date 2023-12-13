import Image from 'next/image'
import { Inter } from 'next/font/google'
import Table from '@/components/table'
import AllUsers from '@/components/AllUsers'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='ml-60 mt-60 mr-20 border-2'>
    <AllUsers />
    <Table/>
    </div>
  )
}
