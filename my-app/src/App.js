import React, { Component } from 'react';
import './App.css';
import img1 from './images/wp1.jpg';



let images = require("./data/images.json")
class App extends Component {
  
  render() {
    // let imgs = null;
    // imgs = (
    //   <div>
    //     {images.image_url.map((img_url) => {
    //       return <Image image_url={img_url} />
    //     })}
    //   </div> 
    // );

    
    return (
      <div className="App">
       <img src={img1}/>
      </div>
    );
  }
}

export default App;
