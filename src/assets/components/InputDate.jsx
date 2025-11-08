function InputDate() {
  return (
    <div className="">
      <p className="ml-[10px] font-medium">Informe sua data de nascimento</p>
      <input
        type="date"
        className="w-[500px] h-[50px] border border-[#C0C0C0] rounded-[20px]
  pl-[20px] pr-[20px] bg-transparent text-[#C0C0C0]
  focus:border-[#004B18] focus:outline-none transition-all duration-300 ease-in-out 
  appearance-none cursor-pointer"
      />
    </div>
  );
}

export default InputDate;
