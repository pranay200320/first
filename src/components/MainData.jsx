import React, { useState } from 'react'
import Button from './Button'
import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import AppleCount from './AppleCount'

const MainData = () => {
    const [total, setTotal] = useState(10)
    const [right, setRight] = useState(0)
    const [left, setLeft] = useState(total - right)
    const totalAppleCount = 10
    let rightAppleCount = 0;
    let leftAppleCount = totalAppleCount - rightAppleCount;

    const leftClick = () => {
        setRight(right - 1),
            setLeft(left + 1)
        console.log(right)
        console.log(left)

    }
    const RightClick = () => {
        setRight(right + 1),
            setLeft(left - 1)
        console.log(right)
        console.log(left)

    }

    return (
        <section>
            <AppleCount applecount={left} basketname="Basket-1" />
            <Button clickHandler={leftClick} imageUrl={LeftArrow} ButtonName='LeftArrow' />
            <Button clickHandler={RightClick} imageUrl={RightArrow} ButtonName='RightArrow' />
            <AppleCount applecount={right} basketname="Basket-2" />

        </section>

    )
}

export default MainData