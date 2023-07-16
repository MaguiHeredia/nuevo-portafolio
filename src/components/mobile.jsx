import React from 'react'
import Contact from "./contact";
import { Link, animateScroll as scroll } from "react-scroll";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";
import imagen from "../images/imageHome.png";
import imageSobreMi from "../images/imageSobreMi.png";
import imagehdp from "../images/hpd.png";
import imageCountriesApp from "../images/countriesApp.png";
import imageFaltaUno from "../images/faltaUno.png";
import imageLista from "../images/listadecompras.png";
import "../css/home.css";
import Carrusel from "./carrusel";
import img2FaltaUno from "../images/img2FaltaUno.jpeg";
import img3FaltaUno from "../images/img3FaltaUno.jpeg";
import img4FaltaUno from "../images/img4FaltaUno.jpeg";
import img2HDP from "../images/img2HDP.png";
import img3HDP from "../images/img3HDP.png";
import img4HDP from "../images/img4HDP.png";
import img2Countries from "../images/img2Countries.jpeg";
import img3Countries from "../images/img3Countries.jpeg";
import img4Countries from "../images/img4Countries.jpeg";
import "tailwindcss/tailwind.css";
import CardWork from "./cardWork";
import img from "../images/logoIB.png";
import evaluar from "../images/logo-evaluar.webp";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


export default function Mobile ({abrirModal, setModal, modal}){
    return (
        <>
        <div className="home-mobile">
        <Menu as="div" className="fixed z-10 top-1 right-1 text-left">
        <div className="flex justify-end">
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#section1"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Sobre mí
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#section5"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Experiencia profesional
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#section2"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Proyectos
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
                <a
                  href="#section3"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Skills
                </a>
              )}
            
              </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

          {/* <nav
            className="nav-mobile"
            style={{
              position: "fixed",
              width: "97%",
              display: "flex",
              justifyContent: "center",
              zIndex: "8",
            }}
          >
            <div className="nav-div-mobile">
              <Link
                to="section1"
                spy={true}
                smooth={true}
                duration={300}
                offset={-70}
              >
                <button className="boton-nav-mobile">Sobre mí</button>
              </Link>
              <Link
              to="section5"
              spy={true}
              smooth={true}
              duration={300}
              offset={-70}
            >
              <button className="boton-nav-mobile">Experiencia profesional</button>
            </Link>
              <Link
                to="section2"
                spy={true}
                smooth={true}
                duration={300}
                offset={-70}
              >
                <button className="boton-nav-mobile">Proyectos</button>
              </Link>
              <Link
                to="section3"
                spy={true}
                smooth={true}
                duration={300}
                offset={-70}
              >
                <button className="boton-nav-mobile">Skills</button>
              </Link>
              <Link
                to="section4"
                spy={true}
                smooth={true}
                duration={300}
                offset={-70}
              >
                <button className="boton-nav-mobile">Contacto</button>
              </Link>
            </div>
          </nav> */}
          <div className="home-page-mobile">
            <div className="div-text-mobile">
              <h4 className="text1-mobile">Hola! Soy</h4>
              <h2 className="text2-mobile">MARIANELA HEREDIA</h2>
            </div>
            <div className="div-img-mobile">
              <img src={imagen} className="img-home-mobile"></img>
            </div>
            <div>
              <h4 className="text3-mobile">FULL STACK DEVELOPER</h4>
              <h4 className="text3-2-mobile">FRONT END DEVELOPER</h4>
            </div>
          </div>
          <div id="section1" className="sobre-mi-mobile">
            <div className="div-text-sobreMi-mobile">
              <h3 className="text-sobreMi-mobile" id='title-sobreMi'>
                Sobre mí <div className="lineaa-mobile"></div>
              </h3>
              <p className="info-sobreMi-mobile">
                Soy desarrolladora Full Stack apasionada por el Front End.
                Curiosa, con ganas de aprender siempre cosas nuevas que me
                ayuden a crecer profesionalmente y como persona. Con excelente
                capacidad resolutiva, siempre buscando maneras rápidas y
                eficaces de solucionar los problemas.
                <br />
                Cuento con una experiencia profesional total de casi un año, 
                con una pasantía para <b>Imagine Big</b>, una software factory donde participé 
                en la creación de diversas páginas web, y para <b>Evaluar</b>, una empresa 
                que ayuda al reclutamiento de talentos, donde trabajé como Frontend 
                Developer creando nuevas funcionalidades para la plataforma y brindando 
                mantenimiento a la misma.
                <br /> Inicié mi capacitación en la academia Henry y me sigo
                capacitando constantemente de manera autodidacta.<br></br>Mi
                experiencia en atención al cliente me ayudo a desarrollar
                habilidades blandas como la comunicación, el trabajo en equipo y la
                empatía.
              </p>
              <img src={imageSobreMi} className="img-sobreMi-mobile"></img>
            </div>
          </div>
          <div id="section5" className="div-proyectos-mobile">
          <div className="contenedor-title-proyectos-mobile">
            <h3 className="text-sobreMi-mobile">
              {" "}
              Experiencia profecional <div className="lineaa"></div>
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <div className="mx-auto mb-11">
              <CardWork
                img={evaluar}
                title="FRONTEND DEVELOPER"
                empresa="https://www.linkedin.com/company/evaluarcom/"
                text="Empresa en la que he participado en el desarrollo de nuevas funcionalidades para la plataforma, brindando también soporte a funcionalidades ya existentes.
