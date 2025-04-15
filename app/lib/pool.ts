import pg from "pg";

const { Pool } = pg;
export const pool = new Pool({
  connectionString:
    "postgresql://postgres:17fd4865fb07931af245ab192ea832c9@crossover.proxy.rlwy.net:36882/TesisFin2025",
});

