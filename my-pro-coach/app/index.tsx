import { useState } from "react";
import Form from "../components/Form";
import Results from "../components/Results";

export default function Home() {
  const [results, setResults] = useState<any>(null);

  const handleSubmit = async (data: any) => {
    const res = await fetch("/api/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    setResults(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold mb-8">FitLife</h1>
      <Form onSubmit={handleSubmit} />
      {results && <Results data={results} />}
    </div>
  );
}