import { startTransition, useEffect, useState, Suspense } from "react";
import { Await, useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

interface StatsSectionProps {
  total: Promise<any>;
  initialValues?: {
    valueA: number;
    valueB: number;
  };
}

function StatsSection({ total, initialValues }: StatsSectionProps) {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [calculatedTotal, setCalculatedTotal] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [ischange, setIschange] = useState(false);
  const [valueA, setValueA] = useState<string>(initialValues?.valueA.toString() || "593");
  const [valueB, setValueB] = useState<string>(initialValues?.valueB.toString() || "110");
  const [Datatoshow, setDatatoshow] = useState<{ name: string, indicador: string }[]>([
    { name: "Índice Producción Académica", indicador: "0" },
    { name: "PAC", indicador: "0" },
    { name: "LyCl", indicador: "0" },
    { name: "PA", indicador: "0" },
    { name: "PIA", indicador: "0" },
  ]);
  const [graphic, setgraphic] = useState<{ name: string, indicador: string }[]>([
    { name: "Índice Producción Académica", indicador: "0" },
  ]);

  const calculateTotal = async () => {
    if (startDate && endDate) {
      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/calculate?startYear=${startDate.getFullYear()}&endYear=${endDate.getFullYear()}&valueA=${valueA}&valueB=${valueB}`
        );
        if (!response.ok) {
          throw new Error('Failed to calculate');
        }
        const result = await response.json();
        let aux = result.rows[0].calculate_total_value.trim().replace("(", " ").replace(")", " ").split(",");
        console.log(aux);
        let data: { name: string, indicador: string }[] = [
          { name: "Índice Producción Académica", indicador: aux[0] },
          { name: "Publicación académica científica [1]", indicador: aux[1] },
          { name: "Libros y capítulos de libros revisados por pares", indicador: aux[2] },
          { name: "Producción artística", indicador: aux[3] },
          { name: "Propiedad intelectual aplicada, resultado de un proyecto de investigación, vinculación o producción artística", indicador: aux[4] }
        ];

        setDatatoshow(data);
        setgraphic([{ name: "Índice Producción Académica", indicador: aux[0] }]);
        setCalculatedTotal(result);
      } catch (error) {
        console.error('Error calculating total:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section id="stats" className="light-bg-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Análisis de <span className="text-primary">Producción Académica</span>
        </h2>
        <hr className="border-primary border-2 rounded-full w-16 mx-auto mb-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-primary mb-4">Fórmula para calcular el índice de producción académica</h3>
            <div className="flex justify-center items-center p-4">
              <div className="flex items-center justify-center">
                <div className="text-xl font-mono text-gray-800">
                  <div className="flex items-center">
                    <span className="flex items-center" style={{ height: "48px" }}>IP =</span>
                    <div className="inline-block mx-2">
                      <div className="border-b border-gray-800 pb-1">
                        PAC + PA + LyCL + PIA
                      </div>
                      <div className="pt-1 text-center">
                        PTC + 0.5 × PMT
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="font-semibold text-primary border-b-2 border-primary inline-block pb-1">El valor de IP debe ser igual o mayor a 1.5 para poder estar óptimo a la evaluación de acreditación</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-primary mb-4">Indicadores de la fórmula</h3>
            <div className="grid grid-cols-1 gap-2 text-sm text-gray-700">
              <div><span className="font-semibold">IP:</span> Índice de Producción Académica</div>
              <div><span className="font-semibold">PAC:</span> Publicación académica científica</div>
              <div><span className="font-semibold">PA:</span> Producción artística</div>
              <div><span className="font-semibold">LyCL:</span> Libros y capítulos de libros</div>
              <div><span className="font-semibold">PIA:</span> Propiedad intelectual aplicada</div>
              <div><span className="font-semibold">PTC:</span> Profesores a tiempo completo</div>
              <div><span className="font-semibold">PMT:</span> Profesores a medio tiempo</div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex flex-col">
                <label htmlFor="startDate" className="text-sm text-gray-600 mb-1">Año inicial</label>
                <DatePicker
                  id="startDate"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="px-4 py-2 border rounded-md"
                  dateFormat="yyyy"
                  showYearPicker
                  placeholderText="Año inicial"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="endDate" className="text-sm text-gray-600 mb-1">Año final</label>
                <DatePicker
                  id="endDate"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  className="px-4 py-2 border rounded-md"
                  dateFormat="yyyy"
                  showYearPicker
                  placeholderText="Año final"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="valueA" className="text-sm text-gray-600 mb-1">PTC</label>
                <input
                  id="valueA"
                  type="number"
                  value={valueA}
                  onChange={(e) => setValueA(e.target.value)}
                  className="px-4 py-2 border rounded-md"
                  placeholder="PTC"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="valueB" className="text-sm text-gray-600 mb-1">PMC</label>
                <input
                  id="valueB"
                  type="number"
                  value={valueB}
                  onChange={(e) => setValueB(e.target.value)}
                  className="px-4 py-2 border rounded-md"
                  placeholder="PMC"
                />
              </div>
            </div>
            <button
              onClick={calculateTotal}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Calculando...' : 'Calcular índice'}
            </button>
          </div>
        

          {calculatedTotal ? (
              <>
              <div style={{
                display: "flex",
                justifyContent: "center",
              }}>
                <ResponsiveContainer width="50%" height={300}>
                  <BarChart data={graphic}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar barSize={40} dataKey="indicador" fill="#0b1d49" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto mt-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-primary mb-2 text-center">IP</h4>
                  <div className="text-3xl font-bold text-center text-primary">
                    {Number(Datatoshow[0].indicador).toFixed(2)}
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-primary mb-2 text-center">PAC</h4>
                  <div className="text-3xl font-bold text-center text-primary">
                    {Number(Datatoshow[1].indicador).toFixed(2)}
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-primary mb-2 text-center">LyCl</h4>
                  <div className="text-3xl font-bold text-center text-primary">
                    {Number(Datatoshow[2].indicador).toFixed(2)}
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-primary mb-2 text-center">PA</h4>
                  <div className="text-3xl font-bold text-center text-primary">
                    {Number(Datatoshow[3].indicador).toFixed(2)}
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-primary mb-2 text-center">PIA</h4>
                  <div className="text-3xl font-bold text-center text-primary">
                    {Number(Datatoshow[4].indicador).toFixed(2)}
                  </div>
                </div>
              </div>
              </>
          ) : (
            <Suspense fallback={<div className="text-center">Calculando índice...</div>}>
              <Await resolve={total} children={(value: any) => {
                let aux = value.rows[0].calculate_total_value.trim().replace("(", " ").replace(")", " ").split(",");
                console.log(aux);
                let data: { name: string, indicador: string }[] = [{ name: "Índice Producción Académica", indicador: aux[0] },
                ];
                /* setDatatoshow(data)*/
                return  (
                  <>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                  }}>
                    <ResponsiveContainer width="50%" height={300}>
                      <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar barSize={40} dataKey="indicador" fill="#0b1d49" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto mt-8">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="text-lg font-semibold text-primary mb-2 text-center">IP</h4>
                      <div className="text-3xl font-bold text-center text-primary">
                        {Number(aux[0]).toFixed(2)}
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="text-lg font-semibold text-primary mb-2 text-center">PAC</h4>
                      <div className="text-3xl font-bold text-center text-primary">
                        {Number(aux[1]).toFixed(2)}
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="text-lg font-semibold text-primary mb-2 text-center">LyCl</h4>
                      <div className="text-3xl font-bold text-center text-primary">
                        {Number(aux[2]).toFixed(2)}
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="text-lg font-semibold text-primary mb-2 text-center">PA</h4>
                      <div className="text-3xl font-bold text-center text-primary">
                        {Number(aux[3]).toFixed(2)}
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="text-lg font-semibold text-primary mb-2 text-center">PIA</h4>
                      <div className="text-3xl font-bold text-center text-primary">
                        {Number(aux[4]).toFixed(2)}
                      </div>
                    </div>
                  </div>
                  </>
                )
              }}>
              </Await>
            </Suspense>
          )}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
