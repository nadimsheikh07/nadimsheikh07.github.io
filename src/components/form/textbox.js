import { FormHelperText, Icon, InputAdornment, TextField, Box } from '@mui/material';
import { FormControl } from './index';
import PropTypes from 'prop-types';
import { IconButton } from 'node_modules/@mui/material/index';

const TextBox = (props) => {
  const {
    name,
    label,
    variant,
    type,
    InputLabelProps,
    icon,
    value,
    required,
    multiline,
    inputAdornmentPosition = 'end',
    fullWidth,
    helperText,
    disabled,
    rows,
    onKeyDown,
    isAlphanumeric,
    isMaxLenght,
    onIconClick,
    placeholder,
    iconDisabled,
  } = props;

  return (
    <FormControl key={`key${name}`} error={helperText ? true : false} fullWidth={fullWidth}>
      <TextField
        error={helperText ? true : false}
        variant={variant}
        name={name}
        label={label}
        type={type}
        onKeyDown={onKeyDown}
        rows={rows}
        InputLabelProps={InputLabelProps}
        placeholder={placeholder}
        multiline={multiline}
        required={required}
        disabled={disabled}
        autoComplete={'false'}
        value={value}
        onChange={(e) => props.onChange(e)}
        inputProps={{ maxLength: isMaxLenght ? isMaxLenght : null }}
        InputProps={{
          endAdornment: (
            <InputAdornment position={inputAdornmentPosition}>
              <IconButton disabled={iconDisabled} onClick={onIconClick}>
                <Icon>{icon}</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Box sx={{ display: 'flex' }}>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {isAlphanumeric && (
          <FormHelperText sx={{ marginTop: '0px', marginBottom: '10px', color: '#637381!important' }}>
            must be format Alphanumeric, Alphabetical, Numeric or Dashed Characters (Ex: ABCD323)
          </FormHelperText>
        )}
        {isMaxLenght && (
          <FormHelperText sx={{ marginTop: '0px', marginBottom: '10px', color: '#637381!important' }}>
            {`Must be characters limit ${isMaxLenght}`}
          </FormHelperText>
        )}
      </Box>
    </FormControl>
  );
};

TextBox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  InputLabelProps: PropTypes.string,
  icon: PropTypes.string,
  inputAdornmentPosition: PropTypes.string,
  required: PropTypes.bool,
  multiline: PropTypes.string,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  isRequired: PropTypes.bool,
  rows: PropTypes.string,
  onKeyDown: PropTypes.func,
};

export default TextBox;
