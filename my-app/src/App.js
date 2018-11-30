import React, { Component } from 'react';
import './App.css';
import Image from './image/image'
import Card from './itemCard/card'
import Nav from './navbar/navbar'


const images = require("./data/images.json")
const cards = require("./data/cards.json")

//console.log(data);
class App extends Component {
  state = {
    ims : images.image_url,
    cards : cards.cards
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
          return  <Card key={index} title={this.state.cards[index].title} desc={this.state.cards[index].desc} >
                    <Image
                    className="card-img-top"
                    image_url={require(`./images/${img_url}`) } 
                    
                    click={() => this.deletePersonHandler(index)}/>
                    </Card>
        })}
      </div> 
    );

    
    return (
      <div className="App">
      <div className="container-fluid">
      <Nav/>
      
     {imgs}
     </div>
      </div>
    );
  }
}

export default App;
