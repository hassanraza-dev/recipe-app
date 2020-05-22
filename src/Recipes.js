import React from 'react'
import './App.css'

const Recipes =({title,cal,image,ingredients})=>
{
    return(
        
        <div className='recipe'>
            <h1 className='title'>{title}</h1>
            <ul>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
    ))}
            </ul>
            
            <h4>Calories <span>{cal}</span></h4>
            
            <img src={image} alt='' />

        </div>
        
    )
}
export default Recipes;