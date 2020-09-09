const getTomorrow = function(date) {
    var nowDate = new Date();
    let nowHour = nowDate.getHours();
    let nowMinutes = nowDate.getMinutes();
    if (nowHour > 20 || (nowHour == 20 && nowDate.getMinutes() >= 35)) {
        return getdate(null, true) + ' 20:35:00';
    } else {
        return getdate() + ' 20:35:00';
    }
}
const getdate = function(date, next) {
        var day3
        if (date) {
            day3 = new Date(date);
            // var day1=new Date(time1);
        } else {
            day3 = new Date()
        }
        if (next) {
            day3.setTime(day3.getTime() + 24 * 60 * 60 * 1000);
        } else {
            day3.setTime(day3.getTime());
        }
        var strMonth = day3.getMonth() + 1;
        var strDay = day3.getDate();
        if (strMonth < 10) {
            strMonth = "0" + strMonth;
        }
        if (strDay < 10) {
            strDay = "0" + strDay;
        }
        var s3 = day3.getFullYear() + "-" + strMonth + "-" + strDay;
        return s3
    }
    // const baseApi = function() {
    //     let host = window.location.host;
    //     if (/192\.168|localhost/.test(host)) {
    //         return location.origin + '/sys';
    //     } else {
    //         return location.origin + '/';
    //     }
    // }



export { getTomorrow };