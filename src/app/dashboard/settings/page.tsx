
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  beneficiaryCategories as initialBeneficiaryCategories,
  contributorCategories as initialContributorCategories,
  contributors as initialContributors,
  userProfile,
} from '@/lib/placeholder-data';
import type { Category, Contributor, UserProfile } from '@/lib/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CategoryForm } from "@/components/category-form";
import { ProfileForm } from "@/components/profile-form";
import { ContributorForm } from "@/components/contributor-form";
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
  const [contributors, setContributors] = useState<Contributor[]>(initialContributors);
  const [profile, setProfile] = useState<UserProfile>(userProfile);

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isContributorModalOpen, setIsContributorModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{category: Category, type: 'beneficiary' | 'contributor'} | undefined>(undefined);
  const [selectedContributor, setSelectedContributor] = useState<Contributor | undefined>(undefined);
  const [categoryToDelete, setCategoryToDelete] = useState<{id: string, type: 'beneficiary' | 'contributor'} | null>(null);
  const [contributorToDelete, setContributorToDelete] = useState<string | null>(null);

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

  const handleNewContributor = () => {
    setSelectedContributor(undefined);
    setIsContributorModalOpen(true);
  };

  const handleEditContributor = (contributor: Contributor) => {
    setSelectedContributor(contributor);
    setIsContributorModalOpen(true);
  };

  const handleContributorFormSubmit = (values: any) => {
    if (selectedContributor) { // Editing
      setContributors(contributors.map(c => c.id === selectedContributor.id ? { ...selectedContributor, ...values } : c));
    } else { // Adding new
      const newContributor: Contributor = {
        ...values,
        id: `contrib-${Date.now()}`,
        avatar: "https://picsum.photos/seed/13/40/40",
        totalContribution: 0,
        lastContributionDate: new Date().toISOString(),
      };
      setContributors([...contributors, newContributor]);
    }
    setIsContributorModalOpen(false);
    setSelectedContributor(undefined);
  };

  const handleDeleteContributor = () => {
    if (contributorToDelete) {
        setContributors(contributors.filter(c => c.id !== contributorToDelete));
        setContributorToDelete(null);
    }
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
      <Dialog open={isContributorModalOpen} onOpenChange={setIsContributorModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedContributor ? 'Edit Contributor' : 'New Contributor'}</DialogTitle>
          </DialogHeader>
          <ContributorForm contributor={selectedContributor} onSubmit={handleContributorFormSubmit} />
        </DialogContent>
      </Dialog>
      
      <div className="space-y-2">
        <h1 className="text-4xl font-bold font-headline tracking-tight">Settings</h1>
        <p className="text-lg text-muted-foreground">Manage your application settings and categories.</p>
      </div>

      <Tabs defaultValue="categories" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="contributors">Contributors</TabsTrigger>
        </TabsList>
        <TabsContent value="categories">
          <AlertDialog onOpenChange={(open) => !open && setCategoryToDelete(null)}>
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
        </TabsContent>
        <TabsContent value="contributors">
           <AlertDialog onOpenChange={(open) => !open && setContributorToDelete(null)}>
              <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-headline">Manage Contributors</CardTitle>
                    <CardDescription className="text-base">
                      Add, edit, or remove contributors from your organization.
                    </CardDescription>
                  </div>
                  <Button size="sm" onClick={handleNewContributor}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Contributor
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {contributors.map(contributor => (
                      <div key={contributor.id} className="flex items-center justify-between rounded-lg border p-3">
                        <div className="font-medium">{contributor.firstName} {contributor.lastName}</div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" onClick={() => handleEditContributor(contributor)}>
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={() => setContributorToDelete(contributor.id)}>
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
              <AlertDialogContent>
                  <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete the contributor.
                      </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDeleteContributor}>Delete</AlertDialogAction>
                  </AlertDialogFooter>
              </AlertDialogContent>
           </AlertDialog>
        </TabsContent>
      </Tabs>
    </div>
  );
}
