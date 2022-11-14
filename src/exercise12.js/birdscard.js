import React from 'react'
import './birdscard.css'

const Card = () => {
    return ( 
        <>
        <div className='one'>
            <div className='card'>
                <img src='../../assets/img2.jpg' alt='card'/>
                <div className='container'>
                    <h3>Modern Sofa</h3>
                    <p>Blue</p>
                </div>
                <div><button>Add to Cart</button></div>

            </div>
        
            <div className='card'>
                <img src='../../assets/img3.jpg' alt='card'/>
                <div className='container'>
                    <h3>Dining tables</h3>
                    <p>Blue</p>
                </div>
                <div><button>Add to Cart</button></div>

            </div>

            <div className='card'>
                <img src='../../assets/img4.jpg' alt='card'/>
                <div className='container'>
                    <h3>Wooden Cot</h3>
                    <p>Natural</p>
                </div>
                <div><button>Add to Cart</button></div>
            </div>
            
        </div>
        
        </>
     );
}
 
export default Card;