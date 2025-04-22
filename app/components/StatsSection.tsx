import { startTransition, useEffect, useState, Suspense } from "react";
import { Await, useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
  Cell,
  ReferenceLine
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
  
  // Crear datos para cada gráfica individual
  const getPACData = (value: string) => [{ name: "PAC", valor: parseFloat(value) }];
  const getLyClData = (value: string) => [{ name: "LyCl", valor: parseFloat(value) }];
  const getPAData = (value: string) => [{ name: "PA", valor: parseFloat(value) }];
  const getPIAData = (value: string) => [{ name: "PIA", valor: parseFloat(value) }];

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
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-10 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center relative z-10">
            Análisis de <span className="text-primary">Producción Académica</span>
          </h2>
          <hr className="border-primary border-2 rounded-full w-24 mx-auto mb-2" />
          <p className="text-center text-gray-600 max-w-3xl mx-auto">Sistema de análisis estadístico para la evaluación de indicadores de producción académica según los estándares de acreditación.</p>
          <div className="absolute inset-0 flex justify-center items-center opacity-5 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-40 h-40 text-primary">
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
            </svg>
          </div>
        </div>

        {/* Tarjeta de Calculadora */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 mb-8">
          <div className="bg-primary/5 rounded-t-lg py-4 px-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-primary text-center flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                <path fillRule="evenodd" d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>
              Calculadora del Índice de Producción Académica (UNACH)
            </h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto mb-6">
              <div className="bg-blue-50 p-3 rounded-lg shadow-sm border border-blue-100">
                <h4 className="text-base font-semibold text-primary mb-2 text-center flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                    <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                  </svg>
                  Fórmula
                </h4>
                <div className="flex justify-center items-center">
                  <div className="text-base font-mono text-gray-800">
                    <div className="flex items-center">
                      <span className="flex items-center" style={{ height: "36px" }}>IP =</span>
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
                <p className="text-xs text-center mt-1 text-primary">Valor óptimo para acreditación debe ser ≥ 1.5 (En los ultimos 3 años)</p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg shadow-sm border border-blue-100">
                <h4 className="text-base font-semibold text-primary mb-2 text-center flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                  </svg>
                  Donde:
                </h4>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-gray-700">
                  <div><span className="font-semibold">IP:</span> Índice de Producción.</div>
                  <div><span className="font-semibold">PAC:</span> Publicación académica c.</div>
                  <div><span className="font-semibold">PA:</span> Producción artística.</div>
                  <div><span className="font-semibold">LyCL:</span> Libros y capítulos de libros.</div>
                  <div><span className="font-semibold">PIA:</span> Propiedad intelectual aplicada.</div>
                  <div><span className="font-semibold">PTC:</span> Profesores tiempo Completo.</div>
                  <div><span className="font-semibold">PMT:</span> Profesores medio Tiempo.</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3 text-center">Parámetros de Cálculo</h4>
              <div className="flex flex-col items-center gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
                  <div className="flex flex-col">
                    <label htmlFor="startDate" className="text-sm text-gray-600 mb-1">Año inicial</label>
                    <DatePicker
                      id="startDate"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="px-4 py-2 border-2 border-gray-300 rounded-md focus:border-primary focus:ring-1 focus:ring-primary w-full"
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
                      className="px-4 py-2 border-2 border-gray-300 rounded-md focus:border-primary focus:ring-1 focus:ring-primary w-full"
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
                      className="px-4 py-2 border-2 border-gray-300 rounded-md focus:border-primary focus:ring-1 focus:ring-primary w-full"
                      placeholder="PTC"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="valueB" className="text-sm text-gray-600 mb-1">PMT</label>
                    <input
                      id="valueB"
                      type="number"
                      value={valueB}
                      onChange={(e) => setValueB(e.target.value)}
                      className="px-4 py-2 border-2 border-gray-300 rounded-md focus:border-primary focus:ring-1 focus:ring-primary w-full"
                      placeholder="PMT"
                    />
                  </div>
                </div>
                <button
                  onClick={calculateTotal}
                  className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition disabled:opacity-50 mt-2 font-medium flex items-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Calculando...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                        <path fillRule="evenodd" d="M6.32 1.827a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V4.757c0-1.47 1.073-2.756 2.57-2.93zM7.5 11.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H8.25zm-.75 3a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75H8.25zm1.748-6a.75.75 0 01.75-.75h.007a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.007a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-.007zm-.75 3a.75.75 0 01.75-.75h.007a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.007a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75h-.007zm1.754-6a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-.008zm-.75 3a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75h-.008zm1.748-6a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-.008zm-8.25-6A.75.75 0 018.25 6h7.5a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-.75zm9 9a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-2.25z" clipRule="evenodd" />
                      </svg>
                      Calcular índice
                    </>
                  )}
                </button>
              </div>
            </div>

            {calculatedTotal ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Gráfico en tarjeta */}
                  <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <h4 className="text-lg font-semibold text-primary mb-4 text-center flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                      </svg>
                      Gráfico del Índice de Producción Académica
                    </h4>
                    <ResponsiveContainer width="100%" height={320}>
                      <BarChart data={graphic}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <defs>
                          <linearGradient id="colorBarIP" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#0b1d49" stopOpacity={1} />
                            <stop offset="100%" stopColor="#4C6FFF" stopOpacity={0.8} />
                          </linearGradient>
                          <filter id="shadow" height="130%">
                            <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#0b1d49" floodOpacity="0.3"/>
                          </filter>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip 
                          cursor={{fill: 'rgba(0, 0, 0, 0.1)'}}
                          contentStyle={{ 
                            borderRadius: '8px', 
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', 
                            border: 'none',
                            backgroundColor: 'rgba(255, 255, 255, 0.95)'
                          }}
                        />
                        <ReferenceLine y={1.5} stroke="#FF5630" strokeDasharray="5 5" strokeWidth={1} />
                        <Bar 
                          dataKey="indicador" 
                          name="Índice de Producción"
                          fill="url(#colorBarIP)" 
                          filter="url(#shadow)"
                          barSize={40} 
                          animationDuration={1500}
                          animationEasing="ease-out"
                          activeBar={<Rectangle fill="#2451B7" />}
                        >
                          <LabelList dataKey="indicador" position="top" formatter={(value: any) => Number(value).toFixed(2)} fill="#0b1d49" />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="flex flex-col justify-center gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg shadow-md border border-blue-200">
                      <h4 className="text-base font-semibold text-primary mb-3 text-center border-b pb-1 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                          <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.605a.75.75 0 01-.734.905H15.75a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V15a.75.75 0 01-.75.75H4.578a.75.75 0 01-.734-.905L6.318 4.24H4.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75zm4.878 13.543l1.872-7.662 1.872 7.662h-3.744zm-9.756 0L5.25 8.131l-1.872 7.662h3.744z" clipRule="evenodd" />
                        </svg>
                        Índice de Producción Académica calculado
                      </h4>
                      <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                        <h5 className="text-sm font-semibold text-primary mb-1 text-center">IP</h5>
                        <div className="text-2xl font-bold text-center text-primary">
                          {Number(Datatoshow[0].indicador).toFixed(2)}
                        </div>
                        <div className="text-xs text-gray-500 text-center mt-1">
                          Período: {startDate?.getFullYear()} - {endDate?.getFullYear()} | PTC: {valueA} | PMT: {valueB}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-lg shadow-md border border-blue-200">
                      <h4 className="text-base font-semibold text-primary mb-3 text-center border-b pb-1 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                          <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                        Valores calculados
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                          <h5 className="text-xs font-semibold text-primary mb-1 text-center">PAC</h5>
                          <div className="text-lg font-bold text-center text-primary">
                            {Number(Datatoshow[1].indicador).toFixed(2)}
                          </div>
                        </div>
                        
                        <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                          <h5 className="text-xs font-semibold text-primary mb-1 text-center">LyCl</h5>
                          <div className="text-lg font-bold text-center text-primary">
                            {Number(Datatoshow[2].indicador).toFixed(2)}
                          </div>
                        </div>
                        
                        <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                          <h5 className="text-xs font-semibold text-primary mb-1 text-center">PA</h5>
                          <div className="text-lg font-bold text-center text-primary">
                            {Number(Datatoshow[3].indicador).toFixed(2)}
                          </div>
                        </div>
                        
                        <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                          <h5 className="text-xs font-semibold text-primary mb-1 text-center">PIA</h5>
                          <div className="text-lg font-bold text-center text-primary">
                            {Number(Datatoshow[4].indicador).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Suspense fallback={<div className="text-center">Calculando índice...</div>}>
                <Await resolve={total} children={(value: any) => {
                  let aux = value.rows[0].calculate_total_value.trim().replace("(", " ").replace(")", " ").split(",");
                  console.log(aux);
                  let data: { name: string, indicador: string }[] = [{ name: "Índice Producción Académica", indicador: aux[0] }];
                  
                  return (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Gráfico en tarjeta */}
                        <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                          <h4 className="text-lg font-semibold text-primary mb-4 text-center flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                            </svg>
                            Gráfico del Índice de Producción Académica
                          </h4>
                          <ResponsiveContainer width="100%" height={320}>
                            <BarChart data={data}
                              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                              <defs>
                                <linearGradient id="colorBarIP" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#0b1d49" stopOpacity={1} />
                                  <stop offset="100%" stopColor="#4C6FFF" stopOpacity={0.8} />
                                </linearGradient>
                                <filter id="shadow" height="130%">
                                  <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#0b1d49" floodOpacity="0.3"/>
                                </filter>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip 
                                cursor={{fill: 'rgba(0, 0, 0, 0.1)'}}
                                contentStyle={{ 
                                  borderRadius: '8px', 
                                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', 
                                  border: 'none',
                                  backgroundColor: 'rgba(255, 255, 255, 0.95)'
                                }}
                              />
                              <ReferenceLine y={1.5} stroke="#FF5630" strokeDasharray="5 5" strokeWidth={1} />
                              <Bar 
                                dataKey="indicador" 
                                name="Índice de Producción"
                                fill="url(#colorBarIP)" 
                                filter="url(#shadow)"
                                barSize={40} 
                                animationDuration={1500}
                                animationEasing="ease-out"
                                activeBar={<Rectangle fill="#2451B7" />}
                              >
                                <LabelList dataKey="indicador" position="top" formatter={(value: any) => Number(value).toFixed(2)} fill="#0b1d49" />
                              </Bar>
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                        
                        <div className="flex flex-col justify-center gap-4">
                          <div className="bg-blue-50 p-3 rounded-lg shadow-md border border-blue-200">
                            <h4 className="text-base font-semibold text-primary mb-3 text-center border-b pb-1 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.605a.75.75 0 01-.734.905H15.75a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V15a.75.75 0 01-.75.75H4.578a.75.75 0 01-.734-.905L6.318 4.24H4.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75zm4.878 13.543l1.872-7.662 1.872 7.662h-3.744zm-9.756 0L5.25 8.131l-1.872 7.662h3.744z" clipRule="evenodd" />
                              </svg>
                              Índice de Producción Académica calculado
                            </h4>
                            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                              <h5 className="text-sm font-semibold text-primary mb-1 text-center">IP</h5>
                              <div className="text-2xl font-bold text-center text-primary">
                                {Number(aux[0]).toFixed(2)}
                              </div>
                              <div className="text-xs text-gray-500 text-center mt-1">
                                Período: {startDate?.getFullYear()} - {endDate?.getFullYear()} | PTC: {valueA} | PMT: {valueB}
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-blue-50 p-3 rounded-lg shadow-md border border-blue-200">
                            <h4 className="text-base font-semibold text-primary mb-3 text-center border-b pb-1 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                                <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                              </svg>
                              Valores calculados
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                                <h5 className="text-xs font-semibold text-primary mb-1 text-center">PAC</h5>
                                <div className="text-lg font-bold text-center text-primary">
                                  {Number(aux[1]).toFixed(2)}
                                </div>
                              </div>
                              
                              <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                                <h5 className="text-xs font-semibold text-primary mb-1 text-center">LyCl</h5>
                                <div className="text-lg font-bold text-center text-primary">
                                  {Number(aux[2]).toFixed(2)}
                                </div>
                              </div>
                              
                              <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                                <h5 className="text-xs font-semibold text-primary mb-1 text-center">PA</h5>
                                <div className="text-lg font-bold text-center text-primary">
                                  {Number(aux[3]).toFixed(2)}
                                </div>
                              </div>
                              
                              <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                                <h5 className="text-xs font-semibold text-primary mb-1 text-center">PIA</h5>
                                <div className="text-lg font-bold text-center text-primary">
                                  {Number(aux[4]).toFixed(2)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }}>
                </Await>
              </Suspense>
            )}
          </div>
        </div>

        {/* Tarjeta de Indicadores */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 mb-12">
          <div className="bg-primary/5 rounded-t-lg py-4 px-6 border-b border-gray-200">
            <h4 className="text-xl font-semibold text-primary text-center flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
              </svg>
              Indicadores del índice de producción Académica (UNACH)
            </h4>
          </div>
          
          <div className="p-6">
            <div className="text-center text-sm text-gray-600 mb-6 bg-gray-50 p-3 rounded-lg border border-gray-200 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-primary">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Información de cálculo</span>
              </div>
              Cálculo basado en: Período {startDate?.getFullYear()} - {endDate?.getFullYear()} | PTC: {valueA} | PMT: {valueB}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h5 className="text-lg font-semibold text-primary mb-2 text-center">Publicación Académica Científica (PAC)</h5>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-full md:w-2/3 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={getPACData(Datatoshow[1].indicador)}
                        margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
                      >
                        <defs>
                          <linearGradient id="colorBarPAC" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FF5630" stopOpacity={1} />
                            <stop offset="100%" stopColor="#FF8F73" stopOpacity={0.8} />
                          </linearGradient>
                          <filter id="shadowPAC" height="130%">
                            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#FF5630" floodOpacity="0.3"/>
                          </filter>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip 
                          cursor={{fill: 'rgba(0, 0, 0, 0.1)'}}
                          contentStyle={{ 
                            borderRadius: '8px', 
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', 
                            border: 'none',
                            backgroundColor: 'rgba(255, 255, 255, 0.95)'
                          }}
                        />
                        <Bar 
                          dataKey="valor" 
                          name="Publicación Académica" 
                          fill="url(#colorBarPAC)" 
                          filter="url(#shadowPAC)"
                          barSize={40} 
                          animationDuration={1200}
                          animationEasing="ease-out"
                          activeBar={<Rectangle fill="#2451B7" />}
                        >
                          <LabelList dataKey="valor" position="top" formatter={(value: any) => Number(value).toFixed(2)} fill="#4C6FFF" />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="w-full md:w-1/3">
                    <div className="bg-red-50 p-4 rounded-lg shadow-sm border border-red-200 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {Number(Datatoshow[1].indicador).toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-600 mb-2">
                        Período: {startDate?.getFullYear()} - {endDate?.getFullYear()}
                      </div>
                      <p className="text-sm text-gray-600">
                        Publicaciones académicas y científicas publicadas en revistas indexadas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h5 className="text-lg font-semibold text-primary mb-2 text-center">Libros y Capítulos de Libros (LyCl)</h5>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-full md:w-2/3 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={getLyClData(Datatoshow[2].indicador)}
                        margin={{ top: 20, right: 10, left: 10, bottom: 5 }}>
                        <defs>
                          <linearGradient id="colorBarLyCL" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#36B37E" stopOpacity={1} />
                            <stop offset="100%" stopColor="#57D9A3" stopOpacity={0.8} />
                          </linearGradient>
                          <filter id="shadowLyCl" height="130%">
                            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#36B37E" floodOpacity="0.3"/>
                          </filter>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip 
                          cursor={{fill: 'rgba(0, 0, 0, 0.1)'}}
                          contentStyle={{ 
                            borderRadius: '8px', 
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', 
                            border: 'none',
                            backgroundColor: 'rgba(255, 255, 255, 0.95)'
                          }}
                        />
                        <Bar 
                          dataKey="valor" 
                          name="Libros y Capítulos" 
                          fill="url(#colorBarLyCL)" 
                          filter="url(#shadowLyCl)"
                          barSize={40} 
                          animationDuration={1200}
                          animationEasing="ease-out"
                          activeBar={<Rectangle fill="#36B37E" />}
                        >
                          <LabelList dataKey="valor" position="top" formatter={(value: any) => Number(value).toFixed(2)} fill="#36B37E" />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="w-full md:w-1/3">
                    <div className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-100 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {Number(Datatoshow[2].indicador).toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-600 mb-2">
                        Período: {startDate?.getFullYear()} - {endDate?.getFullYear()}
                      </div>
                      <p className="text-sm text-gray-600">
                        Libros y capítulos de libros publicados con revisión académica
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h5 className="text-lg font-semibold text-primary mb-2 text-center">Producción Artística (PA)</h5>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-full md:w-2/3 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={getPAData(Datatoshow[3].indicador)}
                        margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
                      >
                        <defs>
                          <linearGradient id="colorBarPA" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8777D9" stopOpacity={1} />
                            <stop offset="100%" stopColor="#B6ADFA" stopOpacity={0.8} />
                          </linearGradient>
                          <filter id="shadowPA" height="130%">
                            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#8777D9" floodOpacity="0.3"/>
                          </filter>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip 
                          cursor={{fill: 'rgba(0, 0, 0, 0.1)'}}
                          contentStyle={{ 
                            borderRadius: '8px', 
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', 
                            border: 'none',
                            backgroundColor: 'rgba(255, 255, 255, 0.95)'
                          }}
                        />
                        <Bar 
                          dataKey="valor" 
                          name="Producción Artística" 
                          fill="url(#colorBarPA)" 
                          filter="url(#shadowPA)"
                          barSize={40} 
                          animationDuration={1200}
                          animationEasing="ease-out"
                          activeBar={<Rectangle fill="#8777D9" />}
                        >
                          <LabelList dataKey="valor" position="top" formatter={(value: any) => Number(value).toFixed(2)} fill="#8777D9" />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="w-full md:w-1/3">
                    <div className="bg-purple-50 p-4 rounded-lg shadow-sm border border-purple-200 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {Number(Datatoshow[3].indicador).toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-600 mb-2">
                        Período: {startDate?.getFullYear()} - {endDate?.getFullYear()}
                      </div>
                      <p className="text-sm text-gray-600">
                        Obras artísticas, exposiciones y otros productos creativos
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h5 className="text-lg font-semibold text-primary mb-2 text-center">Propiedad Intelectual Aplicada (PIA)</h5>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-full md:w-2/3 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={getPIAData(Datatoshow[4].indicador)}
                        margin={{ top: 20, right: 10, left: 10, bottom: 5 }}>
                        <defs>
                          <linearGradient id="colorBarPIA" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FFAB00" stopOpacity={1} />
                            <stop offset="100%" stopColor="#FFD073" stopOpacity={0.8} />
                          </linearGradient>
                          <filter id="shadowPIA" height="130%">
                            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#FFAB00" floodOpacity="0.3"/>
                          </filter>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip 
                          cursor={{fill: 'rgba(0, 0, 0, 0.1)'}}
                          contentStyle={{ 
                            borderRadius: '8px', 
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', 
                            border: 'none',
                            backgroundColor: 'rgba(255, 255, 255, 0.95)'
                          }}
                        />
                        <Bar 
                          dataKey="valor" 
                          name="Propiedad Intelectual" 
                          fill="url(#colorBarPIA)" 
                          filter="url(#shadowPIA)"
                          barSize={40} 
                          animationDuration={1200}
                          animationEasing="ease-out"
                          activeBar={<Rectangle fill="#FFAB00" />}
                        >
                          <LabelList dataKey="valor" position="top" formatter={(value: any) => Number(value).toFixed(2)} fill="#FFAB00" />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="w-full md:w-1/3">
                    <div className="bg-yellow-50 p-4 rounded-lg shadow-sm border border-yellow-100 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {Number(Datatoshow[4].indicador).toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-600 mb-2">
                        Período: {startDate?.getFullYear()} - {endDate?.getFullYear()}
                      </div>
                      <p className="text-sm text-gray-600">
                        Patentes, modelos y otros productos de propiedad intelectual
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
