import React, {Fragment, useEffect} from 'react';
import Aos from 'aos';


const Presentacion = () => {

    useEffect(() => {
        Aos.init({ duration: 3000});
    },[])

    return ( 

    <Fragment>
        <div className="Seccion_Bienvenida">
            <img className="Imagen" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631215947/Imagen1_gjkdgc.jpg" alt=""/>
            <div className="Cuadrado_Oscuro">
                <label data-aos="slide-right" className="titulo_Bienvenida">Cotiza un presupuesto diseñado para ti</label>

                <p data-aos="slide-right" className="P_Bienvenida"><strong>Toma tus medidas precisas y sigue los pasos que te recomendamos<br/> para regalarte el mejor presupuesto.</strong></p>
               
                
                <button data-aos="slide-right" type="submit" className="boton_cotizar">Vamos</button>
                <div data-aos="slide-left"  className="circulo_Bienvenida"></div>
                <div data-aos="slide-down" className="circulo_Borde"></div>
                <h3 data-aos="slide-up" className="Titulo_Circulo">Almagecort</h3>
                <p data-aos="slide-up" className="P_Circulo">RENOVANDO ESPACIOS</p>
            </div>

            <div  className="Carrusel">
        <h2>Carrousel Muestras</h2>
        <div className="content-all">
            <div className="content-carrousel">
                <figure><img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631240911/Almagecort/WhatsApp_Image_2021-09-08_at_1.09.11_PM_1_lpwoks.jpg"/></figure>
                <figure><img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631240911/Almagecort/WhatsApp_Image_2021-09-08_at_1.09.05_PM_gj3p24.jpg"/></figure>
                <figure><img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631240908/Almagecort/WhatsApp_Image_2021-09-08_at_1.09.02_PM_3_yowilv.jpg"/></figure>
                <figure><img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631240908/Almagecort/WhatsApp_Image_2021-09-08_at_1.09.12_PM_4_ozn4uw.jpg"/></figure>
                <figure><img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631240908/Almagecort/WhatsApp_Image_2021-09-08_at_1.09.12_PM_3_jxst2v.jpg"/></figure>
                <figure><img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631240908/Almagecort/WhatsApp_Image_2021-09-08_at_1.09.01_PM_ryvxmx.jpg"/></figure>
                <figure><img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631240908/Almagecort/WhatsApp_Image_2021-09-08_at_1.09.02_PM_1_puxcu7.jpg"/></figure>
                <figure><img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631240908/Almagecort/WhatsApp_Image_2021-09-08_at_1.09.12_PM_2_jvkyjr.jpg"/></figure>
                <figure><img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631240908/Almagecort/WhatsApp_Image_2021-09-08_at_1.09.12_PM_2_jvkyjr.jpg"/></figure>
                <figure><img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631240908/Almagecort/WhatsApp_Image_2021-09-08_at_1.09.12_PM_3_jxst2v.jpg"/></figure>
            </div>
        </div>

        </div>


        </div>


   </Fragment>
     );
}
 
export default Presentacion;