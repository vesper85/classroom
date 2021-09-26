import React, { useState } from 'react'
//import AddClass from '../components/AddClass';
import Navbar from '../components/Navbar'



function Home() {

    const [toggleDrawer, settoggleDrawer] = useState('d-none')
    const [toggleJoin, settoggleJoin] = useState(true)

    const toggleDrawerOnClick = (e)=>{
        e.preventDefault();
        toggleDrawer === "d-none" ? settoggleDrawer('d-block') : settoggleDrawer('d-none')
    }
    const toggleJoinOnClick = (e)=>{
        e.preventDefault();
        console.log('addbutton clicked');
        toggleJoin === false ? settoggleJoin(true) :settoggleJoin(false)
    }
    return (
        <div>
            {/*<AddClass/>*/}
            <Navbar toggleDrawerOnClick={toggleDrawerOnClick} toggleDrawer={toggleDrawer} toggleJoin={toggleJoin} toggleJoinOnClick={toggleJoinOnClick} />
        </div>
    )
}

export default Home
