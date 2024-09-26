import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {

	let [inputValue, setInputValue] = useState("");
	let [arrToDo, setArrToDo] = useState([])
	let [hoverIndex, setHoverIndex] = useState(false)

	const handleKeyDown = (e) => {
		if (inputValue.trim() === "") return
		if (e.key === "Enter") {
			setArrToDo([...arrToDo, inputValue.trim()]);
			setInputValue("");
		}
	};

	const handleDelete = (index) => {
		setArrToDo(arrToDo.filter((curr, i) => i !== index));
	};

	return (
		<div className="container w-50 text-center mt-5 d-flex flex-column">
			<div className="mb-2">
				<h1 className="display-2 fw-light text-muted">todos</h1>
			</div>

			<ul class="list-group rounded-0">
				<li class="list-group-item input-group-md">
					<input
						className="border-0 d-block text-start form-control text-secondary fs-4"
						type="text"
						onKeyDown={handleKeyDown}
						onChange={e => setInputValue(e.target.value)}
						value={inputValue}
						placeholder={arrToDo.length === 0 ? "No hay tareas, añadir tareas" : ""}
					/>
				</li>
				{arrToDo.map((element, index) =>
					<li
						key={index}
						class="list-group-item d-flex justify-content-between text-secondary fs-4"
						onMouseEnter={() => setHoverIndex(index)}
						onmouseLeave={() => setHoverIndex(null)}
					> {element}
						{hoverIndex === index && (
							<button
								className="btn btn-sm justify-content-between"
								onClick={() => handleDelete(index)}
							>
								x
							</button>
						)}
					</li>

				)}
				<li className="list-group-item text-start text-secondary">
					<h6 className="h6 fw-lighter"><small>{arrToDo.length} items left</small> </h6>
				</li>
				<div className="backgroundBox1"></div>
				<div className="backgroundBox2"></div>
			</ul>

			<div class="background-box">back1</div>
			<div class="background-box2">back2</div>
		</div>
	);
};

export default Home;
