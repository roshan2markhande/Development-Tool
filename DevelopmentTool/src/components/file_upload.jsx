import React from 'react';

const FileUpload = ({ field }) => (
    <div>
        <label>
            {field.TOOL_TIP}
            <input type="file" required={field.DATA_REQUIRED_FLAG} disabled={!field.ITEM_ENABLE_FLAG} />
        </label>
    </div>
);

export default FileUpload;
