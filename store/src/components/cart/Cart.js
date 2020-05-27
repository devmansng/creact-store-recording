import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
class Cart extends Component {
    render() {
        return (
            <section>
                <MetaTags>
                    <title>Giỏ hàng</title>
                    <meta name="description" content="Some description." />
                    <meta property="og:title" content="MyApp" />
                    <meta property="og:image" content="path/to/image.jpg" />
                </MetaTags>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length>0){
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart"/>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTotals value={value}/>
                                </React.Fragment>
                            )
                        }else{
                            return (<EmptyCart/>)
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart;