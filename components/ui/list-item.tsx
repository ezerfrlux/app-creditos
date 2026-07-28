import Link from "next/link";
import { cn } from "@/lib/utils";

interface ListItemProps {
  href: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ListItem({
  href,
  title,
  children,
  className,
}: ListItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-xl border border-transparent p-4 transition-all duration-200",
        "hover:border-border hover:bg-accent",
        "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
        className
      )}
    >
      <h4 className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
        {title}
      </h4>

      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {children}
      </p>
    </Link>
  );
}