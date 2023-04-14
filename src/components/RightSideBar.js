function RightSideBar() {
	return (
		<>
			{/* <ul className="nav nav-tabs" id="newmyTab" role="tablist">
				<li className="nav-item" role="presentation">
					<button
						className="nav-link"
						id="style-tab"
						data-bs-toggle="tab"
						data-bs-target="#style"
						type="button"
						role="tab"
						aria-controls="style"
						aria-selected="false"
					>
						<i className="fa fa-paint-brush"></i>
					</button>
				</li>
			</ul> */}
			<div className="tab-content" id="rgtSideBar">
				<div
					className="tab-pane fade show active"
					id="style"
					role="tabpanel"
					aria-labelledby="style-tab"
				>
					<div id="styles-container"></div>
				</div>
			</div>
		</>
	)
}

export default RightSideBar
