import React, { useEffect } from "react";

const TwitterTimeline = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://platform.twitter.com/widgets.js";
		document.getElementsByClassName("twitter-embed")[0].appendChild(script);
	}, []);
	// console.log(
	// 	document.getElementsByClassName("timeline-TweetList")[0].innerHTML
	// );
	return (
		<section className="twitterContainer">
			<div className="twitter-embed">
				<a
					className="twitter-timeline"
					data-width="500"
					data-height="700"
					data-theme="dark"
					href="https://twitter.com/chaoscarnivalio?ref_src=twsrc%5Etfw"
				>
					Tweets by chaoscarnivalio
				</a>{" "}
			</div>
		</section>
	);
};

export default TwitterTimeline;
