
import Image from 'next/image';
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { contributors } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';

export default function ContributorsPage() {
    return (
        <div className="p-4 md:p-8 lg:p-10 space-y-8">
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold font-headline tracking-tight">Contributors</h1>
                    <p className="text-lg text-muted-foreground">Manage your organization's contributors.</p>
                </div>
                <Button size="lg">
                    <PlusCircle className="mr-2 h-5 w-5" />
                    New Contributor
                </Button>
            </div>

            <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline">Contributor List</CardTitle>
                    <CardDescription className="text-base">A list of all contributors in your records.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Total Contribution</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {contributors.map((contributor) => (
                                <TableRow key={contributor.id}>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={contributor.avatar}
                                                width={40}
                                                height={40}
                                                alt={contributor.name}
                                                className="rounded-full"
                                                data-ai-hint="person face"
                                            />
                                            <div>
                                                <div className="font-bold">{contributor.name}</div>
                                                <div className="text-sm text-muted-foreground">{contributor.email}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{contributor.category}</TableCell>
                                    <TableCell>
                                    <Badge variant={contributor.status === 'Active' ? 'default' : 'secondary'} className={cn(
                                        contributor.status === 'Active' && 'bg-green-100 text-green-800 border-green-200',
                                        contributor.status === 'Inactive' && 'bg-gray-100 text-gray-800 border-gray-200',
                                        contributor.status === 'Paused' && 'bg-yellow-100 text-yellow-800 border-yellow-200'
                                    )}>
                                        {contributor.status}
                                    </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">${contributor.totalContribution.toLocaleString()}</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
