import React from 'react';

const Toggle = ({ field }) => (
    <div>
        <label>
            {field.ITEM_NAME}
            <input type="checkbox" disabled={!field.ITEM_ENABLE_FLAG} />
        </label>
    </div>
);

export default Toggle;
