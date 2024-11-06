import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import data from './api.js';
import Cards from './Cards.jsx';


export default function Image() {
    const theme = useTheme();
    const [restData,setRestData] = React.useState(data);

  const [value, setValue] = React.useState(0);

//   React.useEffect(()=>{
//         function getData(){
//             setRestData()
//         }
//         getData()
//   },[])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const handleClick = (type) => {
   
    let breakfast;
    if(type === 'breakfast'){
         breakfast = data.filter((ele) => ele.type === "breakfast");
        setRestData(breakfast);
    }
    else if(type === 'lunch'){
         breakfast = data.filter((ele) => ele.type === "lunch");
        setRestData(breakfast);
    }
    
    else if(type === 'dinner'){
         breakfast = data.filter((ele) => ele.type === "dinner");
         console.log(breakfast)
        setRestData(breakfast);
    }
    else{
         setRestData(data);
    }
    

};

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Order Your Favourite Dish..</h1>
        <hr />
        
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
        shreyavalue {value}

            <Tab label="All" onClick={()=>handleClick('all')}/>
            <Tab label="Breakfast" onClick={()=>handleClick('breakfast')}/>
            <Tab label="Lunch" onClick={()=>handleClick('lunch')}/>
            <Tab label="Dinner" onClick={()=>handleClick('dinner')}/>
        </Tabs>

        <TabPanel value={value} index={0} dir={theme.direction}>
           <div className='cards' style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'space-between'}}>
                {restData.map((value, index) =>
                    <Cards restData={value}  key={index}/>
                )}
            </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className='cards' style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'space-between'}}>
                {restData.map((value, index) =>
                    <Cards restData={value}  key={index}/>
                )}
            </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <div className='cards' style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'space-between'}}>
                {restData.map((value, index) =>
                    <Cards restData={value}  key={index}/>
                )}
            </div>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <div className='cards' style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'space-between'}}>
                {restData.map((value, index) =>
                    <Cards restData={value}  key={index}/>
                )}
            </div>
        </TabPanel>
        </Box>
    </div>
  );
}