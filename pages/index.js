import Image from 'next/image'
import { Inter } from 'next/font/google'
import Table from '@/components/table'
import AllUsers from '@/components/AllUsers'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [search,setSearch]=useState("")


  return (
    <div className='ml-60 mt-60 mr-20 border-2'>
    <AllUsers setSearch={setSearch} />
    <Table search={search}/>
    </div>
  )
}
