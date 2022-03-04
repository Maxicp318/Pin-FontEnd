import React from "react";
import "./carousel.scss";
import Paisaje from "../../public/img/Paisaje.png";

function ContainerCarousel(props){

    return(
        <div className="Container-Carousel">
            <div className= "container_carousel"  id="carousel">
                <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                    <div className="carousel-indicators container_botones">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="boton_carousel active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="boton_carousel" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="boton_carousel" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active Fondo_Paisaje">
                            
                            <article className="container_art_1">
                                <h2 className="titulo_1">Sed ut perspiciatis unde omnis iste natus</h2>
                                <section className="parrafo_1">
                                    <p>Sed ut perspiciatis unde omnis iste natus error
                                    sit voluptatem accusantium doloremque.</p> 
                                </section> 
                                <button className="boton_1">Read more</button>                            
                            </article>
                        </div>
                        <div className="carousel-item Fondo_Paisaje">
                            
                            <article className="container_art_1">
                                <h2 className="titulo_1">Sed ut perspiciatis unde omnis iste natus</h2>
                                <section className="parrafo_1">
                                    <p>Sed ut perspiciatis unde omnis iste natus error
                                    sit voluptatem accusantium doloremque.</p> 
                                </section> 
                                <button className="boton_1">Read more</button>                            
                            </article>    
                        </div>
                        <div class="carousel-item Fondo_Paisaje">
                             
                            <article className="container_art_1">
                                <h2 className="titulo_1">Sed ut perspiciatis unde omnis iste natus</h2>
                                <section className="parrafo_1">
                                    <p>Sed ut perspiciatis unde omnis iste natus error
                                    sit voluptatem accusantium doloremque.</p> 
                                </section> 
                                <button className="boton_1">Read more</button>                            
                            </article>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerCarousel;