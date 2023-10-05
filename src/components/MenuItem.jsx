import {useState} from "react"

function MenuItem({id, data, configMenu}){
    const [open, setOpen] = useState(false)

    if(data.childrens){
        return (
            <div style={{}} className={open ? "sideMenu-item open" : "sideMenu-item"}>
                <div className="sideMenu-name">
                    <span>{data.name}</span> 
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sideMenu-content">
                    {data.childrens.map((child, id) => (<MenuItem id={id} data={child}/>))}
                </div>
            </div>
        )
    }else{
        return (
            <a href="#" className="sideMenu-item plain">{data.name}</a>
        )
    }
}

export default MenuItem