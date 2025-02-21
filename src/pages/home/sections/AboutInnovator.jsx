import React from 'react'
import PropTypes from 'prop-types' // Add if you're using prop-types
import aboutImg from '../../../Assets/about.png'
import { FaBolt, FaEye, FaEnvelope,  FaBrain } from 'react-icons/fa' // Import React Icons


const AboutInnovator = () => {
  const handleContactClick = () => {
    // Add your contact button click handler here
    console.log('Contact button clicked')
  }

  return (
    // <div> <Navbar/>
    <div className="min-h-screen bg-blue-100  w-full py-16">
      <div className="   sm:px-6 ">
       
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-mono font-bold italic text-gray-900 mb-4 pt-10">About Us</h1>
          
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-full rounded-lg overflow-hidden shadow-xl">
            <img 
              src={aboutImg} 
              alt="Car Service" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            {/* Mission Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-md sm:text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-blue-600 mr-2">
                  <FaBolt className="h-6 w-6" />
                </span>
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                We don't just sell cars—we keep them running at their best. From top-quality vehicle sales to expert repairs, 
                we ensure every ride is smooth, safe, and reliable!
              </p>
            </div>

            {/* Vision Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg sm:text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-blue-600 mr-2">
                  <FaEye className="h-6 w-6" />
                </span>
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                To be the leading automotive service provider, known for excellence, integrity, and customer satisfaction. 
                We aim to revolutionize the car buying and servicing experience through innovation and dedication.
              </p>
            </div>


            {/* why choose us */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg sm:text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-blue-600 mr-2">
                  <FaBrain className="h-6 w-6" />
                </span>
                Why Choose Us
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
              We don't just sell cars, we keep them running at their best. From top-quality vehicle sales to expert repairs, we ensure every ride is smooth, safe, and reliable"
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-[hsla(125,71%,31%,1)] p-6 rounded-lg shadow-md text-white">
              <h2 className="text-lg sm:text-lg font-bold mb-4 flex items-center">
                <span className="mr-2">
                  <FaEnvelope className="h-6 w-6" />
                </span>
                Get in Touch
              </h2>
              <p className="leading-relaxed">
                Ready to experience our exceptional service? Contact us today to schedule an appointment or learn more about our offerings.
              </p>
              <button 
                type="button"
                onClick={handleContactClick}
                className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  )
}

// AboutInnovator.propTypes = {
//   // Add any props if needed
// }

export default AboutInnovator
