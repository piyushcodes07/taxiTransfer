import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {setPickup,setdropoff,selectdropOffLocation,selectpickUpLocation,setdistanceKm} from './features/counter/counterSlice'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import axios from "axios";
import { Row,Col,Form } from 'react-bootstrap';
import './suggestion.css'
import PlacesAutocomplete, {
      geocodeByAddress,
      getLatLng,
    } from 'react-places-autocomplete';
import { Switch } from 'react-router-dom';
import './suggestion.css'
import { useHistory } from "react-router-dom";
    

// import { withGoogleMap,GoogleMap, Marker } from "google-maps-react"
function Mapp(props) {
  const [from,setFrom] = React.useState({
    lat:0,
    lng:0
})

const [to,setTo] = React.useState({
  lat:0,
  lng:0
})
let history = useHistory();

  const calDistance = async ()=>{
        
     const res = await axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${from.lng},${from.lat};${to.lng},${to.lat}?approaches=unrestricted;curb&access_token=pk.eyJ1IjoidGVhc2prb2Ftd2FyIiwiYSI6ImNrcW0xaDJnMTExMjEycW54am5vdXJ2em0ifQ.A00laVf9rRhXGtWvbExG-Q`)
    console.log(res.data)
     dispatch(setdistanceKm({
      distanceKm: Math.round( res.data.routes[0].distance/1000)
     }))
    // console.log(`https://api.mapbox.com/directions/v5/mapbox/driving/${from.lat},${from.lng};${to.lat},${to.lng}?annotations=maxspeed&overview=full&geometries=geojson&&access_token=pk.eyJ1IjoidGVhc2prb2Ftd2FyIiwiYSI6ImNrcW0xaDJnMTExMjEycW54am5vdXJ2em0ifQ.A00laVf9rRhXGtWvbExG-Q`)
    
    // console.log(result.data.routes.distance);
     history.push('/selectVehicle')
     
    // "https://api.mapbox.com/directions/v5/mapbox/driving/-122.39636,37.79129;-122.39732,37.79283;-122.39606,37.79349?annotations=maxspeed&overview=full&geometries=geojson&access_token=pk.eyJ1IjoidGVhc2prb2Ftd2FyIiwiYSI6ImNrcW0xaDJnMTExMjEycW54am5vdXJ2em0ifQ.A00laVf9rRhXGtWvbExG-Q""
}


      const dispatch = useDispatch()
      const [va, setVa] = React.useState("");
      const [des,setDes] = React.useState("");
      const handleChange =(add)=>{
            setVa(add)
      }
      const handelselect = (add)=>{
        dispatch(setPickup({
          pickUpLocation:add
        }))
        setVa(add)
           
                  geocodeByAddress(add)
                    .then(results => getLatLng(results[0]))
                    .then(latLng => {
                      
                      
                      console.log('Success', latLng)
                      setFrom({
                        lat:latLng.lat,
                        lng:latLng.lng
                
                        })
                   
                    
                    
                    })
                    .catch(error => console.error('Error', error));
                };
                const searchOptions = {
                  componentRestrictions: { country: ['jm'] },
                  // types: ['city']
                }
      const handleChangeDes =(add)=>{
            setDes(add)
      }
      const handelselectDes = (add)=>{
        setDes(add)
        console.log(add);
        dispatch(setdropoff({
          dropOffLocation:add
        }))
           
                  geocodeByAddress(add)
                    .then(results => getLatLng(results[0]))
                    .then(latLng => {
                      
                      console.log('Success', latLng)
                      setTo({
                        lat:latLng.lat,
                        lng:latLng.lng
                        })
                    
                    
                    })
                    .catch(error => console.error('Error', error));
                };
                

        let keyAdder = 0
        let keyAdderDes = 0
      return (
        
        <div>
          <Row>
          <Form.Group as={Col} sm='8' md='6'>
            <PlacesAutocomplete
              value={va}
              onChange={handleChange}
              onSelect={handelselect}
              searchOptions={searchOptions}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div style={{padding:'unset !important'}}>
                  <input
                    {...getInputProps({
                      placeholder: 'From :',
                      className: 'form-control search newsearch',
                    })}
                  />
                  {/* 
font-size: 14px;
    cursor: pointer;
    line-height: 1;
    padding: .5rem 1.5rem; */}
                  <div style={{padding:'unset !important'}}>
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                      ? 'supp'
                      : 'supp';
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { height:'50px',paddingBottom:'unset !important',margin:'0 !important', backgroundColor: 'grey',fontColor:'black', cursor: 'pointer',fontSize: '6px' ,lineHeight: '1',paddingBottom:'unset !important'}
                        : {  borderBottom:'5px solid red,color yellow',height:'50px',paddingBottom:'unset !important',backgroundColor: 'black', fontColor:'black', cursor: 'pointer',fontSize:'6px',lineHeight: '1',paddingBottom:'unset !important'}
                        keyAdder++

                      return (
                        <div
                        style={{padding:'unset !important'}}
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                          key = {keyAdder}
                        >
                          <p style={{paddingBottom:'unset !important'}}>{suggestion.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            </Form.Group>
            <Form.Group as={Col} sm='8' md='6'>
            <PlacesAutocomplete
              value={des}
              onChange={handleChangeDes}
              onSelect={handelselectDes}
              searchOptions={searchOptions}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: 'To :',
                      className: 'form-control search newsearch',
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { height:'50px',paddingBottom:'unset !important',margin:'0 !important', backgroundColor: 'grey',fontColor:'black', cursor: 'pointer',fontSize: '6px' ,lineHeight: '1',paddingBottom:'unset !important' }
                        :  {borderBottom:'5px solid red,color yellow',height:'50px',paddingBottom:'unset !important',backgroundColor: 'black', fontColor:'black', cursor: 'pointer',fontSize:'6px',lineHeight: '1',paddingBottom:'unset !important' };
                        keyAdderDes++


                      return (
                        
                        <div
                        
                        
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                          key = {keyAdderDes}
                        >
                          <p style={{paddingBottom:'0px !important'}}>{suggestion.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            </Form.Group>
            </Row>

            {/* <Link style={{padding:'unset unset unset unset',borderRadius:'12px',linHeight: '30px',paddingBottom: '5px'}} to='/selectVehicle'> */}
                <Button onClick={calDistance} style={{textTransform:'unset',backgroundColor:'#26a65b',paddingBottom: '5px'}} variant="contained" color="primary" disableElevation>
                 Continue
             </Button>

                {/* <button  onClick={calDistance} ><span style={{backgroundColor:'white',borderRadius:'12px'}} >Continue </span></button> */}
                
                </div>
            
          );
    
}

export default Mapp



 

