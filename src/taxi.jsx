import React from 'react'
import Standard from './standard'
import Family from './family'
import Vip from './vip'
import Minivan from './minivan'
import SmallBus from './smallBus'
import Coach from './coach'
import FromTo from './fromTo'
import { Link } from 'react-router-dom'


export default function taxi() {
	return (
		<div>
			<FromTo/>
			<Standard/>
			<Family/>
			<Vip/>
			<Minivan/>
			<SmallBus/>
			<Coach/>
			
			
			
			
			
		</div>
	)
}
