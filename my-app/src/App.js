import React, { Component } from 'react';
import './App.css';
import Image from './image/image'


const images = require("./data/images.json")
class App extends Component {
  state = {
    ims : images.image_url
  }
  deletePersonHandler = (imgIndex) =>{
    const imgbox = [...this.state.ims];
    console.log(imgbox)
    imgbox.splice(imgIndex,1);
    this.setState({
      ims: imgbox
    });
    }
  render() {
    let imgs = null;
    imgs = (
      <div>
        {this.state.ims.map((img_url,index) => {
          return <Image 
                    image_url={require(`./images/${img_url}`) } 
                    key={index} 
                    click={() => this.deletePersonHandler(index)}/>
        })}
      </div> 
    );

    
    return (
      <div className="App">
      {console.log(this.state.ims)}
       {imgs}
      </div>
    );
  }
}

export default App;
