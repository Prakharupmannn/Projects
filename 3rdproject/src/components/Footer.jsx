import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 px-6 py-10'>

        <div className='max-w-6xl mx-auto grid md:grid-cols-4 gap-8'>
            
            {/* //logo + about */}
            <div>
                <h2 className='text-white text-2xl font-bold mb-4'>MyApp</h2>
                <p className='text-sm'>
                    Building Modern web experiences with clean and simple UI.
                </p>
            </div>

            {/* links */}
            <div>
                <h3 className='text-white font-semibold mb-3'>Quick Links</h3>
                <ul className='space-y-2'>
                    <li><a href="" className='hover:text-white transition'>Home</a></li>
                    <li><a href="" className='hover:text-white transition'>About</a></li>
                    <li><a href="" className='hover:text-white transition'>Services</a></li>
                    <li><a href="" className='hover:text-white transition'>Contact</a></li>
                </ul>
            </div>

            {/* Services */}
            <div>
                <h3 className='text-white font-semibold mb-3'>Services</h3>
                <ul className='space-y-2'>
                    <li><a href="" className='hover:text-white transition'>Web Development</a></li>
                    <li><a href="" className='hover:text-white transition'>App Development</a></li>
                    <li><a href="" className='hover:text-white transition'>UI/UX Design</a></li>
                    <li><a href="" className='hover:text-white transition'>SEO</a></li>
                </ul>
            </div>

            {/* Social */}
            <div>
                <h3 className='text-white font-semibold mb-3'>Follow us</h3>
                <div className='flex gap-4'>
                    <a href="#" className="hover:text-white">🌐</a>
                    <a href="#" className="hover:text-white">📘</a>
                    <a href="#" className="hover:text-white">🐦</a>
                    <a href="#" className="hover:text-white">📸</a>
                </div>
            </div>

            <div className='border-t grid col-span-6 border-gray-700 mt-10 pt-4 text-center text-sm '>2026 MyApp. All rights reserved.</div>
        </div>
    </footer>
  );
}

export default Footer