
const AppleCount = ({ applecount, basketname }) => {
    return (
        <>
            <div className="basket">
                <h1>
                    <span>{applecount}</span>Apples
                </h1>
                <p>{basketname}</p>
            </div>
        </>
    )
}

export default AppleCount