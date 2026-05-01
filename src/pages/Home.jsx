import React from "react";
import ProductCard from "../components/Product-card";
import product1 from "../products/product1.png";
import product2 from "../products/product2.png";
import product3 from "../products/product3.png";
import '../styles/Home.css'

const products = [
    {id:1,name:"Iverson T-shirt",price: "1500",image: product1},
    {id:2,name:"Frank Ocean T-shirt",price: "1500",image: product2},
    {id:3,name:"Long Sleeves",price: "2200",image: product3}
]
export default function Home(){
    return(
        <div>
            <section className="hero">
                <h1>KAIZ</h1>
                <p>Street. Culture. Style.</p>
                <a href="/shop" className="hero-btn">Shop now</a>
            </section>
            <section className="featured">
                <h2>Products</h2>
                <div className="product-grid">
                    {
                        products.map(product => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}