import moment from "moment-timezone";

const calendarTime = (
	startDate: string,
	endDate: string,
	title: string,
	details: string
) => {
	const formattedStartDate = moment(new Date(startDate)).format(
		"YYYYMMDDTHHmmssZ"
	);
	const formattedEndDate = moment(new Date(endDate)).format(
		"YYYYMMDDTHHmmssZ"
	);
	const inviteLink = `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${formattedStartDate}/${formattedEndDate}&text=${title}&details=${details}`;
	return inviteLink;
};

export default calendarTime;
