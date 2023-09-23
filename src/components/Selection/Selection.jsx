import React, { useState } from "react";
import Select from "react-select";

import "./Selection.css";

export const Selection = ({name, value, selectOptions, placeholder, handleChange}) => {  

  return (
    <>
      <Select
        options={selectOptions}
        defaultValue={value}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        className="app_selection_container"
        classNamePrefix="app_selection"
        components={{
          IndicatorSeparator: () => null
        }}
      />
    </>
  );
};
