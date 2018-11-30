import React from 'react';


const Image = (props) =>{
    return (
        
           <img src={props.image_url} className='imgbox card-img-top' onClick={props.click} alt='keyboard' />
        
    )
}

export default Image;