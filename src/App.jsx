import { useEffect, useRef, useState } from "react";

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
	const msgEnd = useRef(null);

	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([
		{
			text: "Hi, I am Trundle. Ask me anything!",
			isBot: true,
		},
	]);

	useEffect(() => {
		msgEnd.current.scrollIntoView();
	}, [messages]);

	const handleSend = async () => {
		const text = input;
		setInput("");

		setMessages([...messages, { text, isBot: false }]);

		const res = await sendMsgToTrundle(text);
		setMessages([
			...messages,
			{ text, isBot: false },
			{ text: res, isBot: true },
		]);
	};

	const handleEnter = async (e) => {
		if (e.key === "Enter") await handleSend();
	};

	const handleQuery = async (e) => {
		const text = e.target.value;
		setMessages([...messages, { text, isBot: false }]);

		const res = await sendMsgToTrundle(text);
		setMessages([
			...messages,
			{ text, isBot: false },
			{ text: res, isBot: true },
		]);
	};

	return (
		<div className="App">
			<div className="sideBar">
				<div className="upperSide">
					<div className="upperSideTop">
						<img src={logo} alt="logo" className="logo" />
						<span className="brand">TrundleGPT</span>
					</div>
					<button
						className="midBtn"
						onClick={() => {
							window.location.reload();
						}}
					>
						<img src={addBtn} alt="new chat" className="addBtn" />
						New Chat
					</button>
					<div className="upperSideBottom">
						<h1 className="header">Try these prompts!</h1>
						<button
							className="query"
							onClick={handleQuery}
							value={"What is AI?"}
						>
							<img src={msgIcon} alt="Query" />
							What is AI?
						</button>
						<button
							className="query"
							onClick={handleQuery}
							value={"How do you use an API?"}
						>
							<img src={msgIcon} alt="Query" />
							How do you use an API?
						</button>
						<button
							className="query"
							onClick={handleQuery}
							value={"Will AI take over the world?"}
						>
							<img src={msgIcon} alt="Query" />
							Will AI take over the world?
						</button>
						<button
							className="query"
							onClick={handleQuery}
							value={"What should I make for dinner?"}
						>
							<img src={msgIcon} alt="Query" />
							What should I eat for dinner?
						</button>
						<button
							className="query"
							onClick={handleQuery}
							value={"Tell me a joke."}
						>
							<img src={msgIcon} alt="Query" />
							Tell me a joke.
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
					{messages.map((message, i) => (
						<div key={i} className={message.isBot ? "chat bot" : "chat"}>
							<img
								className="chatImg"
								src={message.isBot ? logo : userIcon}
								alt=""
							/>
							<p className="txt">{message.text}</p>
						</div>
					))}
					<div ref={msgEnd} />
				</div>
				<div className="chatFooter">
					<div className="inp">
						<input
							type="text"
							placeholder="Send a message"
							onClick={handleQuery}
							value={input}
							onKeyDown={handleEnter}
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
