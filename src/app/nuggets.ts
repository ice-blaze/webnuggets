export type Format = `book` | `article` | `video` | `tip` | `podcast`
export type Topic = `web` | `gaming` | `softskills` | `angular` | `javascript` | `css` | `accessibility` | `devops`

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

	{
		id: `sbb-angular`,
		title: `SBB Angular documentation`,
		content: `
		The Swiss Federal Railways has public documentation similar to a Storybook.js. 
		Since it's of good quality, I think it's great to take a look at it🙂!
		`,
		link: `https://angular.app.sbb.ch/angular/introduction/getting-started`,
		format: `tip`,
		topics: [`angular`],
		date: `2024-04-26`,
	},

	{
		id: `optimization-object-destructuring`,
		title: `Bundle size analysis and object desctructuring`,
		content: `
		Sometimes it's interesting to dig deep into the details. In my comment here, 
		I wanted to see how optimized different coding styles can be. Of course, we're 
		talking about just a few bytes, and I'll always prioritize maintainability over 
		performance. But for some people, performance prevails, and in web development, 
		every byte can count.
		`,
		link: `https://stackoverflow.com/a/77257279/3012928`,
		format: `article`,
		topics: [`javascript`],
		date: `2024-04-26`,
	},

	{
		id: `angular-binding-specificity`,
		title: `Angular binding specificity`,
		content: `
		A good article about the basics of binding in Angular. It's always a good reminder.
		`,
		link: `https://www.angulartraining.com/daily-newsletter/increasing-binding-specificity/`,
		format: `article`,
		topics: [`angular`],
		date: `2024-04-26`,
	},

	{
		id: `base64-images-shouldnt-be-used`,
		title: `Base64 images shouldn't be used`,
		content: `
		An interesting article about why you should not use base64 images. In summary, 
		they're 30% larger than using standard images, and the browser won't be able to 
		cache them. Base64 images may only be acceptable when you have a lot of very small 
		images.
		`,
		link: `https://bunny.net/blog/why-optimizing-your-images-with-base64-is-almost-always-a-bad-idea/`,
		format: `article`,
		topics: [`web`],
		date: `2024-04-26`,
	},

	{
		id: `chrome-developer-tools`,
		title: `Chrome developer tools`,
		content: `
		Chrome already contains a lot of cool tools. One of my favorites are: 
		the color picker, coverage for CSS/JS, and pretty print. You can 
		find out more in this article.
		`,
		link: `https://betterprogramming.pub/10-must-know-chrome-developer-tools-and-tricks-d03f75d10cc9`,
		format: `article`,
		topics: [`web`],
		date: `2024-04-26`,
	},

	{
		id: `console-dir`,
		title: `Console.dir`,
		content: `
		I recently learned about console.dir, which seems like an interesting tool 
		for debugging in more detail.
		`,
		link: `https://twitter.com/samijaber_/status/1633509181025320960`,
		format: `article`,
		topics: [`angular`],
		date: `2024-04-26`,
	},

	{
		id: `css-text-wrap-balance`,
		title: `CSS text-wrap: balance `,
		content: `
		There's a new value for text-wrap now, and it's "balance." Here's a video that gives 
		you more insights.
		`,
		link: `https://www.youtube.com/watch?v=L9ihWHngk9E`,
		format: `video`,
		topics: [`css`],
		date: `2024-04-26`,
	},

	{
		id: `dont-use-shortening-url-service`,
		title: `Don't use a url shortening service`,
		content: `
		An interesting article about why a url shortening service can be your doom 🙃
		`,
		link: `https://shkspr.mobi/blog/2023/02/never-use-a-url-shortening-service-even-if-you-own-it/`,
		format: `article`,
		topics: [`web`],
		date: `2024-04-26`,
	},

	{
		id: `image-loading-optimization`,
		title: `Image loading optimization`,
		content: `
		Great video about image loading on your website. In Angular, we have 
		NgOptimizedImage that covers some of the aspects mentioned in the video.
		`,
		link: `https://twitter.com/Steve8708/status/1618634232942981120`,
		format: `video`,
		topics: [`web`],
		date: `2024-04-26`,
	},

	{
		id: `angular-setters-for-inputs`,
		title: `Angular inputs setters`,
		content: `
		In Angular, we can use setters with inputs, which allows us to reduce the size 
		of the ngOnChanges method. However, when you want to use the input as a variable,
		I would suggest keeping the traditional way instead of using a getter/setter. Also, 
		you have to keep in mind that now transforms exist with inputs. They are limited,
		but maybe they will cover your case.
		`,
		link: `https://www.angulartraining.com/daily-newsletter/using-setters-for-better-input/`,
		format: `article`,
		topics: [`angular`],
		date: `2024-04-26`,
	},

	{
		id: `double-async-pipe`,
		title: `Double async pipe`,
		content: `
		Cool trick to merge multiple async pipes into one variable.
		`,
		link: `https://www.angulartraining.com/daily-newsletter/one-more-async-pipe-syntax-trick/`,
		format: `article`,
		topics: [`angular`],
		date: `2024-04-26`,
	},

	{
		id: `angular-transforms`,
		title: `Angular transforms`,
		content: `
		Transforms are a tool that we've been waiting for a long time, and we're happy 
		that they've finally arrived.
		`,
		// eslint-disable-next-line @stylistic/js/max-len
		link: `https://netbasal.com/say-goodbye-to-setters-and-getters-angulars-transform-option-for-input-values-88fd9442dcad`,
		format: `article`,
		topics: [`angular`],
		date: `2024-04-26`,
	},

	{
		id: `codelyzer`,
		title: `Codelyzer`,
		content: `
		Accessibility can be tricky, and if we have the tools to help us in this quest 
		for an inclusive web, then everyone should praise it! :)
		`,
		link: `https://web.dev/articles/accessible-angular-with-codelyzer`,
		format: `article`,
		topics: [
			`angular`,
			`accessibility`,
		],
		date: `2024-04-26`,
	},

	{
		id: `avoid-shared-angular-modules`,
		title: `Avoid shared Angular modules`,
		content: `
		Using a shared module isn't always the best idea. There's a risk of bloating the 
		bundle with code that will mostly never be used. This problem is solved by using 
		standalone components, which didn't exist at the time of the article.
		`,
		link: `https://indepth.dev/posts/1191/stop-using-shared-material-module`,
		format: `article`,
		topics: [`web`],
		date: `2024-04-26`,
	},

	{
		id: `browser-native deep object cloning`,
		title: `Browser-native deep object cloning`,
		content: `
		Every time we learn about a cool native functionality, the web developer is happy. 
		Here, we can do deep object cloning natively, which is great news! :)
		`,
		link: `https://twitter.com/Steve8708/status/1524055922997309442`,
		format: `video`,
		topics: [`javascript`],
		date: `2024-04-26`,
	},

	{
		id: `initiator-highlight`,
		title: `Initiator highlight`,
		content: `
		When holding the shift key while hovering over a request on Chrome DevTools 
		will highlight the initiator in green and dependencies in red.
		`,
		link: `https://twitter.com/guaca/status/1544967782206431234`,
		format: `article`,
		topics: [`web`],
		date: `2024-04-26`,
	},

	{
		id: `editor-sticky-scroll`,
		title: `Editor sticky scroll`,
		content: `
		A cool feature in VS Code is the sticky scroll. It allows you to always see 
		which parent indent you are currently in.
		`,
		link: `https://learn.microsoft.com/en-us/visualstudio/ide/editor-sticky-scroll`,
		format: `tip`,
		topics: [`web`],
		date: `2024-04-26`,
	},

	{
		id: `prettier-plugin-html-attributes`,
		title: `Prettier plugin for HTML attributes`,
		content: `
		I like when linters can enforce rules. The more you can script the guidelines, 
		the better it is. Here we have a plugin for arranging HTML attributes.
		`,
		link: `https://twitter.com/realTomaszKula/status/1557676393491742721`,
		format: `article`,
		topics: [`web`],
		date: `2024-04-26`,
	},

	{
		id: `code-coverage-best-practices`,
		title: `Code coverage best practices`,
		content: `
		I would have loved to read this page when I started doing unit tests. 
		I found it later on, but was happy to confirm what I had read in other places 
		was similar to this Google article.
		`,
		link: `https://testing.googleblog.com/2020/08/code-coverage-best-practices.html`,
		format: `article`,
		topics: [`web`],
		date: `2024-04-26`,
	},

	{
		id: `libraries-angular-maintenance`,
		title: `Angular libraries choice`,
		content: `
		When I need a functionality in my project, I ask myself three questions every time. 
		First, can I implement the functionality myself? If yes, and it doesn't require too 
		much work, it's a good candidate to do it that way. Then the second question: is 
		there a JavaScript library that does the job? If there is a library, small, popular, 
		and well-maintained, then I might consider this second solution too. The last 
		question only happens if the first two aren't that conclusive: is there an Angular 
		library doing the job? The reason why I tend to avoid the third question is for 
		maintainability reasons. Angular libraries need to share the same major version 
		as your current Angular project version. If you have 20 dependencies, it means 
		all of them need to be upgraded before yours is upgraded. Since Angular libraries 
		tend to be less popular, they can die out fast. With JavaScript libraries, you 
		don't have to worry about the major Angular version, so it will never be late 
		in upgrading their major version.
		`,
		link: ``,
		format: `tip`,
		topics: [`angular`],
		date: `2024-04-26`,
	},

	{
		id: `the-clean-coder`,
		title: `The Clean Coder`,
		content: `
		This book isn't specifically about coding; it's more about professionalism—what's
		expected of you at work. It includes great examples of various situations with 
		coworkers, especially when there's tension around deadlines, including potentially 
		unachievable ones. I've read this book twice and really appreciate Uncle Bob's 
		writing style. Although some aspects may seem old-fashioned to me, it's still 
		valuable to consider different points of view.
		`,
		link: `https://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073`,
		format: `book`,
		topics: [`softskills`],
		date: `2024-05-08`,
	},

	{
		id: `facebook-quite-git`,
		title: `Facebook quit git`,
		content: `
		Interesting article about why Facebook decided to stop using Git. The writing style is 
		quite humble. I also liked the part about how the team tried to help people adopt the new 
		tool by accompanying them.
		`,
		link: `https://graphite.dev/blog/why-facebook-doesnt-use-git?utm_source=tldrnewsletter`,
		format: `article`,
		topics: [`devops`],
		date: `2024-07-17`,
	},

	{
		id: `problems-at-facebook-arent-others`,
		title: `Nothing at Facebook is someone else's problem`,
		content: `
		I've been watching and reading a lot about Kent Beck lately because many people mention
		him. He is the re-discoverer of TDD. But one thing struck me in a video I watched. It was
		at the very end of the video, during a Q&A session. While the question itself isn't important,
		the answer is very significant. At Facebook, nothing is considered someone else's problem.
		This is a fascinating culture that fosters collaboration within the company and promotes
		individual responsibility. I hope I can convey this mindset to others at my workplace.
		`,
		link: `https://youtu.be/cGuTmOUdFbo?t=2380`,
		format: `video`,
		topics: [`softskills`],
		date: `2024-07-17`,
	},
  
	// {
	// id: ``,
	// title: ``,
	// content: `
	// `,
	// link: ``,
	// format: `article`,
	// topics: [`web`],
	// date: `2024-04-26`,
	// },
]
