import {Component} from "react"
import Menu from './components/Menu'
import DrawClass from './components/DrawClass'

const configMenu = {
  configColor: {
  background:'#555', // Color de Fondo General de la botonera
  itemBackground: '#d0d0d0',// Color de Fondo de los subMenús
  itemColor:'#666', // Color del texto de cada item del menú
  itemActive:'#a8a8a8', // Color cuando hace click y se abre un submenu
  },
  idFirstNivel : 150,
  menuItems : [
  {name:'Another Action', isFolder:false, id:148, idPadre:150},
  {name:'sub menu', isFolder:true, id:2, idPadre:150},
  {name:'Action', isFolder:false, id:3, idPadre:2},
  
  {name:'Another action', isFolder:false, id:4, idPadre:2},
  {name:'sub menu', isFolder:true, id:5, idPadre:2},
  {name:'Another action', isFolder:false, id:55, idPadre:5},
  {name:'something else here', isFolder:false, id:56, idPadre:5},
  ],
  } // end

class Titulo extends Component {
  render(){
    return <h1>{this.props.title}</h1>
  }
}

function App() {
  return (
    <div className="main">
      <Menu configMenu={configMenu}/>
      <div className="container">
        <Titulo title="Welcome to the UNPSC"></Titulo>
        <DrawClass></DrawClass>
      </div>
    </div>
  )
}

export default App