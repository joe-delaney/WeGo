const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}

export const convertToDate = (date) => {
    let dateObj = new Date(date);
    let month = months[dateObj.getMonth()];
    let day = dateObj.getDate();
    let year = dateObj.getFullYear();
    return `${month} ${day}, ${year}`
}

export const convertToTime = (date) => {
    let dateObj = new Date(date);
    let dateLabel = getTimeLabel(dateObj.getHours());
    let hours = convertHour(dateObj.getHours())
    let minutes = convertMinutes(dateObj.getMinutes());
    return `${hours}:${minutes} ${dateLabel}`
}

const getTimeLabel = (hour) => {
    if (hour < 12) {
        return "AM";
    } else {
        return "PM"
    }
}

const convertHour = hour => {
    if (hour === 0) {
        return 12;
    } else if (hour > 12) {
        return hour - 12;
    } else {
        return hour;
    }
}

const convertMinutes = minutes => {
    if (minutes < 10) {
        return `0${minutes}`;
    } else {
        return minutes;
    }
}