import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor]= useState ("")
	


	return (
		<div className="traffic-light">
			<div className="red" onClick={()=>{setColor("red")}}></div>
			<div className="yellow"onClick={()=>{setColor("yellow")}}>{color}</div>
			<div className="green"onClick={()=>{setColor("green")}}></div>
			
		</div>
	);
};

export default Home;