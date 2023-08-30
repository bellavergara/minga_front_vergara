import React from 'react'



const Navbar = () => {
    return (

        <header className='absolute w-full h-34 top-0'>
            <nav className='w-full h-24 p-0 flex justify-between py-8'>
                <img className='w-10' src="./image/menuHamburguesa.svg" alt="menu" />

                <img className='w-10 pointer-events-none ' src="./image/logo.svg" alt="logo" />
            </nav>
        </header>

    )
}
export default Navbar