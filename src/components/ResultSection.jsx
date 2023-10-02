const ResultSection = ({correctAnswers, handleTryAgainButton, questionsLength}) => {
  return (
    <div>
      <h2 className='text-2xl leading-[28.8px] font-bold text-center mb-[69px] max-w-[413px] mx-auto'>Resultado</h2>

      <p className="text-base text-center mb-[69px] max-w-[413px] mx-auto">Você acertou <span>{correctAnswers}</span> de <span>{questionsLength}</span> questões.</p>

      <button onClick={handleTryAgainButton} className="flex items-center justify-center bg-gray-4 px-5 py-3 gap-[6px] rounded-lg border border-gray-3 mx-auto hover:bg-gray-3 ease-in-out duration-300">Tentar novamente</button>
    </div>
  )
}

export default ResultSection