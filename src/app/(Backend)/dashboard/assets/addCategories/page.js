"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const ClassForm = () => {
  const [board, setBoard] = useState('');
  const [className, setClassName] = useState('');
  const [subjects, setSubjects] = useState(['']);
  const [chapters, setChapters] = useState(['']);
  const [topics, setTopics] = useState(['']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { board, className, subjects, chapters, topics };
    console.log(data)
    try {
      await axios.post('/api/class/update', data);
      alert('Class updated successfully');
    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  const addField = (setState, array) => {
    setState([...array, '']);
  };

  const handleChange = (setState, array, index, value) => {
    const newArray = [...array];
    newArray[index] = value;
    setState(newArray);
  };

  return (
    <motion.div 
      className="p-6 w-full rounded-lg shadow-md flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
        <div className=''>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Board</label>
            <select
              value={board}
              onChange={(e) => setBoard(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>Select Board</option>
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
              <option value="BSEB">BSEB</option>
              <option value="Other State Board">Other State Board</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Class</label>
            <select
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>Select Class</option>
              {['Nursery','LKG','UKG','1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'].map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Subjects</label>
            {subjects.map((subject, index) => (
              <input
                key={index}
                type="text"
                value={subject}
                onChange={(e) => handleChange(setSubjects, subjects, index, e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            ))}
            <button
              type="button"
              onClick={() => addField(setSubjects, subjects)}
              className="mt-2 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700"
            >
              Add Subject
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Chapters</label>
            {chapters.map((chapter, index) => (
              <input
                key={index}
                type="text"
                value={chapter}
                onChange={(e) => handleChange(setChapters, chapters, index, e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            ))}
            <button
              type="button"
              onClick={() => addField(setChapters, chapters)}
              className="mt-2 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700"
            >
              Add Chapter
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Topics</label>
            {topics.map((topic, index) => (
              <input
                key={index}
                type="text"
                value={topic}
                onChange={(e) => handleChange(setTopics, topics, index, e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            ))}
            <button
              type="button"
              onClick={() => addField(setTopics, topics)}
              className="mt-2 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700"
            >
              Add Topic
            </button>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </form>
        </div>
      
    </motion.div>
  );
};

export default ClassForm;
