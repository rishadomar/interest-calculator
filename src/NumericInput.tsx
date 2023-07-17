import * as React from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
        <NumericFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values: any) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value
                    }
                });
            }}
            thousandSeparator
            valueIsNumericString
            prefix='R'
        />
    );
});

interface State {
    numberformat: string;
}

export default function CurrencyInput() {
    const [values, setValues] = React.useState<State>({
        numberformat: '1320'
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Box
            sx={{
                '& > :not(style)': {
                    m: 1
                }
            }}
        >
            <TextField
                label='react-number-format'
                value={values.numberformat}
                onChange={handleChange}
                name='numberformat'
                id='formatted-numberformat-input'
                InputProps={{
                    inputComponent: NumericFormatCustom as any
                }}
                variant='standard'
            />
        </Box>
    );
}
