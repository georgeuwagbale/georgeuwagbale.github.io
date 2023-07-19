import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='w-full h-screen flex justify-center items-center p-4 pt-20 bg-[#0a192f]'>
        <form action="https://getform.io/f/3eae904b-21d2-4d58-815a-ba60271b1b84" method='POST' className='flex flex-col max-w-[600px] w-full h-full'>
            <div className='pb-8 pt-20'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - uwagbalegeorge@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows={10} placeholder='message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact