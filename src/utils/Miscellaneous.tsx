export function getTimeAndDayFromDate(dateISO: Date) {
	const date = new Date(dateISO);
	const day = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	const formattedDay = day < 10 ? "0" + day : day;
	const formattedHours = hours < 10 ? "0" + hours : hours;
	const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
	const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

	return `${formattedDay}/${
		date.getMonth() + 1
	}/${date.getFullYear()} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export function truncateString(str: string, maxLength: number): string {
	return str.length <= maxLength ? str : str.substring(0, maxLength);
}

export const isToday = (date: Date): boolean => {
	const today = new Date();

	const todayDay = today.getDate();
	const dateDay = date.getDate();

	return todayDay === dateDay;
};

export const isSameWeek = (date1: Date, date2: Date): boolean => {
	const firstDayOfWeek1 = new Date(
		date1.getFullYear(),
		date1.getMonth(),
		date1.getDate() - date1.getDay()
	);
	const firstDayOfWeek2 = new Date(
		date2.getFullYear(),
		date2.getMonth(),
		date2.getDate() - date2.getDay()
	);

	const miliSecondsInAWeek = 7 * 24 * 60 * 60 * 1000;

	const diffWeeks = Math.floor(
		(firstDayOfWeek1.getTime() - firstDayOfWeek2.getTime()) / miliSecondsInAWeek
	);

	return diffWeeks === 0;
};

export const isSameMonth = (date1: Date, date2: Date): boolean => {
	return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
};
