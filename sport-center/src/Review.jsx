import React from 'react'
import './App.css'
export default function Review() {
  return (
    <>
    <section>
        <div class="review" id="review">

            <div class="review-section container">
                <h2>REVIEW CLIENT</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam iure repellendus quisquam eveniet
                    ducimus
                    voluptate eum est perferendis nobis! Suscipit!
                </p>
            </div>

            <div class="client">
                <div class="client-main">
                    <div class="first-client">
                        <img src="./Resimler/client1.jpg" alt="Client 1"/>
                        <div class="client-info">
                            <h4>Diet Expert</h4>
                            <p>CFO</p>
                        </div>
                    </div>
                    <div class="comment">
                        <div class="trianger"></div>
                        <div class="trianger-mirror"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam voluptatibus magnam suscipit dicta at, tenetur ipsam nulla perferendis eligendi officiis libero. Iure odio dolorum, optio explicabo omnis veniam nulla?</p>
                    </div>
                </div>
                <div class="client-main">
                    <div class="last-client">
                        <img src="./Resimler/client2.jpg" alt="Client 2"/>
                        <div class="client-info">
                            <h4>Cardio Trainer</h4>
                            <p>CEO</p>
                        </div>
                    </div>
                    <div class="comment">
                        <div class="trianger"></div>
                        <div class="trianger-mirror"></div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est odit at saepe nemo sed iste quod tenetur quasi, fuga, praesentium nesciunt, architecto rem unde omnis quo possimus animi commodi iusto.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}
