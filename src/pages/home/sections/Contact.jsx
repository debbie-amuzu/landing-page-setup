import React from 'react';
import { FaAddressBook, FaFacebookF, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone, FaTimes } from 'react-icons/fa';
// import Navbar from './Navbar';
// import con from '../assets/images/gal2.jpeg'
import { Link } from 'react-router-dom';
import { FaLocationPin } from 'react-icons/fa6';



const Contact = () => {
  return (
    <div>
      {/* <Navbar/> */}
   
    <div className='bg-blue-100 pt-20 pb-20 '>
      
    <div className="max-w-4xl mx-auto p-6 shadow-lg  rounded-lg mt-10 bg-white">
    {/* <img src={con}alt="" srcset=""  className='w-full h-72 object-fit border rounded-lg shadow-lg'/> */}
      <h1 className="text-5xl italic font-mono font-bold mb-6  text-center text-gray-800">Contact Us</h1>
      
      <div className="mb-4">
        <p className="text-gray-700">We're open for any suggestion or just to have a chat.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-5">Get in Touch</h2>
        <p className="text-gray-600 flex gap-2 items-center"><FaAddressBook className='text-blue-600 text-lg' />Ashongman Estates Community Hospital, Accra, Ghana</p>
        <p className="text-gray-600 flex gap-2 items-center"><FaMailBulk className='text-blue-900 text-lg'/> kofikessearthur@yahoo.com</p>
        
        <Link
          to="https://www.google.com/maps/search/?api=1&query=DIGITALADDRESS+GE-184-5279,+Accra,+Ghana"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 underline hover:text-blue-800 transition duration-200 flex gap-2 items-center"
        ><FaLocationPin className='text-red-600 text-lg'/>
          DIGITALADDRESS GE-184-5279, Accra, Ghana
        </Link>
      </div>

      <form className="flex flex-col mb-6" onSubmit={(e) => { 
          e.preventDefault(); 
          window.location.href = `mailto:kofikessearthur@yahoo.com?subject=${document.getElementById('subject').value}&body=${document.getElementById('message').value}`; 
        }}>
        <label className="mb-2 text-gray-700" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Your email"
          className="mb-4 p-2 border border-gray-300 rounded"
          required
        />
        
        <label className="mb-2 text-gray-700" htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          placeholder="Subject"
          className="mb-4 p-2 border border-gray-300 rounded"
          required
        />
        
        <label className="mb-2 text-gray-700" htmlFor="message">Create a message here</label>
        <textarea
          id="message"
          placeholder="Your message"
          className="mb-4 p-2 border border-gray-300 rounded"
          rows="4"
          required
        />
        
        <button
          type="submit"
          className="bg-[rgb(26,117,75)] text-white py-2 rounded-full w-52 hover:bg-blue-500 transition duration-200"
        >
          Send Message
        </button>
      </form>

      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us Here</h2>
        <div className="flex justify-center space-x-6">
          <Link
           to="https://www.facebook.com/profile.php?id=100063974685967"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-200"
          >
            <FaFacebookF className="text-2xl" />
          </Link>
          <Link
            to="https://www.threads.net/@kess_hub_service_center?xmt=AQGzr6XHao0OMj1h9Fny4Oo4pFt96B-5dXLF3bAiaG6FZVE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transition duration-200"
          >
            <FaInstagram className="text-2xl" />
          </Link>
          <Link
            to="https://www.twitter.com/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition duration-200"
          >
            <FaTimes className="text-2xl" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition duration-200"
          >
            <FaLinkedinIn className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Contact;