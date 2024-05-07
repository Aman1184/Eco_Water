import React from 'react'

function About() {
  return (
    <>
    <div className="mt-20 text-center">
      <h1 className="text-2xl font px-4 py-2 " style={{ backgroundColor: 'lightblue' }}>
        "About Us"
      </h1>
    </div>

    <div className="container mx-auto mt-20 px-4 flex flex-wrap items-center">
      {/* Left section */}
      <div className="w-full md:w-1/2 pr-20">
        <h1 className="text-4xl font-bold px-8">Aim of Waterfootprint</h1>
        <p className="mt-4 text-lg px-8">
The aim of water footprint assessment is multifaceted, encompassing environmental, social, and economic objectives. At its core, water footprint analysis seeks to facilitate effective water resource management by quantifying water consumption across various sectors and processes. By identifying areas of high water usage and potential inefficiencies, this assessment helps in developing strategies to optimize water use, reduce waste, and ensure the sustainable management of freshwater resources.

Moreover, water footprint assessment aims to promote environmental conservation by raising awareness of the impact of human activities on water resources and ecosystems. By pinpointing water-intensive stages of production and consumption, it aids in mitigating water pollution, reducing habitat degradation, and preserving aquatic biodiversity.        </p>
      </div>
      {/* Right section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="https://media.istockphoto.com/id/950287156/vector/water-footprint.jpg?s=612x612&w=0&k=20&c=QDV4Ey9-a2fzkHYlEid9o1W0MQ89xioivbUxziLKb34=" alt="Waterfootprint" className="max-w-lg max-h-64" />
      </div>
    </div>
    
    <div className="container mx-auto mt-20 px-4 flex flex-wrap items-center">
      {/* Right section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="https://www.waterfootprint.org/wp-content/uploads/2022/05/EXPO_TVDC_448_fj-768x512.jpg" alt="Waterfootprint" className="max-w-lg max-h-64" />
      </div>
      {/* Left section */}
      <div className="w-full md:w-1/2 pr-20">
        <h1 className="text-4xl font-bold">History</h1>
        <p className="mt-4 text-lg">
In 2002, Arjen Hoekstra, whilst working at the UNESCO-IHE Institute for Water Education, created the water footprint as a metric to measure the amount of water consumed and polluted to produce goods and services along their full supply chain.

Interest in the water footprint grew rapidly after its introduction in academic literature. In 2007, companies, in particular food and beverage companies such as Unilever, SABMiller, Heineken, Coca-Cola, Nestle and Pepsico, became increasingly aware of their water dependence and the water-related risk facing their companies.

In 2008, Hoekstra, professor in water management at the University of Twente since 2005, together with leading global players from business, civil society, multilateral organisations and academia, founded the Water Footprint Network with the aim of bringing together some of the brightest minds committed to demonstrating how Water Footprint Assessment can help us overcome the challenges of unsustainable water use.</p>      </div>
      
      
    </div>
    </>
  )
}

export default About
