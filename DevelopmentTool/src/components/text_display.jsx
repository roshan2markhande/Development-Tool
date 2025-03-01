import React from 'react';

const TextDisplay = ({ field }) => (
    <div>
        <span>{field.ITEM_NAME}: {field.VALUE}</span>
    </div>
);

export default TextDisplay;
