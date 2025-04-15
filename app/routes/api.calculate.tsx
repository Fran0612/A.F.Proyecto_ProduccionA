import { pool } from "~/lib/pool";


export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const startYear = url.searchParams.get("startYear");
  const endYear = url.searchParams.get("endYear");
  const valueA = url.searchParams.get("valueA") || "593";
  const valueB = url.searchParams.get("valueB") || "110";

  if (!startYear || !endYear) {
    return new Response("Missing years", { status: 400 });
  }

  try {
    const result = await pool.query(
      `SELECT calculate_total_value(${startYear},${endYear},${valueA},${valueB})`
    );
    return (result);
  } 
  catch (error) {
    console.error('Error calculating total:', error);
    return new Response("Error calculating total", { status: 500 });
  }
} 