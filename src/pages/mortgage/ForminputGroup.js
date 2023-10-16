import React from 'react';

function ForminputGroup({ text, icon, placeholder, value, onInput, onKeyUp, readOnly = false }) {
  return (
    <div className="input-group mb-3" style={{ margin: '20px 30px' }}> {/* Increase left and right margins */}
      <span className="input-group-text">
        {text}
        {icon}
      </span>
      <input
        type="number"
        className="form-control"
        placeholder={placeholder}
        value={value}
        onInput={onInput}
        onKeyUp={onKeyUp}
        readOnly={readOnly}
      />
    </div>
  );
}

export default ForminputGroup;

