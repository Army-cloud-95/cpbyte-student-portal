import React from 'react'
import { FiClock } from "react-icons/fi";
import { TbCalendarCode } from "react-icons/tb";

function DaysCard({ date, subject, status }) {
  const bgColor =
    status === 'PRESENT'
      ? 'bg-green-700/40 border-green-500'
      : status === 'ABSENT_WITHOUT_REASON'
      ? 'bg-red-700/40 border-red-500'
      : 'bg-yellow-700/40 border-yellow-500';

  return (
    <div
      className={`border rounded-xl p-4 hover:shadow-md transition-transform transform hover:-translate-y-1 duration-200 ease-in-out text-white ${bgColor}`}
    >
      <h3 className='text-xl font-semibold mb-2'>{subject}</h3>
      <p className='text-sm text-gray-200'>{date}</p>
      <span
        className={`inline-block mt-3 px-3 py-1 text-sm rounded-full font-medium ${
          status === 'PRESENT'
            ? 'bg-green-600 text-white'
            : status === 'ABSENT_WITHOUT_REASON'
            ? 'bg-red-600 text-white'
            : 'bg-yellow-600 text-white'
        }`}
      >
        {status}
      </span>
    </div>
  );
}



export default DaysCard
