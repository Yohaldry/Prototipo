import React, {useEffect} from 'react';
import '../Styles/index.css'
import Aos from 'aos';


const Header = () => {
      
        useEffect(() => {
            Aos.init({ duration: 3000});
        }, [])

      
    return ( 

        <header className="Header_Menu">
        <div className="logo">
            <h3 data-aos="slide-right" className="almagecort"><strong>Almagecort</strong></h3>
        </div>
        <ul data-aos="slide-up" className="Opciones">
            <label to="./Inicio" className="Entradas">Inicio</label>
            <label className="Entradas">Cotizar</label>
            <label className="Entradas">Servicios</label>
            <label className="Entradas">Testimonios</label>
            <label className="Entradas">Contactos</label>
            <label className="Entradas">Nosotros</label>
        </ul>
    </header>
     );
}
 
export default Header;