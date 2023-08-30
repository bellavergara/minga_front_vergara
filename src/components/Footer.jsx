import React from 'react'

const footer = () => {
    return (
        <footer className='w-full h-40 flex flex-col'>
            <div>
                <img className='w-full p-10' src="../../public/image/footer.png" alt="" />
            </div>

            <div className='flex justify-around m-5 items-center'>
                <div className=''>
                    <a className='m-2' href="#">Home</a>
                    <a className='m-2ß' href="#">Mangas</a>
                </div>
                <img src="../../public/image/logo.svg" alt="" />
                <div>
                    <img src="../../public/image/social.svg" alt="" />

                    <button className='flex justify-center items-center rounded-md mt-2 p-2'><img src="../../public/image/botton.svg" alt="" /></button>
                </div>

            </div>
        </footer>
    )
}

export default footer