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
            // prefix='R'
        />
    );
});

interface State {
    numberformat: string;
}

interface CurrencyInputProps {
    value: string | number;
    onChange: (value: string) => void;
    label: string;
    name: string;
}

export default function CurrencyInput({ value, onChange, label, name }: CurrencyInputProps) {
    return (
        <Box
            sx={{
                '& > :not(style)': {
                    m: 1
                }
            }}
        >
            <TextField
                label={label}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                name={name}
                id={`numeric-input-${name}`}
                InputProps={{
                    inputComponent: NumericFormatCustom as any
                }}
                variant='standard'
            />
        </Box>
    );
}
