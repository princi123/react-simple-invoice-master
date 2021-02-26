export function getCurrentTime(separator=''){

	var d = new Date();
	var amOrPm = (d.getHours() < 12) ? "AM" : "PM";
	var hour = (d.getHours() < 12) ? d.getHours() : d.getHours() - 12;
	return   hour + ':' + d.getMinutes() + ' ' + amOrPm;
}