import ConteinerRegister from "../components/ContainerRegister";
import backgroundImage from "../images/backgroundImage.png";

function ScreenRegister() {
  return (
    <section
      className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <ConteinerRegister />
    </section>
  );
}

export default ScreenRegister;
