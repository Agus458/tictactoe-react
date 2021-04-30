import React, { useState } from "react";
import Cuadrado from "./Cuadrado";

export default function Game() {
	const [turno, setTurno] = useState("X");

	function cambiarEstado() {
		if (turno == "X") {
			setTurno("O");
		} else {
			setTurno("X");
		}
		console.log(turno);
	}

	return (
		<div className="container">
			<h1>Tic Tac Toe</h1>
			<h3>Jugador actual: X</h3>
			<div id="tablero" className="container">
				<div className="row mt-3">
					<Cuadrado onClick={cambiarEstado} />
					<Cuadrado onClick={cambiarEstado} />
					<Cuadrado onClick={cambiarEstado} />
				</div>
				<div className="row mt-3">
					<Cuadrado onClick={cambiarEstado} />
					<Cuadrado onClick={cambiarEstado} />
					<Cuadrado onClick={cambiarEstado} />
				</div>
				<div className="row mt-3">
					<Cuadrado onClick={cambiarEstado} />
					<Cuadrado onClick={cambiarEstado} />
					<Cuadrado onClick={cambiarEstado} />
				</div>
			</div>
		</div>
	);
}
