const express = require('express');
const router = express.Router();
const Student =  require('../models/students');
const multer = require('multer');

// const storage = multer.diskStorage({
//   //  const storage = multer.memoryStorage({

//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, uniqueSuffix + '-' + file.originalname);
//     }
// });

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
 


//Routes to create a new Students
router.post('/create',upload.single('photo'), async (req,res)=>{
    try{
        const{name, age, email, phone, address} = req.body;

//        const photopath = req.file ? req.file.path : null;        //Create a student recod with base64 - encoded image

        const photoBase64 = req.file ? req.file.buffer.toString('base64'): null; 

        const newStudent = new Student({
            name,
            age,
            email,
            phone,
            address,
            photo: photoBase64
        //    photo: photopath
        });
        await newStudent.save();
        res.status(201).json({ message: 'Student Record Created successfully', student: newStudent});

    }catch(err){ 
res.status(500).json({ message: 'Error in Creating Student Record' });
    }
});

module.exports = router;
 