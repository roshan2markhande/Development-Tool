import React from 'react';

const CheckBox = ({ field }) => (
    <div>
        <label>
            <input type="checkbox" disabled={!field.ITEM_ENABLE_FLAG} />
            {field.TOOL_TIP}
        </label>
    </div>
);

export default CheckBox;
