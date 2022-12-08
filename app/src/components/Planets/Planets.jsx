import React from 'react'
import { useState, useEffect } from 'react'
import SwService from '../services/swService'
import Spinner from '../Spinner/Spinner'
import error from '../Planets/error.jpeg'

const Planets = () => {

    const { getResource, getImage } = SwService()
    const [planet, setPlanet] = useState()
    const [planetImage, setPlanetImage] = useState()
    const [imageError, setImageError] = useState(false)
    const getRandomNum = () => Math.floor(Math.random() * (60 - 1) + 1)
    const initNum = getRandomNum()
    const [num, setNum] = useState(initNum)


    useEffect(() => {
        getResource("planets", num)
            .then(res => setPlanet(res.data.result.properties))
        setPlanetImage(getImage("planets", num))
    }, [num])


    const nextplanet = () => {
        setNum(getRandomNum())
    }



    if (planet === undefined) {
        return <Spinner />
    } else {
        return (
            <div className='cardStyle'>

                {!imageError ? <img src={planetImage} onError={() => setImageError(true)}
                    alt='planet'
                /> :
                    <img src={error} />}
                <h3 style={{}}>
                    {planet.name}
                </h3>
                <ul className='list' >
                    <li>
                        Diameter: {planet.diameter}
                    </li>
                    <li>
                        Terrain:  {planet.terrain}
                    </li>

                </ul>

                <button onClick={nextplanet}
                    className='nextButton'> Next </button>
            </div>
        )
    }


}


export default Planets