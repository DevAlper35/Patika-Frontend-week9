import React from 'react'
import './App.css'
export default function Purchase() {
  return (
    <>
    <div class="purchase container">
        <div class="purchase-section">
            <h2>PURCHASE FROM US</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi similique atque, doloremque ab necessitatibus consectetur debitis ad omnis quis ullam, qui, sunt a dignissimos numquam dolor nulla aperiam consequuntur quo.</p>
        </div>
        <div class="purchase-container ">
            <div class="purchase-card">
                <img src="./Resimler/purchase1.jpg" alt="Purchase 1"/>
                <div class="purchase-layer">
                    <h4>Kettlebell / 5kg</h4>
                    <p> <span>89.99$</span> / 59.99$ </p>
                    <div class="price">
                        <a href="#"><i class="fa-solid fa-cart-shopping"></i> Add To Cart</a>
                    </div>
                </div>
            </div>
            <div class="purchase-card">
                <img src="./Resimler/purchase2.jpg" alt="Purchase 2"/>
                <div class="purchase-layer">
                    <h4>Treadmill</h4>
                    <p> <span>899.99$</span> / 599.99$</p>
                    <div class="price">
                        <a href="#"><i class="fa-solid fa-cart-shopping"></i> Add To Cart</a>
                    </div>
                </div>
            </div>
            <div class="purchase-card">
                <img src="./Resimler/purchase3.jpg" alt="Purchase 3"/>
                <div class="purchase-layer">
                    <h4>Adjustable Dumbbell</h4>
                    <p> <span>89.99$</span> / 59.99$</p>
                    <div class="price">
                        <a href="#"><i class="fa-solid fa-cart-shopping"></i> Add To Cart</a>
                    </div>
                </div>
            </div>
            <div class="purchase-card">
                <img src="./Resimler/purchase4.jpg" alt="Purchase 4"/>
                <div class="purchase-layer">
                    <h4>Kettlebell / 3kg</h4>
                    <p> <span>89.99$</span> / 59.99$</p>
                    <div class="price">
                        <a href="#"><i class="fa-solid fa-cart-shopping"></i> Add To Cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
