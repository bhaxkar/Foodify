import { useState } from "react";
import img1 from "../assets/d1.jpg";
import img2 from "../assets/d2.jpg";
import img3 from "../assets/d3.jpg";

const GetToKnowUs = () =>{

  const [activeSection, setActiveSection] = useState('mission');

  const sections = {
    mission: {
      title: 'Mission',
      content: 'Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.',
      image: img1,
    },
    vision: {
      title: 'Vision',
      content: 'Our vision is to create a seamless digital ecosystem that transforms how urban communities access and experience services. We aim to become the most trusted and innovative food delivery platform.',
      image : img2,
    },
    values: {
      title: 'Values',
      content: 'Our actions are strongly defined by the Foodify values. We believe in innovation, integrity, and customer-centricity. These core values guide every decision we make. We celebrate culinary diversity, bringing cuisines from every corner of the world to everyone’s doorstep.',
      image: img3,
    }
  };


  return(
    <>
      <div className="text-center mt-20 mb-12">
        <h2 className="text-4xl font-bold text-gray-800">GET TO KNOW US</h2>
        <div className="h-1 w-64 bg-custom-red mx-auto mt-4" />
      </div>
      <div className="flex gap-56 mx-auto">
        <div className="flex flex-col ">
          {
            Object.keys(sections).map((section) => (
            <button key={section} onClick={() => setActiveSection(section)}
            className={`w-full text-left px-4 py-3 rounded transition-colors duration-200
              ${ activeSection === section? 'text-orange-500 font-medium bg-orange-50': 'text-gray-500 hover:bg-gray-50'}`
            }>
            {sections[section].title} {activeSection === section}
            </button>))
          }
        </div>
        <div className="flex flex-col max-w-2xl">
          <h3 className="text-2xl font-bold text-gray-900">
            {sections[activeSection].title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {sections[activeSection].content}
          </p>
        </div>  
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={sections[activeSection].image}
            alt={sections[activeSection].title}
            className="w-80 h-70 object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default GetToKnowUs;