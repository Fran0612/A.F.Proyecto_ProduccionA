import { pool } from "~/lib/pool";

export const getData = async (startDate: Date, endDate: Date) => {
    console.log(startDate)
    const total = await pool.query(`SELECT calculate_total_value(${startDate.getFullYear()},${endDate.getFullYear()},593,110)`);
    console.log (total.rows[0],"===================")
    return {
      total
    }
  }