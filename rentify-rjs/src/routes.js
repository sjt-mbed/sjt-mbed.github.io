import React from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'
import samplePage from './App'
import landingPage from './landingPage'
import manageRentalProducts from './manageRentalProducts'

import { Tabs } from '@shopify/polaris';


const RentifyApp = () => {
	return <Router>
		<div>
			<Tabs
				selected={1}
				tabs={[
					{
						id: 'home',
						content: 'Home',
						panelID: 'home-content',
						url: '/'
						
					},
					{
						id: 'landing',
						content: 'Landing',
						panelID: 'landing-content',
						url: '/landing',
					},
					{
						id: 'topics',
						content: 'Topics',
						panelID: 'topic-content',
						url: '/topics'
						
					},					
				]}
			/>

			<Route exact path="/" component={samplePage}/>
			<Route exact path="/landing" component={landingPage}/>
			<Route exact path="/topics" component={Topics}/>
			<Route exact path="/managerentalproducts" component={manageRentalProducts}/>
		</div>
	</Router>;
}

const Topics = () => {
	return <div>
		<h2>Topics</h2>
	</div>;
}


export default RentifyApp;