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
        <hr className="border-primary border-2 rounded-full w-16 mx-auto mb-12" />

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
              <><div style={{
                display: "flex"
            ,
                justifyContent: "center",
            }} >
              <ResponsiveContainer width="50%" height={300}>
              <BarChart data={graphic}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar barSize={40} dataKey="indicador" fill="#0b1d49" />
              </BarChart>
            </ResponsiveContainer></div>
            <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-sm border border-primary/20">
               
                <div className="text-4xl font-bold text-center text-primary">
                IP:  {Number(Datatoshow[0].indicador).toFixed(2)}
                </div>
                <div className="text-4xl font-bold text-center text-primary">
                  PAC: {Number(Datatoshow[1].indicador).toFixed(2)}
                </div>
                <div className="text-4xl font-bold text-center text-primary">
                  LyCl: {Number(Datatoshow[2].indicador).toFixed(2)}
                </div>
                <div className="text-4xl font-bold text-center text-primary">
                  PA: {Number(Datatoshow[3].indicador).toFixed(2)}
                </div>
                <div className="text-4xl font-bold text-center text-primary">
                  PIA: {Number(Datatoshow[4].indicador).toFixed(2)}
                </div>
              </div></>
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
    display: "flex"
,
    justifyContent: "center",
}} >
                  <ResponsiveContainer width="50%" height={300}>
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar barSize={40} dataKey="indicador" fill="#0b1d49" />
                    </BarChart>
                  </ResponsiveContainer></div>

                    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-sm border border-primary/20">
                      
                      <div className="text-4xl font-bold text-center text-primary">
                   IP: {Number (aux [0]).toFixed (2)}
                  </div>
                  <div className="text-4xl font-bold text-center text-primary">
                    PAC: {Number (aux [1]).toFixed (2)}
                  </div>
                  <div className="text-4xl font-bold text-center text-primary">
                  LyCl: {Number (aux [2]).toFixed (2)}
                  </div>
                  <div className="text-4xl font-bold text-center text-primary">
                  PA: {Number (aux [3]).toFixed (2)}
                  </div>
                  <div className="text-4xl font-bold text-center text-primary">
                  PIA: {Number (aux [4]).toFixed (2)}
                  </div>
                    </div></>)
              }
              }>

              </Await>
            </Suspense>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="stats-card">
            <img
              src="https://ext.same-assets.com/3486587280/3783633550.svg"
              alt="Publicaciones icon"
              className="w-12 h-12 mb-4 text-primary"
            />
            <h3 className="text-3xl font-bold text-primary mb-1">450+</h3>
            <h4 className="font-semibold text-primary mb-2">Publicaciones</h4>
            <p className="text-sm text-gray-600 text-center">
              Artículos científicos indexados
            </p>
          </div>

          <div className="stats-card">
            <img
              src="https://ext.same-assets.com/3486587280/2563901416.svg"
              alt="Proyectos icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-3xl font-bold text-primary mb-1">120</h3>
            <h4 className="font-semibold text-primary mb-2">Proyectos</h4>
            <p className="text-sm text-gray-600 text-center">
              Proyectos de investigación activos
            </p>
          </div>

          <div className="stats-card">
            <img
              src="https://ext.same-assets.com/3486587280/548389142.svg"
              alt="Reconocimientos icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-3xl font-bold text-primary mb-1">38</h3>
            <h4 className="font-semibold text-primary mb-2">Reconocimientos</h4>
            <p className="text-sm text-gray-600 text-center">
              Premios nacionales e internacionales
            </p>
          </div>

          <div className="stats-card">
            <img
              src="https://ext.same-assets.com/3486587280/260646423.svg"
              alt="Investigadores icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-3xl font-bold text-primary mb-1">250</h3>
            <h4 className="font-semibold text-primary mb-2">Investigadores</h4>
            <p className="text-sm text-gray-600 text-center">
              Docentes investigadores certificados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
