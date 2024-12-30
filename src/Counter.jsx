import React from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleData1 = () => {
        setCount(count + 1)
    }
    const handleData2 = () => {
        setCount(0)
    }
    const handleData3 = () => {
        if (count <= 0) {
            alert('Data Procced On Negative Mode')
        }
        else {
            setCount(count - 1)

        }
    }
    return (
        <>
            <h1>Counter Table</h1>
            <h1>{count}</h1>
            <button onClick={handleData1}>Add</button>
            <button onClick={handleData2}>Restart</button>
            <button onClick={handleData3}>Sub</button>

        </>
    )
}

export default Counter