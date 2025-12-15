import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("")



	return (
		
		<div className="traffic-light">
			<div className={`red ${color === "red" ? "active" : ""}`} onClick={() => setColor("red")}></div>
			<div className={`yellow ${color === "yellow" ? "active" : ""}`} onClick={() => setColor("yellow")}></div>
			<div className={`green ${color === "green" ? "active" : ""}`} onClick={() => setColor("green")}></div>

		</div>
	);
};

export default Home;