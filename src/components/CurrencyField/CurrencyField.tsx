import {TextField} from '@mui/material'
import NumericFormatCustom from './NumericFormat'

export const DefaultTextFieldCurrency = (placeholder: string, props: any, id?: string) => {
  return (
    <TextField
      {...props}
      fullWidth
      id='outlined-required'
      placeholder={placeholder}
      label={props.label}
      disabled={!!id}
      InputProps={{
        inputComponent: NumericFormatCustom,
      }}
    />
  )
}
