"use client";

import React, { useState } from "react";

type Metric = {
  id: number;
  name: string;
  value: number;
  important: boolean;
};

const MetricCard = React.memo(function MetricCard({
  metric,
  onToggle,
}: {
  metric: Metric;
  onToggle: (id: number) => void;
}) {
  return (
    <div
      className={`bg-white p-4 rounded-lg shadow ${metric.important ? "border-2 border-blue-500" : ""}`}
    >
      <h3 className="text-lg font-semibold">{metric.name}</h3>
      <p className="text-2xl font-bold">{metric.value}</p>
      <button
        onClick={() => onToggle(metric.id)}
        className="mt-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        {metric.important ? "Remove" : "Mark"} Important
      </button>
    </div>
  );
});

const MetricGrid = React.memo(function MetricGrid({
  metrics,
  onToggleImportant,
}: {
  metrics: Metric[];
  onToggleImportant: (id: number) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          metric={metric}
          onToggle={onToggleImportant}
        />
      ))}
    </div>
  );
});

function PerformanceDashboard() {
  const [metrics, setMetrics] = useState(
    Array.from({ length: 50000 }, (_, index) => ({
      id: index,
      name: `Metric ${index + 1}`,
      value: Math.floor(Math.random() * 1000),
      important: false,
    })),
  );

  const handleToggleImportant = (id: number) => {
    setMetrics(
      metrics.map((metric) =>
        metric.id === id ? { ...metric, important: !metric.important } : metric,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Performance Dashboard</h1>
        <MetricGrid
          metrics={metrics}
          onToggleImportant={handleToggleImportant}
        />
      </div>
    </div>
  );
}

export default PerformanceDashboard;
