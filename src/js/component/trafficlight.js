import React, { useState, useEffect } from "react";

const Traffic = () => {
	const [color, setcolor] = useState("red");
	return (
		<div className="d-flex justify-content-center">
			<div className="trafficLight">
				<div
					onClick={() => setcolor("red")}
					className={
						"Light red" + (color === "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setcolor("yellow")}
					className={
						"Light yellow" + (color === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setcolor("green")}
					className={
						"Light green" + (color === "green" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
};
export default Traffic;
