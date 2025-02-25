import React, { useContext } from 'react'
import '../assets/styles/Form.scss'
import DataContext from '../Context/DataContext'

const Form = () => {
  const { state, dispatch, handleSubmit } = useContext(DataContext);
  const { selectedProduct, productName, brand, category, material, size, weight, image, throws, description } = state;
  return (
    <div className='container-form'>
    <form onSubmit={handleSubmit}>
      <h3>{selectedProduct?"Ürün Güncelle":"Ürün Ekle"}</h3>      
        <input value={productName} onChange={e=>dispatch({type:"productName", payload:e.target.value})} type="text" placeholder='Ürün Adı'/>
        <input value={brand} onChange={e=>dispatch({type:"brand", payload:e.target.value})} type="text" placeholder='Marka'/>
        <select value={category} onChange={e=>dispatch({type:"category", payload:e.target.value})}>
          <option>Kategori Seçiniz</option>
          <option>Kıyı balıkçılığı</option>
          <option>Derin Deniz Balıkçılığı</option>
          <option>Gölet Balıkçılığı</option>
        </select>
        <input value={material} onChange={e=>dispatch({type:"material", payload:e.target.value})} type="text" placeholder='Malzeme'/>
        <input value={size} onChange={e=>dispatch({type:"size", payload:e.target.value})} type="text" placeholder='Boy'/>
        <input value={weight} onChange={e=>dispatch({type:"weight", payload:e.target.value})} type="text" placeholder='Ağırlık'/>
        <input value={image} onChange={e=>dispatch({type:"image", payload:e.target.value})} type="url" placeholder='resim(url)'/>
        <input value={throws} onChange={e=>dispatch({type:"throws", payload:e.target.value})} type="text" placeholder='Atar'/>
        <textarea value={description} onChange={e=>dispatch({type:"description", payload:e.target.value})} placeholder='Açıklama'></textarea>
        <input disabled={productName==="" || brand==="" || category==="Kategori Seçiniz" || material==="" || size==="" || weight==="" || throws==="" || description===""} type="submit" value={selectedProduct?"Güncelle":"Ekle"}/>
      </form>
     
      
    
    </div>
   
  )
}

export default Form
