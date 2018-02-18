import React, {Component} from 'react'
import {
	Page,
	Layout,
	Card,
	Badge,
	Tabs,
	FormLayout,
	TextField,
	Select,
	Icon
} from '@shopify/polaris';

class manageRentalProducts extends Component {
	render () {
		return (
			<Page
				breadcrumbs={[
					{content: 'Rentify Home', url: '/landing'}
				]}
				title="Rental Products"
				primaryAction={{
					content: 'Add Rental Product',
					disabled: false,
				}}
				fullWidth={false}
			>
				<Card>
<Tabs

  selected={0}

  tabs={[

    {

      id: 'all-customers',

      content: 'All',

      accessibilityLabel: 'All customers',

      panelID: 'all-customers-content',

    },

    {

      id: 'accepts-marketing',

      content: 'Accepts marketing',

      panelID: 'accepts-marketing-content',

    },

    {

      id: 'repeat-customers',

      content: 'Repeat customers',

      panelID: 'repeat-customers-content',

    },

    {

      id: 'prospects',

      content: 'Prospects',

      panelID: 'prospects-content',

    },

  ]}

/>					<Card.Section>
						{this.searchField()}	
					</Card.Section>
					<Card.Section>
						<p>Add Table Header and List below</p>
					</Card.Section>
				</Card>
				<p>Page content</p>
			</Page>
		)
	}
	
	searchField () {
		return (
			<FormLayout>
			  <TextField
				placeholder="Search"
				prefix={<Icon source="search" disabled />}
				connectedLeft={<Select label="Unit of time" labelHidden options={['Filter Products']} />}
			  />
			</FormLayout>		
		);
	}
	
}

export default manageRentalProducts;