"use client"; // Required for useState/useEffect
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { columns, DataTable } from "./DataTable";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // THE GET REQUEST
        const response = await axios.get("/api/tickets");
        console.log("Fetched Data:", response.data); // Debug log
        setData(response.data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (error) return <div className="p-10 text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col gap-8">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Tickets</h1>
              <p className="text-muted-foreground mt-2">Manage all tickets and their details</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90" size="lg">
              <Link href="/create-ticket">Create a Ticket</Link>
            </Button>
          </div>
          
          {/* Table Section */}
          <div className="rounded-lg border border-border bg-card shadow-sm">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}