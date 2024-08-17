import React,{useState} from 'react'
import FormInput from './FormInput'
import FormPreview from './FormPreview'

export default function FormBuilder() {
  const [fields, setFields] = useState([]);
  let [show, setShow] = useState(false);


  const addField = () => {
    console.log('addField',fields)
    setFields([...fields, { type: 'text', label: '', value: '' }]);
  };

  const updateField = (index, newField) => {
    setShow(false)
    const newFields = fields.map((field, i) => (i === index ? newField : field));
    console.log('newField',newField)

    setFields(newFields);
  };


  return (
    <div>
      <button onClick={addField}>Add Field</button>
        {fields.map((field, index) => (
          <FormInput
            key={index}
            field={field}
            index={index}
            updateField={updateField}
          />
        ))}
        <button className="btn btn-primary" onClick={() => setShow(true)}>Show Preview</button>
          {show ?  <FormPreview fields={fields} /> : null}
        
      
    </div>
  )
}
