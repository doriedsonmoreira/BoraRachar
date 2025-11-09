import ConteinerRegister from "../components/ContainerRegister";
import backgroundCampo from "../images/backgroundCampo.jpg";

function ScreenRegister() {
  return (
    <section
      className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundCampo})` }}
    >
      <ConteinerRegister />
    </section>
  );
}

export default ScreenRegister;
