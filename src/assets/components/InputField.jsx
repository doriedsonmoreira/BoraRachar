function InputField({ tittleInput, placeholder, value, onChange }) {
  return (
    <div>
      <p className="ml-[10px] font-medium">{tittleInput}</p>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-[500px] h-[50px] border border-[#C0C0C0] 
      rounded-[20px] pl-[20px] bg-transparent placeholder-[#C0C0C0] focus:placeholder-transparent
       focus:border-[#004B18] focus:outline-none transition-colors duration-300"
      />
    </div>
  );
}

export default InputField;
