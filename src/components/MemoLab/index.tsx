import { useEffect, useState, memo } from 'react';


const Greeting = memo((props: {name: string;}) => {
    console.log('render Greeting')
    return (
        <div>Welcome {props.name}</div>
    )
})

const AgeDisplay = (props: {age: string;}) => {
    console.log('render Age')
    return (
        <div>You are {props.age}</div>
    )
}

const MemoLab = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    
    return (
        <div>
            <input 
                placeholder="name"
                value={name}
                onChange={(e) => 
                    setName(e.target.value)}
            />
            <input 
                placeholder="age"
                value={age}
                onChange={(e) => 
                    setAge(e.target.value)}
            />
            <Greeting name={name} />
            <AgeDisplay age={age} />
        </div>
    )
}

export default MemoLab;