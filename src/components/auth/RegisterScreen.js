import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const RegisterScreen = () => {
  return (
    <>
        <h1 className='auth__title'>Register</h1>

        <form>
            <input 
              type="text"
              placeholder="Name"
              name="name"
              className='auth__input'
              autoComplete='off'
            />

            <input 
              type="password"
              placeholder="Password"
              name="password"
              className='auth__input'
            />

            <input 
              type="password"
              placeholder="Confirm password"
              name="password2"
              className='auth__input'
            />

            <button className='btn btn-primary btn-block mb-5' type="submit">Registrar</button>


              <Link className='link' to="/auth/login">
                  ¿Ya registrado?
              </Link>
        </form>
    </>
  )
}
