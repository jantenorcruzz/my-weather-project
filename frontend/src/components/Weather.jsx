import React from 'react'
import sampleImg from '../assets/react.svg'
function Weather() {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-4xl font-bold text-center'>Quezon City</h1>
        <img src={sampleImg} className='h-40' />
        <p className='text-center text-2xl font-bold'>Sunny</p>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl'>27°C</h1>
            <h4 className='text-lg font-medium'>Temperature</h4>
        </div>
        <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col justify-center items-center p-8 bg-slate-50/20 rounded-xl'>
                <h4 className='text-lg font-medium'>Humidity</h4>
                <p className='text-lg'>20%</p>
            </div>
            <div className='flex flex-col justify-center items-center p-8 bg-slate-50/20 rounded-xl'>
                <h4 className='text-lg font-medium'>Wind</h4>
                <p className='text-lg'>5 m/s</p>
            </div>
        </div>
    </div>
  )
}

export default Weather