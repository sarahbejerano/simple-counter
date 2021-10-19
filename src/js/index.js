//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";

// por que el contador cuenta 10 segundos??

function SimpleCounter() {
	const [counter, setCounter] = useState(0);
	useEffect(function() {
		const intervalId = setInterval(function() {
			setCounter(counter => counter + 1);
			console.log(counter);
		}, 1000); //1000 es un segundo
		return function() {
			clearInterval(intervalId);
		};
	}, []);
	return (
		<div className="bigCounter">
			<div className="clock">I</div>
			<div className="four">{Math.floor(counter / 10000) % 10}</div>
			<div className="three">{Math.floor(counter / 1000) % 10}</div>
			<div className="two">{Math.floor(counter / 100) % 10}</div>
			<div className="one">{Math.floor(counter / 10) % 10}</div>
		</div>
	);
}

ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
