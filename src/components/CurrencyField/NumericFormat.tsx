import React from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

interface CustomPropsNumberFormat {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomPropsNumberFormat>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        allowLeadingZeros
        allowNegative={false}
        prefix='R$ '
        decimalScale={2}
        valueIsNumericString
        decimalSeparator=','
        thousandSeparator='.'
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          })
        }}
      />
    )
  }
)

export default (NumericFormatCustom);