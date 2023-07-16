import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import emailjs from "emailjs-com";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import "tailwindcss/tailwind.css";

export default function Contact({ setModal, modal }) {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const [errors, setErrors] = useState({
    nombre: "Debe ingresar su nombre",
    email: "",
    mensaje: "",
  });
  const [input, setInput] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const validador = (inputs) => {
    let validations = {};
    const nameExpresion = /[0-9/'0-9'/,*+._&=():;%$#!|-]/gi;
    const emailExpresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputs.nombre) {
      validations.nombre = "Debe ingresar su nombre";
    } else if (nameExpresion.test(inputs.nombre)) {
      validations.nombre = "Ingrese solo letras";
    } else if (!inputs.email) {
      validations.email = "Debe ingresar su email";
    } else if (!emailExpresion.test(inputs.email)) {
      validations.email = "Ingrese un email válido";
    } else if (!inputs.mensaje) {
      validations.mensaje = "Debe ingresar un mensaje";
    }
    return validations;
  };

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    const errores = validador({ ...input, [e.target.name]: e.target.value });
    setErrors(errores);
  };

  const enviarEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mh8ztbl",
        "template_x1mo77o",
        e.target,
        "bDQz4dWQq24jlUuix"
      )
      .then((res) => {
        console.log(res);
      });
    // swal('', "¡Enviado exitosamente!", 'success')
    setInput({
      nombre: "",
      email: "",
      mensaje: "",
    });
    setModal(false);
  };
  const handleClose = () => {
    console.log("entro");
    setModal(false);
  };

  return (
    <Modal
      show={modal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {" "}
      {matches ? (
        <div>
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              <i className="modalTitle">Enviando Email a Marianela</i>
            </Modal.Title>
            <button
              type="button"
              onClick={handleClose}
              class="rounded-md bg-[#d88585] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#c86f6f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c86f6f]"
            >
              X
            </button>
          </Modal.Header>
          <form onSubmit={enviarEmail} autoComplete="off">
            <Modal.Body>
              <div className="form-row">
                <div className="contenedorInpputss h-[80px]">
                  {/* <input type="text" onChange={e => handleOnChange(e)} className="formEmail" id="nombre" name="nombre" value={input.nombre} /> */}
                  <div className="relative w-4/5">
                    <label
                      htmlFor="name"
                      className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={input.nombre}
                      onChange={(e) => handleOnChange(e)}
                    />
                  </div>
                  {errors.nombre ? (
                    <p
                      style={{
                        color: "red",
                        marginTop: "5px",
                        marginBottom: "0",
                      }}
                    >
                      {errors.nombre}
                    </p>
                  ) : null}
                </div>
                <div className="contenedorInpputss h-[80px]">
                  <div className="relative w-4/5">
                    <label
                      htmlFor="name"
                      className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={input.email}
                      onChange={(e) => handleOnChange(e)}
                    />
                  </div>
                  {errors.email ? (
                    <p
                      style={{
                        color: "red",
                        marginTop: "5px",
                        marginBottom: "0",
                      }}
                    >
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="contenedorInpputss h-[60px]">
                <div className="relative w-4/5">
                    <label
                      htmlFor="name"
                      className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                      Mensaje
                    </label>
                    <input
                      type="text"
                      name="mensaje"
                      id="mensaje"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={input.mensaje}
                      onChange={(e) => handleOnChange(e)}
                    />
                  </div>
                {errors.mensaje ? (
                  <p
                    style={{
                      color: "red",
                      marginTop: "5px",
                      marginBottom: "0",
                    }}
                  >
                    {errors.mensaje}
                  </p>
                ) : null}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="ContenedorBoton">
                {!errors.nombre && !errors.email && !errors.mensaje ? (
                  <button
                    variant="primary"
                    type="submit"
                    className="botoncito"
                    style={{
                      backgroundColor: "rgba(201, 105, 105, 1)",
                      border: "none",
                      width: "150px",
                      margin: "0 auto",
                      marginTop: "20px",
                    }}
                  >
                    Enviar
                  </button>
                ) : (
                  <button
                    variant="primary"
                    type="submit"
                    disabled
                    style={{
                      backgroundColor: "rgba(175, 175, 175)",
                      border: "none",
                      width: "150px",
                      margin: "0 auto",
                      marginTop: "20px",
                      color: "white",
                      borderRadius: "5px",
                      padding: " 5px 15px",
                    }}
                  >
                    Enviar
                  </button>
                )}
              </div>
            </Modal.Footer>
          </form>
        </div>
      ) : (
        <div>
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              <i className="modalTitle">Enviando Email a Marianela</i>
            </Modal.Title>
            <button
              type="button"
              onClick={handleClose}
              class="rounded-md bg-[#d88585] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#c86f6f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c86f6f]"
            >
              X
            </button>
          </Modal.Header>
          <form onSubmit={enviarEmail} autoComplete="off">
          <Modal.Body>
              <div className="form-row">
                <div className="contenedorInpputss h-[80px]">
                  {/* <input type="text" onChange={e => handleOnChange(e)} className="formEmail" id="nombre" name="nombre" value={input.nombre} /> */}
                  <div className="relative w-4/5">
                    <label
                      htmlFor="name"
                      className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={input.nombre}
                      onChange={(e) => handleOnChange(e)}
                    />
                  </div>
                  {errors.nombre ? (
                    <p
                      style={{
                        color: "red",
                        marginTop: "5px",
                        marginBottom: "0",
                      }}
                    >
                      {errors.nombre}
                    </p>
                  ) : null}
                </div>
                <div className="contenedorInpputss h-[80px]">
                  <div className="relative w-4/5">
                    <label
                      htmlFor="name"
                      className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={input.email}
                      onChange={(e) => handleOnChange(e)}
                    />
                  </div>
                  {errors.email ? (
                    <p
                      style={{
                        color: "red",
                        marginTop: "5px",
                        marginBottom: "0",
                      }}
                    >
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="contenedorInpputss h-[60px]">
                <div className="relative w-4/5">
                    <label
                      htmlFor="name"
                      className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                      Mensaje
                    </label>
                    <input
                      type="text"
                      name="mensaje"
                      id="mensaje"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={input.mensaje}
                      onChange={(e) => handleOnChange(e)}
                    />
                  </div>
                {errors.mensaje ? (
                  <p
                    style={{
                      color: "red",
                      marginTop: "5px",
                      marginBottom: "0",
                    }}
                  >
                    {errors.mensaje}
                  </p>
                ) : null}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="ContenedorBoton">
                {!errors.nombre && !errors.email && !errors.mensaje ? (
                  <button
                    variant="primary"
                    type="submit"
                    className="botoncito"
                    style={{
                      border: "none",
                      width: "150px",
                      margin: "0 auto",
                      marginTop: "20px",
                    }}
                  >
                    Enviar
                  </button>
                ) : (
                  <button
                    variant="primary"
                    type="submit"
                    disabled
                    style={{
                      backgroundColor: "rgba(175, 175, 175)",
                      border: "none",
                      width: "150px",
                      margin: "0 auto",
                      marginTop: "20px",
                      color: "white",
                      borderRadius: "5px",
                      padding: " 5px 15px",
                    }}
                  >
                    Enviar
                  </button>
                )}
              </div>
            </Modal.Footer>
          </form>
        </div>
      )}
    </Modal>
  );
}
