import mongoose from 'mongoose';

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://user:ozH4PfyhNaPmASJa@cluster0.hdvl6kp.mongodb.net/water-footprint').then(()=>console.log('DB Connected'));
}