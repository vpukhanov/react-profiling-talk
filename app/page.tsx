import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          Т—Ж Performance Talk
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="Task Manager" href="/task-manager" />
          <Card title="Theme Switcher" href="/theme-switcher" />
          <Card title="Performance Dashboard" href="/performance-dashboard" />
        </div>
      </main>
    </div>
  );
}

function Card({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center transition-transform hover:scale-105 aspect-square"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">{title}</h2>
    </Link>
  );
}
