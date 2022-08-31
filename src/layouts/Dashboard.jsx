import React from 'react'
import Members from '../components-dashboard/Members'
import Sidebar from '../components-dashboard/Sidebar'
import Chats from '../components-dashboard/Chats'
import Message_bar from '../components-dashboard/Message_bar'
import UserId_bar from '../components-dashboard/UserId_bar'
import Topic_Channel from '../components-dashboard/Topic_Channel'
import Navbar from '../components-dashboard/Navbar'

const Dashboard = () => {
  return (
    <div className='w-screen h-screen '>
    <div className='flex'>
    <Sidebar />
        <div className='flex-1 flex flex-col min-h-screen h-screen'>
         <Navbar />
    <div className='flex-1 flex overflow-y-hidden'>
        <div className='bg-[#2F3137] w-56 flex-none flex flex-col justify-between'>
        <Topic_Channel />
        <UserId_bar />
        </div>
          <div className='flex-1 flex justify-between'>
            <div className='bg-[#36393F] flex-1 flex flex-col justify-between'>
            <div className='text-sm text-gray-400 overflow-y-auto'>
            <Chats />
            </div>
          <Message_bar />
</div>
            <Members />
          </div>  
        </div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard