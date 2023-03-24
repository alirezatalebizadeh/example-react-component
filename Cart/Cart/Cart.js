import './Cart.css'



// export default function Cart({ price, title: cartProduct, name, imgSrc = 'logo192.png', childern }) {

//     // let { price, title, name } = props
//     // if (props.price > 100) {

//     //     return (
//     //         <div className="Cart">
//     //             <h2>{props.title}</h2>
//     //             <img src='logo192.png' />
//     //             <div>
//     //                 <h1>{props.title} {props.name} </h1>
//     //                 <p>{props.price}$</p>
//     //                 <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
//     //                 <p><button>Add To Cart</button></p>
//     //             </div>
//     //         </div>
//     //     )
//     // }
//     // return null


//     //condiion

//     let title = 'Android'

//     return (
//         // price > 400 &&
//         <div className="Cart">
//             <h2>{cartProduct}</h2>
//             <img src={imgSrc} alt="this is image" />
//             <div>
//                 <h1>{cartProduct} {name} </h1>
//                 <p>{price}$</p>
//                 <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
//                 <p>{childern}</p>
//                 <p><button>Add To Cart</button></p>
//             </div>
//         </div>

//     )

// }

// default props

// Cart.defaultProps = {
//     imgSrc: 'logo192.png',
//     title: ""
// }




// class component
import React, { Component, Fragment } from 'react'

export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.keyDownHandler = this.keyDownHandler.bind(this)
        this.removeCart = this.removeCart.bind(this)

    }
    showMessage() {
        console.log('you clicked on element');
        console.log(this);
    }

    keyDownHandler(event) {
        console.log(event.target.value);
        console.log(this);

    }

    removeCart(cartId) {
        this.props.onRemove(cartId)
    }


    render() {
        return (
            <>
                <div className="Cart" >
                    <h2>{this.props.title}</h2>
                    <img src={this.props.imgSrc} alt={this.props.title} />
                    <div>
                        <h1>{this.props.title} {this.props.name}</h1>
                        <p>{this.props.price} $</p>
                        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                        <p><input type="text" onKeyDown={this.keyDownHandler} /></p>
                        {/* <p><button onClick={this.showMessage.bind(this)}>Add To Cart</button></p> */}
                        <p><button onClick={this.removeCart.bind(this, this.props.id)}>remove cart</button></p>
                    </div>
                </div>
            </>
        )
    }
}
