import React from 'react'
import './App.css'
export default function Header() {
  return (
    <header id="home">
        <div class="container">
          <nav class="navbar">
            <a href="#"><img src="Resimler/logo.png" alt="" /></a>
              <div class="menu">
                  <ul class="menu-nav">
                      <li><a href="#">Home</a></li>
                      <li><a href="#classes">Classes</a></li>
                      <li><a href="#trainer">Trainer</a></li>
                      <li><a href="#review">Review</a></li>
                      <li><a href="#contact">Contact</a></li>
                      <li><a href="#">JOIN US</a></li>
                  </ul>
              </div>
              <div class="drop-down-menu">
                  <i class="fa-solid fa-bars"></i>
              </div>
          </nav>
        </div>
    </header>
  )
}