Formé parte del equipo FrontEnd, donde pensamos y desarrollamos tareas que brindaban a los clientes una mejor experiencia de usuario, como el dashboard de analiticas o la actualizacion del listado de candidatos.
Las principales tecnologias que utilicé son Vue.js, GraphQL, TailwindCss, Vuetify y Figma. Trabajé con metodología Scrum utilizando principalmente Jira, SourceTree y GitHub."
              />

              <CardWork
                img={img}
                title="PASANTÍA FULL STACK DEVELOPER"
                empresa="https://www.linkedin.com/company/imaginebig/"
                text="Empresa en la que he participado en diversos proyectos, siempre con un desarrollo principal como desarrolladora Front End.
Participé en la creación de nuevas páginas webs, y brindando soporte a otras ya creadas.
Las principales tecnologias con las que trabajé son React, Node, Express, Sequelize, WordPress, Ant-Design, JavaScript y PostgreSQL, entre otras.
Trabajé bajo metodologia ágil Scrum utilizando principalmente herramientas como Jira, Bitbucket, SourceTree y Git."
              />
            </div>
          </div>
        </div>
          <div id="section2" className="div-proyectos-mobile">
            <div className="contenedor-title-proyectos-mobile">
              <h3 className="text-sobreMi-mobile">
                {" "}
                Proyectos <div className="lineaa-mobile"></div>
              </h3>
            </div>
            <div className="contenedor-cards-mobile">
              <div className="card-proyecto-mobile">
                <Carrusel
                  img1={imageFaltaUno}
                  img2={img2FaltaUno}
                  img3={img3FaltaUno}
                  img4={img4FaltaUno}
                ></Carrusel>
                <div className="div-textCard-mobile">
                  <h4 className="title-card-mobile">FaltaUno!</h4>
                  <p className="text-card-mobile">
                    Aplicación realizada en el proyecto grupal de Henry, que
                    busca simplificar el alquiler de canchas de futbol, basquet,
                    tenis y padel, tanto para el consumidor como para el dueño
                    de las mismas. Cuenta con división de perfiles, de dueños y
                    de jugadores, siendo ambas vistas totalmente diferentes y
                    amoldándose a las necesidades de ambos tipos de usuarios.
                  </p>
                  <a
                    href="https://github.com/falta-uno/proyecto-grupal"
                    key="faltauno"
                    target="_BLANCK"
                  >
                    <button className="button-proyecto-mobile">
                      Visitar repositorio FaltaUno!
                    </button>
                  </a>
                </div>
              </div>
              <div className="card-proyecto-mobile">
                <Carrusel
                  img1={imagehdp}
                  img2={img2HDP}
                  img3={img3HDP}
                  img4={img4HDP}
                ></Carrusel>
                <div className="div-textCard-mobile">
                  <h4 className="title-card-mobile">H.D.P!</h4>
                  <p className="text-card-mobile">
                    Versión web del famoso juego de cartas HDP, realizada junto
                    con dos amigos. Funciona principalmente con Socket IO y
                    permite al usuario jugar con sus amigos, jugar en salas
                    aleatorias y chatear por la aplicación.
                  </p>
                  <a
                    href="https://github.com/LaraCorvalan/HDP"
                    key="hdp"
                    target="_BLANCK"
                  >
                    <button className="button-proyecto-mobile">
                      Visitar repositorio H.D.P.!
                    </button>
                  </a>
                </div>
              </div>
              <div className="card-proyecto-mobile">
                <Carrusel
                  img1={imageCountriesApp}
                  img2={img2Countries}
                  img3={img3Countries}
                  img4={img4Countries}
                ></Carrusel>
                <div className="div-textCard-mobile">
                  <h4 className="title-card-mobile">Countries App</h4>
                  <p className="text-card-mobile">
                    Single Page Application realizada como proyecto individual
                    para el bootcamp de Henry. cuenta con buscadores, filtrados,
                    paginación y creación. Este proyecto me ayudo a poner en
                    practica los conocimientos teoricos que tenia sobre React,
                    Redux Node, Express y Sequelize, entre otros.
                  </p>
                  <a
                     href="https://github.com/MaguiHeredia/countries-app"
                    key="faltauno"
                    target="_BLANCK"
                  >
                    <button className="button-proyecto-mobile">
                      Visitar repositorio Countries App!
                    </button>
                  </a>
                </div>
              </div>
              <div className="card-proyecto-mobile">
                <img src={imageLista} className="img-card-mobile"></img>
                <div className="div-textCard-mobile">
                  <h4 className="title-card-mobile">Lista de compras!</h4>
                  <p className="text-card-mobile">
                    Pequeño proyecto realizado con TypeScript que busca
                    simplificar la forma de hacer la lista del sumpermercado,
                    permite agregar predefinidos, agregar elementos nuevos,
                    marcar, modificar y eliminar elementos. <br></br>Es mi
                    primer proyecto realizado con TypeScript
                  </p>
                  <a
                     href="https://github.com/MaguiHeredia/proyectoTypeScript"
                    key="lista"
                    target="_BLANCK"
                  >
                    <button className="button-proyecto-mobile">
                      Visitar repositorio Lista de Compras!
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="section3" className="div-proyectos-mobile">
            <div>
              <div className="contenedor-title-proyectos-mobile">
                <h3 className="text-sobreMi-mobile">
                  {" "}
                  Skills <div className="lineaa-mobile"></div>
                </h3>
              </div>
              <div className="div-skills">
              <div className="contenedor-mobile">
                <div className="sub-div-mobile">
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>Javascript</Tooltip>
                    }
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://api.iconify.design/ion:logo-javascript.svg"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>TypeScript</Tooltip>
                    }
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/5968/5968566.png"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={<Tooltip id={`tooltip-${"bottom"}`}>HTML</Tooltip>}
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://api.iconify.design/mdi:language-html5.svg"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={<Tooltip id={`tooltip-${"bottom"}`}>CSS</Tooltip>}
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://api.iconify.design/teenyicons:css3-solid.svg"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>React</Tooltip>
                    }
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://api.iconify.design/akar-icons:react-fill.svg"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>Redux</Tooltip>
                    }
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://api.iconify.design/bxl:redux.svg"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>React Native</Tooltip>
                    }
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://img.icons8.com/ios/500/react-native--v1.png"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={
                    <Tooltip id={`tooltip-${"bottom"}`}>Vue.js</Tooltip>
                  }
                >
                  <div className="loguitos-mobile">
                    <img
                      src="https://cdn.icon-icons.com/icons2/3005/PNG/512/vue_js_icon_188136.png"
                      className="img-mobile"
                    />
                  </div>
                </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>Bootstrap</Tooltip>
                    }
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://api.iconify.design/cib:bootstrap.svg"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={
                    <Tooltip id={`tooltip-${"bottom"}`}>TailwindCss</Tooltip>
                  }
                >
                  <div className="loguitos-mobile">
                    <img
                      src="https://cdn.icon-icons.com/icons2/2148/PNG/512/tailwind_icon_131947.png"
                      className="img-mobile"
                    />
                  </div>
                </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={<Tooltip id={`tooltip-${"bottom"}`}>Node</Tooltip>}
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://api.iconify.design/fa-brands:node.svg"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>Express</Tooltip>
                    }
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://api.iconify.design/simple-icons:express.svg"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={
                    <Tooltip id={`tooltip-${"bottom"}`}>GraphQL</Tooltip>
                  }
                >
                  <div className="loguitos-mobile">
                    <img
                      src="https://cdn.icon-icons.com/icons2/2248/PNG/512/graphql_icon_137529.png"
                      className="img-mobile"
                    />
                  </div>
                </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>Sequelize</Tooltip>
                    }
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://api.iconify.design/file-icons:sequelize.svg"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>PostgresSQL</Tooltip>
                    }
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://api.iconify.design/akar-icons:postgresql-fill.svg"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>
                        Java (aprendiendo)
                      </Tooltip>
                    }
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://img.icons8.com/ios-glyphs/480/java-coffee-cup-logo.png"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>SocketIO</Tooltip>
                    }
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://cdn.worldvectorlogo.com/logos/socket-io.svg"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>Auth0</Tooltip>
                    }
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/000000/external-auth0-the-solution-you-need-for-web-mobile-iot-and-internal-applications-logo-regular-tal-revivo.png"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>WordPress</Tooltip>
                    }
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/59/59137.png"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={<Tooltip id={`tooltip-${"bottom"}`}>Git</Tooltip>}
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://img.icons8.com/ios-filled/50/000000/git.png"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>Figma</Tooltip>
                    }
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://img.icons8.com/ios-glyphs/30/000000/figma.png"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>Trello</Tooltip>
                    }
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://img.icons8.com/ios-filled/50/000000/trello.png"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={<Tooltip id={`tooltip-${"bottom"}`}>Jira</Tooltip>}
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://static-00.iconduck.com/assets.00/jira-software-icon-496x512-li1mvp1s.png"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>BitBucket</Tooltip>
                    }
                  >
                    <div className="loguitos-mobile">
                      <img
                        src="https://cdn.iconscout.com/icon/free/png-256/bitbucket-3628063-3030444.png?f=webp&w=128"
                        className="img-mobile"
                      />
                    </div>
                  </OverlayTrigger>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div id="section4" className="div-contacto-mobile">
            <div className="div-contact-mobile">
              <h4 className="contacto-mobile flex">
                <img
                  src="https://api.iconify.design/carbon:email-new.svg"
                  className="imgContacto-mobile mr-2"
                />{" "}
                maguiherediavaiarini@gmail.com
              </h4>
              <h4 className="contacto-mobile flex">
                <img
                  src="https://api.iconify.design/ic:baseline-phone.svg"
                  className="imgContacto-mobile mr-2"
                />{" "}
                (+54)9 3541-201933
              </h4>
            </div>
            <div>
              <button
                onClick={(e) => abrirModal(e)}
                className="enviarEmail-mobile mt-4"
              >
                Enviar Email
              </button>
              <Contact setModal={setModal} modal={modal} />
            </div>
            <div className='flex ml-8'>
              <a
                href="https://github.com/MaguiHeredia"
                key="github"
                target="_BLANCK"
                style={{ width: "80px" }}
              >
                <img
                  src="https://img.icons8.com/glyph-neue/128/000000/github.png"
                  style={{ width: "50px" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/marianela-heredia-"
                key="linkedin"
                target="_BLANCK"
                style={{ width: "80px" }}
              >
                <img
                  src="https://img.icons8.com/fluency/96/000000/linkedin.png"
                  style={{ width: "50px" }}
                />
              </a>
              <a
                href="https://www.instagram.com/magui_heredia17/"
                key="instagram"
                target="_BLANCK"
                style={{ width: "80px" }}
              >
                <img
                  src="https://img.icons8.com/fluency/96/000000/instagram-new.png"
                  style={{ width: "50px" }}
                />
              </a>
            </div>
          </div>
        </div>
        </>
    )
}