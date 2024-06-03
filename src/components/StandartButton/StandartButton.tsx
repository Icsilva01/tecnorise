import {Button, ButtonProps, CircularProgress, Typography} from '@mui/material'

type ButtonSize = 'small' | 'medium' | 'large' | 'default'

interface Props extends ButtonProps {
  bgcolor?: string
  border?: string
  buttonSize?: ButtonSize
  loading?: boolean
  textColor?: string
}
export const StandartButton = ({
  children,
  bgcolor,
  border,
  buttonSize = 'small',
  loading = false,
  textColor,
  ...props
}: Props) => {
  Array.isArray(buttonSize)

  const sx =
    buttonSize === 'small'
      ? {
          paddingY: 1,
          paddingX: 2,
          height: 30,
        }
      : buttonSize === 'medium'
      ? {
          paddingY: 2,
          paddingX: 4,
        }
      : buttonSize === 'large'
      ? {
          paddingY: 0.5,
          paddingX: 3,
          height: 38,
        }
      : {
          paddingY: 1,
          paddingX: 4,
        }

  return (
    <Button
      {...props}
      variant='contained'
      sx={{
        width: '100%',
        fontSize: 14,
        fontWeight: 700,
        lineHeight: '120%',
        zIndex: '0!important',
        bgcolor: bgcolor,
        border: border,
        color: textColor,
        boxShadow: 'none',
        textTransform: 'inherit',
        ':disabled': {
          cursor: 'not-allowed!important',
          opacity: '0.7',
        },
        '&:hover': {
          bgcolor: bgcolor || 'primary.main',
        },
        ...sx,
      }}
    >
      {loading ? (
        <Typography color={textColor}>
          <CircularProgress size={12} /> Carregando...
        </Typography>
      ) : (
        children
      )}
    </Button>
  )
}
