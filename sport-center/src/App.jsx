import React from 'react'
import './App.css'
import Header from "./Header.jsx"
import HeaderTop from "./HeaderTop.jsx"
import Classes from "./Classes.jsx"
import Trainer from "./Trainer.jsx"
import Purchase from "./Purchase.jsx"
import Review from "./Review.jsx"
import Contact from "./Contact.jsx"
function App() {
  let homeDOM = document.querySelector("#home");
  window.addEventListener("scroll", function(){
    if(window.scrollY > 100){
        // 100pxden sonra scrolling cssi ekler.
        homeDOM.classList.add("scrolling");
    }
    else{
      // 100pxden aşağıya geçince scrolling cssi siler.
        homeDOM.classList.remove("scrolling")
    }
  });

  return (
    <>
      <Header/>
      <HeaderTop/>
      <Classes/>
      <Trainer/>
      <Purchase/>
      <Review/>
      <Contact/>
    </>
  )
}

export default App