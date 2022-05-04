import React, { useState, useEffect } from "react";

const Traffic = () => {
	const [color, setcolor] = useState();
	return (
		<div className="d-flex justify-content-center">
			<div className="stick"></div>
			<div className="trafficLight">
				<div className="Light red mx-auto"></div>
				<div className="Light yellow mx-auto"></div>
				<div className="Light green mx-auto"></div>
			</div>
		</div>
	);
};
export default Traffic;
