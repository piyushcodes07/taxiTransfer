import React from 'react'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default function Contacts() {

    const [contactData,setcontactData] = useState({
        fname:'',
        lname:'',
        email:'',
        message:'',
        phone:null,
      })

      
let name, value;

const handleForm =(e)=>{


  name=e.target.name;
  value=e.target.value;

  setcontactData({...contactData,[name]:value })

  
}

var handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactData);


    
    alert('Thanks message received!!')
};
      



    return (
        <div>
            
            <div class="container-contact100">
		<div class="wrap-contact100">
			<form onSubmit={handleSubmit}  class="contact100-form validate-form">
			
			<a href="https://api.whatsapp.com/send/?phone=447985190947&text&app_absent=0"><img src="../images/what2.png" alt="WhatsApp Contact" width="500" height="600"/></a>
				<h3>Lets have a chat !! Click the icon</h3>
			</form>

			<div class="contact100-more flex-col-c-m" style={{backgroundImage: "url('images/bg-01.jpg')"}}>
				<div class="flex-w size1 p-b-47">
					<div class="txt1 p-r-25">
						<span class="lnr lnr-map-marker"></span>
					</div>

					<div class="flex-col size2">
						<span class="txt1 p-b-20">
							Address
						</span>

						<span class="txt2">
                        Montego Bay, Jamaica
						</span>
					</div>
				</div>

				<div class="dis-flex size1 p-b-47">
					<div class="txt1 p-r-25">
						<span class="lnr lnr-phone-handset"></span>
					</div>

					<div class="flex-col size2">
						<span class="txt1 p-b-20">
							Lets Talk
						</span>

						<span class="txt3">
                        US    +1 217 636 4160<br/>
                        UK   +44 7985 190947<br/>
                        JA    +1 876 402 1979
						</span>
					</div>
				</div>

				<div class="dis-flex size1 p-b-47">
					<div class="txt1 p-r-25">
						<span class="lnr lnr-envelope"></span>
					</div>

					<div class="flex-col size2">
						<span class="txt1 p-b-20">
							General Support
						</span>

						<span class="txt3">
                        hello@jamrocktaxi.com
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>



	<div id="dropDownSelect1"></div>


	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
	<script src="vendor/animsition/js/animsition.min.js"></script>

	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
	<script src="vendor/select2/select2.min.js"></script>
	<script>
	</script>
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>

	<script src="vendor/countdowntime/countdowntime.js"></script>

	<script src="js/main.js"></script>
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
	<script>
    
	
	</script>

        </div>
       

    )
}
