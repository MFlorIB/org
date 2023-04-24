import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';

function App() {
  
  const [mostrarFormulario, actualizarMostrar] = useState(false) 
  // poner true para q el formulario se vea 
  // Ternario --> condicion ? seMuestra : noSeMuestra
  // se puede de usar el Ternario o tmb (condicion && seMuestra)
  const [colaboradores, actualizarColaboradores] = useState([
{
  id: uuid(),
  equipo: "Front End",
foto: "https://github.com/genesysaluralatam.png",
nombre: "Genesys",
puesto: "Instructora ",
fav: true
},
{
  id: uuid(),
  equipo: "Data Science",
foto: "https://github.com/JeanmarieAluraLatam.png",
nombre: "Jeanmarie",
puesto: "Instructora ",
fav: false
},
{
  id: uuid(),
  equipo: "Data Science",
foto: "https://github.com/christianpva.png",
nombre: "Christian",
puesto: "Instructor ",
fav: false
}])

const [equipos, actualizarEquipos] = useState([
  {
    id: uuid(),
    titulo:"Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9"
  },
  {
    id: uuid(),
    titulo:"Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF"
  },
  {
    id: uuid(),
    titulo:"Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2"
  },
  {
    id: uuid(),
    titulo:"Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8"
  },
  {
    id: uuid(),
    titulo:"UX y Diseño",
    colorPrimario: "#DB6EBF ",
    colorSecundario: "#FAE9F5"
  },
  {
    id: uuid(),
    titulo:"Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9"
  },
  {
    id: uuid(),
    titulo:"Innovación y Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: " #FFEEDF"
  }
])
  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // registrar colaborador 
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    // los ... son un spread operator son una copia 
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // eliminar colaborador 
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !==id)
    actualizarColaboradores(nuevosColaboradores)
  }

  // actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
       return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  // crear equipo 
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  // crear fav 
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      
      <Header/>
      { 
      mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      />}


      <MiOrg cambiarMostrar={cambiarMostrar}/>
      { 
      equipos.map( (equipo) => <Equipo 
      datos={equipo} 
      key={equipo.titulo}
      colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like={like}
      />)
      }

      <Footer/>

    </div>
  );
}

export default App;

//cuando se usa map siempre hay que usar key, q es quien da la referencia
// en las arrow function se puede de poner como no las {} 
// si ponemos todo el arrow function en una sola linea no es necesario el return


// http://localhost:3000 






















