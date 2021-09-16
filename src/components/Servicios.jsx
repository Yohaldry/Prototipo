import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Servicios = () => {


    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])


    return ( 

        <div class="seccion_3">

            <h1 data-aos="fade-up" class="title_Renueva">Renueva tu zona de Conford con <span class="Almagecort">Almagecort</span></h1>
            
            <div  class="product_Total">

            <div data-aos="flip-left" class="Products">
            <h2 class="sheer_title">Asesorias</h2>
            <img class="Sheer_Elegance" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631741211/Almagecort/Imagen1_t7do3m.jpg"/>
            </div>

            <div data-aos="flip-left" class="Products">
            <h2 class="sheer_title">Sheer Elegance</h2>
            <img class="Sheer_Elegance" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631741721/Almagecort/Imagen2_tm6g50.jpg"/>
            </div>

            <div data-aos="flip-left" class="Products">
            <h2  class="sheer_title">Sheer Elegance</h2>
            <img  class="Sheer_Elegance" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631243608/Almagecort/sheer_elegance_gjo90q.png"/>
            </div>

            <div data-aos="flip-left" class="Products">
            <h2 class="sheer_title">Persiana en Madera</h2>
            <img class="Sheer_Elegance" src="https://image.made-in-china.com/202f0j10rpaRHUCMaKcS/Brown-Wooden-Blinds-Window-Shades-at-Lowes-for-Window-Decor.jpg"/>
            </div>

            <div data-aos="flip-left" class="Products">
            <h2 class="sheer_title">Panel Japones</h2>
            <img class="Sheer_Elegance" src="https://assets.leroymerlin.es/is/image/lmes/82519537-0100/panel-japones-dolomiti-65x270-gris.jpg" />
             </div>

             <div data-aos="zoom-in" class="Products">
            <h2 class="sheer_title">Perciana Vertical</h2>
            <img class="Sheer_Elegance" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631742021/Almagecort/Imagen3_mq4tzq.jpg" />
             </div>

             <div data-aos="zoom-in" class="Products">
            <h2 class="sheer_title">Black Out</h2>
            <img class="Sheer_Elegance" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631742473/Almagecort/Imagen4_pkuagi.jpg" />
             </div>

             <div data-aos="zoom-in" class="Products">
            <h2 class="sheer_title">Persianas Enrrollable</h2>
            <img class="Sheer_Elegance" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631742689/Almagecort/Imagen5_qi3aki.png" />
             </div>

             <div data-aos="zoom-in" class="Products">
            <h2 class="sheer_title">Cortina Tradicional</h2>
            <img class="Sheer_Elegance" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631742984/Almagecort/Imagen6_n6ymno.jpg" />
             </div>

             <div data-aos="zoom-in" class="Products">
            <h2 class="sheer_title">Persiana Romana</h2>
            <img class="Sheer_Elegance" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631743190/Almagecort/Imagen7_r6euep.jpg" />
             </div>

             <div data-aos="slide-right" class="Products">
            <h2 class="sheer_title">Tapiceria</h2>
            <img class="Sheer_Elegance" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631752294/Almagecort/Imagen13_vplw2v.jpg" />
             </div>

             <div data-aos="slide-right" class="Products">
            <h2 class="sheer_title">Papel de Colgadura</h2>
            <img class="Sheer_Elegance" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631752420/Almagecort/Imagen14_lv8yxe.png" />
             </div>


             <div data-aos="slide-right" class="Products">
            <h2 class="sheer_title">Persiana a Motor</h2>
            <img class="Sheer_Elegance" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631743472/Almagecort/Imagen8_w4o0ny.png" />
             </div>

             <div data-aos="slide-right" class="Products">
            <h2 class="sheer_title">Lavado y Manteniento</h2>
            <img class="Sheer_Elegance" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631743722/Almagecort/Imagen10_by1uae.png" />
             </div>

             <div data-aos="slide-right" class="Products">
            <h2 class="sheer_title">Instalacion y Reparacion</h2>
            <img class="Sheer_Elegance" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631744034/Almagecort/Imagen11_cwfxb2.jpg" />
             </div>


        </div>
        </div>
        
  
     );
}
 
export default Servicios;