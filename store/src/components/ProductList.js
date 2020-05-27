import React, { Component } from 'react';
import Product from "./Product";
import MetaTags from 'react-meta-tags';
import Title from './Title';
import {ProductConsumer} from './context';
class ProductList extends Component {
    render() {
        
        return (
            <React.Fragment>
                <MetaTags>
                    <title>Danh sách sản phẩm</title>
                    <meta name="description" content="Some description." />
                    <meta property="og:title" content="MyApp" />
                    <meta property="og:image" content="path/to/image.jpg" />
                </MetaTags>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductConsumer>
                            
                                {value=>
                                    value.products.map(item=>
                                        (<Product
                                            key={item.id}
                                            product={item}
                                        />)
                                    )
                                }
                                
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;