const TestDetails = ({ test }) => {
    return (
        <div className="test-details">
            <h4>{test.title}</h4>
            <p><strong>var1 (Unit): </strong>{test.var1}</p>
            <p><strong>var2 (Unit): </strong>{test.var2}</p>
            <p>{test.createdAt}</p>
        </div>
    )
}

export default TestDetails