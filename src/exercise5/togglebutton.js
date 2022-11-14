import React, { useState } from 'react';
import './togglebutton.css'

function Toggle() {
    const [show,setShow]=useState(true)
    return ( 
        <div className="toggles">
            {
                show?<><h4>Furniture !</h4>
                <h5>Types: Sofas, Sectionals, Sleeper Sofas, Accent Chairs, Loveseats, Chaises.</h5></>:
                <></>
            }
            {/* <button className='tgbut' onClick={()=>setShow(true)} >Birds</button>
            <button className='tgbut' onClick={()=>setShow(false)} >Dog</button> */}
            <button onClick={()=>setShow(!show)} >Furniture / Dinning</button> 
        </div>
     );
}

export default Toggle;
