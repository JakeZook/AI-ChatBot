import { useEffect, useRef, useState } from "react";

import "./App.css";

import logo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
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
	const [isTyping, setIsTyping] = useState(false);

	useEffect(() => {
		msgEnd.current.scrollIntoView();
	}, [messages]);

	const handleSend = async () => {
		const text = input;
		setInput("");

		setIsTyping(true);

		setMessages([...messages, { text, isBot: false }]);

		const res = await sendMsgToTrundle(text);
		setMessages([
			...messages,
			{ text, isBot: false },
			{ text: res, isBot: true },
		]);

		setIsTyping(false);
	};

	const handleEnter = async (e) => {
		if (e.key === "Enter") await handleSend();
	};

	const handleQuery = async (e) => {
		const text = e.target.value;
		setIsTyping(true);
		setMessages([...messages, { text, isBot: false }]);

		const res = await sendMsgToTrundle(text);
		setMessages([
			...messages,
			{ text, isBot: false },
			{ text: res, isBot: true },
		]);

		setIsTyping(false);
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
					<div className="d-flex justify-content-center">
						<h2>Contact:</h2>
						<div>
							<a
								href="http://www.linkedin.com/in/jake-zook-b27992222"
								target="_blank"
								className="m-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									fill="currentColor"
									className="bi bi-linkedin"
									viewBox="0 0 16 16"
								>
									<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
								</svg>
							</a>
							<a
								href="https://github.com/JakeZook"
								target="_blank"
								className="m-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									fill="currentColor"
									className="bi bi-github"
									viewBox="0 0 16 16"
								>
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
								</svg>
							</a>
							<a
								href="mailto: jakezook01@gmail.com"
								target="_blank"
								className="m-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									fill="currentColor"
									className="bi bi-envelope"
									viewBox="0 0 16 16"
								>
									<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
								</svg>
							</a>
						</div>
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
				<h3>{isTyping ? "Trundle is typing..." : null}</h3>
				<div className="chatFooter">
					<div className="inp">
						<input
							type="text"
							placeholder="Send a message"
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
