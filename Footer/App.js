import './App.css';
import logo from './logo.svg';
import Topheader from './Topheader/Topheader';
import Footer  from './Footer/Footer';




import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.removeCartHandler = this.removeCartHandler.bind(this)

    this.state = {
      AllCarts: [
        { id: 1, title: "Android", name: "A20", price: "425", imgSrc: "https://static1.jamaran.news/thumbnail/jNzFXbq9VQgL/kftOZWraiFm9PM1Rxi22rcAakDOsrBGdobLolpyHk2jmWcgdmlXHqbtrCqhu6f3J9_G4aHSPIPjV9yE8zecLksHvXYPO0ra-/%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84.jpg" },
        { id: 2, title: "IOS", name: "X14", price: "290", imgSrc: "https://s.mobile.ir/static/upload/articles/2813/what-2019-brought-to-the-world-of-smartphones-according-to-mobile-ir_01.jpg" },
        { id: 3, title: "Android", name: "A30", price: "720", imgSrc: "https://storage2.torob.com/backend-api/base/images/IF/iK/IFiKtMGD7gMVCF3t.jpg" },
        { id: 4, title: "IOS", name: "X10", price: "300", imgSrc: "https://dgkade.com/wp-content/uploads/2022/09/iphone-14-pro-finish-select-202209-6-1inch-deeppurple-min-300x300.jpg" },
        { id: 5, title: "Android", name: "A71", price: "410", imgSrc: "https://imobail.com/wp-content/uploads/2022/11/%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-%D8%B3%D8%A7%D9%85%D8%B3%D9%88%D9%86%DA%AF-%D9%85%D8%AF%D9%84-Galaxy-A13-SM-A137-%D8%B8%D8%B1%D9%81%DB%8C%D8%AA-64-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA-%D8%B1%D9%85-4-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA.jpg" },
      ]
      , counter: 0,
      bgColor: '',
      age: 25,

    }

  }


  // addToCounter() {
  //   if (this.state.counter > 20) {
  //     return false
  //   }

  //   this.setState(prevState => {
  //     return { counter: prevState.counter + 1 }
  //   })

  //   if (this.state.counter >= 10) {
  //     this.setState({ bgColor: "blue" })
  //   }

  // }

  // plusNumbers(event, num1, num2) {
  //   console.log(num1 + num2);
  //   console.log(event.target.innerHTML);
  // }



  // minetsToCounter() {
  //   if (this.state.counter < 1) {
  //     return false
  //   }

  //   this.setState(prevState => {
  //     return { counter: prevState.counter - 1 }
  //   })

  //   if (this.state.counter <= 5) {
  //     this.setState({ bgColor: "red" })
  //   }

  // }


  removeCartHandler(cartId) {
    let newCarts = [...this.state.AllCarts]

    let mainCartIndex = newCarts.findIndex(cart => {
      return cart.id === cartId
    })

    console.log(mainCartIndex);

    newCarts.splice(mainCartIndex, 1)

    this.setState({ AllCarts: newCarts })

  }




  render() {

    return (
      <div className="nav-container">
        {/* <button onClick={(event => { this.plusNumbers(event, 5, 10) })}> click me</button>
        <button onClick={this.addToCounter.bind(this)}> add  count</button>
        <button onClick={this.minetsToCounter.bind(this)}>mineuts count</button>
        <h3 className={`${this.state.bgColor}`}>{this.state.counter}</h3> */}
        <Footer></Footer>
      </div>
    )
  }
}


