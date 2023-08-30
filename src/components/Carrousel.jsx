// importacion de axios (biblioteca de react)//
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Arrow from './Arrow'

// axios = biblioteca que realiza solicitudes HTTP , ejemplos(obtencion de datos de una API)
const Carrousel = () => {
    // INFOAPI = variable de estado//
    //SETINFOAPI = funcion que actualiza la variable de estado//
    let [infoApi, setInfoApi] = useState([])
    let [counter, setCounter] = useState(0) // useState toma como argumento el valor inicial del estado//
    let url = 'https://minga-back-vyqy.onrender.com/categories'

    function getData() {
        axios(url)
            // obteniendo info de API a traves de axios//
            .then((response) => setInfoApi(response.data.categories))
            // montado del componente //

            .catch(error => console.log(error))
        // reject en caso de fallo de promesa//
    }
    useEffect(() => {
        getData()
    }, [])



    // condicion para el renderizado de la api//
    let siguiente = () => (counter !== infoApi.length - 1) ? setCounter(counter + 1) : setCounter(0)
    let anterior = () => (counter !== 0) ? setCounter(counter - 1) : setCounter(infoApi.length - 1)

    const leftImage = '../../public/image/flecha.svg'

    const rightImage = '../../public/image/toRight-arrow.svg'




    return (
        <div className='bg-gradient-to-r from-pink-300 to-pink-500 md:flex justify-evenly h-44 hidden md:w-3/4 mb-4'>

            <div className='p-2 rounded-full border flex justify-center  items-center w-fit'>
                <Arrow src={leftImage} onClick={anterior} />
            </div>

            <img className='w-50 object-contain' src={infoApi[counter]?.character_photo} alt="" />
            <img className='relative bottom-4' src="./image/carrousel-foto.svg" alt="" />

            <div className='flex flex-col gap-2 w-3/4 justify-center text-white'>
                <p className='text-lg'>
                    Shonen
                </p>
                <p className='flex flex-col text-xs'>
                    Is the manga  that is aimed at adolescent boys. They are <br />series with large amounts of action,
                    in which humorous <br /> situations often occur.
                    The camaraderie between <br /> members of a collective or a combat team stands out.</p>
            </div>

            <div className='p-2 rounded-full border flex justify-center  items-center w-fit'>
                <Arrow src={rightImage} onClick={siguiente} />
            </div>
        </div>
    )
}
export default Carrousel

