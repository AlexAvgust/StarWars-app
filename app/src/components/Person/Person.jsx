import React, { useState, useEffect } from 'react'
import SwService from '../services/swService'
import Spinner from '../Spinner/Spinner'

const Person = () => {

  const { getResource, getImage } = SwService()
  const [character, setCharacter] = useState()
  const [characterImage, setCharacterImage] = useState()
  const getRandomNum = () => Math.floor(Math.random() * (82 - 1) + 1)
  const initNum = getRandomNum()
  const [num, setNum] = useState(initNum)

 

  useEffect(() => {
    
    getResource("people", num)
      .then(res => setCharacter(res.data.result.properties))
    setCharacterImage(getImage("characters", num))

  }, [num])


  const nextPlanet = () => {
    setNum(getRandomNum())

  }


  if (character === undefined) {
    return <Spinner />
  } else {
    return (
      <div className='cardStyle'>

        {<img src={characterImage} alt='character' />}
        <h3 style={{}}>
          Name: {character.name}
        </h3>
        <ul className='list'>
          <li>
            Gender: {character.gender}
          </li>
          <li>
            Birth year: {character.birth_year}
          </li>
          <li>
            Eye color: {character.eye_color}
          </li>
        </ul>

        <button className='nextButton' onClick={nextPlanet}
        > Next </button>
      </div>
    )
  }


}

export default Person