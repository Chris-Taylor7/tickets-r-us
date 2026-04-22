export default function CreateTicket() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-2xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-2">Create a Ticket</h1>
            <p className="text-muted-foreground">Fill in the details below to create a new support ticket</p>
          </div>

          {/* Form Card */}
          <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
            {/* Form fields for ticket creation would go here */}
            <div className="space-y-6">
              <div className="text-center text-muted-foreground py-12">
                <p className="text-base">Ticket creation form implementation coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}