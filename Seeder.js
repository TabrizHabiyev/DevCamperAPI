const fs = require('fs');

const mongoose = require('mongoose');


const colors = require('colors');

const dotenv = require('dotenv');



//Load env 
dotenv.config({path: './config/config.env'});


//Load models
const Bootcamp = require('./models/Bootcamps');

//Coonect database
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 });

 //read json files
 const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'));

 //Import into DB

 const importData = async ()=>{
     try {
         await Bootcamp.create(bootcamps);
         console.log('Data imported ....'.green.inverse);
         process.exit();
     } catch (error) {
         console.error(error);
     }
 }

 ///Delete data

 const deleteData = async ()=>{
    try {
        await Bootcamp.deleteMany()
        console.log('Data destroyed ....'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(error);
    }
}


if (process.argv[2] === '-i') {
    importData();
}else if (process.argv[2] === '-d'){
    deleteData();
}