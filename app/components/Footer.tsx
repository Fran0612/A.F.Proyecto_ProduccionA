const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {currentYear} Universidad Nacional de Chimborazo. Elaborado por Francisco Andino Vaca Ing.Telecomunicaciones <br /> Tutores del proyecto: <br /> MgSc. José Jinez Docente de Telecomunicaciones <br /> PhD. Antonio Meneses Docente de Telecomunicaciones
        </p>
      </div>
    </footer>
  );
};

export default Footer;
