let counter = 0;	/*count the amount of saved form inputs*/
/*hide tooltips*/
const hideTooltips = () => {
	/*document.getElementsByTagName('h2')[0].removeAttribute("class");*/
	const tips = document.querySelectorAll('.tooltip');
	for (i=0; i<tips.length; i++) {
		tips[i].classList.remove('tooltip');
	};
	const tooltipButtonElement = document.getElementById('hide-tooltip-button');
	tooltipButtonElement.remove();
};
/*save input 1*/
const saveClientName = () => {
	counter += 1;
	console.log(counter);
	document.getElementById('client-name').innerHTML = document.getElementById('client-name-input').value;
	const clientNameInputElement = document.getElementById('client-name-input');
	clientNameInputElement.remove();
	const clientNameButtonElement = document.getElementById('client-name-button');
	clientNameButtonElement.remove();
};
/*save input 2*/
const saveCompanyName = () => {
	counter += 1;
	console.log(counter);
	document.getElementById('client-company').innerHTML = "(" + document.getElementById('company-name-input').value + ")";
	const companyNameInputElement = document.getElementById('company-name-input');
	companyNameInputElement.remove();
	const companyNameButtonElement = document.getElementById('company-name-button');
	companyNameButtonElement.remove();
};
/*save input 3*/
const saveClientAddress = () => {
	counter += 1;
	console.log(counter);
	document.getElementById('client-address').innerHTML = "Address: " + document.getElementById('client-address-input').value;
	const clientAddressInputElement = document.getElementById('client-address-input');
	clientAddressInputElement.remove();
	const clientAddressButtonElement = document.getElementById('client-address-button');
	clientAddressButtonElement.remove();
};
/*save input 4*/
const saveClientProject = () => {
	counter += 1;
	console.log(counter);
	document.getElementById('client-project').innerHTML = document.getElementById('client-project-input').value;
	const clientProjectStarElement = document.getElementById('project-required-field');
	clientProjectStarElement.remove();
	const clientProjectInputElement = document.getElementById('client-project-input');
	clientProjectInputElement.remove();
	const clientProjectButtonElement = document.getElementById('client-project-button');
	clientProjectButtonElement.remove();
};
/*save input 4*/
const saveClientEstimate = () => {
	counter += 1;
	console.log(counter);
	document.getElementById('client-estimate').innerHTML = document.getElementById('client-estimate-input').value + " plus GST.";
	const clientEstimateStarElement = document.getElementById('estimate-required-field');
	clientEstimateStarElement.remove();
	const clientEstimateInputElement = document.getElementById('client-estimate-input');
	clientEstimateInputElement.remove();
	const clientEstimateButtonElement = document.getElementById('client-estimate-button');
	clientEstimateButtonElement.remove();
};
/*current date*/
const insertCurrentDate = (event) => {
	event.preventDefault();
	var today = new Date();
	var month = today.toLocaleString('default', { month: 'long' });
	var dd = String(today.getDate());
	var yyyy = today.getFullYear();
	var week = today.toLocaleString('default', { weekday: 'long' });
	today = month + ' ' + dd + ', ' + yyyy + ' (' + week + ')';
	document.getElementById('date-input').value = today;
};