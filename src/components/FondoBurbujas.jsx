import Aos from 'aos';
import React, {useEffect} from 'react';
import '../Styles/index.css'

const FondoBurbuja = () => {

    useEffect(() => {
        Aos.init({ duration: 3000});
    }, [])

    return ( 

        <main className="bg_animate">
        <div className="header_nav">

        <h1 id="Dedicamos"><strong>Nos dedicamos a darte lo mejor</strong></h1>
  
           <div className="contenedor">
               
                <p className="DescripcionBurbujas">Ofrecemos una gran variedad de artículos<br/>
                 que se adaptan al gusto y la personalidad de cada cliente.<br/> 
                 Nuestros productos se fabrican con el objetivo de encajar en cada espacio<br/>
                  habitable, dando un toque perfecto de elegancia e innovación en cada hogar u oficina.</p>
            </div>
        </div>

        <section className="banner contenedor">
            <secrion className="banner_title">
                <h2 data-aos="slide-right">Necesitas ayuda? <br/> Podemos asesorarte</h2>
                <a data-aos="flip-left" href="#" className="llamanos"><i class="fas fa-phone-alt"></i></a>
                <a data-aos="flip-left" href="#" className="llamanos"><i class="fab fa-whatsapp"></i></a>
                <a data-aos="slide-left" href="#" className="llamanos"><i class="fab fa-facebook-f"></i></a>
                <a data-aos="slide-left" href="#" className="llamanos"><i class="fab fa-instagram"></i></a>
            </secrion>
            <div className="banner_img">
                <img src="laptop-support.png" alt=""/>
            </div>
        </section>

        <div className="burbujas">
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
        </div>
    </main>
     );
}
 
export default FondoBurbuja;