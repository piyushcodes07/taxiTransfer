import React from 'react'
import {useState} from 'react'
import './taxi.css'
import './mobile.css'
import {useSelector,useDispatch} from 'react-redux'
import {selectdistanceKm,setPrice} from './features/counter/counterSlice'
import { Link } from 'react-router-dom'
export default function Standard() {

    const dispatch = useDispatch()

	const dist = useSelector(selectdistanceKm)
	console.log(dist)
	
	var pickUpCost =null;
	var returnCost = null;

	function between(x, min, max) {
		return x >= min && x <= max;
	  }

	  if (between(dist,0.1,15)) {

		pickUpCost = 40
		returnCost = 38
	  } else if (between(dist,15.1,40)) {
		pickUpCost = 70
		returnCost = 66

		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,40.1,60)) {
		pickUpCost = 80
		returnCost  =76
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,60.1,80)) {
		pickUpCost = 100
		returnCost = 95
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,80.1,90)) {
		pickUpCost = 110
		returnCost  = 104
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,90.1,99)) {
		pickUpCost = 120
		returnCost = 114
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,99.1,110)) {
		pickUpCost = 200
		returnCost = 190
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,110.1,120)) {
		pickUpCost = 220
		returnCost = 209
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,120.1,170)) {
		pickUpCost = 240
		returnCost = 228
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,170.1,200)) {
		pickUpCost = 260
		returnCost = 247
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,200.1,240)) {
		pickUpCost = 280
		returnCost = 266
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,240.1,300)) {
		pickUpCost = 300
		returnCost = 285
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,300.1,400)) {
		pickUpCost = 400
		returnCost = 380
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }


      const setCost = (e)=>{
          
          dispatch(setPrice({
            bothCost:{
                pickupCost:pickUpCost,
                returnCost:returnCost,
				planType:"Standard"
            }
          }))


          

      }
	
	// switch(dist) {

	// 	case (between(dist,200,300)):
	// 		pickUpCost = 40
	// 	  	returnCost = 38
	// 		break;
	// 	case 15.1<dist<40:
	// 		pickUpCost = 70
	// 		returnCost = 66
	// 	  break;
		// case 40.1<dist<60:
	// 		pickUpCost = 80
	// 		returnCost  =76
	// 	  break;
	// 	case 60.1<dist<80:
	// 		pickUpCost = 100
	// 		returnCost = 95
	// 	break;
	// 	case 80.1<dist<90:
	// 		pickUpCost = 110
	// 		returnCost  = 104
	// 	break;
	// 	case 90.1<dist<99:
	// 		pickUpCost = 120
	// 		returnCost = 114
	// 	break;
	// 	case 99.1<dist<110:
	// 		pickUpCost = 200
	// 		returnCost = 190
	// 	break;
	// 	case 110.1<dist<120:
	// 		pickUpCost = 220
	// 		returnCost = 209
	// 	break;
	// 	case 120.1<dist<170:
	// 		pickUpCost = 240
	// 		returnCost = 228
	// 	break;
	// 	case 170.1<dist<200:
	// 		pickUpCost = 260
	// 		returnCost = 247
	// 	break;
	// 	case 200.1<dist<240:
	// 		pickUpCost = 280
	// 		returnCost = 266
	// 	break;
	// 	case 240.1<dist<300:
	// 		pickUpCost = 300
	// 		returnCost = 285
	// 	break;
	// 	case 300.1<dist<400:
	// 		pickUpCost = 400
	// 		returnCost = 380
	// 	break;

	// 	default:
	
	//   }

	  console.log(pickUpCost)
	  console.log(returnCost)
    



    return (
		
		
        <section className='ita-transfer-cards kw-transfer-cards js-menu-section' style={{marginTop:'30px'}}>
			
        <div class="kw-transfer-card
                ">
	<div class="kw-transfer-card__class">
		<div class="kw-transfer-card__class-inner">
			<header style={{color:'Black'}} class="kw-transfer-card__class-title">Standard</header>
			<div class="kw-transfer-card__picture-wrapper">
				<picture class="transfer__preview__pic">
					<source srcset="https://fscdn.kiwitaxi.com/assets/images/vehicles/1.webp 1x, https://fscdn.kiwitaxi.com/assets/images/vehicles/1@2x.webp 2x" type="image/webp"></source>
					<source srcset="https://fscdn.kiwitaxi.com/assets/images/vehicles/1.png 1x, https://fscdn.kiwitaxi.com/assets/images/vehicles/1@2x.png 2x" type="image/png"></source>
					<img src="https://fscdn.kiwitaxi.com/assets/images/vehicles/1.png" alt="Economy"></img>
				</picture>
			</div>
			
		</div>
	</div>
	<div class="kw-transfer-card__description">
		<header class="kw-transfer-card__description-title">Standard</header>
		<div class="kw-transfer-card__pax-baggage kw-flex-jusfity-center" style={{marginTop:'16px',marginRight:'50px'}}>
<span class="kw-flex-align-center"></span>
			<img class="kw-icon" alt="Pax" src="https://fscdn.kiwitaxi.com/assets/images/static/icons/pax.svg"></img><span>4</span>
			
<span class="kw-flex-align-center" id="tippy-element" data-tippy-content="Maximum amount of standard baggage is indicated. The size of one standard baggage piece is <strong>no more than 158 cm</strong> (the sum of length, width, and height). <br><br> If you are taking non-standard baggage with you, contact customer support and we will find a suitable transfer for you." tabindex="0">

<img class="kw-icon" alt="Baggage" src="https://fscdn.kiwitaxi.com/assets/images/static/icons/baggage.svg"></img><span>4</span>
			</span>
		</div>
		<div class="kw-transfer-card__services">
			<div>
				<div class="kw-transfer-card__options">
					<div class="kw-transfer-card__option _insurance">
<span class="kw-flex">
<svg width="13" height="13" fill="none" viewBox="0 0 13 13" class="kw-transfer-card__option-icon kw-icon"><path fill="" fill-rule="evenodd" d="M6.5 11.939a5.439 5.439 0 1 0 0-10.878 5.439 5.439 0 0 0 0 10.878zM6.5 13a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm2.498-8.998a.53.53 0 0 1 0 .75L7.25 6.5l1.748 1.747a.53.53 0 0 1-.75.75L6.5 7.25 4.753 8.998a.53.53 0 0 1-.75-.75L5.75 6.5 4.002 4.753a.53.53 0 1 1 .75-.75L6.5 5.75l1.747-1.748a.53.53 0 0 1 .75 0z" clip-rule="evenodd"></path></svg><span>Free Cancellation</span><span class="tippy-icon" id="tippy-element" data-tippy-content="The transfer of this class can be cancelled for free with a full refund of the deposit  <strong>no later than 5 h.</strong> before the trip start.  <br><br>You can also purchase the free cancellation service at the next step. It will allow you to cancel your booking at any time with a full refund of the prepayment. Only the cost of the service is withheld." tabindex="0">

{/* <img class="kw-icon icon-tooltip" src="https://fscdn.kiwitaxi.com/assets/images/static/static/icon-tooltip.svg" alt="tooltip"></img></span> */}</span>
						</span>
					</div>
					<div class="kw-transfer-card__option _waiting-time">
<span class="kw-flex-align-center">
<svg width="13" height="13" fill="none" viewBox="0 0 13 13" class="kw-transfer-card__option-icon kw-icon"><path fill="" fill-rule="evenodd" d="M6.5 11.939a5.439 5.439 0 1 0 0-10.878 5.439 5.439 0 0 0 0 10.878zM6.5 13a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM6.036 2.255a.53.53 0 0 1 .53.53v3.649h2.72a.53.53 0 0 1 0 1.06h-3.25a.53.53 0 0 1-.53-.53V2.786a.53.53 0 0 1 .53-.53z" clip-rule="evenodd"></path></svg><span>Free Waiting Time  </span>
						</span>
					</div>
					<div style={{}} class="kw-transfer-card__option _nameplate">
					<span class="kw-flex">
					<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" class="kw-transfer-card__option-icon _nameplate kw-icon"><path fill-rule="evenodd" d="M0 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7v3H5V9H1a1 1 0 0 1-1-1V1zm5 7h6V1H1v7h4z" clip-rule="evenodd"></path></svg><span>Free Meet and Greet</span><span class="tippy-icon" id="tippy-element" data-tippy-content="The transfer of this class can be cancelled for free with a full refund of the deposit  <strong>no later than 5 h.</strong> before the trip start.  <br><br>You can also purchase the free cancellation service at the next step. It will allow you to cancel your booking at any time with a full refund of the prepayment. Only the cost of the service is withheld." tabindex="0">

{/* <img class="kw-icon icon-tooltip" src="https://fscdn.kiwitaxi.com/assets/images/static/static/icon-tooltip.svg" alt="tooltip"></img></span> */}</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="kw-transfer-card__offer">
		<div class="kw-transfer-card__offer-inner">
			<div class="kw-transfer-card__price kw-transfer-card__offer-block" >{pickUpCost} USD</div>
			<div class="kw-transfer-card__form-wrapper kw-transfer-card__offer-block">
				<form method="POST" action="/en/transfer/720"  class="kw-transfer-card__form">
					<Link to='/checkout'>
					<button class="kw-transfer-button _success kw-transfer-card__submit"  onClick={setCost}>Select</button>
					</Link>
				</form>
			</div>
			<div class="kw-transfer-card__payment-method-icons kw-transfer-card__offer-block">
				<div class="kw-flex-align-center kw-flex-jusfity-center">
					<img class="kw-icon icon-cash" src="https://fscdn.kiwitaxi.com/assets/images/static/static/icon-cash.svg" alt="cash"></img>
					<img class="kw-icon icon-mastercard" src="https://fscdn.kiwitaxi.com/assets/images/static/static/icon-mastercard.svg" alt="mastercard"></img>
					<img class="kw-icon icon-visa" src="https://fscdn.kiwitaxi.com/assets/images/static/static/icon-visa.svg" alt="visa"></img>
					<img class="kw-icon icon-applepay" src="https://fscdn.kiwitaxi.com/assets/images/static/static/icon-applepay.svg" alt="applepay"></img>
				</div>
			</div>
		</div>
	</div>
</div>

 </section>
   
 

    )
}