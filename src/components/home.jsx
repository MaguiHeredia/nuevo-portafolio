import React, { useState, useEffect } from 'react'
import Contact from './contact';
import { Link, animateScroll as scroll } from "react-scroll";
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import Tooltip from 'react-bootstrap/esm/Tooltip';
import imagen from '../images/imageHome.png'
import imageSobreMi from '../images/imageSobreMi.png'
import imagehdp from '../images/hpd.png'
import imageCountriesApp from '../images/countriesApp.png'
import imageFaltaUno from '../images/faltaUno.png'
import imageLista from '../images/listadecompras.png'
import '../css/home.css'
import Carrusel from './carrusel';
import img2FaltaUno from '../images/img2FaltaUno.jpeg'
import img3FaltaUno from '../images/img3FaltaUno.jpeg'
import img4FaltaUno from '../images/img4FaltaUno.jpeg'
import img2HDP from '../images/img2HDP.png'
import img3HDP from '../images/img3HDP.png'
import img4HDP from '../images/img4HDP.png'
import img2Countries from '../images/img2Countries.jpeg'
import img3Countries from '../images/img3Countries.jpeg'
import img4Countries from '../images/img4Countries.jpeg'


function Home() {
    const [modal, setModal] = useState(false)
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    const abrirModal = (e) => {
        e.preventDefault();
        setModal(true)
    }
    return (
        <div className="home">
             {matches ?
             <div> 
            <nav className='nav' style={{ position: 'fixed', width: '100%', display: 'flex', justifyContent: 'center', zIndex: '8' }}>
                <div className='nav-div'>
                <Link to="section1" spy={true} smooth={true} duration={300} offset={-70}>
                    <button className='boton-nav' >Sobre mí</button>
                </Link>
                <Link to="section2" spy={true} smooth={true} duration={300} offset={-70}>
                    <button className='boton-nav'>Proyectos</button>
                </Link>
                <Link to="section3" spy={true} smooth={true} duration={300} offset={-70}>
                    <button className='boton-nav'>Skills</button>
                </Link>
                <Link to="section4" spy={true} smooth={true} duration={300} offset={-70}>
                    <button className='boton-nav'>Contacto</button>
                </Link>
                </div>
            </nav>
            <div className='home-page'>
                <div className='div-text'>
                <h4 className='text1'>Hola! Soy</h4>
                <h2 className='text2'>MARIANELA HEREDIA</h2>
                <h4 className='text3'>FULL STACK DEVELOPER</h4>
                <h4 className='text3-2'>FRONT END DEVELOPER</h4>
                <p className='text4'>Apasionada por el desarrollo Front End, amo superarme cada día y crecer como desarrolladora. La curiosidad me motiva a aprender nuevas tecnologías y disfruto de los desafíos que eso conlleva.</p>
                </div>
                <img src={imagen} className='img-home'></img>
            </div>
            <div className='separador'></div>
            <div id='section1' className='sobre-mi'>
                <img src={imageSobreMi} className='img-sobreMi'></img>
                <div className='div-text-sobreMi'>
                <h3 className='text-sobreMi'>Sobre mí</h3>
                <p className='info-sobreMi'>Soy desarrolladora Full Stack apasionada por el Front End. Curiosa, con ganas de aprender siempre cosas nuevas que me ayuden a crecer profesionalmente y como persona. Con excelente capacidad resolutiva, siempre buscando maneras rápidas y eficaces de solucionar los problemas.<br/> Disfruto de trabajar en equipos donde pueda aprender y aportar mis conocimientos. <br/> Inicié mi capacitación en la academia Henry y me sigo capacitando constantemente de manera autodidacta.Trabajé durante 3 años en atención al público, lo que me ayudo a desarrollar habilidades blandas como la comunicación, el compañerismo y la empatía.
                </p>
                </div>
            </div>
           
            <div id='section2' className='div-proyectos'>
                <div className='contenedor-title-proyectos'>
                <h3 className='title-proyectos'> Proyectos <div className='lineaa'></div></h3> 
                
                </div>
                <div className='contenedor-cards'>
                <div className='card-proyecto'>
                <Carrusel img1={imageFaltaUno} img2={img2FaltaUno} img3={img3FaltaUno} img4={img4FaltaUno}></Carrusel>
                    <div className='div-textCard'>
                    <h4 className='title-card'>FaltaUno!</h4>
                    <p className='text-card'>Aplicación realizada en el proyecto grupal de Henry, que busca simplificar el alquiler de canchas de futbol, basquet, tenis y padel, tanto para el consumidor como para el dueño de las mismas. Cuenta con división de perfiles, de dueños y de jugadores, siendo ambas vistas totalmente diferentes y amoldándose a las necesidades de ambos tipos de usuarios.</p>
                    <a href="https://falta-uno-henry.vercel.app/" key='faltauno' target='_BLANCK'><button className='button-proyecto'>Visitar FaltaUno!</button></a>
                    </div>
                </div>
                <div className='card-proyecto'>
                <Carrusel img1={imagehdp} img2={img2HDP} img3={img3HDP} img4={img4HDP}></Carrusel>
                    <div className='div-textCard'>
                    <h4 className='title-card'>H.D.P!</h4>
                    <p className='text-card'>Versión web del famoso juego de cartas HDP, realizada junto con dos amigos. Funciona principalmente con Socket IO y permite al usuario jugar con sus amigos, jugar en salas aleatorias y chatear por la aplicación.</p>
                    <a href="https://hdp-game.vercel.app/" key='hdp' target='_BLANCK'><button className='button-proyecto'>Visitar H.D.P.!</button></a>
                    </div>
                </div>
                <div className='card-proyecto'>
                <Carrusel img1={imageCountriesApp} img2={img2Countries} img3={img3Countries} img4={img4Countries}></Carrusel>
                    <div className='div-textCard'>
                    <h4 className='title-card'>Countries App</h4>
                    <p className='text-card'>Single Page Application realizada como proyecto individual para el bootcamp de Henry.  cuenta con buscadores, filtrados, paginación y creación. Este proyecto me ayudo a poner en practica los conocimientos teoricos que tenia sobre React, Redux Node, Express y Sequelize, entre otros.</p>
                    <a href="https://countries-app-eta-five.vercel.app/" key='faltauno' target='_BLANCK'><button className='button-proyecto'>Visitar Countries App!</button></a>
                    </div>
                </div>
                <div className='card-proyecto'>
                    <img src={imageLista} className='img-card'></img>
                    <div className='div-textCard'>
                    <h4 className='title-card'>Lista de compras!</h4>
                    <p className='text-card'>Pequeño proyecto realizado con TypeScript que busca simplificar la forma de hacer la lista del sumpermercado, permite agregar predefinidos, agregar elementos nuevos, marcar, modificar y eliminar elementos. <br></br>Es mi primer proyecto realizado con TypeScript</p>
                    <a href="https://lista-de-compras-rho.vercel.app/" key='lista' target='_BLANCK'><button className='button-proyecto'>Visitar Lista de Compras!</button></a>
                    </div>
                </div>
                </div>
            </div>
            <div id='section3' className='div-skills'>
                <div>
                <div className='contenedor-title-proyectos'>
                <h3 className='title-proyectos'> Skills <div className='lineaa'></div></h3> 
                
                </div>
                    <div className='contenedor'>
                        <div className='sub-div'>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Javascript
                                </Tooltip>}>
                            <div className='loguitos' >
                                <img src='https://api.iconify.design/ion:logo-javascript.svg' className='img' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    TypeScript
                                </Tooltip>}>
                            <div className='loguitos' >
                                <img src='https://cdn-icons-png.flaticon.com/512/5968/5968566.png' className='img' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    HTML
                                </Tooltip>}>
                            <div className='loguitos' >
                                <img src='https://api.iconify.design/mdi:language-html5.svg' className='img' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    CSS
                                </Tooltip>}>
                            <div className='loguitos' >
                                <img src='https://api.iconify.design/teenyicons:css3-solid.svg' className='img'/>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    React
                                </Tooltip>}>
                            <div className='loguitos' >
                                <img src='https://api.iconify.design/akar-icons:react-fill.svg' className='img'/>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Redux
                                </Tooltip>}>
                            <div className='loguitos'>
                                <img src='https://api.iconify.design/bxl:redux.svg' className='img'/>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    React Native
                                </Tooltip>}>
                            <div className='loguitos'>
                                <img src='https://img.icons8.com/ios/500/react-native--v1.png' className='img' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Bootstrap
                                </Tooltip>}>
                            <div className='loguitos'>
                                <img src='https://api.iconify.design/cib:bootstrap.svg' className='img' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Node
                                </Tooltip>}>
                            <div className='loguitos' >
                                <img src='https://api.iconify.design/fa-brands:node.svg' className='img' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Express
                                </Tooltip>}>
                            <div className='loguitos'>
                                <img src='https://api.iconify.design/simple-icons:express.svg' className='img'/>
                            </div>
                        </OverlayTrigger>
                        </div>
                        <div className='sub-div'>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Sequelize
                                </Tooltip>}>
                            <div className='loguitos' >
                                <img src='https://api.iconify.design/file-icons:sequelize.svg' className='img'/>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    PostgresSQL
                                </Tooltip>}>
                            <div className='loguitos'>
                                <img src='https://api.iconify.design/akar-icons:postgresql-fill.svg' className='img'/>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Java (aprendiendo)
                                </Tooltip>}>
                            <div className='loguitos'>
                                <img src='https://img.icons8.com/ios-glyphs/480/java-coffee-cup-logo.png' className='img'/>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    SocketIO
                                </Tooltip>}>
                            <div className='loguitos'>
                                <img src='https://cdn.worldvectorlogo.com/logos/socket-io.svg' className='img'/>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Auth0
                                </Tooltip>}>
                            <div className='loguitos'>
                                <img src='https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/000000/external-auth0-the-solution-you-need-for-web-mobile-iot-and-internal-applications-logo-regular-tal-revivo.png' className='img' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    WordPress
                                </Tooltip>}>
                            <div className='loguitos' >
                                <img src='https://cdn-icons-png.flaticon.com/512/59/59137.png' className='img' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Git
                                </Tooltip>}>
                            <div className='loguitos' >
                                <img src="https://img.icons8.com/ios-filled/50/000000/git.png" className='img' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Figma
                                </Tooltip>}>
                            <div className='loguitos' >
                                <img src='https://img.icons8.com/ios-glyphs/30/000000/figma.png' className='img' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Trello
                                </Tooltip>}>
                            <div className='loguitos' >
                                <img src="https://img.icons8.com/ios-filled/50/000000/trello.png" className='img' />
                            </div>
                        </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </div>
           
            <div id='section4' className='div-contacto'>
                <div className='div-contact'>
                <h4 className='contacto' ><img src='https://api.iconify.design/carbon:email-new.svg' className='imgContacto' /> maguiherediavaiarini@gmail.com</h4>
                <h4 className='contacto' ><img src='https://api.iconify.design/ic:baseline-phone.svg' className='imgContacto' /> (+54)9 3541-201933</h4>
                </div>
                <div>
                <button onClick={(e) => abrirModal(e)} className='enviarEmail'>Enviar Email</button>
                <Contact setModal={setModal} modal={modal} />
                </div>
                <div>
                <a href="https://github.com/MaguiHeredia" key='github' target='_BLANCK' style={{ width: '80px' }}><img src="https://img.icons8.com/glyph-neue/128/000000/github.png" style={{ width: '80px' }} /></a>
                <a href="https://www.linkedin.com/in/marianela-heredia-" key='linkedin' target='_BLANCK' style={{ width: '80px' }}><img src="https://img.icons8.com/fluency/96/000000/linkedin.png" style={{ width: '80px' }} /></a>
                <a href="https://www.instagram.com/magui_heredia17/" key='instagram' target='_BLANCK' style={{ width: '80px' }}><img src="https://img.icons8.com/fluency/96/000000/instagram-new.png" style={{ width: '80px' }} /></a>
                </div>
            </div>
            </div>
            : <div className='home-mobile'>
                <nav className='nav-mobile' style={{ position: 'fixed', width: '97%', display: 'flex', justifyContent: 'center', zIndex: '8' }}>
                <div className='nav-div-mobile'>
                <Link to="section1" spy={true} smooth={true} duration={300} offset={-70}>
                    <button className='boton-nav-mobile' >Sobre mí</button>
                </Link>
                <Link to="section2" spy={true} smooth={true} duration={300} offset={-70}>
                    <button className='boton-nav-mobile'>Proyectos</button>
                </Link>
                <Link to="section3" spy={true} smooth={true} duration={300} offset={-70}>
                    <button className='boton-nav-mobile'>Skills</button>
                </Link>
                <Link to="section4" spy={true} smooth={true} duration={300} offset={-70}>
                    <button className='boton-nav-mobile'>Contacto</button>
                </Link>
                </div>
            </nav>
            <div className='home-page-mobile'>
                <div className='div-text-mobile'>
                <h4 className='text1-mobile'>Hola! Soy</h4>
                <h2 className='text2-mobile'>MARIANELA HEREDIA</h2>
                </div>
                <div className='div-img-mobile'>
                <img src={imagen} className='img-home-mobile'></img>
                </div>
                <div>
                <h4 className='text3-mobile'>FULL STACK DEVELOPER</h4>
                <h4 className='text3-2-mobile'>FRONT END DEVELOPER</h4>
                </div>
            </div>
            <div id='section1' className='sobre-mi-mobile'>
                <div className='div-text-sobreMi-mobile'>
                <h3 className='text-sobreMi-mobile'>Sobre mí <div className='lineaa-mobile'></div></h3>
                <p className='info-sobreMi-mobile'>Soy desarrolladora Full Stack apasionada por el Front End. Curiosa, con ganas de aprender siempre cosas nuevas que me ayuden a crecer profesionalmente y como persona. Con excelente capacidad resolutiva, siempre buscando maneras rápidas y eficaces de solucionar los problemas.<br/> Disfruto de trabajar en equipos donde pueda aprender y aportar mis conocimientos. <br/> Inicié mi capacitación en la academia Henry y me sigo capacitando constantemente de manera autodidacta.Trabajé durante 3 años en atención al público, lo que me ayudo a desarrollar habilidades blandas como la comunicación, el compañerismo y la empatía.
                </p>
                <img src={imageSobreMi} className='img-sobreMi-mobile'></img>
                </div>
            </div>
            <div id='section2' className='div-proyectos-mobile'>
                <div className='contenedor-title-proyectos-mobile'>
                <h3 className='text-sobreMi-mobile'> Proyectos <div className='lineaa-mobile'></div></h3> 
                
                </div>
                <div className='contenedor-cards-mobile'>
                <div className='card-proyecto-mobile'>
                <Carrusel img1={imageFaltaUno} img2={img2FaltaUno} img3={img3FaltaUno} img4={img4FaltaUno}></Carrusel>
                    <div className='div-textCard-mobile'>
                    <h4 className='title-card-mobile'>FaltaUno!</h4>
                    <p className='text-card-mobile'>Aplicación realizada en el proyecto grupal de Henry, que busca simplificar el alquiler de canchas de futbol, basquet, tenis y padel, tanto para el consumidor como para el dueño de las mismas. Cuenta con división de perfiles, de dueños y de jugadores, siendo ambas vistas totalmente diferentes y amoldándose a las necesidades de ambos tipos de usuarios.</p>
                    <a href="https://falta-uno-henry.vercel.app/" key='faltauno' target='_BLANCK'><button className='button-proyecto-mobile'>Visitar FaltaUno!</button></a>
                    </div>
                </div>
                <div className='card-proyecto-mobile'>
                <Carrusel img1={imagehdp} img2={img2HDP} img3={img3HDP} img4={img4HDP}></Carrusel>
                    <div className='div-textCard-mobile'>
                    <h4 className='title-card-mobile'>H.D.P!</h4>
                    <p className='text-card-mobile'>Versión web del famoso juego de cartas HDP, realizada junto con dos amigos. Funciona principalmente con Socket IO y permite al usuario jugar con sus amigos, jugar en salas aleatorias y chatear por la aplicación.</p>
                    <a href="https://hdp-game.vercel.app/" key='hdp' target='_BLANCK'><button className='button-proyecto-mobile'>Visitar H.D.P.!</button></a>
                    </div>
                </div>
                <div className='card-proyecto-mobile'>
                <Carrusel img1={imageCountriesApp} img2={img2Countries} img3={img3Countries} img4={img4Countries}></Carrusel>
                    <div className='div-textCard-mobile'>
                    <h4 className='title-card-mobile'>Countries App</h4>
                    <p className='text-card-mobile'>Single Page Application realizada como proyecto individual para el bootcamp de Henry.  cuenta con buscadores, filtrados, paginación y creación. Este proyecto me ayudo a poner en practica los conocimientos teoricos que tenia sobre React, Redux Node, Express y Sequelize, entre otros.</p>
                    <a href="https://countries-app-eta-five.vercel.app/" key='faltauno' target='_BLANCK'><button className='button-proyecto-mobile'>Visitar Countries App!</button></a>
                    </div>
                </div>
                <div className='card-proyecto-mobile'>
                    <img src={imageLista} className='img-card-mobile'></img>
                    <div className='div-textCard-mobile'>
                    <h4 className='title-card-mobile'>Lista de compras!</h4>
                    <p className='text-card-mobile'>Pequeño proyecto realizado con TypeScript que busca simplificar la forma de hacer la lista del sumpermercado, permite agregar predefinidos, agregar elementos nuevos, marcar, modificar y eliminar elementos. <br></br>Es mi primer proyecto realizado con TypeScript</p>
                    <a href="https://lista-de-compras-rho.vercel.app/" key='lista' target='_BLANCK'><button className='button-proyecto-mobile'>Visitar Lista de Compras!</button></a>
                    </div>
                </div>
                </div>
            </div>
            <div id='section3' className='div-skills'>
                <div>
                <div className='contenedor-title-proyectos'>
                <h3 className='title-proyectos'> Skills <div className='lineaa'></div></h3> 
                
                </div>
                    <div className='contenedor-mobile'>
                        <div className='sub-div-mobile'>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Javascript
                                </Tooltip>}>
                            <div className='loguitos-mobile' >
                                <img src='https://api.iconify.design/ion:logo-javascript.svg' className='img-mobile' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    TypeScript
                                </Tooltip>}>
                            <div className='loguitos-mobile' >
                                <img src='https://cdn-icons-png.flaticon.com/512/5968/5968566.png' className='img-mobile' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    HTML
                                </Tooltip>}>
                            <div className='loguitos-mobile' >
                                <img src='https://api.iconify.design/mdi:language-html5.svg' className='img-mobile' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    CSS
                                </Tooltip>}>
                            <div className='loguitos-mobile' >
                                <img src='https://api.iconify.design/teenyicons:css3-solid.svg' className='img-mobile'/>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    React
                                </Tooltip>}>
                            <div className='loguitos-mobile' >
                                <img src='https://api.iconify.design/akar-icons:react-fill.svg' className='img-mobile'/>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Redux
                                </Tooltip>}>
                            <div className='loguitos-mobile'>
                                <img src='https://api.iconify.design/bxl:redux.svg' className='img-mobile'/>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    React Native
                                </Tooltip>}>
                            <div className='loguitos-mobile'>
                                <img src='https://img.icons8.com/ios/500/react-native--v1.png' className='img-mobile' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Bootstrap
                                </Tooltip>}>
                            <div className='loguitos-mobile'>
                                <img src='https://api.iconify.design/cib:bootstrap.svg' className='img-mobile' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Node
                                </Tooltip>}>
                            <div className='loguitos-mobile' >
                                <img src='https://api.iconify.design/fa-brands:node.svg' className='img-mobile' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Express
                                </Tooltip>}>
                            <div className='loguitos-mobile'>
                                <img src='https://api.iconify.design/simple-icons:express.svg' className='img-mobile'/>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Sequelize
                                </Tooltip>}>
                            <div className='loguitos-mobile' >
                                <img src='https://api.iconify.design/file-icons:sequelize.svg' className='img-mobile'/>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    PostgresSQL
                                </Tooltip>}>
                            <div className='loguitos-mobile'>
                                <img src='https://api.iconify.design/akar-icons:postgresql-fill.svg' className='img-mobile'/>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Java (aprendiendo)
                                </Tooltip>}>
                            <div className='loguitos-mobile'>
                                <img src='https://img.icons8.com/ios-glyphs/480/java-coffee-cup-logo.png' className='img-mobile'/>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    SocketIO
                                </Tooltip>}>
                            <div className='loguitos-mobile'>
                                <img src='https://cdn.worldvectorlogo.com/logos/socket-io.svg' className='img-mobile'/>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Auth0
                                </Tooltip>}>
                            <div className='loguitos-mobile'>
                                <img src='https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/000000/external-auth0-the-solution-you-need-for-web-mobile-iot-and-internal-applications-logo-regular-tal-revivo.png' className='img-mobile' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    WordPress
                                </Tooltip>}>
                            <div className='loguitos-mobile' >
                                <img src='https://cdn-icons-png.flaticon.com/512/59/59137.png' className='img-mobile' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Git
                                </Tooltip>}>
                            <div className='loguitos-mobile' >
                                <img src="https://img.icons8.com/ios-filled/50/000000/git.png" className='img-mobile' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Figma
                                </Tooltip>}>
                            <div className='loguitos-mobile' >
                                <img src='https://img.icons8.com/ios-glyphs/30/000000/figma.png' className='img-mobile' />
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${"bottom"}`}>
                                    Trello
                                </Tooltip>}>
                            <div className='loguitos-mobile' >
                                <img src="https://img.icons8.com/ios-filled/50/000000/trello.png" className='img-mobile' />
                            </div>
                        </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </div>
            <div id='section4' className='div-contacto-mobile'>
                <div className='div-contact-mobile'>
                <h4 className='contacto-mobile' ><img src='https://api.iconify.design/carbon:email-new.svg' className='imgContacto-mobile' /> maguiherediavaiarini@gmail.com</h4>
                <h4 className='contacto-mobile' ><img src='https://api.iconify.design/ic:baseline-phone.svg' className='imgContacto-mobile' /> (+54)9 3541-201933</h4>
                </div>
                <div>
                <button onClick={(e) => abrirModal(e)} className='enviarEmail-mobile'>Enviar Email</button>
                <Contact setModal={setModal} modal={modal} />
                </div>
                <div>
                <a href="https://github.com/MaguiHeredia" key='github' target='_BLANCK' style={{ width: '80px' }}><img src="https://img.icons8.com/glyph-neue/128/000000/github.png" style={{ width: '50px' }} /></a>
                <a href="https://www.linkedin.com/in/marianela-heredia-" key='linkedin' target='_BLANCK' style={{ width: '80px' }}><img src="https://img.icons8.com/fluency/96/000000/linkedin.png" style={{ width: '50px' }} /></a>
                <a href="https://www.instagram.com/magui_heredia17/" key='instagram' target='_BLANCK' style={{ width: '80px' }}><img src="https://img.icons8.com/fluency/96/000000/instagram-new.png" style={{ width: '50px' }} /></a>
                </div>
            </div>
                </div>}
        </div>
    );
}

export default Home;