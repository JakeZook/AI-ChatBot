import { useState } from "react";

import "./App.css";

import logo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";

import { sendMsgToTrundle } from "./openAi";

function App() {
	const [input, setInput] = useState("");

	const handleSend = async () => {
		const res = await sendMsgToTrundle(input);
		console.log(res);
	};

	return (
		<div className="App">
			<div className="sideBar">
				<div className="upperSide">
					<div className="upperSideTop">
						<img src={logo} alt="logo" className="logo" />
						<span className="brand">TrundleGPT</span>
					</div>
					<button className="midBtn">
						<img src={addBtn} alt="new chat" className="addBtn" />
						New Chat
					</button>
					<div className="upperSideBottom">
						<button className="query">
							<img src={msgIcon} alt="Query" />
							What is programming?
						</button>
						<button className="query">
							<img src={msgIcon} alt="Query" />
							How to use an API
						</button>
					</div>
				</div>
				<div className="lowerSide">
					<div className="listItems">
						<img src={home} alt="home" className="listItemsImg" />
						Home
					</div>
					<div className="listItems">
						<img src={saved} alt="saved" className="listItemsImg" />
						Saved
					</div>
					<div className="listItems">
						<img src={rocket} alt="rocket" className="listItemsImg" />
						Upgrade
					</div>
				</div>
			</div>
			<div className="main">
				<div className="chats">
					<div className="chat">
						<img className="chatImg" src={userIcon} alt="" />
						<p className="txt">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							minus quas explicabo possimus. Repellendus atque maiores
							necessitatibus perferendis autem deserunt?
						</p>
					</div>
					<div className="chat bot">
						<img className="chatImg" src={logo} alt="" />
						<p className="txt">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
							molestias, repellat maiores id minus nihil excepturi eaque
							quisquam! Rerum, excepturi nisi? Est perferendis et maxime iure.
							Minus, pariatur, voluptas quae animi quis iste vel iusto fugiat
							eius dolores voluptatum sit? Laudantium amet ullam impedit tempora
							odit fuga unde excepturi ad deserunt? Rem qui facere cumque
							recusandae laudantium, necessitatibus sequi accusantium
							exercitationem blanditiis tempora, quod quasi voluptatibus? Labore
							iure vitae aspernatur nobis maxime optio minima soluta porro ipsa
							architecto blanditiis eligendi a voluptatibus minus odio totam
							nostrum saepe fugit, quo commodi. Perspiciatis fuga nisi assumenda
							quae minus iusto doloribus omnis ea?
						</p>
					</div>
				</div>
				<div className="chatFooter">
					<div className="inp">
						<input
							type="text"
							placeholder="Send a message"
							value={input}
							onChange={(e) => {
								setInput(e.target.value);
							}}
						/>
						<button className="send" onClick={handleSend}>
							<img src={sendBtn} alt="Send" />
						</button>
					</div>
					<p>TrundleGPT may produce incorrect information</p>
				</div>
			</div>
		</div>
	);
}

export default App;
