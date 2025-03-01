import React from 'react';

const TextInput = ({ field }) => (
    <div>
        <label>
            {field.ITEM_NAME}
            <input
                type={field.ITEM_SUB_TYPE || 'text'}
                required={field.DATA_REQUIRED_FLAG}
                placeholder={field.TOOL_TIP}
                disabled={!field.ITEM_ENABLE_FLAG}
            />
        </label>
    </div>
);

export default TextInput;
