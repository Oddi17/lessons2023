import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


export default function CalendarSamp() {
    const today = dayjs()
    const maxDate = dayjs().set('month',(dayjs().get('month'))+2)
    const nineAM = dayjs().set('hour', 9).startOf('hour');
return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar defaultValue={today} maxDate={maxDate} disablePast />   
            <TimePicker
                defaultValue={nineAM}
                minTime={nineAM}
                ampm={false}
            />      
    </LocalizationProvider>
)}
