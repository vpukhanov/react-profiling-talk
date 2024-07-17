import { Metadata } from "next";
import TaskManager from "./task-manager";

export const metadata: Metadata = {
  title: "Task Manager",
};

export default function Page() {
  return <TaskManager />;
}
