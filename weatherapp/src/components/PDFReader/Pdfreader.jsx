import React,{useState} from 'react'
import pdfToText from 'react-pdftotext'

const Pdfreader = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
  
    function extractText(event) {
        const file = event.target.files[0]
        pdfToText(file)
            .then(text => {
                console.log(text)
                     // Simple regex to match Name and Address fields

                    // const nameMatch = text.match(/Name \s*(.*)/);
                    // const addressMatch = text.match(/Address:\s*(.*)/);
                    const nameMatch = text.match(/Name \s*([^\n]*)(?=\s*Address:)/);
                    const addressMatch = text.match(/Address:\s*([^\n]*)(?=\s*Description)/);

                    if (nameMatch) setName(nameMatch[1]);
                    if (addressMatch) setAddress(addressMatch[1]);
            })
            .catch(error => console.error("Failed to extract text from pdf"))
    }
    
  return (
    <div>
        <input type="file" accept="application/pdf" onChange={extractText}/>
        <h2>Extracted Data</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Address:</strong> {address}</p>

    </div>
  )
}

export default Pdfreader
