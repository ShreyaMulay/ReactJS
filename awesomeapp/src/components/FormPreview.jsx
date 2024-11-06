import React from 'react'

export default function FormPreview({fields}) {
  return (
    <div>
       <form>
        {fields.map((field, index) => (
            <div key={index}>
            <label>{field.label}</label>
            {field.type === 'radio' ? (
              field.options.map((option, idx) => (
                <div key={idx}>
                  <input type="radio" name={`radio-${index}`} value={option} />
                  {option}
                </div>
              ))
            ) : (
              <input type={field.type} value={field.value}  />
            )}
            {/* <input type={field.type} /> */}
            </div>
        ))}
    </form>
    </div>
  )
}
