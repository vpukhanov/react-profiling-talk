import { Metadata } from "next";
import PerformanceDashboard from "./performance-dashboard";

export const metadata: Metadata = {
  title: "Performance Dashboard",
};

export default function Page() {
  return <PerformanceDashboard />;
}
