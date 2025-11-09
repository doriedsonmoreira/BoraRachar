function SubmitButton({ label = "COMPLETE O TIME!" }) {
  return (
    <button
      type="submit"
      className="mt-[20px] w-[500px] h-[50px] font-bold rounded-[20px] 
    bg-transparent border border-[#004B18]
     hover:bg-[#004B18] hover:text-white transition-colors duration-300 ease-in-out"
    >
      {label}
    </button>
  );
}

export default SubmitButton;
