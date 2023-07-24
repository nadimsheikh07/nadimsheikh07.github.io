import { FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { FormControl } from "./index";
import PropTypes from "prop-types";
const SelectBox = props => {
  const {
    name,
    label,
    value,
    required,
    options,
    fullWidth,
    helperText,
    isRequired
  } = props;

  return (
    <FormControl
      key={`key${name}`}
      error={helperText ? true : false}
      fullWidth={fullWidth}
      style={
        !fullWidth ? { width: "50%", paddingLeft: 5, paddingRight: 5 } : {}
      }
    >
      <InputLabel>
        {`${label} ${isRequired ? "*" : ''}`}
      </InputLabel>

      <Select
        name={name}
        label={label}
        required={required}
        value={value}
        onChange={e => props.onChange(e)}
        inputProps={{
          name: name
        }}
      >
        {options &&
          options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </Select>

      {helperText &&
        <FormHelperText>
          {helperText}
        </FormHelperText>}
    </FormControl>
  );
};

SelectBox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.string,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  isRequired: PropTypes.bool,
}
export default SelectBox;
