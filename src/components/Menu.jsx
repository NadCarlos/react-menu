import MenuItem from "./MenuItem"
import data from "../data/data.json"

function Menu({configMenu}){
  return (
      <nav style={{background:""}} className="sideMenu">
        {data.map((data, id) => <MenuItem id={id} data={data} configMenu={configMenu}/>)}
      </nav>
  )
}

export default Menu