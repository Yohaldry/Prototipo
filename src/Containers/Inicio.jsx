import React, {Fragment} from 'react';
import FondoBurbuja from '../components/FondoBurbujas';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Presentacion from '../components/Presentacion';
import Servicios from '../components/Servicios';
import WhatsApp from '../components/WhatsApp';



const Inicio = () => {
    return ( 
    <Fragment>
        <Header />
        <Presentacion />
        <Servicios />
        <WhatsApp />
        <FondoBurbuja />
        <Footer />
    </Fragment>
     );
}
 
export default Inicio;
<h1>Soy el Inicio</h1>