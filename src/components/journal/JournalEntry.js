import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div  
            className='journal__entry-picture'
            style={{
                backgroundSize: "cover",
                backgroundImage: "url(https://cflvdg.avoz.es/sc/5YDgRlco2-TFo4AGMDjThvcpfuU=/480x/2016/12/15/00121481826471294226308/Foto/shurtodo.jpg)"
            }}
        >
        </div>

        <div className='journal__entry-body'>
            <p className='journal__entry-title'>Un nuevo día</p>
            <p className='journal__entry-content'>Párrafo de prueba shhiiiiiiuuu</p>
        </div>

        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>27</h4>
        </div>
    </div>
  )
}
