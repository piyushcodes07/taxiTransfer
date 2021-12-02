import React from 'react'
import {useState} from 'react'
import './taxi.css'
import {useSelector,useDispatch} from 'react-redux'
import {selectdistanceKm,setPrice} from './features/counter/counterSlice'
import { Link } from 'react-router-dom'
export default function Coach() {

    const dispatch = useDispatch()

	const dist = useSelector(selectdistanceKm)
	console.log(dist)
	
	var pickUpCost =null;
	var returnCost = null;

	function between(x, min, max) {
		return x >= min && x <= max;
	  }

	  if (between(dist,0.1,15)) {

		pickUpCost = 240
		returnCost = 228
	  } else if (between(dist,15.1,40)) {
		pickUpCost = 420
		returnCost = 399

		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,40.1,60)) {
		pickUpCost = 480
		returnCost  =456
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,60.1,80)) {
		pickUpCost = 600
		returnCost = 570
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,80.1,90)) {
		pickUpCost = 660
		returnCost  = 627
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,90.1,99)) {
		pickUpCost = 720
		returnCost = 684
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,99.1,110)) {
		pickUpCost = 1200
		returnCost = 1140
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,110.1,120)) {
		pickUpCost = 1320
		returnCost = 1254
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,120.1,170)) {
		pickUpCost = 1440
		returnCost = 1368
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,170.1,200)) {
		pickUpCost = 1560
		returnCost = 1482
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,200.1,240)) {
		pickUpCost = 1680
		returnCost = 1596
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,240.1,300)) {
		pickUpCost = 1800
		returnCost = 1710
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }else if (between(dist,300.1,400)) {
		pickUpCost = 2400
		returnCost = 2280
		//  block of code to be executed if the condition1 is false and condition2 is true
	  }


      const setCost = (e)=>{
         
          dispatch(setPrice({
            bothCost:{
                pickupCost:pickUpCost,
                returnCost:returnCost,
				planType:"Coach"
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
			<header style={{color:'Black'}} class="kw-transfer-card__class-title">Coach</header>
			<div class="kw-transfer-card__picture-wrapper">
				<picture class="transfer__preview__pic">
					<source srcset="data:image/jpeg;base64,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bML8APZA77y3xG6mNTjQJ7xLI7v4om3Mv6Ri6+k6G1KIAvWpdf10HX4zD757ZoHBVwuIolubcqoqIWJVSwAANydJwtdz8WRfmyPKW1XdvErxpt6GVH0q23cM3DEUD4VUP96a5vHvUEK4fCFa+KqDoBWDJSU6c5UYaADjbu7JwGpsyqvFG9DIjhn90+kD6c3Y2YMNQp0Q2YqvSb36jEs7a9rMTM6pHGwvwvbW0+TKbVl9lnXwZh8jLhcXiv6+v/aP/OQfVuf/AFaUmp/q0+WVxmM/5jEf2lT+cuKWPx3/ADGI86jn9YH0vjcYKdN6jKSqLcgAXPcLkayhsd9n42nz7h9o48i3O1WHYWZgfImZ/Z2Kx5I6TnxuZfwdjSuz8FPHqH62ktKg5IzCwvrcg6eU0vYxxptmJm74DPbp8ZBfREQEREBERAREQEREBERAREQEREBERAREQEpKjslUQIXw6nio9JH+wU/cX0l1ECAYVPdHpIqmzqbcUX0EvIgYevu7h24019BLCruThW+oPSbPEDTn3Awx+oJEeT/D9SzdogadT3Ew4+qJc09zMOPqCbREDCUd2qC/VHpL6ls2mvBR6S9iBGtJRwAkkRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//Z 1x, data:image/jpeg;base64,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bML8APZA77y3xG6mNTjQJ7xLI7v4om3Mv6Ri6+k6G1KIAvWpdf10HX4zD757ZoHBVwuIolubcqoqIWJVSwAANydJwtdz8WRfmyPKW1XdvErxpt6GVH0q23cM3DEUD4VUP96a5vHvUEK4fCFa+KqDoBWDJSU6c5UYaADjbu7JwGpsyqvFG9DIjhn90+kD6c3Y2YMNQp0Q2YqvSb36jEs7a9rMTM6pHGwvwvbW0+TKbVl9lnXwZh8jLhcXiv6+v/aP/OQfVuf/AFaUmp/q0+WVxmM/5jEf2lT+cuKWPx3/ADGI86jn9YH0vjcYKdN6jKSqLcgAXPcLkayhsd9n42nz7h9o48i3O1WHYWZgfImZ/Z2Kx5I6TnxuZfwdjSuz8FPHqH62ktKg5IzCwvrcg6eU0vYxxptmJm74DPbp8ZBfREQEREBERAREQEREBERAREQEREBERAREQEpKjslUQIXw6nio9JH+wU/cX0l1ECAYVPdHpIqmzqbcUX0EvIgYevu7h24019BLCruThW+oPSbPEDTn3Awx+oJEeT/D9SzdogadT3Ew4+qJc09zMOPqCbREDCUd2qC/VHpL6ls2mvBR6S9iBGtJRwAkkRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//Z 2x" type="image/webp"></source>
					<source srcset="data:image/jpeg;base64,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bML8APZA77y3xG6mNTjQJ7xLI7v4om3Mv6Ri6+k6G1KIAvWpdf10HX4zD757ZoHBVwuIolubcqoqIWJVSwAANydJwtdz8WRfmyPKW1XdvErxpt6GVH0q23cM3DEUD4VUP96a5vHvUEK4fCFa+KqDoBWDJSU6c5UYaADjbu7JwGpsyqvFG9DIjhn90+kD6c3Y2YMNQp0Q2YqvSb36jEs7a9rMTM6pHGwvwvbW0+TKbVl9lnXwZh8jLhcXiv6+v/aP/OQfVuf/AFaUmp/q0+WVxmM/5jEf2lT+cuKWPx3/ADGI86jn9YH0vjcYKdN6jKSqLcgAXPcLkayhsd9n42nz7h9o48i3O1WHYWZgfImZ/Z2Kx5I6TnxuZfwdjSuz8FPHqH62ktKg5IzCwvrcg6eU0vYxxptmJm74DPbp8ZBfREQEREBERAREQEREBERAREQEREBERAREQEpKjslUQIXw6nio9JH+wU/cX0l1ECAYVPdHpIqmzqbcUX0EvIgYevu7h24019BLCruThW+oPSbPEDTn3Awx+oJEeT/D9SzdogadT3Ew4+qJc09zMOPqCbREDCUd2qC/VHpL6ls2mvBR6S9iBGtJRwAkkRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//Z 1x, https://fscdn.kiwitaxi.com/assets/images/vehicles/1@2x.png 2x" type="image/png"></source>
					<img src="data:image/jpeg;base64,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bML8APZA77y3xG6mNTjQJ7xLI7v4om3Mv6Ri6+k6G1KIAvWpdf10HX4zD757ZoHBVwuIolubcqoqIWJVSwAANydJwtdz8WRfmyPKW1XdvErxpt6GVH0q23cM3DEUD4VUP96a5vHvUEK4fCFa+KqDoBWDJSU6c5UYaADjbu7JwGpsyqvFG9DIjhn90+kD6c3Y2YMNQp0Q2YqvSb36jEs7a9rMTM6pHGwvwvbW0+TKbVl9lnXwZh8jLhcXiv6+v/aP/OQfVuf/AFaUmp/q0+WVxmM/5jEf2lT+cuKWPx3/ADGI86jn9YH0vjcYKdN6jKSqLcgAXPcLkayhsd9n42nz7h9o48i3O1WHYWZgfImZ/Z2Kx5I6TnxuZfwdjSuz8FPHqH62ktKg5IzCwvrcg6eU0vYxxptmJm74DPbp8ZBfREQEREBERAREQEREBERAREQEREBERAREQEpKjslUQIXw6nio9JH+wU/cX0l1ECAYVPdHpIqmzqbcUX0EvIgYevu7h24019BLCruThW+oPSbPEDTn3Awx+oJEeT/D9SzdogadT3Ew4+qJc09zMOPqCbREDCUd2qC/VHpL6ls2mvBR6S9iBGtJRwAkkRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//Z" alt="Economy"></img>
				</picture>
			</div>
			
		</div>
	</div>
	<div class="kw-transfer-card__description">
		<header class="kw-transfer-card__description-title">Coach</header>
		<div class="kw-transfer-card__pax-baggage kw-flex-jusfity-center" style={{marginTop:'16px',marginRight:'50px'}}>
<span class="kw-flex-align-center"></span>
			<img class="kw-icon" alt="Pax" src="https://fscdn.kiwitaxi.com/assets/images/static/icons/pax.svg"></img><span>30</span>
			
<span class="kw-flex-align-center" id="tippy-element" data-tippy-content="Maximum amount of standard baggage is indicated. The size of one standard baggage piece is <strong>no more than 158 cm</strong> (the sum of length, width, and height). <br><br> If you are taking non-standard baggage with you, contact customer support and we will find a suitable transfer for you." tabindex="0">

<img class="kw-icon" alt="Baggage" src="https://fscdn.kiwitaxi.com/assets/images/static/icons/baggage.svg"></img><span>30</span>
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