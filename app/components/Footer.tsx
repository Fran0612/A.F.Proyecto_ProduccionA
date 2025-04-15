const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {currentYear} Universidad Nacional de Chimborazo. Creado por Francisco Javier Andino Vaca
        </p>
      </div>
    </footer>
  );
};

export default Footer;
