
const Button = ({ imageUrl, ButtonName, clickHandler }) => {
    return (
        <>
            <button title={ButtonName} onClick={clickHandler}>
                <img src={imageUrl} alt="ImgData" />
            </button>
        </>
    )
}

export default Button