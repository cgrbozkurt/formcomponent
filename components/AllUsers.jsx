import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'

const AllUsers = ({setSearch,setUserForm}) => {

  return (
    <div className='alluser flex flex-col gap-5 px-5 my-7'>
        <div className='top flex'>
        <Link href={"#"} className="titles flex">
        <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
       <span>Home</span>
        </Link>
        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <Link href={"#"} >Users</Link>
        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
<span>List</span>
        </div>
        <h1 className=' text-2xl font-semibold'>All users</h1>
<div className="bottom flex justify-between">
<div className="bottom-left flex justify-start gap-5 items-center">
<input onChange={(e)=>setSearch(e.target.value)} type="text" name="" id="" placeholder='Search for users'  
className='border bg-gray-50  w-96 border-gray-300 focus:border-cyan-600 rounded-md text-gray-900 focus:ring-cyan-600 px-2 py-1 '/>


</div>
<div className='btn flex gap-5'>

<Button setUserForm={setUserForm}  action={"add"}
 bg="bg-addcolor flex px-2 py-2 "><svg class="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
</svg> Add User</Button>

</div>

   </div>
       </div>
  )
}

export default AllUsers