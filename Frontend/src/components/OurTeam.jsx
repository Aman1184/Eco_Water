import React from 'react';
import { Link } from 'react-router-dom';

import aman from '../assets/aman.jpeg'; // Import images for team members
import chitransh from '../assets/chitransh.jpeg'; // Import images for team members
import ayush from '../assets/ayush.jpeg'; // Import images for team members

function OurTeam() {
  const teamMembers = [
    { name: "Aman Pandey", contact: "Contact Us", image: aman },
    { name: "Chitransh Shukla", contact: "Contact Us", image: chitransh },
    { name: "Ayush Sachan", contact: "Contact Us", image: ayush }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md relative">
            <div className="w-full h-80 relative">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center" />
              <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <img src={member.image} alt={member.name} className="w-64 h-64 object-cover object-center rounded-lg" />
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{member.name}</h2>
              <Link to="/contact" className="btn btn-primary">{member.contact}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
