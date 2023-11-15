type Tag = `book` | `article` | `video`
type Topic = `web` | `gaming` | `softskills`

export interface WebNugget {
	id: string
	content: string
	link: string
	tag: Tag[]
	topic: Topic[]
}

export const emptyWebNuggets: ()=> WebNugget = () => ({
	id: `empty`,
	content: `empty`,
	link: `empty`,
	tag: [],
	topic: [],
})

export const webNuggets: ()=> WebNugget[] = () => [
	{
		id: `maps`,
		content: `I love google maps`,
		link: `https://www.google.com/maps`,
		tag: [`book`],
		topic: [`web`],
	},
	{
		id: `calendar`,
		content: `I love calendars`,
		link: `https://calendar.google.com/`,
		tag: [`article`],
		topic: [
			`web`,
			`gaming`,
		],
	},
]
