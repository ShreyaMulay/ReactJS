import React,{useState} from 'react'
import Container from "./Container"
import FoodList from "./FoodList";
import InnerContainer from "./InnerContainer";
import FoodDetails from "./FoodDetails";
import Search from "./Search";
import Nav from "./Nav";
export default function Recipe() {
    const [foodData,setFoodData] = useState([])
    const [foodId,setFoodId] = useState()
    
    return (
        <div>
            <Nav />
            <Search setFoodData={setFoodData}/>
            <Container>
            <InnerContainer >
                <FoodList foodData={foodData} setFoodId={setFoodId}/>
            </InnerContainer>
            <InnerContainer>
                <FoodDetails foodId={foodId} />
            </InnerContainer>
            </Container>
        </div>
    )
}
