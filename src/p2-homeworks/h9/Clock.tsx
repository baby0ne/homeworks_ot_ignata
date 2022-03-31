import React, { useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
   const [timerId, setTimerId] = useState<number>(0)
   const [date, setDate] = useState<Date>(new Date())
   const [showTime, setShowTime] = useState<boolean>(false)
   const [showDate, setShowDate] = useState<boolean>(false)

   const stop = () => {
      clearInterval(timerId)
   }
   const start = () => {
      stop()
      setShowTime(true)
      const id: number = window.setInterval(() => {
         setDate(new Date())
      }, 1000)
      setTimerId(id)
   }

   const onMouseEnter = () => {
      setShowDate(true)
   }
   const onMouseLeave = () => {
      setShowDate(false)
   }

   const stringTime = date.toLocaleTimeString()
   const stringDate = date.toLocaleDateString()

   return (
      <div >
         <div style={{ display: 'table', paddingBottom: '25px', cursor: 'pointer' }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
         >
            {showTime ? (<span>{stringTime}</span>) : (<span>00:00:00</span>)}
            {showDate && (
               <div style={{ position: 'absolute' }}>
                  {stringDate}
               </div>
            )}
         </div>

         <SuperButton onClick={start}>start</SuperButton>
         <SuperButton onClick={stop}>stop</SuperButton>

      </div>
   )
}

export default Clock
