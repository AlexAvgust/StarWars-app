import React from 'react'
import { useState, useEffect } from 'react'
import SwService from '../services/swService'
import Spinner from '../Spinner/Spinner'
import error from '../Planets/error.jpeg'

const Starships = () => {
    const { getResource, getImage } = SwService()
    const [starship, setStarship] = useState()
    const [starshipImage, setStarshipImage] = useState()
    const [imageError, setImageError] = useState(false)
    const arrOfId = [2, 3, 5, 9, 10, 11, 13, 12, 17, 21,
        22, 23, 28, 27, 29, 31, 32, 39, 40, 43, 41,
        47, 48, 52, 49, 59, 58, 61, 63, 64,
        65, 66, 68, 74, 75]
    const getRandomNum = () => Math.floor(Math.random() * (arrOfId.length - 1) + 1)
    const initNum = getRandomNum()
    const [num, setNum] = useState(initNum)

    useEffect(() => {
        getResource("starships", arrOfId[getRandomNum()])
            .then(res => setStarship(res.data.result.properties))
        setStarshipImage(getImage("starships", arrOfId[getRandomNum()]))
    }, [num])
    const nextstarship = () => {
        setNum(arrOfId[getRandomNum()])
    }
    if (starship === undefined) {
        return <Spinner />
    } else {
        return (
            <div className='cardStyle'>
                {!imageError ? <img
                    src={starshipImage} onError={() => setImageError(true)}
                    alt='planet'
                /> :
                    <img src={error} />}
                <h3>Name: {starship.name}</h3>
                <ul className='list'>
                    <li>
                        Cargo capacity: {starship.cargo_capacity}
                    </li>
                    <li>
                        Model: {starship.model}
                    </li>
                </ul>

                <button onClick={nextstarship} className='nextButton'> Next </button>
            </div>
        )
    }


}


export default Starships