require("babel-register")({
	presets: ["es2015", "react"],
});

require.extensions[".css"] = function () {
	return null;
};

require.extensions[".png"] = function () {
	return null;
};

require.extensions[".svg"] = function () {
	return null;
};

require.extensions[".jpg"] = function () {
	return null;
};

const Sitemap = require("react-router-sitemap").default;
const router = require("./src/App.tsx").default;
const paths = [
	"/",
	"/agenda",
	"/bootcamps",
	"/sponsorbooths",
	"/sponsorship",
	"/register",
	"/team",
	"/acknowledgement",
];
const filterConfig = {
	paths: paths,
	isValid: false,
	rules: [/\/404/],
};

const paramsConfig = {
	"/:section": [
		{ section: "" },
		{ section: "#home" },
		{ section: "#speakers" },
		// home
	],
	"/agenda": [],
	"/bootcamps": [],
	"/sponsorbooths": [],
	"/sponsorship": [],
	"/register": [],
	"/team": [],
	"/acknowledgement": [],
};

function generateSitemapStatic() {
	return new Sitemap(router)
		.filterPaths(filterConfig)
		.applyParams(paramsConfig)
		.build("https://chaoscarnival.io", { limitCountPaths: 5000 })
		.save("./sitemap.xml", "/static/");
}

function generateSitemapPublic() {
	return new Sitemap(router)
		.filterPaths(filterConfig)
		.applyParams(paramsConfig)
		.build("https://chaoscarnival.io", { limitCountPaths: 5000 })
		.save("./public/sitemap.xml");
}

generateSitemapStatic();
generateSitemapPublic();
