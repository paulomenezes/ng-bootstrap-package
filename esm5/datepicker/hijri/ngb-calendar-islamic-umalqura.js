/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgbCalendarIslamicCivil } from './ngb-calendar-islamic-civil';
import { NgbDate } from '../ngb-date';
import { Injectable } from '@angular/core';
/**
 * Umalqura calendar is one type of Hijri calendars used in islamic countries.
 * This Calendar is used by Saudi Arabia for administrative purpose.
 * Unlike tabular calendars, the algorithm involves astronomical calculation, but it's still deterministic.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 * @type {?}
 */
var GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
/** @type {?} */
var GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
/** @type {?} */
var HIJRI_BEGIN = 1300;
/** @type {?} */
var HIJRI_END = 1600;
/** @type {?} */
var ONE_DAY = 1000 * 60 * 60 * 24;
/** @type {?} */
var MONTH_LENGTH = [
    // 1300-1304
    '101010101010', '110101010100', '111011001001', '011011010100', '011011101010',
    // 1305-1309
    '001101101100', '101010101101', '010101010101', '011010101001', '011110010010',
    // 1310-1314
    '101110101001', '010111010100', '101011011010', '010101011100', '110100101101',
    // 1315-1319
    '011010010101', '011101001010', '101101010100', '101101101010', '010110101101',
    // 1320-1324
    '010010101110', '101001001111', '010100010111', '011010001011', '011010100101',
    // 1325-1329
    '101011010101', '001011010110', '100101011011', '010010011101', '101001001101',
    // 1330-1334
    '110100100110', '110110010101', '010110101100', '100110110110', '001010111010',
    // 1335-1339
    '101001011011', '010100101011', '101010010101', '011011001010', '101011101001',
    // 1340-1344
    '001011110100', '100101110110', '001010110110', '100101010110', '101011001010',
    // 1345-1349
    '101110100100', '101111010010', '010111011001', '001011011100', '100101101101',
    // 1350-1354
    '010101001101', '101010100101', '101101010010', '101110100101', '010110110100',
    // 1355-1359
    '100110110110', '010101010111', '001010010111', '010101001011', '011010100011',
    // 1360-1364
    '011101010010', '101101100101', '010101101010', '101010101011', '010100101011',
    // 1365-1369
    '110010010101', '110101001010', '110110100101', '010111001010', '101011010110',
    // 1370-1374
    '100101010111', '010010101011', '100101001011', '101010100101', '101101010010',
    // 1375-1379
    '101101101010', '010101110101', '001001110110', '100010110111', '010001011011',
    // 1380-1384
    '010101010101', '010110101001', '010110110100', '100111011010', '010011011101',
    // 1385-1389
    '001001101110', '100100110110', '101010101010', '110101010100', '110110110010',
    // 1390-1394
    '010111010101', '001011011010', '100101011011', '010010101011', '101001010101',
    // 1395-1399
    '101101001001', '101101100100', '101101110001', '010110110100', '101010110101',
    // 1400-1404
    '101001010101', '110100100101', '111010010010', '111011001001', '011011010100',
    // 1405-1409
    '101011101001', '100101101011', '010010101011', '101010010011', '110101001001',
    // 1410-1414
    '110110100100', '110110110010', '101010111001', '010010111010', '101001011011',
    // 1415-1419
    '010100101011', '101010010101', '101100101010', '101101010101', '010101011100',
    // 1420-1424
    '010010111101', '001000111101', '100100011101', '101010010101', '101101001010',
    // 1425-1429
    '101101011010', '010101101101', '001010110110', '100100111011', '010010011011',
    // 1430-1434
    '011001010101', '011010101001', '011101010100', '101101101010', '010101101100',
    // 1435-1439
    '101010101101', '010101010101', '101100101001', '101110010010', '101110101001',
    // 1440-1444
    '010111010100', '101011011010', '010101011010', '101010101011', '010110010101',
    // 1445-1449
    '011101001001', '011101100100', '101110101010', '010110110101', '001010110110',
    // 1450-1454
    '101001010110', '111001001101', '101100100101', '101101010010', '101101101010',
    // 1455-1459
    '010110101101', '001010101110', '100100101111', '010010010111', '011001001011',
    // 1460-1464
    '011010100101', '011010101100', '101011010110', '010101011101', '010010011101',
    // 1465-1469
    '101001001101', '110100010110', '110110010101', '010110101010', '010110110101',
    // 1470-1474
    '001011011010', '100101011011', '010010101101', '010110010101', '011011001010',
    // 1475-1479
    '011011100100', '101011101010', '010011110101', '001010110110', '100101010110',
    // 1480-1484
    '101010101010', '101101010100', '101111010010', '010111011001', '001011101010',
    // 1485-1489
    '100101101101', '010010101101', '101010010101', '101101001010', '101110100101',
    // 1490-1494
    '010110110010', '100110110101', '010011010110', '101010010111', '010101000111',
    // 1495-1499
    '011010010011', '011101001001', '101101010101', '010101101010', '101001101011',
    // 1500-1504
    '010100101011', '101010001011', '110101000110', '110110100011', '010111001010',
    // 1505-1509
    '101011010110', '010011011011', '001001101011', '100101001011', '101010100101',
    // 1510-1514
    '101101010010', '101101101001', '010101110101', '000101110110', '100010110111',
    // 1515-1519
    '001001011011', '010100101011', '010101100101', '010110110100', '100111011010',
    // 1520-1524
    '010011101101', '000101101101', '100010110110', '101010100110', '110101010010',
    // 1525-1529
    '110110101001', '010111010100', '101011011010', '100101011011', '010010101011',
    // 1530-1534
    '011001010011', '011100101001', '011101100010', '101110101001', '010110110010',
    // 1535-1539
    '101010110101', '010101010101', '101100100101', '110110010010', '111011001001',
    // 1540-1544
    '011011010010', '101011101001', '010101101011', '010010101011', '101001010101',
    // 1545-1549
    '110100101001', '110101010100', '110110101010', '100110110101', '010010111010',
    // 1550-1554
    '101000111011', '010010011011', '101001001101', '101010101010', '101011010101',
    // 1555-1559
    '001011011010', '100101011101', '010001011110', '101000101110', '110010011010',
    // 1560-1564
    '110101010101', '011010110010', '011010111001', '010010111010', '101001011101',
    // 1565-1569
    '010100101101', '101010010101', '101101010010', '101110101000', '101110110100',
    // 1570-1574
    '010110111001', '001011011010', '100101011010', '101101001010', '110110100100',
    // 1575-1579
    '111011010001', '011011101000', '101101101010', '010101101101', '010100110101',
    // 1580-1584
    '011010010101', '110101001010', '110110101000', '110111010100', '011011011010',
    // 1585-1589
    '010101011011', '001010011101', '011000101011', '101100010101', '101101001010',
    // 1590-1594
    '101110010101', '010110101010', '101010101110', '100100101110', '110010001111',
    // 1595-1599
    '010100100111', '011010010101', '011010101010', '101011010110', '010101011101',
    // 1600
    '001010011101'
];
/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */
function getDaysDiff(date1, date2) {
    /** @type {?} */
    var diff = Math.abs(date1.getTime() - date2.getTime());
    return Math.round(diff / ONE_DAY);
}
var NgbCalendarIslamicUmalqura = /** @class */ (function (_super) {
    tslib_1.__extends(NgbCalendarIslamicUmalqura, _super);
    function NgbCalendarIslamicUmalqura() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
    * `gdate` is s JS Date to be converted to Hijri.
    */
    /**
     * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
     * `gdate` is s JS Date to be converted to Hijri.
     * @param {?} gDate
     * @return {?}
     */
    NgbCalendarIslamicUmalqura.prototype.fromGregorian = /**
     * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
     * `gdate` is s JS Date to be converted to Hijri.
     * @param {?} gDate
     * @return {?}
     */
    function (gDate) {
        /** @type {?} */
        var hDay = 1;
        /** @type {?} */
        var hMonth = 0;
        /** @type {?} */
        var hYear = 1300;
        /** @type {?} */
        var daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);
        if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
            /** @type {?} */
            var year = 1300;
            for (var i = 0; i < MONTH_LENGTH.length; i++, year++) {
                for (var j = 0; j < 12; j++) {
                    /** @type {?} */
                    var numOfDays = +MONTH_LENGTH[i][j] + 29;
                    if (daysDiff <= numOfDays) {
                        hDay = daysDiff + 1;
                        if (hDay > numOfDays) {
                            hDay = 1;
                            j++;
                        }
                        if (j > 11) {
                            j = 0;
                            year++;
                        }
                        hMonth = j;
                        hYear = year;
                        return new NgbDate(hYear, hMonth + 1, hDay);
                    }
                    daysDiff = daysDiff - numOfDays;
                }
            }
        }
        else {
            return _super.prototype.fromGregorian.call(this, gDate);
        }
    };
    /**
    * Converts the current Hijri date to Gregorian.
    */
    /**
     * Converts the current Hijri date to Gregorian.
     * @param {?} hDate
     * @return {?}
     */
    NgbCalendarIslamicUmalqura.prototype.toGregorian = /**
     * Converts the current Hijri date to Gregorian.
     * @param {?} hDate
     * @return {?}
     */
    function (hDate) {
        /** @type {?} */
        var hYear = hDate.year;
        /** @type {?} */
        var hMonth = hDate.month - 1;
        /** @type {?} */
        var hDay = hDate.day;
        /** @type {?} */
        var gDate = new Date(GREGORIAN_FIRST_DATE);
        /** @type {?} */
        var dayDiff = hDay - 1;
        if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
            for (var y = 0; y < hYear - HIJRI_BEGIN; y++) {
                for (var m = 0; m < 12; m++) {
                    dayDiff += +MONTH_LENGTH[y][m] + 29;
                }
            }
            for (var m = 0; m < hMonth; m++) {
                dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][m] + 29;
            }
            gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
        }
        else {
            gDate = _super.prototype.toGregorian.call(this, hDate);
        }
        return gDate;
    };
    /**
    * Returns the number of days in a specific Hijri hMonth.
    * `hMonth` is 1 for Muharram, 2 for Safar, etc.
    * `hYear` is any Hijri hYear.
    */
    /**
     * Returns the number of days in a specific Hijri hMonth.
     * `hMonth` is 1 for Muharram, 2 for Safar, etc.
     * `hYear` is any Hijri hYear.
     * @param {?} hMonth
     * @param {?} hYear
     * @return {?}
     */
    NgbCalendarIslamicUmalqura.prototype.getDaysPerMonth = /**
     * Returns the number of days in a specific Hijri hMonth.
     * `hMonth` is 1 for Muharram, 2 for Safar, etc.
     * `hYear` is any Hijri hYear.
     * @param {?} hMonth
     * @param {?} hYear
     * @return {?}
     */
    function (hMonth, hYear) {
        if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
            /** @type {?} */
            var pos = hYear - HIJRI_BEGIN;
            return +MONTH_LENGTH[pos][hMonth - 1] + 29;
        }
        return _super.prototype.getDaysPerMonth.call(this, hMonth, hYear);
    };
    NgbCalendarIslamicUmalqura.decorators = [
        { type: Injectable }
    ];
    return NgbCalendarIslamicUmalqura;
}(NgbCalendarIslamicCivil));
export { NgbCalendarIslamicUmalqura };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWNhbGVuZGFyLWlzbGFtaWMtdW1hbHF1cmEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImRhdGVwaWNrZXIvaGlqcmkvbmdiLWNhbGVuZGFyLWlzbGFtaWMtdW1hbHF1cmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lBU25DLG9CQUFvQixHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDOztJQUM3QyxtQkFBbUIsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7SUFDNUMsV0FBVyxHQUFHLElBQUk7O0lBQ2xCLFNBQVMsR0FBRyxJQUFJOztJQUNoQixPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTs7SUFFN0IsWUFBWSxHQUFHO0lBQ25CLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVB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VyxZQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0Q7Ozs7TUFJRTs7Ozs7Ozs7O0lBQ0Ysb0RBQWU7Ozs7Ozs7O0lBQWYsVUFBZ0IsTUFBYyxFQUFFLEtBQWE7UUFDM0MsSUFBSSxLQUFLLElBQUksV0FBVyxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7O2dCQUN4QyxHQUFHLEdBQUcsS0FBSyxHQUFHLFdBQVc7WUFDL0IsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxpQkFBTSxlQUFlLFlBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7O2dCQXRFRixVQUFVOztJQXVFWCxpQ0FBQztDQUFBLEFBdkVELENBQ2dELHVCQUF1QixHQXNFdEU7U0F0RVksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ2JDYWxlbmRhcklzbGFtaWNDaXZpbH0gZnJvbSAnLi9uZ2ItY2FsZW5kYXItaXNsYW1pYy1jaXZpbCc7XG5pbXBvcnQge05nYkRhdGV9IGZyb20gJy4uL25nYi1kYXRlJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVW1hbHF1cmEgY2FsZW5kYXIgaXMgb25lIHR5cGUgb2YgSGlqcmkgY2FsZW5kYXJzIHVzZWQgaW4gaXNsYW1pYyBjb3VudHJpZXMuXG4gKiBUaGlzIENhbGVuZGFyIGlzIHVzZWQgYnkgU2F1ZGkgQXJhYmlhIGZvciBhZG1pbmlzdHJhdGl2ZSBwdXJwb3NlLlxuICogVW5saWtlIHRhYnVsYXIgY2FsZW5kYXJzLCB0aGUgYWxnb3JpdGhtIGludm9sdmVzIGFzdHJvbm9taWNhbCBjYWxjdWxhdGlvbiwgYnV0IGl0J3Mgc3RpbGwgZGV0ZXJtaW5pc3RpYy5cbiAqIGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL2RldmVsb3BtZW50L2RldmVsb3BtZW50LXByb2Nlc3MvZGVzaWduLXByb3Bvc2Fscy9pc2xhbWljLWNhbGVuZGFyLXR5cGVzXG4gKi9cblxuY29uc3QgR1JFR09SSUFOX0ZJUlNUX0RBVEUgPSBuZXcgRGF0ZSgxODgyLCAxMCwgMTIpO1xuY29uc3QgR1JFR09SSUFOX0xBU1RfREFURSA9IG5ldyBEYXRlKDIxNzQsIDEwLCAyNSk7XG5jb25zdCBISUpSSV9CRUdJTiA9IDEzMDA7XG5jb25zdCBISUpSSV9FTkQgPSAxNjAwO1xuY29uc3QgT05FX0RBWSA9IDEwMDAgKiA2MCAqIDYwICogMjQ7XG5cbmNvbnN0IE1PTlRIX0xFTkdUSCA9IFtcbiAgLy8gMTMwMC0xMzA0XG4gICcxMDEwMTAxMDEwMTAnLCAnMTEwMTAxMDEwMTAwJywgJzExMTAxMTAwMTAwMScsICcwMTEwMTEwMTAxMDAnLCAnMDExMDExMTAxMDEwJyxcbiAgLy8gMTMwNS0xMzA5XG4gICcwMDExMDExMDExMDAnLCAnMTAxMDEwMTAxMTAxJywgJzAxMDEwMTAxMDEwMScsICcwMTEwMTAxMDEwMDEnLCAnMDExMTEwMDEwMDEwJyxcbiAgLy8gMTMxMC0xMzE0XG4gICcxMDExMTAxMDEwMDEnLCAnMDEwMTExMDEwMTAwJywgJzEwMTAxMTAxMTAxMCcsICcwMTAxMDEwMTExMDAnLCAnMTEwMTAwMTAxMTAxJyxcbiAgLy8gMTMxNS0xMzE5XG4gICcwMTEwMTAwMTAxMDEnLCAnMDExMTAxMDAxMDEwJywgJzEwMTEwMTAxMDEwMCcsICcxMDExMDExMDEwMTAnLCAnMDEwMTEwMTAxMTAxJyxcbiAgLy8gMTMyMC0xMzI0XG4gICcwMTAwMTAxMDExMTAnLCAnMTAxMDAxMDAxMTExJywgJzAxMDEwMDAxMDExMScsICcwMTEwMTAwMDEwMTEnLCAnMDExMDEwMTAwMTAxJyxcbiAgLy8gMTMyNS0xMzI5XG4gICcxMDEwMTEwMTAxMDEnLCAnMDAxMDExMDEwMTEwJywgJzEwMDEwMTAxMTAxMScsICcwMTAwMTAwMTExMDEnLCAnMTAxMDAxMDAxMTAxJyxcbiAgLy8gMTMzMC0xMzM0XG4gICcxMTAxMDAxMDAxMTAnLCAnMTEwMTEwMDEwMTAxJywgJzAxMDExMDEwMTEwMCcsICcxMDAxMTAxMTAxMTAnLCAnMDAxMDEwMTExMDEwJyxcbiAgLy8gMTMzNS0xMzM5XG4gICcxMDEwMDEwMTEwMTEnLCAnMDEwMTAwMTAxMDExJywgJzEwMTAxMDAxMDEwMScsICcwMTEwMTEwMDEwMTAnLCAnMTAxMDExMTAxMDAxJyxcbiAgLy8gMTM0MC0xMzQ0XG4gICcwMDEwMTExMTAxMDAnLCAnMTAwMTAxMTEwMTEwJywgJzAwMTAxMDExMDExMCcsICcxMDAxMDEwMTAxMTAnLCAnMTAxMDExMDAxMDEwJyxcbiAgLy8gMTM0NS0xMzQ5XG4gICcxMDExMTAxMDAxMDAnLCAnMTAxMTExMDEwMDEwJywgJzAxMDExMTAxMTAwMScsICcwMDEwMTEwMTExMDAnLCAnMTAwMTAxMTAxMTAxJyxcbiAgLy8gMTM1MC0xMzU0XG4gICcwMTAxMDEwMDExMDEnLCAnMTAxMDEwMTAwMTAxJywgJzEwMTEwMTAxMDAxMCcsICcxMDExMTAxMDAxMDEnLCAnMDEwMTEwMTEwMTAwJyxcbiAgLy8gMTM1NS0xMzU5XG4gICcxMDAxMTAxMTAxMTAnLCAnMDEwMTAxMDEwMTExJywgJzAwMTAxMDAxMDExMScsICcwMTAxMDEwMDEwMTEnLCAnMDExMDEwMTAwMDExJyxcbiAgLy8gMTM2MC0xMzY0XG4gICcwMTExMDEwMTAwMTAnLCAnMTAxMTAxMTAwMTAxJywgJzAxMDEwMTEwMTAxMCcsICcxMDEwMTAxMDEwMTEnLCAnMDEwMTAwMTAxMDExJyxcbiAgLy8gMTM2NS0xMzY5XG4gICcxMTAwMTAwMTAxMDEnLCAnMTEwMTAxMDAxMDEwJywgJzExMDExMDEwMDEwMScsICcwMTAxMTEwMDEwMTAnLCAnMTAxMDExMDEwMTEwJyxcbiAgLy8gMTM3MC0xMzc0XG4gICcxMDAxMDEwMTAxMTEnLCAnMDEwMDEwMTAxMDExJywgJzEwMDEwMTAwMTAxMScsICcxMDEwMTAxMDAxMDEnLCAnMTAxMTAxMDEwMDEwJyxcbiAgLy8gMTM3NS0xMzc5XG4gICcxMDExMDExMDEwMTAnLCAnMDEwMTAxMTEwMTAxJywgJzAwMTAwMTExMDExMCcsICcxMDAwMTAxMTAxMTEnLCAnMDEwMDAxMDExMDExJyxcbiAgLy8gMTM4MC0xMzg0XG4gICcwMTAxMDEwMTAxMDEnLCAnMDEwMTEwMTAxMDAxJywgJzAxMDExMDExMDEwMCcsICcxMDAxMTEwMTEwMTAnLCAnMDEwMDExMDExMTAxJyxcbiAgLy8gMTM4NS0xMzg5XG4gICcwMDEwMDExMDExMTAnLCAnMTAwMTAwMTEwMTEwJywgJzEwMTAxMDEwMTAxMCcsICcxMTAxMDEwMTAxMDAnLCAnMTEwMTEwMTEwMDEwJyxcbiAgLy8gMTM5MC0xMzk0XG4gICcwMTAxMTEwMTAxMDEnLCAnMDAxMDExMDExMDEwJywgJzEwMDEwMTAxMTAxMScsICcwMTAwMTAxMDEwMTEnLCAnMTAxMDAxMDEwMTAxJyxcbiAgLy8gMTM5NS0xMzk5XG4gICcxMDExMDEwMDEwMDEnLCAnMTAxMTAxMTAwMTAwJywgJzEwMTEwMTExMDAwMScsICcwMTAxMTAxMTAxMDAnLCAnMTAxMDEwMTEwMTAxJyxcbiAgLy8gMTQwMC0xNDA0XG4gICcxMDEwMDEwMTAxMDEnLCAnMTEwMTAwMTAwMTAxJywgJzExMTAxMDAxMDAxMCcsICcxMTEwMTEwMDEwMDEnLCAnMDExMDExMDEwMTAwJyxcbiAgLy8gMTQwNS0xNDA5XG4gICcxMDEwMTExMDEwMDEnLCAnMTAwMTAxMTAxMDExJywgJzAxMDAxMDEwMTAxMScsICcxMDEwMTAwMTAwMTEnLCAnMTEwMTAxMDAxMDAxJyxcbiAgLy8gMTQxMC0xNDE0XG4gICcxMTAxMTAxMDAxMDAnLCAnMTEwMTEwMTEwMDEwJywgJzEwMTAxMDExMTAwMScsICcwMTAwMTAxMTEwMTAnLCAnMTAxMDAxMDExMDExJyxcbiAgLy8gMTQxNS0xNDE5XG4gICcwMTAxMDAxMDEwMTEnLCAnMTAxMDEwMDEwMTAxJywgJzEwMTEwMDEwMTAxMCcsICcxMDExMDEwMTAxMDEnLCAnMDEwMTAxMDExMTAwJyxcbiAgLy8gMTQyMC0xNDI0XG4gICcwMTAwMTAxMTExMDEnLCAnMDAxMDAwMTExMTAxJywgJzEwMDEwMDAxMTEwMScsICcxMDEwMTAwMTAxMDEnLCAnMTAxMTAxMDAxMDEwJyxcbiAgLy8gMTQyNS0xNDI5XG4gICcxMDExMDEwMTEwMTAnLCAnMDEwMTAxMTAxMTAxJywgJzAwMTAxMDExMDExMCcsICcxMDAxMDAxMTEwMTEnLCAnMDEwMDEwMDExMDExJyxcbiAgLy8gMTQzMC0xNDM0XG4gICcwMTEwMDEwMTAxMDEnLCAnMDExMDEwMTAxMDAxJywgJzAxMTEwMTAxMDEwMCcsICcxMDExMDExMDEwMTAnLCAnMDEwMTAxMTAxMTAwJyxcbiAgLy8gMTQzNS0xNDM5XG4gICcxMDEwMTAxMDExMDEnLCAnMDEwMTAxMDEwMTAxJywgJzEwMTEwMDEwMTAwMScsICcxMDExMTAwMTAwMTAnLCAnMTAxMTEwMTAxMDAxJyxcbiAgLy8gMTQ0MC0xNDQ0XG4gICcwMTAxMTEwMTAxMDAnLCAnMTAxMDExMDExMDEwJywgJzAxMDEwMTAxMTAxMCcsICcxMDEwMTAxMDEwMTEnLCAnMDEwMTEwMDEwMTAxJyxcbiAgLy8gMTQ0NS0xNDQ5XG4gICcwMTExMDEwMDEwMDEnLCAnMDExMTAxMTAwMTAwJywgJzEwMTExMDEwMTAxMCcsICcwMTAxMTAxMTAxMDEnLCAnMDAxMDEwMTEwMTEwJyxcbiAgLy8gMTQ1MC0xNDU0XG4gICcxMDEwMDEwMTAxMTAnLCAnMTExMDAxMDAxMTAxJywgJzEwMTEwMDEwMDEwMScsICcxMDExMDEwMTAwMTAnLCAnMTAxMTAxMTAxMDEwJyxcbiAgLy8gMTQ1NS0xNDU5XG4gICcwMTAxMTAxMDExMDEnLCAnMDAxMDEwMTAxMTEwJywgJzEwMDEwMDEwMTExMScsICcwMTAwMTAwMTAxMTEnLCAnMDExMDAxMDAxMDExJyxcbiAgLy8gMTQ2MC0xNDY0XG4gICcwMTEwMTAxMDAxMDEnLCAnMDExMDEwMTAxMTAwJywgJzEwMTAxMTAxMDExMCcsICcwMTAxMDEwMTExMDEnLCAnMDEwMDEwMDExMTAxJyxcbiAgLy8gMTQ2NS0xNDY5XG4gICcxMDEwMDEwMDExMDEnLCAnMTEwMTAwMDEwMTEwJywgJzExMDExMDAxMDEwMScsICcwMTAxMTAxMDEwMTAnLCAnMDEwMTEwMTEwMTAxJyxcbiAgLy8gMTQ3MC0xNDc0XG4gICcwMDEwMTEwMTEwMTAnLCAnMTAwMTAxMDExMDExJywgJzAxMDAxMDEwMTEwMScsICcwMTAxMTAwMTAxMDEnLCAnMDExMDExMDAxMDEwJyxcbiAgLy8gMTQ3NS0xNDc5XG4gICcwMTEwMTExMDAxMDAnLCAnMTAxMDExMTAxMDEwJywgJzAxMDAxMTExMDEwMScsICcwMDEwMTAxMTAxMTAnLCAnMTAwMTAxMDEwMTEwJyxcbiAgLy8gMTQ4MC0xNDg0XG4gICcxMDEwMTAxMDEwMTAnLCAnMTAxMTAxMDEwMTAwJywgJzEwMTExMTAxMDAxMCcsICcwMTAxMTEwMTEwMDEnLCAnMDAxMDExMTAxMDEwJyxcbiAgLy8gMTQ4NS0xNDg5XG4gICcxMDAxMDExMDExMDEnLCAnMDEwMDEwMTAxMTAxJywgJzEwMTAxMDAxMDEwMScsICcxMDExMDEwMDEwMTAnLCAnMTAxMTEwMTAwMTAxJyxcbiAgLy8gMTQ5MC0xNDk0XG4gICcwMTAxMTAxMTAwMTAnLCAnMTAwMTEwMTEwMTAxJywgJzAxMDAxMTAxMDExMCcsICcxMDEwMTAwMTAxMTEnLCAnMDEwMTAxMDAwMTExJyxcbiAgLy8gMTQ5NS0xNDk5XG4gICcwMTEwMTAwMTAwMTEnLCAnMDExMTAxMDAxMDAxJywgJzEwMTEwMTAxMDEwMScsICcwMTAxMDExMDEwMTAnLCAnMTAxMDAxMTAxMDExJyxcbiAgLy8gMTUwMC0xNTA0XG4gICcwMTAxMDAxMDEwMTEnLCAnMTAxMDEwMDAxMDExJywgJzExMDEwMTAwMDExMCcsICcxMTAxMTAxMDAwMTEnLCAnMDEwMTExMDAxMDEwJyxcbiAgLy8gMTUwNS0xNTA5XG4gICcxMDEwMTEwMTAxMTAnLCAnMDEwMDExMDExMDExJywgJzAwMTAwMTEwMTAxMScsICcxMDAxMDEwMDEwMTEnLCAnMTAxMDEwMTAwMTAxJyxcbiAgLy8gMTUxMC0xNTE0XG4gICcxMDExMDEwMTAwMTAnLCAnMTAxMTAxMTAxMDAxJywgJzAxMDEwMTExMDEwMScsICcwMDAxMDExMTAxMTAnLCAnMTAwMDEwMTEwMTExJyxcbiAgLy8gMTUxNS0xNTE5XG4gICcwMDEwMDEwMTEwMTEnLCAnMDEwMTAwMTAxMDExJywgJzAxMDEwMTEwMDEwMScsICcwMTAxMTAxMTAxMDAnLCAnMTAwMTExMDExMDEwJyxcbiAgLy8gMTUyMC0xNTI0XG4gICcwMTAwMTExMDExMDEnLCAnMDAwMTAxMTAxMTAxJywgJzEwMDAxMDExMDExMCcsICcxMDEwMTAxMDAxMTAnLCAnMTEwMTAxMDEwMDEwJyxcbiAgLy8gMTUyNS0xNTI5XG4gICcxMTAxMTAxMDEwMDEnLCAnMDEwMTExMDEwMTAwJywgJzEwMTAxMTAxMTAxMCcsICcxMDAxMDEwMTEwMTEnLCAnMDEwMDEwMTAxMDExJyxcbiAgLy8gMTUzMC0xNTM0XG4gICcwMTEwMDEwMTAwMTEnLCAnMDExMTAwMTAxMDAxJywgJzAxMTEwMTEwMDAxMCcsICcxMDExMTAxMDEwMDEnLCAnMDEwMTEwMTEwMDEwJyxcbiAgLy8gMTUzNS0xNTM5XG4gICcxMDEwMTAxMTAxMDEnLCAnMDEwMTAxMDEwMTAxJywgJzEwMTEwMDEwMDEwMScsICcxMTAxMTAwMTAwMTAnLCAnMTExMDExMDAxMDAxJyxcbiAgLy8gMTU0MC0xNTQ0XG4gICcwMTEwMTEwMTAwMTAnLCAnMTAxMDExMTAxMDAxJywgJzAxMDEwMTEwMTAxMScsICcwMTAwMTAxMDEwMTEnLCAnMTAxMDAxMDEwMTAxJyxcbiAgLy8gMTU0NS0xNTQ5XG4gICcxMTAxMDAxMDEwMDEnLCAnMTEwMTAxMDEwMTAwJywgJzExMDExMDEwMTAxMCcsICcxMDAxMTAxMTAxMDEnLCAnMDEwMDEwMTExMDEwJyxcbiAgLy8gMTU1MC0xNTU0XG4gICcxMDEwMDAxMTEwMTEnLCAnMDEwMDEwMDExMDExJywgJzEwMTAwMTAwMTEwMScsICcxMDEwMTAxMDEwMTAnLCAnMTAxMDExMDEwMTAxJyxcbiAgLy8gMTU1NS0xNTU5XG4gICcwMDEwMTEwMTEwMTAnLCAnMTAwMTAxMDExMTAxJywgJzAxMDAwMTAxMTExMCcsICcxMDEwMDAxMDExMTAnLCAnMTEwMDEwMDExMDEwJyxcbiAgLy8gMTU2MC0xNTY0XG4gICcxMTAxMDEwMTAxMDEnLCAnMDExMDEwMTEwMDEwJywgJzAxMTAxMDExMTAwMScsICcwMTAwMTAxMTEwMTAnLCAnMTAxMDAxMDExMTAxJyxcbiAgLy8gMTU2NS0xNTY5XG4gICcwMTAxMDAxMDExMDEnLCAnMTAxMDEwMDEwMTAxJywgJzEwMTEwMTAxMDAxMCcsICcxMDExMTAxMDEwMDAnLCAnMTAxMTEwMTEwMTAwJyxcbiAgLy8gMTU3MC0xNTc0XG4gICcwMTAxMTAxMTEwMDEnLCAnMDAxMDExMDExMDEwJywgJzEwMDEwMTAxMTAxMCcsICcxMDExMDEwMDEwMTAnLCAnMTEwMTEwMTAwMTAwJyxcbiAgLy8gMTU3NS0xNTc5XG4gICcxMTEwMTEwMTAwMDEnLCAnMDExMDExMTAxMDAwJywgJzEwMTEwMTEwMTAxMCcsICcwMTAxMDExMDExMDEnLCAnMDEwMTAwMTEwMTAxJyxcbiAgLy8gMTU4MC0xNTg0XG4gICcwMTEwMTAwMTAxMDEnLCAnMTEwMTAxMDAxMDEwJywgJzExMDExMDEwMTAwMCcsICcxMTAxMTEwMTAxMDAnLCAnMDExMDExMDExMDEwJyxcbiAgLy8gMTU4NS0xNTg5XG4gICcwMTAxMDEwMTEwMTEnLCAnMDAxMDEwMDExMTAxJywgJzAxMTAwMDEwMTAxMScsICcxMDExMDAwMTAxMDEnLCAnMTAxMTAxMDAxMDEwJyxcbiAgLy8gMTU5MC0xNTk0XG4gICcxMDExMTAwMTAxMDEnLCAnMDEwMTEwMTAxMDEwJywgJzEwMTAxMDEwMTExMCcsICcxMDAxMDAxMDExMTAnLCAnMTEwMDEwMDAxMTExJyxcbiAgLy8gMTU5NS0xNTk5XG4gICcwMTAxMDAxMDAxMTEnLCAnMDExMDEwMDEwMTAxJywgJzAxMTAxMDEwMTAxMCcsICcxMDEwMTEwMTAxMTAnLCAnMDEwMTAxMDExMTAxJyxcbiAgLy8gMTYwMFxuICAnMDAxMDEwMDExMTAxJ1xuXTtcblxuZnVuY3Rpb24gZ2V0RGF5c0RpZmYoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKTogbnVtYmVyIHtcbiAgY29uc3QgZGlmZiA9IE1hdGguYWJzKGRhdGUxLmdldFRpbWUoKSAtIGRhdGUyLmdldFRpbWUoKSk7XG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBPTkVfREFZKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5nYkNhbGVuZGFySXNsYW1pY1VtYWxxdXJhIGV4dGVuZHMgTmdiQ2FsZW5kYXJJc2xhbWljQ2l2aWwge1xuICAvKipcbiAgKiBSZXR1cm5zIHRoZSBlcXVpdmFsZW50IGlzbGFtaWMoVW1hbHF1cmEpIGRhdGUgdmFsdWUgZm9yIGEgZ2l2ZSBpbnB1dCBHcmVnb3JpYW4gZGF0ZS5cbiAgKiBgZ2RhdGVgIGlzIHMgSlMgRGF0ZSB0byBiZSBjb252ZXJ0ZWQgdG8gSGlqcmkuXG4gICovXG4gIGZyb21HcmVnb3JpYW4oZ0RhdGU6IERhdGUpOiBOZ2JEYXRlIHtcbiAgICBsZXQgaERheSA9IDEsIGhNb250aCA9IDAsIGhZZWFyID0gMTMwMDtcbiAgICBsZXQgZGF5c0RpZmYgPSBnZXREYXlzRGlmZihnRGF0ZSwgR1JFR09SSUFOX0ZJUlNUX0RBVEUpO1xuICAgIGlmIChnRGF0ZS5nZXRUaW1lKCkgLSBHUkVHT1JJQU5fRklSU1RfREFURS5nZXRUaW1lKCkgPj0gMCAmJiBnRGF0ZS5nZXRUaW1lKCkgLSBHUkVHT1JJQU5fTEFTVF9EQVRFLmdldFRpbWUoKSA8PSAwKSB7XG4gICAgICBsZXQgeWVhciA9IDEzMDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1PTlRIX0xFTkdUSC5sZW5ndGg7IGkrKywgeWVhcisrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTI7IGorKykge1xuICAgICAgICAgIGxldCBudW1PZkRheXMgPSArTU9OVEhfTEVOR1RIW2ldW2pdICsgMjk7XG4gICAgICAgICAgaWYgKGRheXNEaWZmIDw9IG51bU9mRGF5cykge1xuICAgICAgICAgICAgaERheSA9IGRheXNEaWZmICsgMTtcbiAgICAgICAgICAgIGlmIChoRGF5ID4gbnVtT2ZEYXlzKSB7XG4gICAgICAgICAgICAgIGhEYXkgPSAxO1xuICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaiA+IDExKSB7XG4gICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICB5ZWFyKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoTW9udGggPSBqO1xuICAgICAgICAgICAgaFllYXIgPSB5ZWFyO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOZ2JEYXRlKGhZZWFyLCBoTW9udGggKyAxLCBoRGF5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF5c0RpZmYgPSBkYXlzRGlmZiAtIG51bU9mRGF5cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VwZXIuZnJvbUdyZWdvcmlhbihnRGF0ZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAqIENvbnZlcnRzIHRoZSBjdXJyZW50IEhpanJpIGRhdGUgdG8gR3JlZ29yaWFuLlxuICAqL1xuICB0b0dyZWdvcmlhbihoRGF0ZTogTmdiRGF0ZSk6IERhdGUge1xuICAgIGNvbnN0IGhZZWFyID0gaERhdGUueWVhcjtcbiAgICBjb25zdCBoTW9udGggPSBoRGF0ZS5tb250aCAtIDE7XG4gICAgY29uc3QgaERheSA9IGhEYXRlLmRheTtcbiAgICBsZXQgZ0RhdGUgPSBuZXcgRGF0ZShHUkVHT1JJQU5fRklSU1RfREFURSk7XG4gICAgbGV0IGRheURpZmYgPSBoRGF5IC0gMTtcbiAgICBpZiAoaFllYXIgPj0gSElKUklfQkVHSU4gJiYgaFllYXIgPD0gSElKUklfRU5EKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhZZWFyIC0gSElKUklfQkVHSU47IHkrKykge1xuICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IDEyOyBtKyspIHtcbiAgICAgICAgICBkYXlEaWZmICs9ICtNT05USF9MRU5HVEhbeV1bbV0gKyAyOTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBoTW9udGg7IG0rKykge1xuICAgICAgICBkYXlEaWZmICs9ICtNT05USF9MRU5HVEhbaFllYXIgLSBISUpSSV9CRUdJTl1bbV0gKyAyOTtcbiAgICAgIH1cbiAgICAgIGdEYXRlLnNldERhdGUoR1JFR09SSUFOX0ZJUlNUX0RBVEUuZ2V0RGF0ZSgpICsgZGF5RGlmZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdEYXRlID0gc3VwZXIudG9HcmVnb3JpYW4oaERhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gZ0RhdGU7XG4gIH1cbiAgLyoqXG4gICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gYSBzcGVjaWZpYyBIaWpyaSBoTW9udGguXG4gICogYGhNb250aGAgaXMgMSBmb3IgTXVoYXJyYW0sIDIgZm9yIFNhZmFyLCBldGMuXG4gICogYGhZZWFyYCBpcyBhbnkgSGlqcmkgaFllYXIuXG4gICovXG4gIGdldERheXNQZXJNb250aChoTW9udGg6IG51bWJlciwgaFllYXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGhZZWFyID49IEhJSlJJX0JFR0lOICYmIGhZZWFyIDw9IEhJSlJJX0VORCkge1xuICAgICAgY29uc3QgcG9zID0gaFllYXIgLSBISUpSSV9CRUdJTjtcbiAgICAgIHJldHVybiArTU9OVEhfTEVOR1RIW3Bvc11baE1vbnRoIC0gMV0gKyAyOTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLmdldERheXNQZXJNb250aChoTW9udGgsIGhZZWFyKTtcbiAgfVxufVxuIl19