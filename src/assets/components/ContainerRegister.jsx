import { useState } from "react";
import logoBackground from "../images/logoBackground.png";
import InputField from "./InputField";
import InputDate from "./InputDate";
import InputNote from "./InputeNote";
import SubmitButton from "./SubmitButton";

function ConteinerRegister() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    dateBirth: "",
    phone: "",
    note: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar os dados");
      }

      const data = await response.json();
      console.log("Usuário cadastrado com sucesso:", data);

      setFormData({
        name: "",
        username: "",
        email: "",
        dateBirth: "",
        phone: "",
        note: "",
      });

      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Falha ao enviar o formulário.");
    }
  };

  return (
    <div className="flex  w-[1000px] h-[670px] bg-white rounded-[30px] shadow-[0_10px_15px_rgba(0,0,0,0.3)]">
      <span>
        <img
          src={logoBackground}
          alt="Header"
          className="rounded-tl-[25px] rounded-bl-[25px]"
        />
      </span>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col pt-[30px] gap-4 items-center justify-center ml-[35px] mb-[30px]"
      >
        <InputField
          tittleInput="Digite seu nome"
          placeholder="Nome"
          value={formData.name}
          onChange={(value) => handleChange("name", value)}
        />
        <InputField
          tittleInput="Digite seu Apelido"
          placeholder="Apelido"
          value={formData.username}
          onChange={(value) => handleChange("username", value)}
        />
        <InputField
          tittleInput="Digite seu E-mail"
          placeholder="E-mail"
          value={formData.email}
          onChange={(value) => handleChange("email", value)}
        />
        <InputDate
          value={formData.dateBirth}
          onChange={(value) => handleChange("dateBirth", value)}
        />
        <InputField
          tittleInput="Digite seu Telefone"
          placeholder="Telefone"
          value={formData.phone}
          onChange={(value) => handleChange("phone", value)}
        />
        <InputNote
          value={formData.note}
          onChange={(value) => handleChange("note", value)}
        />
        <SubmitButton />
      </form>
    </div>
  );
}

export default ConteinerRegister;
