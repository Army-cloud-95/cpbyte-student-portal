import React from 'react'
import { FaFilter } from 'react-icons/fa'
import DaysCard from './DaysCard'
import { useSelector } from 'react-redux';

function AttendanceCard() {
  const { attendances } = useSelector(state => state.dashboard.data)

  return (
    <div className='w-full h-fit text-white p-5 md:px-10'>
      <div className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl'>

        {/* Header */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          <div className='flex gap-3 items-center'>
            <div className='w-2 h-10 bg-[#0ec1e7] rounded-full'></div>
            <h2 className='text-3xl font-semibold text-white'>Attendance History</h2>
          </div>

          {/* Filter Button */}
          <button className='flex gap-2 items-center bg-zinc-800 border border-zinc-600 text-gray-300 hover:bg-zinc-700 px-5 py-2 rounded-lg transition-all duration-200 ease-in-out'>
            <FaFilter />
            <span className='text-sm font-medium'>Filter</span>
          </button>
        </div>

        {/* Attendance Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
          {attendances?.length > 0 ? (
            attendances.map((day, index) => (
              <DaysCard
                key={index}
                date={new Date(day.date).toDateString()}
                subject={day.subject}
                status={day.status}
              />
            ))
          ) : (
            <p className='col-span-full text-center text-gray-400 text-lg mt-6'>No attendance data available.</p>
          )}
        </div>

      </div>
    </div>
  )
}

export default AttendanceCard
