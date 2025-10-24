
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListTree, UserCog } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-4 md:p-8 lg:p-10 space-y-8">
      <div className="space-y-2">
          <h1 className="text-4xl font-bold font-headline tracking-tight">Settings</h1>
          <p className="text-lg text-muted-foreground">Manage your application settings and categories.</p>
      </div>

      <Tabs defaultValue="categories" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>
        <TabsContent value="categories">
          <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Category Management</CardTitle>
              <CardDescription className="text-base">
                Add, edit, and manage categories for beneficiaries and contributions. This feature is coming soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-64">
                    <ListTree className="h-16 w-16 mb-4" />
                    <p className="text-lg font-medium">Category management coming soon</p>
                </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="account">
          <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Account Settings</CardTitle>
              <CardDescription className="text-base">
                Manage your personal profile and notification settings. This feature is coming soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-64">
                    <UserCog className="h-16 w-16 mb-4" />
                    <p className="text-lg font-medium">Account settings coming soon</p>
                </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
