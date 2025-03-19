"use client";

import { useState } from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import handler from "./calculate";

export default function Home() {
  const [results, setResults] = useState<any>(null);

  const handleSubmit = async (data: any) => {
    const res = await handler(data)

    const result = res;

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