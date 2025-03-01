import React from 'react';

const Button = ({ field }) => (
    <button type="button" disabled={!field.ITEM_ENABLE_FLAG}>
        {field.ITEM_NAME}
    </button>
);

export default Button;
