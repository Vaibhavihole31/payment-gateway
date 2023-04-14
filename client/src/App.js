import React from 'react'
import './App.css'

function App() {
  return (
    <div>
    <h1 className='text-center'>Buy Products</h1>

    <div class="card product-card">
      <img src="https://rukminim1.flixcart.com/image/832/832/l41n2q80/shoe/u/2/m/-original-imagfywby9n2tyyr.jpeg?q=70" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Woodland Shoes</h5>
        <p class="card-text">₹ 5000</p>
        <button type="button" class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  )
}

export default App