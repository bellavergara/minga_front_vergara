import React, { useState } from 'react'




const Navbar = () => {
    let [open, setOpen] = useState(false)
    let Drawer = () => (<div className=' bg-gradient-to-r from-pink-300 to-pink-500  w-full h-96 md:w-1/2 absolute top-0 left-0 z-40 '>
        <button onClick={() => setOpen(false)} className='bg-white p-2 text-pink-400 rounded-full font-bold text-2xl absolute right-5 m-3'>X</button>
        <div className='flex flex-col w-1/2 items-center text-white justify-around font-bold h-48'>
            <a className='p-3' href="">Home</a>
            <a className='p-3' href="">Registre</a>
            <a className='p-3' href="">Sing In</a>
        </div>
    </div >)

    return (

        <header className='absolute w-full h-34 top-0'>
            <nav className='w-full h-24 p-0 flex justify-between py-8'>
                <img className='w-10 cursor-pointer' onClick={() => setOpen(true)} src="./image/menuHamburguesa.svg" alt="menu" />
                <img className='w-10 pointer-events-none ' src="./image/logo.svg" alt="logo" />
            </nav>
            {open && <Drawer />}
        </header>

    )
}
export default Navbar
