import {DateTime} from './luxon.js'

const showDateAndTime = document.querySelector('.date-and-time');

showDateAndTime.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED)
