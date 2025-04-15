import { pool } from "~/lib/pool";

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const startYear = url.searchParams.get("startYear");
  const endYear = url.searchParams.get("endYear");

  if (!startYear || !endYear) {
    return new Response("Missing years", { status: 400 });
  }

  const result = await pool.query(
    `SELECT calculate_total_value(${startYear},${endYear},593,110)`
  );

  return result;
} 