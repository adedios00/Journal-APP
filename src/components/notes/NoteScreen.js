import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>

        <NotesAppBar />

        <div className='notes__content'>
            <input 
                type="text"
                placeholder = "Some awesone title"
                className='notes__tittle-input'
            />

            <textarea
                placeholder="What happened today"
                className="notes__textarea"
            ></textarea>

            <div className='notes__image'>
                <img
                    src= "https://www.ayudartepsicologia.com/wp-content/uploads/2016/09/plantillapaloma-800x430.png"
                    alt="imagen de la pz"
                ></img>
            </div>

        </div>
    </div>
  )
}
