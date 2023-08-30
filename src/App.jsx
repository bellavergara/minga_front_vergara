import { useState, useEffect } from 'react'
import Carrousel from './components/Carrousel'
import Hero from './components/Hero'

// esto es el HOME//

function App() {

  // este estado tiene como valor inicial el ancho del window cuando se monte el componente//
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => { // este es el efecto que  emula el ciclo de vida //
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // con . remove,removemos el evento//
    };
  }, []);

  const containerStyle = {
    height: '100vh',
    backgroundImage: windowWidth > 768 ? 'none' : "url('./image/background-Image.svg')",
    backgroundColor: windowWidth > 768 ? '#EBEBEB' : 'transparent',
  };

  return (
    <div className='h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center' style={containerStyle}>
      <Carrousel />
      <Hero />
    </div>
  );
}
export default App
