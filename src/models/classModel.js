import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    url: { 
        type: String, 
        required: true 
    }
});

const videoSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    url: { 
        type: String, 
        required: true 
    }
});

const topicSchema = new mongoose.Schema({
    name: {
         type: String, 
         required: true 
        },
        pdfs: [pdfSchema], 
        videos: [videoSchema]  
});

const chapterSchema = new mongoose.Schema({
    name: {
         type: String, 
         required: true
         },
    topics: [topicSchema] 
});

const subjectSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true
     },
    chapters: [chapterSchema]  
});

const classSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        enum: ['Nursery','LKG' , 'UKG' ,  ,'1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th']
    },
    subjects: [subjectSchema]  
});

export default mongoose.models.Class || mongoose.model("Class", classSchema);
