import React ,{useState}from 'react';
import "./Switch.css";

const Switch = () => {
    const [value, setValue] = useState(false);
  return (
    <>
      <input
        checked={value}
        onChange={()=>{setValue(!value)}}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
       style={{ background: value && '  #193745' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;