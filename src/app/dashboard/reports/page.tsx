
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="p-4 md:p-8 lg:p-10 space-y-8">
      <div className="space-y-2">
          <h1 className="text-4xl font-bold font-headline tracking-tight">Reports</h1>
          <p className="text-lg text-muted-foreground">Generate and view detailed financial reports.</p>
      </div>

      <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0 mt-8">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Reporting Center</CardTitle>
          <CardDescription className="text-base">
            This section is under construction. Soon you'll be able to generate, customize, and export detailed reports on income, expenses, and beneficiary disbursements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-64">
            <FileText className="h-16 w-16 mb-4" />
            <p className="text-lg font-medium">Coming Soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
