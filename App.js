import React, { Component } from 'react'
import Search from './component/Search'
import Card from './component/Card'
import Addcard from './component/Addcard'
import Rating from './component/Rating'

import './App.css'


export default class App extends Component {
 constructor(){
  super()
 this.state = {
  cards:[
    {Image:"http://fr.web.img3.acsta.net/pictures/19/04/19/09/29/4029006.jpg",
    Title:"Aladin",
    Released:"Octobre 2019",
    Runtime:"129 min",
    Rating:4
  },
    {Image:" https://e.snmc.io/i/300/w/cca26841985a30f02142aaee0db10d76/6772748",
    Title:"Bad Ginus",
    Released:"Mai 2017",
    Runtime:"139 min",
    Rating:3
},
{Image:" https://specials-images.forbesimg.com/imageserve/5d6a0922fead28000892b2b7/960x0.jpg?fit=scale",
    Title:"Joker",
    Released:"Novembre 2019",
    Runtime:"125 min",
    Rating:5
}
  ],
  rating:0,
  search:''

 }
 }

 addcard = newCard => {
  this.setState(
    {
      cards: this.state.cards.concat(newCard) 
     },
  )
  }

  handleChangeRating=rate=>{
    this.setState({
      rating:rate
    })
  }
 
searchmovie =search=>{
  this.setState({
    search:search
  })
}

  render() {
    return (
      <div>
        <div className="rat-sear" >
          <div>
        <Search searchmovie={this.searchmovie} />
        </div>
        <div className="rating">
        <Rating number={this.state.rating} handleChangeRating={this.handleChangeRating}     />
        </div>
        </div>
              
        <Card cards={this.state.cards}
        rate={this.state.rating}
        search={this.state.search}
        />
        <Addcard newCard={this.addcard} />  
        
      </div>
    )
  }
}
