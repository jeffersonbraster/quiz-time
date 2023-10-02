import Logo from '../assets/logo.svg';
import greenCheck from '../assets/green-check.svg';

const Header = ({ currentAnswers }) => {
  return (
    <header className="flex items-center justify-between w-full">
      <img src={Logo} alt="Logo QuizTime" />

      <div className="flex items-center justify-center bg-gray-4 px-5 py-3 gap-[6px] rounded-lg border border-green-light">
        <img src={greenCheck} alt="Numero de acertos" />

        <span className="text-lm font-bold leading-5 text-green-light">{currentAnswers}</span>
      </div>
    </header>
  )
}

export default Header;
