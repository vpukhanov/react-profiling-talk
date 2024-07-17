import { Metadata } from "next";
import ThemeSwitcher from "./theme-switcher";

export const metadata: Metadata = {
  title: "Theme Switcher",
};

export default function Page() {
  return <ThemeSwitcher />;
}
