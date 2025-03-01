import React from 'react';

const RadioButton = ({ field }) => (
    <div>
        <span>{field.TOOL_TIP}</span>
        {field.OPTIONS.map((option) => (
            <label key={option.value}>
                <input
                    type="radio"
                    name={field.ITEM_NAME}
                    value={option.value}
                    required={field.DATA_REQUIRED_FLAG}
                    disabled={!field.ITEM_ENABLE_FLAG}
                />
                {option.label}
            </label>
        ))}
    </div>
);

export default RadioButton;
