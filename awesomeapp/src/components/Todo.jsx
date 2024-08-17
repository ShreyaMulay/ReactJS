import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';


export default function Todo() {

  const [inputList,setInputList] = useState("");
  
  const [Items,setItems] = useState([]);

  const [line, setLine] = useState(false)

  const itemEvent = (event) =>{
    // console.log(event.target.value);
    setInputList(event.target.value)
  }
  const listOfItems = () =>{
    setItems((oldItems) =>{
      return [...oldItems,inputList];
    })
    setInputList('')
  }
  const removeItems = (id) =>{
    console.log('remove', id)
    setItems((oldItems) =>{
      console.log('oldItems', oldItems)
         return oldItems.filter((item,index) => index !== id);
         
      // return oldItems.filter((arrEle,index)=>{
      //   return index !== id;
      // })
    })
  }

  const cutIt = () => {
    setLine(true)
  }

  return (
    // <div className='main_div'>
    //   <div className="center_div">
    //     <br />
    //     <h1 className='h1List'>TODO List</h1>
    //     <br />
    //     <input type="text" placeholder='Add item' className='addItem' value={inputList} onChange={itemEvent}/>
    //     <Button className='addButton' onClick={listOfItems}><AddIcon /></Button>

    //     <ol className='olItem'>
            
    //         {Items.map((item,index) => {
    //           return (
    //             <>
    //             <div className="todo_style" onClick={()=>{
    //               removeItems(index)
    //             }} key={index} id={index}>
    //               <i className='fa fa-times' aria-hidden='true' />
    //                 <li className='liItem'> {item} </li>
    //             </div>
    //             </>
    //           )
    //         })}


    //     </ol>

    //   </div>
      
    // </div>
    <div className='main_div'>
    <div className="center_div">
      <br />
      <h1 className='h1List'>TODO List</h1>
      <br />
      <input type="text" placeholder='Add item' className='addItem' value={inputList} onChange={itemEvent}/>
      <Button className='addButton' onClick={listOfItems}><AddIcon /></Button>
      <ol className='olItem'>
          {Items.map((item,index) => {
            return (
                <>
                <div className="todo_style" onClick={cutIt} key={index} id={index}>
                  <span>
                    <DeleteIcon className='deleteIcon'/>
                  </span>
                    <li style={{textDecoration: line ? 'line-through': 'none'}} className='liItem'> {item} </li>
                </div>
                </>
            )
          })}
      </ol>
    </div>
  </div>
  )
}
