import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

type DateSelectorProps = {
    label: string;
    setStartDate: (value: Dayjs) => void;
    sx?: any;
    helperText: string;
};

const DateSelector = ({ label, setStartDate, sx, helperText }: DateSelectorProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={label}
                {...sx}
                onChange={(value: string | null) => setStartDate(dayjs(value))}
                slotProps={{ textField: { helperText: helperText } }}
            />
        </LocalizationProvider>
    );
};

export default DateSelector;
