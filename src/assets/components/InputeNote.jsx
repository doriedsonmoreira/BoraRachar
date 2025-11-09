function InputNote({ value, onChange }) {
  const options = ["Goleiro", "Zagueiro", "Meia", "Atacante"];

  return (
    <div className="flex flex-col  justify-center">
      <p className="font-medium">
        Escolha a sua pocição preferida dentro do campo
      </p>
      <div className="flex gap-4 mt-[20px]">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`w-[110px] h-[30px] rounded-[20px] font-bold border border-[#004B18] transition-colors duration-300 ease-in-out
              ${
                value === option
                  ? "bg-[#004B18] text-white"
                  : "bg-transparent hover:bg-[#004B18] hover:text-white"
              }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default InputNote;
