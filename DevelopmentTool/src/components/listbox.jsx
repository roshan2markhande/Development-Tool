import React from 'react';

const ListBox = ({ field }) => (
    <div>
        <label>
            {field.ITEM_NAME}
            <select disabled={!field.ITEM_ENABLE_FLAG}>
                {field.OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    </div>
);

export default ListBox;
