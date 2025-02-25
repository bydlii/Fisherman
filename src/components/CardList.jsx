import React, { useContext } from 'react'
import Card from './Card'
import '../assets/styles/CardList.scss'
import DataContext from '../Context/DataContext'



const CardList = () => {
  const {state} = useContext(DataContext)
  return (
    <div className='card-list'>
      {
        state.rods.map(item=>
          (item.category === state.selectedCategory || state.selectedCategory === "Tümü") &&
          <Card key={item.id} product={item} />
        )
      }
      
    </div>
  )
}

export default CardList
