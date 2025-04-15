import { useState } from "react";
import { Button } from "~/components/ui/button";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<'mision' | 'vision'>('mision');

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Acreditación <span className="text-primary">UNACH</span>
        </h2>
        <hr className="border-primary border-2 rounded-full w-16 mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Proceso de Acreditación</h3>
            <p className="text-gray-700 mb-6">
              El proceso de acreditación de la Universidad Nacional de Chimborazo representa un compromiso con la excelencia educativa y la mejora continua. Trabajamos con estándares internacionales para garantizar una formación de calidad.
            </p>
            <p className="text-gray-700 mb-6">
              Nuestro objetivo es fortalecer la producción académica a través de investigación relevante y publicaciones de alto impacto que contribuyan al desarrollo de la sociedad.
            </p>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Conocer más
            </Button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex mb-4 space-x-2">
              <button
                onClick={() => setActiveTab('mision')}
                className={`tab-button ${activeTab === 'mision' ? 'active' : ''}`}
              >
                Misión
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`tab-button ${activeTab === 'vision' ? 'active' : ''}`}
              >
                Visión
              </button>
            </div>

            <div className="bg-white p-5 rounded-md">
              {activeTab === 'mision' ? (
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Nuestra Misión</h4>
                  <p className="text-gray-700">
                    Fortalecer la producción académica y científica mediante la implementación de procesos de calidad que permitan la generación de conocimiento pertinente y de impacto social.
                  </p>
                </div>
              ) : (
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Nuestra Visión</h4>
                  <p className="text-gray-700">
                    Ser referente nacional e internacional en producción académica, con investigaciones de alta calidad e impacto, contribuyendo al desarrollo sostenible de la sociedad mediante la generación y transferencia de conocimiento.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
