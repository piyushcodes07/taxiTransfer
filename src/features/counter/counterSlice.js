import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    
    customerName:null,
    pickUpLocation:null,
    Cost:null,
    returnCost:null,
    isReturn:null,
    dropOffLocation:null,
    distanceKm:null,
    time:null,
    date:null,
    cardNum:null,
    cvv:null,
    expiaryDate:null,
    vehicleType:null,
}
//
const counterSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setPickup:(state,action)=>{
            state.pickUpLocation = action.payload.pickUpLocation
            
        },
        setdropoff:(state,action)=>{
            state.dropOffLocation = action.payload.dropOffLocation
        },
        setdistanceKm:(state,action)=>{
            state.distanceKm = action.payload.distanceKm
        },
        setPrice:(state,action)=>{
            state.Cost = action.payload.bothCost


        }

    
    }
});

export const {setPickup,setdropoff,setdistanceKm,setPrice} = counterSlice.actions
export const selectpickUpLocation = state => state.userData.pickUpLocation
export const selectdropOffLocation = state => state.userData.dropOffLocation
export const selectdistanceKm= state => state.userData.distanceKm
export const selectCost= state => state.userData.Cost
export default counterSlice.reducer