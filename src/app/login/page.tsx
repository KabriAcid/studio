
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { LoadingOverlay } from '@/components/ui/loading-overlay';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { loginSchema } from '@/lib/validation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Image from 'next/image';

export default function LoginPage() {
  const [resetEmail, setResetEmail] = useState('');
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = async (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    try {
      await login(values.email, values.password);
      router.push('/dashboard');
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: (error as Error).message,
      });
      setIsLoading(false);
    }
  };
  
  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset requested for:', resetEmail);
    toast({
      title: 'Password Reset',
      description: `If an account exists for ${resetEmail}, a reset link has been sent.`,
    });
    setIsForgotModalOpen(false);
    setResetEmail('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <LoadingOverlay isLoading={isLoading} />
      <Card className="w-full max-w-sm shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-10 w-10 text-primary"
              fill="currentColor"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM188,62.14a71.74,71.74,0,0,1,22.1,38.54L174.45,114A48.42,48.42,0,0,0,149,79.05ZM128,56A72,72,0,0,1,188.4,76.67l-24.16,14A48.06,48.06,0,0,0,128,80V56Zm0,48a24,24,0,1,1-24,24A24,24,0,0,1,128,104Zm-64-4.83,24.16-14A48.06,48.06,0,0,0,128,80V56A72,72,0,0,0,67.6,76.67Zm-.1,43.69H45.86A71.74,71.74,0,0,1,68,62.14l24.45,14.12A48.42,48.42,0,0,0,81.55,114ZM128,200a72,72,0,0,1-60.4-29.33L91.76,156.8A48.06,48.06,0,0,0,128,176v24Zm34.55-42,24.45,14.12a72.23,72.23,0,0,1-44.1,23.19V176A48.42,48.42,0,0,0,162.55,158Z" />
            </svg>
            <span className="text-3xl font-bold font-headline text-primary">ESI</span>
          </div>
          <CardTitle className="text-2xl font-headline">Welcome Back</CardTitle>
          <CardDescription>Enter your credentials to access your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="admin@example.com"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                     <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        <Dialog open={isForgotModalOpen} onOpenChange={setIsForgotModalOpen}>
                            <DialogTrigger asChild>
                                <button
                                    type="button"
                                    className="text-sm font-medium text-primary hover:underline focus:outline-none"
                                >
                                    Forgot password?
                                </button>
                            </DialogTrigger>
                            <DialogContent>
                                <form onSubmit={handlePasswordReset}>
                                    <DialogHeader>
                                        <DialogTitle>Reset Password</DialogTitle>
                                        <DialogDescription>
                                        Enter your email address below and we'll send you a link to reset your password.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-2">
                                        <Label htmlFor="reset-email">
                                            Email
                                        </Label>
                                        <Input
                                            id="reset-email"
                                            type="email"
                                            value={resetEmail}
                                            onChange={(e) => setResetEmail(e.target.value)}
                                            placeholder="you@example.com"
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button type="button" variant="outline">Cancel</Button>
                                        </DialogClose>
                                        <Button type="submit">Send Reset Link</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                Sign In
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
