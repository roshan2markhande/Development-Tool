import React from 'react';

const ButtonIcon = ({ field }) => (
    <button type="button" disabled={!field.ITEM_ENABLE_FLAG}>
        <img src={field.ICON_SRC} alt={field.TOOL_TIP} />
        {field.TOOL_TIP}
    </button>
);

export default ButtonIcon;
