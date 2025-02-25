import React, { useContext } from 'react'
import '../assets/styles/Card.scss'
import rod from '../assets/img/rod.png'
import DataContext from '../Context/DataContext'
import { Link } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'

const Card = ({product}) => {
  const {DeleteProduct,state,dispatch} = useContext(DataContext);
  const {isAuthenticated} = useContext(AuthContext);
  return (
    !product.isDeleted &&(
      (product.productName.toLowerCase().startsWith(state.search.toLowerCase()))
      &&
      <div className='card-container'>
        <Link className='link' key={product.id} to={product.id}>
        <div className='card'>
            <img src={product.image?product.image:rod} alt="kapak" />
            <div className="card-body">
                <h4>{product.productName}</h4>
                <p><b>Brand:</b>{product.brand}</p>
                <p><b>Kategori:</b>{product.category}</p>
                <p><b>Malzeme:</b>{product.material}</p>
                <p><b>Boy:</b>{product.size}</p>
                <p><b>Atar:</b>{product.throws}</p>              
                <p><b>Ağırlık:</b>{product.weight}</p>
                <p><b>Açıklama:</b>{product.description.length<50?product.description:product.description.substring(0,product.description.substring(0,50).lastIndexOf(" "))+"..."}</p>
            </div>
        </div>
        </Link>
        {
          isAuthenticated &&
          <>
              <button onClick={()=>DeleteProduct(product.id)} className='del'>del</button>
              <button onClick={()=>dispatch({type:"selectedProduct",payload:product})} className='edit'>edit</button>
          </>
          
          
        }
        {
          !isAuthenticated && 
          <>
            <Link className='link' key={product.id} to={product.id}>
                <button className='incele'>incele</button>
            </Link>
          </>
        }
       
      </div>
    )
    
  )
}

export default Card
