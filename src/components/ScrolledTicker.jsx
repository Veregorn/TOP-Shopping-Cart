import '../styles/ScrolledTicker.css'
import { useEffect, useState } from 'react';

function ScrolledTicker() {
    
    // Estado para controlar el desplazamiento del texto
    const [translateX, setTranslateX] = useState(0);

    // Efecto para mover el texto
    useEffect(() => {

        // Función para manejar el desplazamiento
        const handleScroll = () => {
            // Obtiene el scroll vertical actual y la altura total de la página
            const scrollY = window.scrollY;
            const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        
            // Calcula el desplazamiento como una fracción del scroll vertical
            // Ajusta el divisor para controlar la "suavidad" y la distancia del desplazamiento
            const newTranslateX = 65 - (scrollY / (totalScrollHeight)) * 100; // 100 es un valor de ejemplo; ajusta según la longitud del contenido
        
            setTranslateX(newTranslateX);
        };

        // Añade el evento de escucha al hacer scroll
        window.addEventListener('scroll', handleScroll);
    
        // Limpieza al desmontar el componente
        return () => window.removeEventListener('scroll', handleScroll);

    }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente
    
    return (
        <div className="scrolledTicker">
            <div className="scrolledTickerContent">
                <p className='scrolling-text' style={{ transform: `translateX(${translateX}vw)` }}>Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. Online shopping not your thing? See the products in real life. Visit our stores. Boston. Chicago. London. Los Angeles. New York City. </p>
            </div>
        </div>
    );
}

export default ScrolledTicker;