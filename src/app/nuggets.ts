export type Format = `book` | `article` | `video` | `tip` | `podcast`
export type Topic = `web` | `gaming` | `softskills` | `angular` | `javascript`

export const IconConverter: Record<Format, string> = {
	book: `menu_book`,
	article: `article`,
	video: `videocam`,
	tip: `lightbulb`,
	podcast: `mic`,
}

export interface WebNugget {
	id: string
	title: string
	content: string
	link: string
	format: Format
	date: string
	topics: Topic[]
}

export const emptyWebNuggets: ()=> WebNugget = () => ({
	id: `empty`,
	title: `empty`,
	content: `empty`,
	link: `empty`,
	format: `book`,
	topics: [],
	date: `0000-00-00`,
})

export const webNuggets: ()=> WebNugget[] = () => [
	{
		id: `debugging-csp`,
		title: `Debugging Content-Security-Policy`,
		content: `
		Debugging HTTP headers can be a nightmare, mainly due to the lack of feedback. 
		One of the best approaches for me is to use multiple browsers. Firefox tends 
		to provide more verbose information on this matter. Another useful trick is 
		the website csp.withgoogle.com, where you can input your CSP header and check 
		for any security issues.
		`,
		link: `https://csp.withgoogle.com/docs/index.html`,
		format: `tip`,
		topics: [`web`],
		date: `2024-04-24`,
	},
	{
		id: `beforeunload`,
		title: `Dialog before leaving page and lose data`,
		content: `
		If you want to implement a feature like "You will lose your data, are you sure 
		you want to leave?" in Angular, there are two ways. The first one that comes to 
		mind is to use guards. The benefit is that you can customize your dialog box. The 
		downside, and a big one, is that it won't be triggered if you have an external 
		redirection or if you close the browser or the tab. Therefore, you have the 
		beforeunload event in JavaScript. It triggers the system dialog "if you leave, 
		you will lose your data". It's not the best-looking dialog, but there is a clear 
		reason why you can't customize it. If you could, then you could block a user 
		from leaving or closing your website by never letting them give the option to 
		close the dialog. Nevertheless, it's not always used on the web. GitHub, for 
		example, sometimes uses it, sometimes not.
		`,
		link: `https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event`,
		format: `tip`,
		topics: [
			`web`,
			`angular`,
			`javascript`,
		],
		date: `2024-04-24`,
	},
	{
		id: `githubpagesrouting`,
		title: `GitHub pages angular redirection`,
		content: `
		GitHub Pages doesn't support Angular routing out of the box. One solution is 
		to use hashtag routes. However, they look odd and aren't common. Also, they add 
		confusion since hashtags are typically used to jump to headings on the current 
		page. So when you type http://user.github.io/project/any-other-page, GitHub 
		doesn't recognize this page because it serves only the index.html. Therefore, when 
		it doesn't know the URL, it redirects to the 404.html page. The trick is to 
		duplicate your index.html and name it also 404.html. Then Angular can manage 
		the routing as normal.
		`,
		link: `https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event`,
		format: `tip`,
		topics: [
			`web`,
			`javascript`,
			`angular`,
		],
		date: `2024-04-24`,
	},
	{
		id: `spot-the-difference`,
		title: `Spot the difference `,
		content: `
		As a developer, I've found it really helpful to pay attention to the user experience 
		on other websites, especially the ones that are considered the best: YouTube, Google,
		GitHub, and Mozilla. Then, I can compare it with my own websites. For example, 
		sometimes I'm surprised that developers tend to reinvent the wheel instead of simply 
		checking out the best websites and seeing how they do things, especially for the 
		frontend part (which is mostly open source), or at least how fast their websites load.
		Also, we sometimes overlook poor website performance. We get used to it and never 
		really ask ourselves, "Should it be that slow?" So, my advice is to always compare 
		your website with the best in class and pay attention to details like how fast 
		a button loads, which HTTP headers they use, how many endpoints they call, and 
		what kind of caching they implement. Even if you don't know everything, this skill 
		will help you continuously improve and stay up to date.
		`,
		link: ``,
		format: `tip`,
		topics: [`web`],
		date: `2024-04-26`,
	},
	{
		id: `eventlistener-once`,
		title: `addEventListener once`,
		content: `
		Recently, I learned about the existence of the "once" option in the addEventListener 
		method. It's a quite useful parameter that allows your event to run only once and 
		then destroy itself. For example, if you want to add a click event on a button and 
		prevent multiple clicks, you can add the "once" parameter. Then, you don't have to 
		worry anymore about whether the button is clicked multiple times. (This was a 
		made-up example and there may be better ways to handle this case.)
		`,
		link: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#once`,
		format: `tip`,
		topics: [`javascript`],
		date: `2024-04-26`,
	},
	{
		id: `export-fixtures`,
		title: `Unit tests, fixtures and exports`,
		content: `
		When using Jest, you need to be careful with your fixtures and exports. If in 
		your test file you import from another file that also contains unit tests, those 
		tests will be executed. This happened to me when I left the fixtures in test file 
		A and then tried to use the same fixture in test file B. The easiest solution for 
		me was to always separate fixtures and put them in their own file containing only 
		fixtures.
		`,
		link: ``,
		format: `tip`,
		topics: [`javascript`],
		date: `2024-04-26`,
	},
	{
		id: `commitlint`,
		title: `Clean commits`,
		content: `
		Having clean commits helps maintain structure in your repository history. It also 
		allows you to generate automated change logs based on the commit messages. However, 
		as with many DevOps topics, implementing these kind of tools can be cumbersome.
		Fortunately, there's a very useful tool called commitlint. It allows you to 
		check/lint all your commit messages out of the box if you use the recommended 
		rules. These rules are already quite good overall, but if they don't suit your
		taste, you can override the configuration file and decide on many other things.
		`,
		link: `https://github.com/conventional-changelog/commitlint`,
		format: `tip`,
		topics: [`web`],
		date: `2024-04-26`,
	},
	{
		id: `coutinuous-delivery`,
		title: `Continuous delivery`,
		content: `
		Continuous delivery has a superpower: it reveals many flaws in your process if you 
		don't use it. For example, if you haven't automated migration files in your project, 
		then you can't implement continuous delivery because it requires automatically 
		deploying your websites, which needs scripts. Another point is that when you deploy 
		multiple times per day, it means you need to have high stability. In the old days, 
		this stability wasn't really there and was covered by multiple environments and 
		manual testers to have high confidence in the next planned release. To gain this 
		stability, you need to have a well-tested application, both frontend and backend. 
		Some teams achieve it only with unit tests and contract testing. They really 
		avoid end-to-end testing because they consider it too expensive and still 
		achieve high confidence with only unit and contract testing. Another important 
		aspect of continuous delivery is using feature flags. They allow you to deploy 
		new features that stay invisible to the user. Then, when everyone thinks it's 
		really ready to be shown to others, the flag is activated.
		`,
		link: ``,
		format: `tip`,
		topics: [`web`],
		date: `2024-04-26`,
	},
]
