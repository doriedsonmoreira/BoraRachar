import HeaderImage from "../images/HeaderImage.png";
import InputField from "./InputField";
import InputDate from "./InputDate";
import InputNote from "./InputeNote";
import SubmitButton from "./SubmitButton";

function ConteinerRegister() {
  return (
    <div className="w-[583px] h-[800px] bg-white rounded-[30px]">
      <span>
        <img src={HeaderImage} alt="Header" />
      </span>
      <form className="flex flex-col pt-[30px] gap-4 items-center justify-center">
        <InputField tittleInput="Digite seu nome" placeholder="Nome" />
        <InputField tittleInput="Digite seu Apelido" placeholder="Apelido" />
        <InputField tittleInput="Digite seu E-mail" placeholder="E-mail" />
        <InputDate />
        <InputField tittleInput="Digite seu Telefone" placeholder="Telefone" />
        <InputNote />
        <SubmitButton />
      </form>
    </div>
  );
}

export default ConteinerRegister;
