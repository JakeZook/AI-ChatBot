import "./App.css";
import logo from "./assets/chatgpt.svg";

function App() {
	return (
		<div className="App">
			<div className="sidebar">
				<div className="upperSide">
					<div className="upperSideTop">
						<img src={logo} alt="logo" className="logo" />
						<span className="brand">ZookGPT</span>
						<button className="midBtn">
							<img src="" alt="Add Chat Button" className="addBtn" />
							New Chat
						</button>
						<div className="upperSideBottom">
							<button className="query">
								<img src="" alt="" />
								What is programming?
							</button>
							<button className="query">
								<img src="" alt="" />
								What is programming?
							</button>
						</div>
					</div>
				</div>
				<div className="lowerSide"></div>
			</div>
			<div className="main"></div>
		</div>
	);
}

export default App;
