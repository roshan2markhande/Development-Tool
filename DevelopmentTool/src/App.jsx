import { useState } from 'react'
import './light-theme.css';
import './dark-theme.css'
import DynamicForm from './components/DynamicForm'
import Header from './components/Header'
const jsonData = [
  {
      "form": {
          "ITEM_NAME": "dynamicForm",
          "fields": [
              {
                  "ITEM_NAME": "username",
                  "ITEM_TYPE": "text_input",
                  "ITEM_SUB_TYPE": "text",
                  "TOOL_TIP": "Enter your username",
                  "DATA_REQUIRED_FLAG": true,
                  "ITEM_VISIBLE_FLAG": true,
                  "ITEM_ENABLE_FLAG": true
              },
              {
                "ITEM_NAME": "nishant",
                "ITEM_TYPE": "text_input",
                "ITEM_SUB_TYPE": "text",
                "TOOL_TIP": "Enter your nishant",
                "DATA_REQUIRED_FLAG": true,
                "ITEM_VISIBLE_FLAG": true,
                "ITEM_ENABLE_FLAG": true
            },
              {
                "ITEM_NAME": "Ghume",
                "ITEM_TYPE": "text_area",
                "VALUE": "",
                "ITEM_VISIBLE_FLAG": true,
                "ITEM_VISIBLE_FLAG": true,
                "ITEM_ENABLE_FLAG": true
            },
            {
              "ITEM_NAME": "Mahesh  ",
              "ITEM_TYPE": "text_input",
              "TOOL_TIP": "mahesh",
              "ITEM_VISIBLE_FLAG": true,
              "ITEM_VISIBLE_FLAG": true,  
              "ITEM_ENABLE_FLAG": true
          },
            {
              "ITEM_NAME": "Mishra",
              "ITEM_TYPE": "file_upload",
              "VALUE": "",
              "ITEM_VISIBLE_FLAG": true,
              "ITEM_VISIBLE_FLAG": true,
              "ITEM_ENABLE_FLAG": true
          },
          {
                   "ITEM_NAME": "Ghume",
                "ITEM_TYPE": "text_input",
                "VALUE": "",
                "ITEM_VISIBLE_FLAG": true,
                "ITEM_VISIBLE_FLAG": true,
                "ITEM_ENABLE_FLAG": true
            },
              {
                  "ITEM_NAME": "ageDisplay",
                  "ITEM_TYPE": "text_display",
                  "VALUE": "Age: 25",
                  "ITEM_VISIBLE_FLAG": true,
              },
              {
                "ITEM_NAME": "test",
                "ITEM_TYPE": "button",
                "TOOL_TIP": "Test",
                "ITEM_VISIBLE_FLAG": true,
                "CLICK_EVENTS_STR":"alert('hi')",
            },
              {
                  "ITEM_NAME": "gender",
                  "ITEM_TYPE": "radio_button",
                  "ITEM_VISIBLE_FLAG": true,
                  "DATA_REQUIRED_FLAG": true,
                  "OPTIONS": [
                      { "label": "Male", "value": "male" },
                      { "label": "Female", "value": "female" },
                      { "label": "Other", "value": "other" }
                  ]
              },
              {
                "ITEM_NAME": "shruti",
                "ITEM_TYPE": "button",
                "TOOL_TIP": "Test",
                "ITEM_VISIBLE_FLAG": true,
                "CLICK_EVENTS_STR":"alert('hi i am shruti')",
            },
              // Add more fields as needed
          ]
      }
  }
];

function App() {
  const form = jsonData[0].form;
  const [theme, setTheme] = useState('light');
  return (
      <div>
            <Header onThemeChange={setTheme} />
            <h1>Dynamic Form Example</h1>
          <DynamicForm form={form} />
      </div>
  );
}

export default App
