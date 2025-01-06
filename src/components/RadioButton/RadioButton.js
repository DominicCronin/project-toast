import React from 'react';

function RadioButton({name, value, selectedValue, setSelectedValue}) {
  return (
    <label htmlFor={`${name}-${value}`}>
    <input
      id={`${name}-${value}`}
      type="radio"
      name={name}
      value={value}
      checked={value === selectedValue || null}
      onChange={()=> {
        console.log("good");
        setSelectedValue(value)
      }}
    />
    {value}
  </label>
  );
}

export default RadioButton;
