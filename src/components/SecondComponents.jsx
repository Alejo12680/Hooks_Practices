import React, { useState } from 'react'

export const SecondComponents = () => {

	const [name, setName] = useState("Alejandro")

	// Convencion de parte booleano es 'IS' true=1, false=2
	const [isNameChanged, setIsNameChanged] = useState(false);


	const changeName = (e) => {
		if (isNameChanged) {
			setName("Alejandro")

		} else {
			setName("Cambie el nombre")

		}

		setIsNameChanged(!isNameChanged);
	}


	return (
		<div>
			<h3>Comonente: SecondComponent</h3>
			<p>{name} </p>

			<div>
				<button className='button-large' onClick={changeName}>
					Cambiar Nombre de arriba
				</button>
			</div>
		</div>
	)
}
