import React, { useState } from "react";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TodoList from "./TodoList";
import EditIcon from '@mui/icons-material/Edit';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
function TodoDemo()
{
    const [inputData,setInputData] = useState("")

    const [items,setItems] = useState([])

    const [toggleSubmit,setToggleSubmit] = useState(true)

    const [editItm,setEditItm] = useState()
   
    const addItem=()=>{
        if(!inputData)
        {
            alert("data")
        }
        else if(inputData && !toggleSubmit){
            setItems(
                items.map((item, i)=>{
                    if(item.id === editItm)
                    {
                        return {...item,name: inputData}
                    }
                    return item
                })
            )
            setToggleSubmit(true)
            setInputData("")
            setEditItm("")
                
        }
        else{
            const allInputData = {id: new Date().getTime().toString(),name:inputData }
            setItems([...items,allInputData])
            setInputData("")
            console.log(items)
        }
        
    }
    const removeAll = ()=>{
        setItems([])
    }
    const editItem = (id)=>{
        let newItem = items.find(item => {
            return item.id === id
        })
        console.log(newItem)
        setToggleSubmit(false)
        setInputData(newItem.name)
        setEditItm(newItem.id)

    }
    
    return(
        <div style={{display:'flex',justifyContent:'center'}}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 18 }}>
                        <PlaylistAddCheckIcon /> Add Your List Here ✌️✌️
                        </Typography>
                        <Typography variant="h9" component="div" sx={{  mt: 3.5 }}>
                            <input type="text"  placeholder="✍️ Enter Text here.." value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
                            
                            {toggleSubmit ?  <Button variant="outlined" onClick={addItem}> <AddIcon /></Button> : <Button variant="outlined" onClick={addItem}> <EditCalendarIcon /></Button>}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 3.5 }}></Typography>
                        <Typography variant="body2">
                            {items.map((item, i)=>
                                <>
                                <TodoList item={item} index={item.id} setItems={setItems}/>
                                <EditIcon  onClick={()=>editItem(item.id)}/>

                                </>
                                
                            )}
                           
                        <br />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={removeAll}>Remove All</Button>
                    </CardActions>
                </Card>
        </div>
    )
}

export default TodoDemo;