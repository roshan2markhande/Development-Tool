import React from 'react';
import TextInput from './text_input';
import TextDisplay from './text_display';
import ListBox from './listbox';
import CheckBox from './check_box';
import RadioButton from './radio_button';
import Toggle from './toggal';
import Button from './button';
import ButtonIcon from './button_icon';
import FileUpload from './file_upload';
import TextArea from './text_area';

const DynamicForm = ({ form }) => {
    return (
        <>    
        <form>
            {form.fields.map((field) => {
                if (!field.ITEM_VISIBLE_FLAG) return null;

                switch (field.ITEM_TYPE) {
                    case 'text_input':
                        return <TextInput key={field.ITEM_NAME} field={field} />;
                    case 'text_display':
                        return <TextDisplay key={field.ITEM_NAME} field={field} />;
                    case 'listbox':
                        return <ListBox key={field.ITEM_NAME} field={field} />;
                    case 'check_box':
                        return <CheckBox key={field.ITEM_NAME} field={field} />;
                    case 'radio_button':
                        return <RadioButton key={field.ITEM_NAME} field={field} />;
                    case 'toggle':
                        return <Toggle key={field.ITEM_NAME} field={field} />;
                    case 'button':
                        return <Button key={field.ITEM_NAME} field={field} />;
                    case 'button_icon':
                        return <ButtonIcon key={field.ITEM_NAME} field={field} />;
                    case 'file_upload':
                        return <FileUpload key={field.ITEM_NAME} field={field} />;
                    case 'text_area':
                        return <TextArea key={field.ITEM_NAME} field={field} />;
                    default:
                        return null;
                }
            })}
        </form>
        </>

    );
};

export default DynamicForm;
