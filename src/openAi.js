import { OpenAI } from "openai";

const openai = new OpenAI({
	apiKey: import.meta.env.VITE_API_KEY,
	dangerouslyAllowBrowser: true,
});

export async function sendMsgToTrundle(input) {
	const data = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: [{ role: "user", content: input }],
	});
	const res = data.choices[0].message.content;
	return res;
}
