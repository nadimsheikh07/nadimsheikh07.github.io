import { FormHelperText, Icon, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { FormControl } from "./index";
import PropTypes from "prop-types";

const PasswordBox = props => {
  const [showPassword, setShowPassword] = React.useState("");

  const {
    name,
    label,
    value,
    required,
    inputAdornmentPosition,
    fullWidth,
    helperText,
    disabled
  } = props;

  return (
    <FormControl
      key={`key${name}`}
      error={helperText ? true : false}
      fullWidth={fullWidth}
    >
      <TextField
        error={helperText ? true : false}
        name={name}
        label={label}
        type={showPassword ? "text" : "password"}
        required={required}
        value={value}
        disabled={disabled}
        // autoComplete={"false"} //MUI pickUp the string value on autoComplete
        autoComplete="new-password"
        onChange={e => props.onChange(e)}
        InputProps={{
          endAdornment: (
            <InputAdornment position={inputAdornmentPosition || "end"}>
              <Icon onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "visibility" : "visibility_off"}
              </Icon>
            </InputAdornment>
          )
        }}
      />

      {helperText &&
        <FormHelperText>
          {helperText}
        </FormHelperText>}
    </FormControl>
  );
};

PasswordBox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  inputAdornmentPosition: PropTypes.string,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

export default PasswordBox;
