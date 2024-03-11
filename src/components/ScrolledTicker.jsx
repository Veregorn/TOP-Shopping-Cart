import '../styles/ScrolledTicker.css'
import { useEffect, useState } from 'react';

function ScrolledTicker() {
    
    // Estado para controlar el desplazamiento del texto
    const [translateX, setTranslateX] = useState(0);

    // Efecto para mover el texto
    useEffect(() => {
        const handleScroll = () => {
          // Calcula el porcentaje del scroll en la página
          const scrollPercentage = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
          const maxScrollValue = 100; // Ajusta este valor según la longitud de tu texto
          // Actualiza el estado con el nuevo valor de desplazamiento
          setTranslateX(maxScrollValue - (scrollPercentage * 100));
        };
    
        // Añade el evento de escucha al hacer scroll
        window.addEventListener('scroll', handleScroll);
    
        // Limpieza al desmontar el componente
        return () => window.removeEventListener('scroll', handleScroll);
      }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente
    
    return (
        <div className="scrolledTicker">
            <div className="scrolledTickerContent">
                <p className='scrolling-text' style={{ transform: `translateX(${translateX}%)` }}>Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. </p>
            </div>
        </div>
    );
}

export default ScrolledTicker;