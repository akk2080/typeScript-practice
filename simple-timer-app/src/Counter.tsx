type CountType = {
    count: number;
}

const Counter: React.FC<CountType>= ({count}) => {

    return (
        <>
            <div>
                {count}
            </div>
        </>
    )
}

export default Counter