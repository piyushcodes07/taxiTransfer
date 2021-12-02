import React from 'react'
import Mapbox from './Mapbox'
import './logo.jpg'
import Mapp from './Mapp'
import Carousel from 'react-bootstrap/Carousel'
export default function landing() {
    return (
        <div>
{/* 
font-size: 14px;
    cursor: pointer;
    line-height: 1;
    padding: .5rem 1.5rem; */}
        
      <section class="banner_main">
         <div class="container">
            <div class="row d_flex">
               <div style={{marginTop: '10px'}} class="col-md-12">
                  <div class="text-bg">
                     <h1 style={{marginTop:' 0px'}}>Book a taxi transfer from any place in Jamaica</h1>
                     <Mapbox/>
                     <div style={{}}>
                     <svg style={{width: '7%',marginTop:'80px', height: 'auto',lineHeight: '1.5'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-x" viewBox="0 0 16 16">
  <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
  <path d="M6.146 5.146a.5.5 0 0 1 .708 0L8 6.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 7l1.147 1.146a.5.5 0 0 1-.708.708L8 7.707 6.854 8.854a.5.5 0 1 1-.708-.708L7.293 7 6.146 5.854a.5.5 0 0 1 0-.708z"/>
</svg>   
<p style={{display:'inline-block',lineHeight: '1.5', verticalAlign: 'center'}}></p>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      
      <div class="choose " style={{backgroundColor:'white',margin:'unset'}}>
         <div class="container">
            <div class="row">
               <div class="col-md-12" style={{marginTop:'40px'}}>
                  <div class="titlepage">
                     <h2>Why Choose Us</h2>
                     <span>
Why Choose Us? Choose us because we pride ourselves in giving you the best quality service at the best prices.<strong>We offer a safe, stress free and comfortable start to your Jamaica holiday</strong> . You can expect a 1st service every time. Your safety and comfort is our top priority.</span>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-12">
                  <div class="choose_box">
                     <span>01</span>
                     <span><strong style={{color:'green'}}>What We Do? </strong> We provide 1st class private and executive, door to door taxi and airport transfer services. <strong>Providing taxi service to all airports, hotels and addresses in Jamaica </strong>including: Montego Bay, Ocho Rios, Runway Bay, Negril, Falmouth & Kingston.</span>
                  </div>
               </div>
               <div class="col-md-12">
                  <div class="choose_box">
                     <span>02</span>
                     <span><strong style={{color:'green'}}>Who Are We?</strong> We are the best taxi and airport transfer service company in Jamaica. We measure our success by the quality of our service and our client’s satisfaction. We are a friendly and professional team, determined to give our clients the best taxi service experience.</span>
                  </div>
               </div>
               <div class="col-md-12">
                  <div class="choose_box">
                     <span>03</span>
                     <span><strong style={{color:'green'}}>Are taxis in Jamaica safe?</strong> Yes public taxis are safe, but can be a bit overwhelming. If you are on your holiday we recommend you book a private taxi to get to and from your hotel or other venues. A private taxi may even cost less than a shared taxis depending on the number of passengers. We are a tourism registered taxi service company in Jamaica and we are reliable, safe and comfortable.</span>
                  </div>
               </div>
            </div>
         </div>
      </div>


{/* jamaica caursel */}
{/* <div style={{width:'80%',marginLeft:'auto',marginRight:'auto'}}>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.wego.com/image/upload/v1611848131/country-pages/jm.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wanderlustcrew.com/wp-content/uploads/2017/11/Things-to-do-in-Jamaica.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.toiimg.com/thumb/76340378/Jamaica.jpg?width=1200&height=900"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div> */}
{/* jamaica caursel */}

{/* customer section */}
      <div class="cutomer">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>What our customers saying about us.</h2>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-12">
                  <div id="myCarousel" class="carousel slide cutomer_Carousel " data-ride="carousel">
                     <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                     </ol>
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <div class="container">
                              <div class="carousel-caption ">
                                 <div class="cross_img">
                                    <figure><img src="https://www.guyswhogive.org/uploads/image/testimonials/elaina_verveer-200x200.png" alt="#"/></figure>
                                 </div>
                                 <div class="our cross_layout">
                                    <div class="test_box">
                                       <h4></h4>
                                       <span>Customer</span>
                                       <p>Every trip to Jamaica is special and thats why these folks offer numerous VIP packages and add-ons for those who want to add a bit of “shazam” to their Jamaica experience. Consider diving into Blue Hole, rafting on Martha Brae River, even bobsledding down Mystic Mountain. Fuel up on delicious, stick-to-your-ribs food like jerk chicken before exploring.</p>
                                       <i><img src="images/te1.png" alt="#"/></i>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="container">
                              <div class="carousel-caption">
                                 <div class="cross_img">
                                    <figure><img style={{borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrRICYtYf1UIaDH8uy4bzQ6ofVlWsAP6PCqw&usqp=CAU" alt="#"/></figure>
                                 </div>
                                 <div class="our cross_layout">
                                    <div class="test_box">
                                       <h4></h4>
                                       <span>Customer</span>
                                       <p>Is there anything better than swaying from a hammock in a warm patch of Jamaican sun? If you're seeking laid-back vibes, you've come to the right place. But Jamaica offers plenty of outdoor adventure for those that want it, too.</p>
                                       <i><img src="images/te1.png" alt="#"/></i>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="container">
                              <div class="carousel-caption">
                                 <div class="cross_img">
                                    <figure><img src="images/cross_img.png" alt="#"/></figure>
                                 </div>
                                 <div class="our cross_layout">
                                    <div class="test_box">
                                       <h4></h4>
                                       <span>Customer</span>
                                       <p>Jamaica has a lot to see, if you need to get around safely and comfortably, we highly recommend you book a private taxi to take you to and from the different tourist attractions including: Dunn’s River Falls, Bob Marley Tour and Dolphins Cove. We cater for all types of transportation needs in Jamaica including: tourists, locals, weddings & business travelers.</p>
                                       <i><img src="images/te1.png" alt="#"/></i>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="sr-only">Previous</span>
                     </a>
                     <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                     <span class="sr-only">Next</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
 

{/* customer section END*/}

    
      
      <footer>
      <div class="footer">
            <div class="container">
               <div class="row">
                  <div class="col-md-12">
                     <div class="cont_call">
                        <h3> <strong class="multi color_chang"> Call Now</strong><br></br>
                        (+44) 7985 190947
                        </h3>
                     </div>
                  </div>
               </div>
            </div>
            <div class="copyright">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <p>© 2021 All Rights Reserved. Design by <a style={{color:'#28a745'}} href="https://github.com/piyushcodes07"> PiyushCodes07</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      
      
        </div>
    )
}

