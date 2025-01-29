import { Author } from "@/data/types";
import { Clock } from "lucide-react";

interface PostInfoProps {
  date: string;
  readTime: string;
  author: Author;
}

export function PostInfo({ date, readTime, author }: PostInfoProps) {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4" />
        <span>{readTime}</span>
      </div>
      <span>{date}</span>
      <div className="flex items-center gap-2">
        <img
          src={author.avatar}
          alt={author.name}
          width={24}
          height={24}
          className="rounded-full object-cover"
        />
        <span>{author.name}</span>
      </div>
    </div>
  );
}
