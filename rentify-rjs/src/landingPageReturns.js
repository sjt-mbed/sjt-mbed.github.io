import React, {Component} from 'react'
import {
	Layout,
	Card,
	Badge
} from '@shopify/polaris';

class ReturnsCard extends Component {
	/* Variables in this component */
	constructor(props) {
		super(props);
		this.state = {
			ReturnsState: false,
		};
	}
	
	/* Card that shows state of Product Management */
	render () {
		return this.state.ReturnsState 
		? this.holdsNotEmpty()
		:this.holdsEmpty();
	}
	
	toggleProducts(){
		this.setState(({ReturnsState}) => ({ReturnsState: !ReturnsState}));
	}
	holdsEmpty () {
		return (
			 <Layout.Section>
				<Card
					title="Returns"
					primaryFooterAction={{
						content: 'Checkin Returns',
						onAction: this.toggleProducts.bind(this, this.productState),
						/* url: '/topics', */
					}}
				>
					<Card.Section>
						<p><Badge>No</Badge> orders for dispatch from your store</p>
					</Card.Section>
				</Card>
			 </Layout.Section>			
		);
	}
	holdsNotEmpty () {
		return (
			 <Layout.Section>
				<Card
					title="Returns"
					secondaryFooterAction={{
						content: 'Checkin Returns',
						onAction: this.toggleProducts.bind(this, this.productState),
					}}
				>
					<Card.Section>
						<p><Badge>32</Badge> products needs dispatch from your store</p>
					</Card.Section>
				</Card>
			 </Layout.Section>
		);
	}	
}

export default ReturnsCard;