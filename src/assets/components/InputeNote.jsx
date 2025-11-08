function InputNote() {
  return (
    <div className="flex flex-col  justify-center">
      <p className="font-medium">
        Escolha a sua pocição preferida dentro do campo
      </p>
      <div className="flex gap-4 mt-[20px]">
        <button className="transition-colors duration-300 ease-in-out w-[110px] h-[30px] rounded-[20px] font-bold border border-[#004B18] bg-transparent hover:bg-[#004B18] hover:text-white">
          Goleiro
        </button>
        <button className="transition-colors duration-300 ease-in-out  w-[110px] h-[30px] rounded-[20px] font-bold border border-[#004B18] bg-transparent hover:bg-[#004B18] hover:text-white">
          Zagueiro
        </button>
        <button className="transition-colors duration-300 ease-in-out w-[110px] h-[30px] rounded-[20px] font-bold border border-[#004B18] bg-transparent hover:bg-[#004B18] hover:text-white">
          Meia
        </button>
        <button className="transition-colors duration-300 ease-in-out w-[110px] h-[30px] rounded-[20px] font-bold border border-[#004B18] bg-transparent hover:bg-[#004B18] hover:text-white">
          Atacante
        </button>
      </div>
    </div>
  );
}

export default InputNote;
