import Navbar from "~/components/Navbar";
import HeroSection from "~/components/HeroSection";
import AboutSection from "~/components/AboutSection";
import StatsSection from "~/components/StatsSection";
import EvaluationSection from "~/components/EvaluationSection";
import KeyPointsSection from "~/components/KeyPointsSection";
import BenefitsSection from "~/components/BenefitsSection";
import Footer from "~/components/Footer";
import { Await } from "react-router";
import { Suspense } from "react";
import { pool } from "~/lib/pool";

export function meta({ }: any) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const date = new Date();
  const valueA = 593;
  const valueB = 110;
  const total = pool.query(`SELECT calculate_total_value(${date.getFullYear()},${date.getFullYear()},${valueA},${valueB})`);
  return {
    total,
    initialValues: {
      valueA,
      valueB
    }
  }
}

export default function Home({ loaderData }: any) {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection total={loaderData.total} initialValues={loaderData.initialValues} />
      <EvaluationSection />
      <KeyPointsSection />
      <BenefitsSection />
      <Footer />
    </main>
  );
}
