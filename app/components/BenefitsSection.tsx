import { useState } from "react";

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState<'beneficios' | 'desafios'>('beneficios');

  return (
    <section id="features-benefits" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('beneficios')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'beneficios'
                  ? 'bg-primary text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Beneficios
            </button>
            <button
              onClick={() => setActiveTab('desafios')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'desafios'
                  ? 'bg-primary text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Desafíos
            </button>
          </div>
        </div>

        {activeTab === 'beneficios' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="benefit-card">
              <div className="flex items-center mb-4">
                <img
                  src="https://ext.same-assets.com/3486587280/2563901416.svg"
                  alt="Decision Making icon"
                  className="w-8 h-8"
                />
                <h4 className="text-md font-semibold ml-2 text-primary">Mejor toma de decisiones</h4>
              </div>
              <p className="text-sm text-gray-600">
                Proporciona datos precisos para asignar recursos y definir estrategias institucionales.
              </p>
            </div>

            <div className="benefit-card">
              <div className="flex items-center mb-4">
                <img
                  src="https://ext.same-assets.com/3486587280/548389142.svg"
                  alt="Recognition icon"
                  className="w-8 h-8"
                />
                <h4 className="text-md font-semibold ml-2 text-primary">Mayor reconocimiento</h4>
              </div>
              <p className="text-sm text-gray-600">
                Mejora la posición de la universidad en rankings y aumenta su prestigio académico.
              </p>
            </div>

            <div className="benefit-card">
              <div className="flex items-center mb-4">
                <img
                  src="https://ext.same-assets.com/3486587280/3783633550.svg"
                  alt="Quality icon"
                  className="w-8 h-8"
                />
                <h4 className="text-md font-semibold ml-2 text-primary">Fomento de calidad</h4>
              </div>
              <p className="text-sm text-gray-600">
                Incentiva la producción científica de calidad y el impacto de las publicaciones.
              </p>
            </div>

            <div className="benefit-card">
              <div className="flex items-center mb-4">
                <img
                  src="https://ext.same-assets.com/3486587280/2838098675.svg"
                  alt="Automation icon"
                  className="w-8 h-8"
                />
                <h4 className="text-md font-semibold ml-2 text-primary">Automatización y eficiencia</h4>
              </div>
              <p className="text-sm text-gray-600">
                Reduce errores y acelera la evaluación con el uso de herramientas tecnológicas.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="benefit-card">
              <div className="flex items-center mb-4">
                <img
                  src="https://ext.same-assets.com/3486587280/4252861238.svg"
                  alt="Resource icon"
                  className="w-8 h-8"
                />
                <h4 className="text-md font-semibold ml-2 text-primary">Recursos limitados</h4>
              </div>
              <p className="text-sm text-gray-600">
                Disponibilidad restrictiva de fondos para investigación y publicaciones académicas.
              </p>
            </div>

            <div className="benefit-card">
              <div className="flex items-center mb-4">
                <img
                  src="https://ext.same-assets.com/3486587280/3301625649.svg"
                  alt="Pressure icon"
                  className="w-8 h-8"
                />
                <h4 className="text-md font-semibold ml-2 text-primary">Presión por publicar</h4>
              </div>
              <p className="text-sm text-gray-600">
                Alta exigencia de productividad que puede afectar la calidad de las investigaciones.
              </p>
            </div>

            <div className="benefit-card">
              <div className="flex items-center mb-4">
                <img
                  src="https://ext.same-assets.com/3486587280/3394157246.svg"
                  alt="Access icon"
                  className="w-8 h-8"
                />
                <h4 className="text-md font-semibold ml-2 text-primary">Accesibilidad</h4>
              </div>
              <p className="text-sm text-gray-600">
                Barreras en el acceso a publicaciones científicas para la comunidad en general.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BenefitsSection;
