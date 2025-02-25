import React, { useContext } from 'react'
import '../assets/styles/SearchBar.scss'
import kiyi from '../assets/img/kiyi.jpg'
import DataContext from '../Context/DataContext'

const SearchBar = () => {
  const { state, dispatch } = useContext(DataContext)
  return (
    <>
    <div className='container'>
        <ul>
        {
          state.categories.map(item=>
            
           <li onClick={(e)=>dispatch({type:"selectedCategory", payload:e.target.innerText})} key={item.id}>{item.categoryName}</li>
            
          )
        }
        
       
      </ul>
        <div className="search-bar">
      <input onChange={e=>dispatch({type:"search", payload:e.target.value})} type="search" placeholder='...'/>
      <a className='search-button'><i className="pi pi-search" ></i>Ara</a>
      </div>
    </div>
    <div className='category-image'>      
        <img src={kiyi} alt="kategori" />   
        <p>Balıkçılıktan fazlası...</p>     
    </div>
    </>
  )
}

export default SearchBar;
