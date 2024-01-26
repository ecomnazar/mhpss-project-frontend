import TestForm from '../components/TestForm'

const questionText = "What is the capital of France?"
const questionAndAnswer = ["Paris", "Berlin", "Madrid", "Rome", "London"]
const correctAnswer = 0

const Day1Theme6 = () => {
    return (
        <>
            <TestForm correctAnswer={correctAnswer} questionText={questionText} answers={questionAndAnswer} />
        </>
    )
}

export default Day1Theme6