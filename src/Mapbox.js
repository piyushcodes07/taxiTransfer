import React from 'react'
import MapboxAutocomplete from 'react-mapbox-autocomplete'
import Button from '@material-ui/core/Button';
import './mapbox.css'
import { Row,Col,Form } from 'react-bootstrap';
import axios from "axios";
import {useSelector,useDispatch} from 'react-redux'
import {setPickup,setdropoff,selectdropOffLocation,selectpickUpLocation,setdistanceKm} from './features/counter/counterSlice'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router';

function Mapbox() {

    const dispatch = useDispatch()

    const [from,setFrom] = React.useState({
        lat:0,
        lng:0
    })
    const [to,setTo] = React.useState({
        lat:0,
        lng:0
    })

    const [price,setPrice] = React.useState(0)

    const suggestionSelect = (result, lat, lng, text) => {
        console.log(result, lat, lng, text)

        dispatch(setPickup({
            pickUpLocation:result
        }))
        
        setFrom({
        lat:lat,
        lng:lng

        })
    }
    
    const toSelection = (result, lat, lng, text)=>{
        console.log(result, lat, lng, text)

        dispatch(setdropoff({
            dropOffLocation:result
        }))
        setTo({
        lat:lat,
        lng:lng
        })
        
    }
    
    const isPickup = useSelector((state) => state.pickUpLocation)
    const isDropoff = useSelector((state) => state.dropOffLocation)
    let history = useHistory();
    const calDistance =  ()=>{
        
        console.log('HEYY')
        
        
        

       
        // const todo = useSelector((state) => state.todos[props.id])
        // const fromLat = Math.round((from.lat + Number.EPSILON) * 100) / 100
        // const fromLng = Math.round((from.lng + Number.EPSILON) * 100) / 100
        // const toLat = Math.round((to.lat + Number.EPSILON) * 100) / 100
        // const toLng = Math.round((to.lng + Number.EPSILON) * 100) / 100
        
      
         axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${from.lng},${from.lat};${to.lng},${to.lat}?approaches=unrestricted;curb&access_token=pk.eyJ1IjoidGVhc2prb2Ftd2FyIiwiYSI6ImNrcW0xaDJnMTExMjEycW54am5vdXJ2em0ifQ.A00laVf9rRhXGtWvbExG-Q`).then(res=>
        {
            dispatch(setdistanceKm({
                distanceKm: Math.round( res.data.routes[0].distance/1000)
            }))
        
                
               
        })

        history.push('/selectVehicle')
        // console.log(`https://api.mapbox.com/directions/v5/mapbox/driving/${from.lat},${from.lng};${to.lat},${to.lng}?annotations=maxspeed&overview=full&geometries=geojson&&access_token=pk.eyJ1IjoidGVhc2prb2Ftd2FyIiwiYSI6ImNrcW0xaDJnMTExMjEycW54am5vdXJ2em0ifQ.A00laVf9rRhXGtWvbExG-Q`)
        
        // console.log(result.data.routes.distance);
        // "https://api.mapbox.com/directions/v5/mapbox/driving/-122.39636,37.79129;-122.39732,37.79283;-122.39606,37.79349?annotations=maxspeed&overview=full&geometries=geojson&access_token=pk.eyJ1IjoidGVhc2prb2Ftd2FyIiwiYSI6ImNrcW0xaDJnMTExMjEycW54am5vdXJ2em0ifQ.A00laVf9rRhXGtWvbExG-Q""
    }
    return (

        <div className='inputDiv'>
            <Row>
            <Form.Group as={Col} sm='8' md='6'>
            <MapboxAutocomplete 
             publicKey='pk.eyJ1IjoidGVhc2prb2Ftd2FyIiwiYSI6ImNrcW0xaDJnMTExMjEycW54am5vdXJ2em0ifQ.A00laVf9rRhXGtWvbExG-Q'
                inputClass='form-control search newsearch'
                onSuggestionSelect={suggestionSelect}
                country='jm'
                required
                placeholder='From :'
                resetSearch={false} />
            </Form.Group>
                
            <Form.Group as={Col} sm='8' md='6'>
            <MapboxAutocomplete 
             publicKey='pk.eyJ1IjoidGVhc2prb2Ftd2FyIiwiYSI6ImNrcW0xaDJnMTExMjEycW54am5vdXJ2em0ifQ.A00laVf9rRhXGtWvbExG-Q'
                inputClass='form-control search newsearch'
                onSuggestionSelect={toSelection}
                country='jm'
                placeholder='To :'
                required
                resetSearch={false} />
            </Form.Group>
                </Row>

            
                <Link style={{padding:'unset unset unset unset',borderRadius:'12px',linHeight: '30px',paddingBottom: '5px'}} to='/selectVehicle'>
                <Button onClick={calDistance} style={{textTransform:'unset',backgroundColor:'#26a65b',paddingBottom: '5px'}} variant="contained" color="primary" disableElevation>
                 Continue
             </Button>

                {/* <button  onClick={calDistance} ><span style={{backgroundColor:'white',borderRadius:'12px'}} >Continue </span></button> */}
                </Link>
                
        </div>
    )
}
export default Mapbox

// onClick={calDistance}
// span continue