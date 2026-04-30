import {react} from 'react'
import './styles/Product-card.css' 
import { Link } from 'react-router-dom'

export default function ProductCard({id, name, price, image}) {
return(
    <Link to='/shop/${id}' className="product-card">
        <div className='product-img'>
            <img src={image} alt={name} />
        </div>
        <div className='product-info'>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    </Link>
)
}