// https://www.youtube.com/watch?v=XZRmebENC_s
import moment from "moment";

export  default class DateEngineClass {


    //  conversion to standard time format for southeastern Europe | string
    format_standard(Moment = moment()){
        return moment(Moment).format('DD.MM.YYYY');
    }


    //  convert to time format for laravel database | string
    format_laravel(Moment = moment()){
        return moment(Moment).format('YYYY-MM-DD HH:mm:ss');
    }


    sec_to_utc(secs){
        return moment.utc(secs*1000);
    }
}

/*
*    Cheat list
*
* moment()
*
* add(1, 'y') - add one year formats(y, year, years)
* subtract(1, 'M') - add one month formats(M, month, months)
*
* startOf('w') - return start of week date | string
* endOf('w') - return end of week date | string
*
* m1.diff(m2, 'd') - return difference between to dates in specified format 'd' |
*
* m1.isAfter(m2) - checks if the date is in the future of the second date | boolean
* m1.isBefore(m2) - checks if a date is in the past of the second date | boolean
* m3.isBetween(m1, m2) - whether the date is in the time interval between the two transmitted dates | boolean
*
* moment('2023/02/26', 'YYYY/MM/DD') - example specifying the format of the accepted date
* */