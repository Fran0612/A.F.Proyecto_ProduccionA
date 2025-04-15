const KeyPointsSection = () => {
  return (
    <section className="light-bg-section py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-8 text-center flex items-center justify-center">
          <img
            src="https://ext.same-assets.com/3486587280/1998606599.svg"
            alt="Key Points icon"
            className="w-6 h-6 mr-2"
          />
          <span>Puntos Clave</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="key-point-card">
            <div className="flex items-center mb-4">
              <img
                src="https://ext.same-assets.com/3486587280/1367661487.svg"
                alt="Data icon"
                className="w-10 h-10 text-primary"
              />
            </div>
            <h4 className="text-lg font-semibold mb-2 text-primary">
              Toma de decisiones basada en datos
            </h4>
            <p className="text-gray-700">
              Permite a las autoridades universitarias diseñar políticas académicas basadas en
              información objetiva y actualizada.
            </p>
          </div>

          <div className="key-point-card">
            <div className="flex items-center mb-4">
              <img
                src="https://ext.same-assets.com/3486587280/2838098675.svg"
                alt="Innovation icon"
                className="w-10 h-10 text-primary"
              />
            </div>
            <h4 className="text-lg font-semibold mb-2 text-primary">
              Fomento de la innovación
            </h4>
            <p className="text-gray-700">
              Un adecuado seguimiento impulsa la generación de conocimiento útil para la sociedad
              y el desarrollo tecnológico.
            </p>
          </div>

          <div className="key-point-card">
            <div className="flex items-center mb-4">
              <img
                src="https://ext.same-assets.com/3486587280/548389142.svg"
                alt="Recognition icon"
                className="w-10 h-10 text-primary"
              />
            </div>
            <h4 className="text-lg font-semibold mb-2 text-primary">
              Reconocimiento institucional
            </h4>
            <p className="text-gray-700">
              Mejora la posición de la universidad en rankings y su prestigio académico a nivel
              nacional e internacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyPointsSection;
