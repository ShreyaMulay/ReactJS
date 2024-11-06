import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';

export default function MyAccordian({question}) {
  return (
    <>
       <Accordion>
            <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                     <span>{question.question}</span>
                     
                    </AccordionSummary>
                    <AccordionDetails>
                    <span>{question.answer}</span>
             </AccordionDetails>
       </Accordion>
    </>
  )
}
