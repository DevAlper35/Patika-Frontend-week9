import React from 'react'
import './App.css'
function Classes() {
    

  return (
    <>
    <section class="container" id="classes" >
        <div class="classesback"></div>
        <div>
            <div class="classes-section">
                <h2>OUR CLASSES</h2>
            </div>
            <div>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ducimus veritatis quidem atque debitis cum!</h3>
            </div>
        </div>
        <div class="classes-btns">
            <a id="yoga" class="classes-btn" href>Yoga</a>
            <a id="group"  class="classes-btn" href>Group</a>
            <a id="solo" class="classes-btn" href>Solo</a>
            <a id="stretching" class="classes-btn" href>Stretching</a>
        </div>
        <div class="classes-menu"> </div>
        <div class="bottom-classes">
            <div class="calculator">
                <h3>BMI Calculator</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus aliquid unde amet possimus tempore reprehenderit veritatis deleniti voluptatibus neque aliquam doloremque assumenda totam, pariatur esse doloribus animi facere error quo.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laudantium et nemo deleniti quaerat? Perferendis neque sint ad. Quo, accusamus. Aspernatur in error odio nobis quae alias sequi quas inventore!</p>
                <div class="calculator-input">
                    <div class="txt">
                        <input id="heightInput" type="number" placeholder="Your Height"/>
                         cm
                    </div>
                    <div class="txt">
                        <input id="weightInput" type="number" placeholder="Your Weight"/>
                         kg
                    </div>
                </div>
            </div>
            
            <div class="calculator-img">
                <h3 id="your-bmi">Your BMI</h3>
                <img src="Resimler/bmi-index.jpg" alt=""/>
                <img class="arrow" src="Resimler/orange-color-triangle.png" alt="arrow"/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Classes