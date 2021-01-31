import moment from "moment-timezone";

interface LocaleData {
	date: moment.Moment;
	dateString: string;
	time: string;
	timeZone: string;
}

const getLocale = (dateTime: string): LocaleData => {
	// Get user locale
	const locale = window.navigator.language;

	// Set locale to moment
	moment.locale(locale);

	// Get the date
	const date = moment(dateTime);
	// Date in string format
	const dateString = date.format("MMM D, YYYY");
	// Time in AM/PM
	const time = date.format("LT");
	// Local TimeZone
	const timeZone = moment.tz(moment.tz.guess()).zoneAbbr();

	return { date, dateString, time, timeZone };
};

export { getLocale };
