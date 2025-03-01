import React from 'react';

const TextArea = ({ field }) => (
    <div>
        <label>
            {field.ITEM_NAME}
            <textarea
                required={field.DATA_REQUIRED_FLAG}
                placeholder={field.TOOL_TIP}
                disabled={!field.ITEM_ENABLE_FLAG}
            />
        </label>
    </div>
);

export default TextArea;
