import React from 'react';


const Image = (props) =>{
    return (
        <div className='imgbox'>
           <img src={props.image_url} onClick={props.click} />
        </div>
    )
}

export default Image;