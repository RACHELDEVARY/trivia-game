export const Answer = ({ answer, continuegame }) => {
    const handleClick = () => {
        continuegame(answer)
    }
    return (
        <div className="answer"
            onClick={handleClick}>
            {answer}
        </div>)
};
