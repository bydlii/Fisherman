import React from 'react'
import '../assets/styles/ReviewCard.scss'

const ReviewCard = () => {
  return (
    <div className="product-reviews">
  <h2>Değerlendirmeler</h2>
  <div className="review">
    <img src="https://via.placeholder.com/50" alt="User Avatar" className="review-avatar" />
    <div className="review-content">
      <h3>Ahmet Yıldız</h3>
      <div className="review-rating">⭐⭐⭐⭐⭐</div>
      <p>Ürün gerçekten harika, Shimano kalitesi kendini belli ediyor. Tavsiye ederim!</p>
    </div>
  </div>
  <div className="review">
    <img src="https://via.placeholder.com/50" alt="User Avatar" className="review-avatar" />
    <div className="review-content">
      <h3>Elif Demir</h3>
      <div className="review-rating">⭐⭐⭐⭐</div>
      <p>Genel olarak memnunum ama paketleme daha iyi olabilirdi.</p>
    </div>
  </div>
  <div className="review">
    <img src="https://via.placeholder.com/50" alt="User Avatar" className="review-avatar" />
    <div className="review-content">
      <h3>Can Özkan</h3>
      <div className="review-rating">⭐⭐⭐⭐⭐</div>
      <p>Hem uygun fiyatlı hem kaliteli. Çok hızlı kargo, teşekkürler!</p>
    </div>
  </div>
</div>
  )
}

export default ReviewCard
