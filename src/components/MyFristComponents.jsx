import React from 'react'
import { useState } from 'react'

export const MyFristComponents = () => {
    // Los Hooks van antes del return
    const [ counter, setCounter] = useState(0);

  return (
    <div>
        <h3>El número del contador es {counter} </h3>
        <button type='submit' onClick={() => setCounter(counter +1)} className='button-large'>
            Sumar contador
        </button>
    </div>
  )
}
