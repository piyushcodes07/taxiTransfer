import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {selectpickUpLocation,selectdropOffLocation} from './features/counter/counterSlice'

export default function FromTo() {

    var  to = useSelector(selectdropOffLocation)
    var from = useSelector(selectpickUpLocation)
    var to  = to.split(' ').slice(0,2).join(' ')
    var from = from.split(' ').slice(0,2).join(' ')
    
    return (
        <div >
            <h3 style={{textAlign:'center',marginTop:'40px'}}>{from} — {to}...</h3>
            
        </div>
    )
}
