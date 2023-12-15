import Image from 'next/image'
import { Inter } from 'next/font/google'
import Table from '@/components/table'
import AllUsers from '@/components/AllUsers'
import { useState } from 'react'
import UserForm from '@/components/UserForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [search,setSearch]=useState("")
  const [userForm, setUserForm] = useState(false);

        const onSubmit = (values, { resetForm }) => {
          console.log("Form Gönderildi", values);
          resetForm();
          setUserForm(false);
        };

  return (
    <div className='ml-60 mt-60 mr-20 border-2'>
        {userForm && <UserForm setUserForm={setUserForm}  onSubmit={onSubmit} />}

    <AllUsers setUserForm={setUserForm} setSearch={setSearch} />
    <Table search={search} userForm={userForm} setUserForm={setUserForm} />
    </div>
  )
}
