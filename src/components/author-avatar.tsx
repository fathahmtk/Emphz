
'use client';
import type { BlogAuthor } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "lucide-react";

interface AuthorAvatarProps {
    author?: BlogAuthor;
}

export function AuthorAvatar({ author }: AuthorAvatarProps) {
    if (!author) {
        return (
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarFallback>
                        <User className="h-4 w-4" />
                    </AvatarFallback>
                </Avatar>
                <div className="text-sm">
                    <p className="font-semibold text-foreground">EMPHZ Team</p>
                    <p className="text-muted-foreground">Staff</p>
                </div>
            </div>
        );
    }

    const fallback = author.name.split(' ').map(n => n[0]).join('');

    return (
        <div className="flex items-center gap-3">
            <Avatar>
                <AvatarImage src={author.avatarUrl} alt={author.name} />
                <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
             <div className="text-sm">
                <p className="font-semibold text-foreground">{author.name}</p>
                <p className="text-muted-foreground">{author.title}</p>
            </div>
        </div>
    );
}
