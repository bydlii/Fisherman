import React from 'react'
import { useParams } from 'react-router-dom'
import '../../styles/ProductDetail.scss'
import { useContext } from 'react'
import DataContext from '../../../Context/DataContext'
import ReviewCard from '../../../components/ReviewCard'

const ProductDetail = () => {
  const params = useParams();
  const {state} = useContext(DataContext);
  console.log(params.ProductID)
  const productIndexNo = Number(params.ProductID)-1;
  if (!state?.rods || !state.rods[productIndexNo]) {
    return <p>Ürün bilgisi yükleniyor...</p>;
  }
  return (
    <div className="product-detail">
    <div className="product-header">
      <div className="product-image-container">
        <img src={state.rods[productIndexNo].image} alt="Product Image" className="product-image" />
      </div>
      <div className="product-info">
        <h1 className="product-name">{state.rods[productIndexNo].productName}</h1>
        <p className="product-brand"><strong>Marka:</strong> {state.rods[productIndexNo].brand}</p>
        <p className="product-category"><strong>Kategori:</strong> {state.rods[productIndexNo].category}</p>
        <p className="product-material"><strong>Malzeme:</strong> {state.rods[productIndexNo].material}</p>
        <p className="product-size"><strong>Boyut:</strong> {state.rods[productIndexNo].size}</p>
        <p className="product-weight"><strong>Ağırlık:</strong> {state.rods[productIndexNo].weight}</p>
        <p className="product-throws"><strong>Atış Kapasitesi:</strong> {state.rods[productIndexNo].throws}</p>
        <div className="product-actions">
      <button className="offer-button">Teklif Ver</button>
    </div>
      </div>
      
    </div>
    <div className="product-description">
      <h2>Açıklama</h2>
      <p>{state.rods[productIndexNo].description}</p>
    </div>
    <div className="product-actions">
      <button className="review-button">Değerlendirme Yap</button>
    </div>
    <ReviewCard/>
  </div>
  )
}

export default ProductDetail
