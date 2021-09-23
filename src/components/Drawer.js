import React from 'react'
import '../App.css'


function Drawer(props) {

    const items = [
        {
            name:"Classes",
            link:"/",
            icon:"fa-home"
        },
        {
            name:"Calendar",
            link:"/",
            icon:"fa-calendar"
        },
        {
            name:"Settings",
            link:"/",
            icon:"fa-cog"
        }
    ]

    return (
        <div className={`col-3 c_drawer shadow-lg  fixed-top bg-white ${props.toggleDrawer === "d-none" ? "d-none" :" d-block"} `} >
            
            <a href="/" className="c_close d-flex justify-content-end text-dark" onClick={props.toggleDrawerOnClick}><i className="fas fa-times  fs-5 m-3" ></i></a>
            <ul className="navbar-nav justify-content-start flex-grow-1 min-vh-100  ">

                {items.map((ele)=>{
                    return (
                        <>
                        <li className=" highlight nav-item  lh-lg p-0 px-2 ">
                            <div className="d-flex align-items-center">
                            <i class={`fas ${ele.icon} mx-4`}></i>
                            <a className=" nav-link text-dark fs-6  w-100 "  href={ele.link}>{ele.name}</a>
                            </div>
                        </li>
                        </>
                    )
                })}
                {/*<li className="nav-item my-4">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                </li>*/}
            </ul>
        </div>
    )
}

export default Drawer
