import React from 'react';

function Waterfootprint() {
  return (
    <>
    <div className="mt-20 text-center">
      <h1 className="text-2xl font " style={{ backgroundColor: 'lightblue' }}>
        "Every drop counts:<br />understanding our water footprint is the first step towards responsible stewardship of our planet's most precious resource."
      </h1>
    </div>

    <div className="container mx-auto mt-20 px-4 flex flex-wrap items-center">
      {/* Left section */}
      <div className="w-full md:w-1/2 pr-20">
        <h1 className="text-4xl font-bold px-8">What is Waterfootprint</h1>
        <p className="mt-4 text-lg px-8">
          Water footprint is the measure of how much water is used to produce each of the goods and services we use. It can be measured for a single process, such as growing rice, for a product, such as a pair of jeans, for the fuel we put in our car, or for an entire multi-national company. The water footprint of a product is the volume of water used to produce it, measured over the full supply chain. 
        </p>
      </div>
      {/* Right section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="https://media.istockphoto.com/id/950287156/vector/water-footprint.jpg?s=612x612&w=0&k=20&c=QDV4Ey9-a2fzkHYlEid9o1W0MQ89xioivbUxziLKb34=" alt="Waterfootprint" className="max-w-lg max-h-64" />
      </div>
    </div>
    
    <div className="container mx-auto mt-20 px-4 flex flex-wrap items-center">
      {/* Right section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="https://www.waterfootprint.org/wp-content/uploads/2023/02/f2470581b592d18c7200cc2c2273a3cf.jpg" alt="Waterfootprint" className="max-w-lg max-h-64" />
      </div>
      {/* Left section */}
      <div className="w-full md:w-1/2 pr-20">
        <h1 className="text-4xl font-bold">Personal Waterfootprint</h1>
        <p className="mt-4 text-lg">
Each of us uses water at home for cooking, bathing, laundry but our larger water footprint is the ‘hidden’ water in all the products we use or consume. Depending upon what we eat and our lifestyle, we can have a larger or smaller water footprint. And where is this water footprint? It’s all around the world, linking us to rivers and aquifers, communities, plants and animals far from our homes        </p>
      </div>
      
      
    </div>
    </>
  );
}

export default Waterfootprint;
