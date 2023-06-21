import React, { useDebugValue } from "react";

import { Helmet } from "react-helmet";

import {
  Alianzas,
  ContactoWhats,
  DisclaimerDonar,
  Footer,
  MiniHeader,
} from "./Inicio";
import { Navbar } from "./Inicio";
import { MiniFooter } from "./Inicio";

import Button from "../UI/Buttons/Button";

import "../styles/Entrenamientos/Capacitacion.css";

export function EntrenamientosHeader() {
  return (
    <div className="capacitacion container-fluid">
      <div className="capacitacion-container">
        <h1 className="entrenamientos__header">CAPACITACIÓN</h1>
        <p className="entrenamientos__paragraph">
          Fielmente comprometidos con la predicación de evangelio de Jesucristo,
          entrenando a expositores bíblicos en el mundo hispano parlante.
        </p>
        <Button specificClass="btn__capacitacion-main-banner">
          CONTÁCTANOS
        </Button>
      </div>
    </div>
  );
}

// ! quitar margenes en media querie 700px <----------

export function EntrenamientosEntrenamientosOnline() {
  return (
    <div className="container-fluid-xl">
      <div className="entrenamientos__entrenamientos-online row">
        <div className="col-12 col-md-6 no padding">
          <img
            className="entrenamientos-entrenamiento__card-image"
            src="/images/entrenamientos/estudiante-sonriente-tiro-medio-estudiando-laptop.jpg"
            alt="Men on laptop"
          />
        </div>
        <div className="col-12 col-md-6 nopadding">
          <div className="entrenamientos-entrenamiento__card-text">
            <h1 className="entrenamiento__card-title">Entrenamientos</h1>
            <div className="entrenamiento__modalidad">
              Modalidad:{" "}
              <span className="entrenamiento__card-text-bold"> En Línea</span>
              <span className="online-dot">.</span>
            </div>
            <p className="entrenamiento__card-text-bold">
              Debido a las limitaciones de movilidad y el distanciamiento social
              que hemos estado experimentando en el mundo en los últimos meses,
              Prédica Fiel ha diseñado un entrenamiento online para predicadores
              con el objetivo de desarrollar las habilidades de los mismos
              semana tras semana.
            </p>
            <p className="entrenamiento__card-text-normal">
              Hemos escogido el género literario de Evangelios para este primer
              tiempo, especificamente el evangelio de Marcos. Los participantes
              estarán recibiendo instrucciones en el manejo adecuado de las
              Escrituras, así como en la exposición de estas. Trabajarán pasajes
              específicos del libro de Marcos, así como también harán una
              exposición de veinte minutos, para las cuáles recibirán
              retroalimentación.
            </p>
            <div className="entrenamientos-entrenamiento__button-container-box">
              <Button specificClass="btn__entrenamientos-entrenamientos-online--rojo">
                ACCESO A RECURSOS
              </Button>
              <Button specificClass="btn__entrenamientos-entrenamientos-online--gris">
                APLICAR AHORA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlanHabana() {
  return (
    <div className="plan-habana">
      <div className="plan-habana-banner container-fluid">
        <div className="row">
          <div className="plan-habana-banner__text col-lg-6">
            <h1 className="plan-habana-banner__header">PLAN HABANA</h1>
            <p className="modalidad">
              Modalidad:{" "}
              <span className="plan-habana-banner--bold">Presencial,</span>{" "}
              Cuba.
            </p>
            <p className="plan-habana-banner--bold">
              Plan Habana nace de la pasión de transformar <br></br>
              La Habana con el Evangelio de Jesucristo
            </p>
            <p className="plan-habana-banner--small">
              pero como dicen Las Escrituras: "¿Cómo, pues, invocarán a aquel en
              quien no han creído? ¿Y cómo creerán en aquel de quien no han
              oído? ¿Y cómo oirán sin haber quien les predique? (Romanos 10:14).{" "}
              <span className="plan-habana-banner--bold">
                A través de Plan Habana, capacitamos a pastores, maestros y
                líderes en cómo predicar el evangelio fielmente.
              </span>
            </p>
          </div>
          <div className="plan-habana-banner__imagen-container  col-lg-6 p-0">
            <img
              className="plan-habana-banner__imagen img-responsive"
              src="/images/entrenamientos/entrenamientoplanhabana.jpg"
              alt="Grupo Estudiando"
            />
          </div>
        </div>
      </div>
      <div className="plan-habana-exposicion">
        <div className="plan-habana-exposicion__header">
          <div className="plan-habana-exposicion__header-text">
            <span className="plan-habana-exposicion--small">Plan Habana</span>
            <h1 className="plan-habana-exposicion--big">
              Entrenamiento en <br /> Exposición Bíblica
            </h1>
          </div>
          <div>
            <img
              className="plan-habana-exposicion__header-logo"
              src="/images/entrenamientos/logo-largo3.png"
              alt="logo-blanco"
            />
          </div>
        </div>
        <div className="plan-habana-exposicion__text">
          <p className="exposicion-p1">
            El Espíritu de Dios usa la Palabra de Dios para cumplir los
            propósitos de Dios (Isaías 55:10-11; Hebreos 4:12). Si el pueblo de
            Dios y el mundo que le rodea no es expuesto fielmente a la Palabra
            de Dios, entonces no existe cambio real, y eso ocurre a través de la
            exposición bíblica. Este entrenamiento semana tras semana irá
            capacitándote en esta sagrada y grandiosa tarea de ser un fiel
            expositor bíblico. El objetivo específico de este curso es
            desarrollar tus habilidades en el manejo de la Palabra de Dios. El
            curso funciona los sábados de 9:00 am a 1:00 pm, durante alrededor
            de 20 semanas al año, de octubre a abril.
          </p>
          <p className="exposicion-p2">
            <span className="plan-habana-exposicion--bold">
              Las características del curso son las siguientes:
            </span>{" "}
            <br />
            Instrucciones prácticas: a lo largo del año recibirás varias
            instrucciones que te darán estrategias y herramientas en cómo
            manejar el texto bíblico y estas serán específicas dentro del género
            literario que estemos abordando durante ese año.
          </p>
          <p className="exposicion-p3">
            Grupos Pequeños: durante este tiempo semanal, tendrás la oportunidad
            de presentar tu trabajo hecho de antemano en un pasae asianado del
            libro que estemos estudiando. En este tiempo, podrás interactuar con
            otros, dar y recibir retroalimentación, este ejercicio es uno de los
            que más ayuda en el desarrollo de habilidades en la predicación y la
            enseñanza.
          </p>
          <p className="exposicion-p4">
            Debido a la incertidumbre que la Covid-19 ha traído sobre nuestro
            país sobre todo en la ciudad de La Habana, entendemos sabio limitar
            el entrenamiento de Plan Habana a siete semanas durante los meses de
            enero y febrero de 2021. Este año, enfocaremos toda nuestra atención
            en cómo construir el sermón. Estaremos profundizando en todas
            aquellas instrucciones, que una vez que entendemos el pasaje
            correctamente, nos ayudan a trasmitirlo al pueblo de Dios de una
            forma efectiva.
          </p>
          <p className="exposicion-p5">
            Si quiere matricular para este año por favor siga el enlace a
            continuación y estaremos en contacto con usted en breve,
            proporcionándole más detalles.
          </p>
        </div>
        <Button specificClass="btn-plan-habana-exposicion">
          INSCRÍBETE AHORA
        </Button>
      </div>
    </div>
  );
}

export function Internado() {
  return (
    <div>
      <div className="internado">
        <div className="internado__header">
          <h1 className="internado__header-text">Programa de Internado</h1>
          <img
            className="internado__header-logo"
            src="/images/entrenamientos/logo-corto3.png"
            alt="Logo corto Predica Fiel"
          />
        </div>
        <div className="internado__text">
          <p className="internado__paragraph">
            El objetivo del programa de internado, patrocinado por Prédica Fiel
            en alianza con Ministerios Nueva Vida, es proveer un entrenamiento
            práctico a jóvenes que tengan inquietudes en cuanto al ministerio a
            tiempo completo. Durante el tiempo de internado reciben un
            entrenamiento intenso en el manejo adecuado de las Escrituras, algo
            a lo cuál deberán entregarse por el resto de sus vidas si Dios les
            ha llamado al ministerio. También serán expuestos a diferentes
            facetas del ministerio, podrán experimentar los retos que el
            ministerio del evangelio presupone para aquellos que son llamados
            para esta tarea.
          </p>
          <p className="internado__paragraph">
            Aquellos interesados, deben disponer de tiempo completo para este
            programa. Las posibilidades de entrar son limitadas debido a los
            recursos necesarios. No obstante, si usted es alguien que tiene
            inquietudes en cuanto al ministerio, le animamos a comenzar el
            proceso de aplicación mediante el enlace provisto a continuación.
          </p>
        </div>
        <div className="internado__footer">
          <Button specificClass="btn__internado">APLICAR AHORA</Button>
          <div className="internado__footer-text">
            Plan Habana, Modalidad Presencial, Cuba
          </div>
        </div>
        <div className="internado__images-container row">
          <div className="col-6">
            <img
              className="internado__image"
              src="/images/entrenamientos/banner10.jpg"
              alt=""
            />
          </div>
          <div className="col-6">
            <img
              className="internado__image"
              src="/images/entrenamientos/Foto.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="talleres row">
        <div className="talleres__text col-12 col-lg-8 nopadding">
          <div className="talleres__header">TALLERES</div>
          <div className="talleres__paragraph">
            El propósito de los talleres es ayudar a los participantes a crecer
            en la confianza y habilidad de manejar con precisión la Palabra de
            Dios. Queremos que cada persona salga del taller convencido de que
            la Palabra de Dios es poderosa, y con entusiasmo de enseñarla a sus
            congregaciones.
          </div>
          <Button specificClass="btn__talleres">MÁS INFORMACIÓN</Button>
        </div>

        <div className="col-12 col-lg-4 nopadding">
          <img
            className="talleres__image"
            src="/images/entrenamientos/ponente-escenario-frente-sala-vista-posterior-audiencia-accion-puesta.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

function Entrenamientos(props) {
  return (
    <div>
      <Helmet>
        <title>Fiel | Entrenamientos</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <EntrenamientosHeader />
      <EntrenamientosEntrenamientosOnline />
      <PlanHabana />
      <Internado />
      <Alianzas />
      <ContactoWhats />
      <Footer />
      <DisclaimerDonar />
      <MiniFooter />
    </div>
  );
}

export default Entrenamientos;
