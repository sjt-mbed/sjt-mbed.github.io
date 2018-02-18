import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RentifyApp from './routes';
import '@shopify/polaris/styles.css';
import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
		<RentifyApp></RentifyApp>
	), document.getElementById('root'));

registerServiceWorker();
