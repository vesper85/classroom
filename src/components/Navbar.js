import React from 'react'
import Drawer from '../components/Drawer'
import '../App.css'
import AddClass from './AddClass'


function Navbar(props) {
    return (
        <>
        <AddClass  toggleJoin={props.toggleJoin} />
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" onClick={props.toggleDrawerOnClick} href="/" ><i className="fas fa-bars mx-3 fs-3"></i></a>
                
                {/*<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-middle">
                    <li className="navbar-brand">
                    <a className="nav-link " aria-current="page" href="/">Google Classroom</a>
                    </li>
                    <li className="navbar-brand align-middle position-absolute top-0 end-0 ">
                    {/*<a className="nav-link" aria-current="page" href="/"><i className="fas fa-plus"></i></a>*/}
                         <div className="dropdown dropstart">
                        <button className="btn btn-white no_outline" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-plus "></i>
                        </button>
                        <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/" onClick={props.toggleJoinOnClick} >Join class</a></li>
                            <li><a className="dropdown-item" href="/">Create class</a></li>
                        </ul>
                        </div>
                    </li>
                    
                </ul>
                
                
            </div>
            </nav>
        </div>
        <Drawer toggleDrawerOnClick={props.toggleDrawerOnClick} toggleDrawer={props.toggleDrawer} />
        </>
    )
}

export default Navbar
