import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import StripeCheckout from 'react-stripe-checkout';
import './Cards.css'
import { useEffect } from 'react';
import axios from 'axios'
import { toast } from "react-toastify";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {selectCost,selectdropOffLocation,selectpickUpLocation} from './features/counter/counterSlice'
import "react-toastify/dist/ReactToastify.css";
import {useHistory} from 'react-router-dom'

toast.configure();

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

// var shampaingQueOg = 0
//   let flowersQueOg = 0
//   let beerQueOg = 0
export default function Cardsss(props) {

  console.log(props.selectedDate)

  const usehistory = useHistory();

  const pickUpLocation = useSelector(selectpickUpLocation)
  const dropOffLocation = useSelector(selectdropOffLocation)
  console.log(props.isreturnTrip)

const ClaculatePrice = ()=>{
  
  setThisState(true)

}

  console.log(props.Cost)
  const classes = useStyles();
  var shampaingQueOg = 0
  let flowersQueOg = 0
  var newFlowerAmount = 0
  var beerQueOg = 0
  let FlowerAccPriceOgfinal = 0;
  let vippassQueOg = 0;
  const[flowerAccpriceOg,setFlowerAccpriceOg] = React.useState();
  const [shampaingQue, setRec1] = React.useState(0);
  const [flowersQue, setRec2] = React.useState(0);
  const [beerQue, setRec3] = React.useState(0);
  var  flowerAccprice = 0 
  const [vippassQue, setRec4] = React.useState(0);
  let shamprice =0
  //  let flowerprice= 0
  let beerprice = 0;
  const [flowerprice, setPrice2] = React.useState(0);
  let vippassprice = 0;
  const [shampOptions, setOptionForShamp] = React.useState("");

  const [finalPrice,setfinalPrice] = React.useState(props.Cost.pickupCost )

  const handleChangeForshamp = (event) => {
    setOptionForShamp(event.target.value);
  };
  const [floweOptions,setOptionForFlowers] = React.useState("");

  const [vipAirport,setvipAirport] = React.useState()
  const [vipPassangers,setvippassangers] = React.useState()
  const [vipDes,setvipdes] = React.useState()
  const [ThisState,setThisState] =React.useState(0)

// let ReturnCost = props.Cost.isreturnTrip


  const setvipAirportFunc = (e)=>{
    setvipAirport(e.target.value)
    
  }
  const setvippassangersFunc = (e)=>{
    setvippassangers(e.target.value)
  }
  const setvipdesFunc = (e)=>{
    setvipdes(e.target.value)
  }
  

  const handleChangeForflower = (event) => {
    setOptionForFlowers(event.target.value);
    if ( event.target.value  === "small"){

      var flowerAccprice = 30

        console.log(flowerAccprice)

        setPrice2(flowerAccprice * flowersQue)
        finalFunc(flowerAccprice * flowersQue)

    }
    if (event.target.value === "medium"){

      var flowerAccprice = 45

        setPrice2(flowerAccprice * flowersQue)
        finalFunc(flowerAccprice * flowersQue)
    }
    if (event.target.value === "large"){

      var flowerAccprice =60

        setPrice2(flowerAccprice * flowersQue)
        finalFunc(flowerAccprice * flowersQue)
    }



    if (event.target.value === ""){

        var flowerAccprice =0

        setPrice2(flowerAccprice * flowersQue)
        finalFunc(flowerAccprice * flowersQue)
    }
    setPrice2(flowerAccprice * flowersQue)
  };
  const [beerOptions, setOptionForbeer] = React.useState("");

  const handleChangeForbeer = (event) => {
    setOptionForbeer(event.target.value);
  };
  const [vipOptions, setOptionForvip] = React.useState("");

  const handleChangeForvip = (event) => {
    setOptionForvip(event.target.value);
  };

  const increase1 = () => {
    setRec1(shampaingQue + 1);
    // shampaingQueOg++
     shampaingQueOg = shampaingQue  + 1
    shamprice = (shampaingQueOg * 50)
    console.log(shampaingQueOg)
    finalFunc()
  };
  const increase2 = () => {
    setOptionForFlowers("")
    setRec2(flowersQue + 1);
    setPrice2(flowerAccprice * flowersQue)
     newFlowerAmount = flowerprice
    finalFunc()
  }
  const increase3 = () => {
    setRec3(beerQue + 1);
    beerQueOg  =beerQue + 1
    beerprice = (beerQueOg * 16)
    finalFunc()
  };
  const increase4 = () => {
    setRec4(vippassQue + 1);
  };
  const decrese1 = () => {
    if (shampaingQue !== 0) {

      setRec1(shampaingQue - 1);
      shampaingQueOg  = shampaingQue - 1
      shamprice = (shampaingQueOg * 60)
      finalFunc()
    }
  };
  const decrese2 = () => {
    if (flowersQue !== 0) {
      setOptionForFlowers("")
      setRec2(flowersQue - 1);
      setPrice2(flowerAccprice * flowersQue)
      let priceOfFlower = flowerAccprice * flowersQue
      finalFunc()
    }
  }
  const decrese3 = () => {
    if (beerQue !== 0) {
      setRec3(beerQue - 1);
      beerQueOg  = beerQue - 1
      beerprice = (beerQueOg * 16)
      finalFunc()
    }
  };
  const decrese4 = () => {
    if (vippassQue !== 0) {
      setRec4(vippassQue - 1);
    }
  };


  React.useEffect(()=>{

    finalFunc()
    console.log("is return changed")

  },[props.isreturnTrip])


  const showState = ()=>{
    console.log(flowerAccprice)
    console.log(flowerprice)
    console.log(props.formData)
    console.log(props.selectedDate)
    console.log(props.selectedRDate)
  }

  // const [finalPrice,setfinalPrice] = React.useState(0)
  // setfinalPrice(shamprice+flowerprice+beerprice+vippassprice)

  const finalFunc = ()=>{
    console.log(props.Cost.pickupCost)
    let pickUpCost = props.Cost.pickupCost
    let pickUpCostReturn = props.Cost.returnCost
    console.log(props.ReturnCost)
    if (props.isreturnTrip){
      return setfinalPrice(shamprice+beerprice+vippassprice+flowerprice+ pickUpCostReturn +pickUpCost)
    }else{
      return setfinalPrice(shamprice+beerprice+vippassprice+ flowerprice+pickUpCost  )
    }
  }
  // finalFunc()


  const handleToken = async(token)=>{

    const Allinfo = {

      finalPrice:finalPrice,
      planType:props.Cost.planType,
      pickUpLocation:pickUpLocation,
      dropOffLocation:dropOffLocation,
      pickupCost:props.Cost.pickupCost,
      returnCost:props.Cost.returnCost,
      isreturnTrip:props.isreturnTrip,
      pickUpDateAndTime: props.selectedDate.toString(),
      returnDateAndTime:props.selectedRDate.toString(),


      customerInfo:props.formData,

      extras:{

      }
    }

    const response = await axios.post('https://backendforkivi.herokuapp.com/checkout',{
      token,
      Allinfo
    })
    
    var status = response.data.status
  
    if (status === "success") {
      console.log('in sucess')
      toast("Success! Check email for details", { type: "success" });
      usehistory.push('/')

    } else {
      toast("Something went wrong", { type: "error" });

    }

    
  
  }

  return (
    <Grid container  spacing={2}  align="center" style={{marginTop:'5%'}}  > 
      <Grid item xs={12} lg={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../images/c.jpg"
          title="Contemplative Reptile"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
          Champagne <br/>
          <span style={{color:'#1f70c0'}}>$50</span>
          </Typography>
          <Typography style={{alignItems:'unset'}} variant="body2" color="textSecondary" component="">
         • 750 ml bottle of champagne<br />
         • Includes 2 champagne flutes per bottle<br />
         • Presented privately inside the vehicle<br />
         • Served on arrival or departure – your choice
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

              <div class="number">
          <span onClick={decrese1} class="minus">-</span>
          <input className='textInput' type="text" value={shampaingQue} />
          <span onClick={increase1} class="plus">+</span>
        </div>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}


<FormControl style={{marginLeft:'10%',marginBottom:'10px'}} className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Serve
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    //   open={open}

                    value={shampOptions}
                    onChange={handleChangeForshamp}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"on arival"}>On Arival</MenuItem>
                    <MenuItem value={"on diapture"}>On Dipature</MenuItem>
                  </Select>
                </FormControl>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
    </Grid>


    <Grid item xs={12} lg={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../images/ff.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Flower Bouquet<br/>
          <span style={{color:'#1f70c0'}}>{flowerprice}</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="">
         • Beautiful hand prepared flower bouquet <br />
         • Presented privately inside the vehicle<br />
         • Available in 3 sizes (Small, Medium & Large)<br />
         • Email us if you need to add a special note
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

              <div class="number">
          <span onClick={decrese2} class="minus">-</span>
          <input className='textInput' type="text" value={flowersQue} />
          <span onClick={increase2} class="plus">+</span>
        </div>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}


<FormControl style={{marginLeft:'10%',marginBottom:'10px'}} className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Serve
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    //   open={open}

                    value={floweOptions}
                    onChange={handleChangeForflower}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"small"}>small</MenuItem>
                    <MenuItem value={"medium"}>medium</MenuItem>
                    <MenuItem value={"large"}>large</MenuItem>
                  </Select>
                </FormControl>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
    </Grid>


    <Grid item xs={12} lg={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../images/bb.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Red Stripe Beer – 4pk<br/>
          <span style={{color:'#1f70c0'}}>$16</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="">
         • Ice cold Red Stripe beers (4pk)<br />
         • Glass bottled original Jamaican Red Stripe <br />
         • Presented privately inside the vehicle <br />
         • Served on arrival or departure (your choice)
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

              <div class="number">
          <span onClick={decrese3} class="minus">-</span>
          <input className='textInput' type="text" value={beerQue} />
          <span onClick={increase3} class="plus">+</span>
        </div>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}


