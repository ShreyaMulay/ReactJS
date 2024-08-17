import React from 'react'

export default function FormInput({ field, index, updateField }) {

  const handleLabelChange = (e) => {
    updateField(index, { ...field, label: e.target.value });

  };

  const handleTypeChange = (e) => {
    updateField(index, { ...field, type: e.target.value });
  };
  const handleOptionsChange = (e) => {
    updateField(index, { ...field, options: e.target.value.split(',') });
  };
  
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Label"
          value={field.label}
          onChange={handleLabelChange}
        />
        <select value={field.type} onChange={handleTypeChange}>
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="email">Email</option>
          <option value="radio">Radio</option>

        </select>
        {field.type === 'radio' && (
          <input
            type="text"
            placeholder="Enter value"
            value={field.options ? field.options.join(',') : ''}
            onChange={handleOptionsChange}
          />
        )}
      </div>
    </div>
  )
}
