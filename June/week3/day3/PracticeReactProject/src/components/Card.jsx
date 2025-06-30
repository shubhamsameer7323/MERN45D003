import react from 'react'
import './Card.css'
function card(props) {
  return (

    
    <div className='product'> 
    
    <div className='product-con'>
        <img src={props.product.img} alt="" className='image'
         />
         
           </div>
         <div className='product-detail'>
            <h1>{props.product.name} </h1>
            <div className="rating">
  ⭐⭐⭐⭐☆ (237 reviews)
</div>
         
            
          
          <p className="alert">
            ₹{props.product.price}
            {/* This item cannot be shipped to your selected delivery location. */}
          </p>

          <h3>Specifications:</h3>
          <ul className="specs-list">
            <li>{props.product.desp1}</li>
            <li>{props.product.desp2}</li>
            <li>{props.product.desp3}</li>
            <li>{props.product.desp4}</li>
            <li>{props.product.desp5}</li>
            <li>{props.product.desp6}</li>
            <li>{props.product.desp7}</li>
          </ul>

          <button className="store-button">Visit Samsung Store</button>
        
        

    </div>
      
    </div>
  )
}

export default card