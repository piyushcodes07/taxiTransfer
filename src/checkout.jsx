import React from 'react'
import { useState } from 'react';
import './out.css'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {selectCost} from './features/counter/counterSlice'
import FromTo from './fromTo';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Cardsss from './Cardsss';






const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': { 
      margin: theme.spacing(1),
      width: '95%',
      paddingBottom:'10px',
      boxSizing:'content-box !important',
      

    },

    MuiInputBaseInput:{
      boxSizing:'content-box !important',

    },formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },margin: {
      height: theme.spacing(3),
    }
  },
}));

const marks = [
  {
    value: 0,
    label: '3',
  },
  {
    value: 3,
    label: '4',
  },
  {
    value: 37,
    label: '6',
  },
  {
    value: 100,
    label: '15',
  },
];

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

function valuetext(value) {
  return `${value}°C`;
}


export default function Checkout() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
// Date and TIME

const [formData,setformData] = useState({
  fname:'',
  lname:'',
  email:'',
  phone:null,
  passengers:null,
  flightNum:'',
  returnFlightNum:null,

})

let name, value;

const handleForm =(e)=>{


  name=e.target.name;
  value=e.target.value;

  setformData({...formData,[name]:value })

  
}


  var Cost = useSelector(selectCost)
  const [age, setAge] = React.useState('');


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
    
  });

  const [isReturn,setisReturn] = React.useState(false)


    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const [selectedRDate, setSelectedRDate] = React.useState(new Date());  
    
    const handleRDateChange = (date) => {
      setSelectedRDate(date);
    };

  const switchChange = (event)=>{
    setState({ ...state, [event.target.name]: event.target.checked });
    
  }


  const readState =(e)=>{
    
    console.log(selectedDate)
    console.log(selectedRDate)
  }

  const theState=(e)=>{
    e.preventDefault()
    console.log(formData)
  }

        // <Grid item xs={12}>
        //   <Paper className={classes.paper}>xs=12</Paper>
        // </Grid>

  return (
    <div>
      <FromTo/>
     
      
      <Grid container spacing={0} style={{marginRight:'auto',marginLeft:'auto',paddingBottom:'30px',width: '80%',backgroundColor:'white',borderRadius:'20px'}}>
        

          <Grid item xs={12} lg={12}>
          <h3 style={{fontWeight:'600',marginLeft:'20px'}}>Passenger Detail</h3>
          <hr></hr>
          </Grid>
          
          
            
              <Grid item xs={12} md={4} lg={6} >
                        <TextField
                        value={formData.fname}
                        onChange={handleForm}
                    name='fname'
                    id="standard-full-width"
                    label="First name"
                    style={{ margin: 8 ,width:'95%' }}
                    className={classes.root}

                    
                    fullWidth
                    margin="normal"
                    variant='filled'
                  />
              </Grid>
              <Grid item xs={12} md={4} lg={6}>
                <TextField  value={formData.lname} name='lname' onChange={handleForm} margin="normal"  style={{ margin: 8,width:'95%' }} className={classes.root} id="lname" label="Last name" variant="filled" />
              </Grid>
              

              <Grid xs={12} md={4} lg={6}>
              <TextField
                    id="standard-full-width"
                    label="Email"
                    style={{ margin: 8 ,width:'95%' }}
                    className={classes.root}
                    value={formData.email}
                    onChange={handleForm}
                    name='email'
                    
                    fullWidth
                    margin="normal"
                    variant='filled'
                  />
            
              </Grid>
              
              


              <Grid xs={12} md={4} lg={6}>
              <TextField
                    id="standard-full-width"
                    label="Phone no."
                    style={{ margin: 8 ,width:'95%' }}
                    className={classes.root}
                    value={formData.phone}
                    onChange={handleForm}
                    type='number'
                    name='phone'
                    fullWidth
                    margin="normal"
                    variant='filled'
                  />
              </Grid>

              <Grid item xs={12} md={12} lg={12} >
                <hr></hr>
                              <Typography style={{marginLeft:'20px'}} id="discrete-slider-restrict" gutterBottom>
                     <strong> Passengers</strong>
                    </Typography>
                    <TextField
                    id="standard-full-width"
                    label=""
                    style={{ margin: 8 ,width:'45%' }}
                    className={classes.root}
                    value={formData.passengers}
                    onChange={handleForm}
                    type='number'
                    name='passengers'
                    
                    margin="normal"
                    variant='outlined'
                  />
                    
                
                          
              </Grid>
              
              


              

              
          
          
        
        
      </Grid>




      {/* TRANSFER DETAIL SECTIOn */}

      <Grid container spacing={0} alignItems="center" style={{marginRight:'auto',marginTop:'30px',marginLeft:'auto',paddingBottom:'30px',width: '80%',backgroundColor:'white',borderRadius:'20px'}}>
      <Grid item xs={12} lg={12}>
          <h3 style={{fontWeight:'600',marginLeft:'20px'}}>Transfer detail</h3>
          <hr></hr>
          </Grid>
          <Grid item xs={12} md={4} lg={6} >
                        <TextField
                    id="standard-full-width"
                    label="Flight No."
                    style={{ margin: 8 ,width:'95%' }}
                    className={classes.root}
                    value={formData.flightNum}
                    onChange={handleForm}
                    name='flightNum'
                    
                    fullWidth
                    margin="normal"
                    variant='filled'
                  />
                </Grid>

                <Grid style={{marginLeft:'20px'}} spacing={0} container justifyContent='space-around'>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item md={3} xs={12}>
                              <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Pickup Date"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        name='pickupData'
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />

              </Grid>

              <Grid item md={3} xs={12}>
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Pickup Time"
                    value={selectedDate}
                    onChange={handleDateChange}
                    name='pickupData'
                    KeyboardButtonProps={{
                      'aria-label': 'change time',
                    }}
                  />
        </Grid>

        
                </MuiPickersUtilsProvider>
                </Grid>
                
                
                

        

        


          
      </Grid>


      <Grid container spacing={0} alignItems="center" style={{marginRight:'auto',marginTop:'30px',marginLeft:'auto',paddingBottom:'30px',width: '80%',backgroundColor:'white',borderRadius:'20px'}}>


      <Grid item xs={6} lg={6}>
          <h3 style={{fontWeight:'500',marginLeft:'20px'}}>Return trip ?</h3>
          <p style={{marginLeft:'20px',color:'grey'}}>  {Cost.returnCost} USD</p>

          </Grid>
          

        <Grid item xs={6} lg={6} alignItems="center" >
              <Switch
              checked={state.checkedA}
              onChange={switchChange}
              name="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        </Grid>

        {state.checkedA?(

<Grid container>

<Grid item xs={12} md={4} lg={6} >
              <TextField
          id="standard-full-width"
          label="Flight No."
          style={{ margin: 8 ,width:'95%' }}
          className={classes.root}
          value={formData.returnFlightNum}
          onChange={handleForm}
          name='returnFlightNum'

          
          fullWidth
          margin="normal"
          variant='filled'
        />
      </Grid>
      <Grid style={{marginLeft:'20px'}} spacing={0} container justifyContent='space-around'>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Grid item md={3} xs={12}>
                    <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Return Date"
              format="MM/dd/yyyy"
              value={selectedRDate}
              onChange={handleRDateChange}
              name='returnDate'
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />

    </Grid>

    <Grid item md={3} xs={12}>
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Return Time"
          value={selectedRDate}
          onChange={handleRDateChange}
          name='returnDate'
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
</Grid>


      </MuiPickersUtilsProvider>
  


</Grid>
</Grid>

):null}



      </Grid>

      
    
      <Cardsss selectedDate={selectedDate} Cost={Cost} isreturnTrip={state.checkedA} selectedRDate={selectedRDate} formData={formData} />
      
          {/* <Button onClick={readState} >state</Button> */}
    </div>
  )
}
