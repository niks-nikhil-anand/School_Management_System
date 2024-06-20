"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const ClassForm = () => {
  const [board, setBoard] = useState('');
  const [className, setClassName] = useState('');
  const [subject, setSubject] = useState('');
  const [chapters, setChapters] = useState([{ chapterName: '', topics: [''] }]);
  const [warning, setWarning] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { board, className, subject, chapters };
    console.log(data)
    try {
      await axios.post('/api/class/update', data);
      alert('Class updated successfully');
    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  const addChapter = () => {
    if (chapters[chapters.length - 1].chapterName.trim() === '') {
      setWarning('Chapter name cannot be empty');
      return;
    }
    setChapters([...chapters, { chapterName: '', topics: [''] }]);
    setWarning('');
  };

  const deleteChapter = (index) => {
    const newChapters = [...chapters];
    newChapters.splice(index, 1);
    setChapters(newChapters);
  };

  const addTopic = (chapterIndex) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].topics.push('');
    setChapters(newChapters);
  };

  const handleChapterChange = (index, value) => {
    const newChapters = [...chapters];
    newChapters[index].chapterName = value;
    setChapters(newChapters);
  };

  const handleTopicChange = (chapterIndex, topicIndex, value) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].topics[topicIndex] = value;
    setChapters(newChapters);
  };

  const addField = (setState, array) => {
    if (array[array.length - 1] !== '') {
      setState([...array, '']);
    }
  };

  return (
    <motion.div 
      className="p-6 w-full rounded-lg shadow-md flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='w-full max-w-3xl'>
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

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Chapters</label>
            {chapters.map((chapter, chapterIndex) => (
              <div key={chapterIndex} className="mt-4">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={chapter.chapterName}
                    onChange={(e) => handleChapterChange(chapterIndex, e.target.value)}
                    placeholder="Chapter Name"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => addTopic(chapterIndex)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    ➔ Add Topic
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteChapter(chapterIndex)}
                    className="text-red-600 hover:text-red-900"
                  >
                    ✕ Delete Chapter
                  </button>
                </div>
                {chapterIndex === chapters.length - 1 && warning && (
                  <p className="text-red-600 mt-2">{warning}</p>
                )}
                {chapter.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="mt-2 ml-6 flex items-center gap-2">
                    <input
                      type="text"
                      value={topic}
                      onChange={(e) => handleTopicChange(chapterIndex, topicIndex, e.target.value)}
                      placeholder="Topic Name"
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                ))}
              </div>
            ))}
            <button
              type="button"
              onClick={addChapter}
              className="mt-2 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700"
            >
              Add Chapter
            </button>
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
