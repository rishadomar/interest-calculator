import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

type DateSelectorProps = {
    label: string;
    value: Dayjs | null;
    onChange: (value: Dayjs) => void;
    sx?: any;
    helperText: string;
};

const DateSelector = ({ label, value, onChange, sx, helperText }: DateSelectorProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={label}
                value={value}
                format='DD/MM/YYYY'
                {...sx}
                onChange={(value: string | null) => onChange(dayjs(value))}
                slotProps={{ textField: { helperText: helperText } }}
            />
        </LocalizationProvider>
    );
};

export default DateSelector;
