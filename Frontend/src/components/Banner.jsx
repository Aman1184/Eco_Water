import React ,{useState} from 'react';
import banner from '../assets/Banner.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Banner() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        {/* Banner section */}
        <div className='order-2 md:order-2 w-full md:w-1/2 py-20 pr-10'>
          <img src={banner} alt="Banner" style={{ maxHeight: '500px', width: 'auto' }} />
        </div>

        {/* Content section */}
        <div className='order-1 md:order-1 w-full md:w-1/2 mt-20 md:mt-32'>
          <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>
              Fair & smart use of the <span style={{ color: 'red' }}>world's fresh water</span>
            </h1>
            <p className='text-xl'>
              We are a network of partner organisations, water footprint professionals and donors who support our mission. We are a non-profit organisation and thus rely on our donors and contributors
            </p>
          </div>
          {/* Use Link component instead of button */}
          <Link to={isLoggedIn ? "/signup" : "/calculate"} className="btn mt-10 btn-info" >Calculate Waterfootprint</Link>

        </div>
      </div>
    </>
  );
}

export default Banner;
