import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import './Calculate.css';

const WaterFootprintCalculator = () => {
    const [formData, setFormData] = useState({});
    const [waterFootprint, setWaterFootprint] = useState(null);
    const [chartInstance, setChartInstance] = useState(null);

    const waterUsageValues = {
        showerDuration: 2.1, // gallons per minute
        toiletFlushes: 1.6, // gallons per flush
        gardenWateringFrequency: 5, // gallons per watering
        carWashingFrequency: 20, // gallons per wash
        beefConsumption: 1800, // gallons per serving
        laundryFrequency: 40, // gallons per load
        dishwasherFrequency: 6, // gallons per cycle
        indoorPlantWateringFrequency: 2, // gallons per watering
        bathFrequency: 35, // gallons per bath
        swimmingPoolUsage: 1000, // gallons per use
        // Add more activities here with their respective water usage values
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let totalWaterFootprint = 0;
        Object.keys(formData).forEach((key) => {
            const activityValue = parseFloat(formData[key]);
            if (!isNaN(activityValue)) {
                totalWaterFootprint += activityValue * waterUsageValues[key];
            }
        });
        setWaterFootprint(totalWaterFootprint);
    };

    useEffect(() => {
        // Destroy previous chart instance
        if (chartInstance) {
            chartInstance.destroy();
        }
        // Create new chart when waterFootprint changes
        if (waterFootprint !== null) {
            const ctx = document.getElementById('waterFootprintChart').getContext('2d');
            const newChartInstance = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: Object.keys(formData),
                    datasets: [{
                        label: 'Water Footprint (gallons)',
                        data: Object.keys(formData).map(key => parseFloat(formData[key]) * waterUsageValues[key]),
                        backgroundColor: [
                            'red',
                            'orange',
                            'yellow',
                            'green',
                            'blue',
                            'purple',
                            'pink',
                            'brown',
                            'grey',
                            'lightblue'
                        ],
                        borderColor: 'transparent'
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            setChartInstance(newChartInstance);
        }
    }, [waterFootprint]);

    return (
        
            <div>
                <h1 className='heading'>Calculate Your Water Footprint</h1>
                <p className='paragraph'>Your individual water footprint is equal to the water required to produce the goods and services consumed by you. Please take your time and feel free to use the extended water footprint calculator developed by the researchers at UNESCO-IHE to assess your own unique water footprint. The calculations are based on the water requirements per unit of product as in your country of residence.
Note: put decimals behind a point, not a comma (e.g. write 1.5 and not 1,5).

</p>
                <form onSubmit={handleSubmit} className="flex justify-center mt-8">
                    <div className="question-section mt-2">
                        <label className='question-list'>
                            <span className='question'>Shower Duration (minutes):</span><br />
                            <span className='question'>How many times do you flush the toilet daily?</span><br />
                            <span className='question'>How often do you water your garden or lawn per week? (times)</span><br />
                            <span className='question'>How often do you wash your car? (times per month)</span><br />
                            <span className='question'>How often do you eat beef per week? (number of servings)</span><br />
                            <span className='question'>How often do you do laundry per week? (loads)</span><br />
                            <span className='question'>How often do you run the dishwasher per week? (cycles)</span><br />
                            <span className='question'>How often do you water indoor plants per week? (times)</span><br />
                            <span className='question'>How often do you take baths instead of showers per week? (times)</span><br />
                            <span className='question'>How often do you use a swimming pool? (times per month)</span><br />
                        </label>
                    </div>
                    <div className="input-section">
                        <label className="input-list mt-2">
                            <input type="number" name="showerDuration" onChange={handleInputChange} className="input-field mt-2 h-3 outline" /><br />
                            <input type="number" name="toiletFlushes" onChange={handleInputChange} className="input-field mt-2 h-3 outline" /><br />
                            <input type="number" name="gardenWateringFrequency" onChange={handleInputChange} className="input-field h-3 mt-2 outline" /><br />
                            <input type="number" name="carWashingFrequency" onChange={handleInputChange} className="input-field h-3 mt-2 outline" /><br />
                            <input type="number" name="beefConsumption" onChange={handleInputChange} className="input-field h-3 mt-2 outline" /><br />
                            {/* Additional input fields */}
                            <input type="number" name="laundryFrequency" onChange={handleInputChange} className="input-field h-3 mt-2 outline" /><br />
                            <input type="number" name="dishwasherFrequency" onChange={handleInputChange} className="input-field h-3 mt-2 outline" /><br />
                            <input type="number" name="indoorPlantWateringFrequency" onChange={handleInputChange} className="input-field h-3 mt-2 outline" /><br />
                            <input type="number" name="bathFrequency" onChange={handleInputChange} className="input-field h-3 mt-2 outline" /><br />
                            <input type="number" name="swimmingPoolUsage" onChange={handleInputChange} className="input-field h-3 mt-2 outline" /><br />
                        </label>
                        <button type="submit" className="btn dark-btn justify-center mt-5">Calculate</button>
                    </div>
                </form>

                {waterFootprint !== null && (
                    <div>
                        <h3 className='heading1'>Your Water Footprint: {waterFootprint.toFixed(2)} gallons</h3>
                        {/* Display more detailed results here */}
                        <div className="chart-container max-h-80" style={{ display: 'flex', justifyContent: 'center' }}>
    <canvas id="waterFootprintChart" style={{ width: '5px', height: '5px' }}></canvas>
                        </div>
                    </div>
                )}
            </div>
        
    );
};

export default WaterFootprintCalculator;
