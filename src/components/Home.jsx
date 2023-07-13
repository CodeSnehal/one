import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    
    <div className="home" id='home'>
      <main>
        <h1>TechJiant</h1>
        <p>One-stop Solution to all Tech Problems!</p>
      </main>
    </div>

    <div className="home2">

      <img src= {vg} alt="Graphics" />

      <div>
          <p>a young entrepreneurial ventures that bring new and innovative technology-based products and services to market.
             We aim to bring technology products or services to market.
          </p>
      </div>

    </div>

    <div className="home3" id="about">
      <div>

        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi enim ad dicta facere quia reiciendis iure totam omnis. Vitae cupiditate, molestias libero quis voluptatum nobis perferendis facilis totam sed beatae!</p>

      </div>
    </div>

    <div className="home4" id="brands">


      <div>
        <h1>Brands</h1>

        <article>

          <div style={{
            animationDelay:"0.3s"
          }}> 
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>

          <div style={{
            animationDelay:"0.5s"
          }}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>

          <div style={{
            animationDelay:"0.7s"
          }}>
            <AiFillYoutube />
            <p>Youtube</p>
          </div>

          <div style={{
            animationDelay:"0.9s"
          }}>
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home
