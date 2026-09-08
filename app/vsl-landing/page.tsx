import type { Metadata } from "next";
import VslLanding from "../ui/vsl-landing";

export const metadata: Metadata = {
  title: "VSL Landing | Grupo Financiero Tridente",
  description:
    "Landing VSL para aplicar al equipo remoto de Grupo Financiero Tridente.",
};

export default function VslLandingPage() {
  return <VslLanding />;
}
