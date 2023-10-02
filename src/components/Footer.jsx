import nextButton from "../assets/next.svg";

const Footer = ({
  currentQuestion,
  questionsLength,
  handleNextButtonClick,
  selectedAnswerIndex,
}) => {
  return (
    <footer className="flex items-end justify-between mt-4">
      <div>
        <span className="text-xl font-bold leading-[22px]">
          {currentQuestion + 1}
        </span>{" "}
        <span className="text-xs font-bold leading-[13.2px] tracking-[3.6px]">
          /{questionsLength}
        </span>
      </div>

      <button
        onClick={handleNextButtonClick}
        disabled={selectedAnswerIndex === null}
      >
        {currentQuestion === questionsLength - 1 ? (
          <div className="flex items-center justify-center bg-gray-4 px-5 py-3 gap-[6px] rounded-lg border border-gray-3 mx-auto hover:bg-gray-3 ease-in-out duration-300">
            Finalizar
          </div>
        ) : (
          <img
            className="cursor-pointer"
            src={nextButton}
            alt="button para proxima pergunta"
          />
        )}
      </button>
    </footer>
  );
};

export default Footer;
