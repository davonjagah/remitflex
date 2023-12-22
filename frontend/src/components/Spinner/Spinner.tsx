import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './Spinner.styles';


const Spinner : ()  => JSX.Element = () => (
	<SpinnerOverlay>
		  <SpinnerContainer/>
	</SpinnerOverlay>
	);

export default Spinner;