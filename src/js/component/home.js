import React from "react";

import Game from "./Game";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5 text-light">
			<Game></Game>
		</div>
	);
}