<FormControl style={{marginLeft:'10%',marginBottom:'10px'}} className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Serve
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    //   open={open}

                    value={beerOptions}
                    onChange={handleChangeForbeer}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"on arival"}>on arival</MenuItem>
                    <MenuItem value={"on departure"}>on Departure</MenuItem>
                    
                  </Select>
                </FormControl>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={12} lg={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../images/vip.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          VIP Pass – Club & Airport<br />
          <span style={{color:'#1f70c0'}}>$25 – $86</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="">
         • Access to VIP lounge<br/>
         • Fast-track through Immigration & Customs<br/>
         • Assistance with retrieving your luggage<br/>
         • 72hr notice required to secure VIP Pass<br/>
         {/* • Access to VIP lounge<br/>
         • Complimentary snacks and beverages<br/>
         • Complimentary WiFi in lounge<br/> */}
         
         
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

              <div class="number" style={{display:'flex'}}>
          <span onClick={decrese4} class="minus">-</span>
          <input className='textInput' type="text" value={vippassQue} />
          <span onClick={increase4} class="plus">+</span>
        </div>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}

<Grid container style={{marginLeft:'20%',marginBottom:'10px'}}>
  <Grid item lg={12} xs={12 }>
<FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Person
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    //   open={open}

                    value={vipPassangers}
                    onChange={setvippassangersFunc}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Adult"}>Adult</MenuItem>
                    <MenuItem value={"Child"}>Child</MenuItem>
                  </Select>
                </FormControl>
                </Grid>
                <Grid item lg={12} xs={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Airport
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    //   open={open}

                    value={vipAirport}
                    onChange={setvipAirportFunc}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Kingston"}>Kingston Airport</MenuItem>
                    <MenuItem value={"Montego bay airport"}>Montego bay airport</MenuItem>
                  </Select>
                </FormControl>
                </Grid>
                <Grid item lg={12} xs={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Ticket
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    //   open={open}

                    value={vipDes}
                    onChange={setvipdesFunc}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"arival"}>Arival</MenuItem>
                    <MenuItem value={"diapture"}>Dipature</MenuItem>
                    <MenuItem value={"arival and diapture"}>Arival and Dipature</MenuItem>
                  </Select>
                </FormControl>
                </Grid>
                </Grid>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
    </Grid>
        {/* <Button onClick={showState}>state</Button> */}
        {/* console.log(flowerAccprice)
    console.log(flowerprice) */}
    {/* <p>accprice :{flowerAccprice}</p>
    <p>flowerprice : {flowerprice} </p>
    <p>flower Quan{flowersQue}</p>
     */}


    {/* <Button onClick ={ClaculatePrice} style={{height:'60px',backgroundColor:'yellow'}}>Calculate Price{finalPrice}</Button> */}
   
    {/* {ThisState?<p>{finalPrice}</p>:null} */}
      <Grid item xs={12} lg={12} style={{marginRight:'auto',marginLeft:'auto'}}>
     <StripeCheckout
    
     stripeKey="pk_test_51JE6jmDmSjzIycfQYF40IV0dkFo0RedpMHk3BPZpaYNlqhv23ykwwI9uedBKYjQFtoLnxSuo2DDxPf0up4G6nb9x00rUt9xJ1v"
     token={handleToken}
     amount={finalPrice * 100}
     name={props.Cost.planType}
     billingAddress={false}
     description={'Your own private taxi !!'}
     shippingAddress={false}
     image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CSmR1ENhNcKnnd5knHGsnOtkJXFPYf3g8dledfWeiAE7FO1RwYUcKKCebNBg9LXSZBU&usqp=CAU'}
     >
      <Button  style={{height:'100%',width:'80%',textTransform:'unset',backgroundColor:'#26a65b',marginRight:'auto',marginLeft:'auto', paddingTop:'10px',borderRadius:'20px',paddingBottom: '10px'}} variant="contained" color="primary" >
                 Checkout ${finalPrice}
             </Button>
      
      
      </StripeCheckout>
      </Grid>


    </Grid>
    
  );

  }