import React, {useEffect, useState} from 'react'
import '../styles/App.css'
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

const App = () => {

    const[robots, setRobots] = useState([]);
    const[searchFields, setSearchFields] = useState('');
    const[count, setCount] = useState(0);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=> setRobots(users))
        console.log(count)
    }, [count])




    const onSearchChange = (event) => {
        setSearchFields(event.target.value)
    }

    const onClick = () => {
        setCount(count + 1)
    }




        const filterRobots = robots.filter(robot=> {
           return robot.address.city.toLowerCase().includes(searchFields.toLowerCase())
        })
        return !robots.length ?
             <h1 className={'appTitle'}>Loading</h1> :
                <div>
                    <h1 className={'appTitle'}>Robofriends</h1>
                    <button onClick={onClick}>Click me</button>
                    {/*<h1 className={'appTitle'}>{count}</h1>*/}
                    <SearchBox searchChange={onSearchChange}/>
                    <ErrorBoundary>
                        <Scroll>
                            <CardList robots={filterRobots}/>
                        </Scroll>
                    </ErrorBoundary>
                </div>



}

export default App