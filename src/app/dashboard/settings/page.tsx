
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  beneficiaryCategories as initialBeneficiaryCategories,
  contributorCategories as initialContributorCategories,
  userProfile,
} from '@/lib/placeholder-data';
import type { Category, UserProfile } from '@/lib/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CategoryForm } from "@/components/category-form";
import { ProfileForm } from "@/components/profile-form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function SettingsPage() {
  const [beneficiaryCategories, setBeneficiaryCategories] = useState<Category[]>(initialBeneficiaryCategories);
  const [contributorCategories, setContributorCategories] = useState<Category[]>(initialContributorCategories);
  const [profile, setProfile] = useState<UserProfile>(userProfile);

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{category: Category, type: 'beneficiary' | 'contributor'} | undefined>(undefined);
  const [categoryToDelete, setCategoryToDelete] = useState<{id: string, type: 'beneficiary' | 'contributor'} | null>(null);

  const handleNewCategory = (type: 'beneficiary' | 'contributor') => {
    setSelectedCategory({ category: { id: '', name: '' }, type });
    setIsCategoryModalOpen(true);
  };

  const handleEditCategory = (category: Category, type: 'beneficiary' | 'contributor') => {
    setSelectedCategory({ category, type });
    setIsCategoryModalOpen(true);
  };
  
  const handleCategoryFormSubmit = (values: { name: string }) => {
    if (selectedCategory) {
      const { type } = selectedCategory;
      const categoryData = { ...selectedCategory.category, ...values };

      if (type === 'beneficiary') {
        if (categoryData.id) {
          setBeneficiaryCategories(beneficiaryCategories.map(c => c.id === categoryData.id ? categoryData : c));
        } else {
          setBeneficiaryCategories([...beneficiaryCategories, { ...categoryData, id: `ben-cat-${Date.now()}` }]);
        }
      } else {
        if (categoryData.id) {
          setContributorCategories(contributorCategories.map(c => c.id === categoryData.id ? categoryData : c));
        } else {
          setContributorCategories([...contributorCategories, { ...categoryData, id: `con-cat-${Date.now()}` }]);
        }
      }
    }
    setIsCategoryModalOpen(false);
    setSelectedCategory(undefined);
  };

  const handleDeleteCategory = () => {
    if (categoryToDelete) {
        if (categoryToDelete.type === 'beneficiary') {
            setBeneficiaryCategories(beneficiaryCategories.filter(c => c.id !== categoryToDelete.id));
        } else {
            setContributorCategories(contributorCategories.filter(c => c.id !== categoryToDelete.id));
        }
        setCategoryToDelete(null);
    }
  };

  const handleProfileFormSubmit = (values: UserProfile) => {
    setProfile(values);
    setIsProfileModalOpen(false);
  };

  return (
    <div className="p-4 md:p-8 lg:p-10 space-y-8">
      <Dialog open={isCategoryModalOpen} onOpenChange={setIsCategoryModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedCategory?.category.id ? 'Edit' : 'New'} {selectedCategory?.type === 'beneficiary' ? 'Beneficiary' : 'Contributor'} Category</DialogTitle>
          </DialogHeader>
          {selectedCategory && <CategoryForm category={selectedCategory.category} onSubmit={handleCategoryFormSubmit} />}
        </DialogContent>
      </Dialog>
      <Dialog open={isProfileModalOpen} onOpenChange={setIsProfileModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
            </DialogHeader>
            <ProfileForm profile={profile} onSubmit={handleProfileFormSubmit} />
        </DialogContent>
      </Dialog>
      <AlertDialog onOpenChange={(open) => !open && setCategoryToDelete(null)}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the category.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteCategory}>Delete</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>


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
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-headline">Beneficiary Categories</CardTitle>
                  <CardDescription className="text-base">
                    Manage categories for beneficiaries.
                  </CardDescription>
                </div>
                <Button size="sm" onClick={() => handleNewCategory('beneficiary')}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add New
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {beneficiaryCategories.map(cat => (
                    <div key={cat.id} className="flex items-center justify-between rounded-lg border p-3">
                      <span className="font-medium">{cat.name}</span>
                       <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEditCategory(cat, 'beneficiary')}>
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={() => setCategoryToDelete({id: cat.id, type: 'beneficiary'})}>
                                <Trash2 className="h-4 w-4 text-destructive" />
                                <span className="sr-only">Delete</span>
                            </Button>
                        </AlertDialogTrigger>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle className="text-2xl font-headline">Contributor Categories</CardTitle>
                    <CardDescription className="text-base">
                        Manage categories for contributors.
                    </CardDescription>
                </div>
                <Button size="sm" onClick={() => handleNewCategory('contributor')}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add New
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                    {contributorCategories.map(cat => (
                        <div key={cat.id} className="flex items-center justify-between rounded-lg border p-3">
                            <span className="font-medium">{cat.name}</span>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" onClick={() => handleEditCategory(cat, 'contributor')}>
                                    <Pencil className="h-4 w-4" />
                                    <span className="sr-only">Edit</span>
                                </Button>
                                <AlertDialogTrigger asChild>
                                    <Button variant="ghost" size="icon" onClick={() => setCategoryToDelete({id: cat.id, type: 'contributor'})}>
                                        <Trash2 className="h-4 w-4 text-destructive" />
                                        <span className="sr-only">Delete</span>
                                    </Button>
                                </AlertDialogTrigger>
                            </div>
                        </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="account">
          <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-headline">Account Settings</CardTitle>
                <CardDescription className="text-base">
                  Manage your personal profile and notification settings.
                </CardDescription>
              </div>
               <Button size="sm" onClick={() => setIsProfileModalOpen(true)}>
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit Profile
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h3 className="font-semibold">Full Name</h3>
                    <p className="text-muted-foreground">{profile.name}</p>
                </div>
                <div>
                    <h3 className="font-semibold">Email Address</h3>
                    <p className="text-muted-foreground">{profile.email}</p>
                </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
