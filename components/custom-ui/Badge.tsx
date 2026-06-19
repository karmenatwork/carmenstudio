import React from "react";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "outline" | "secondary";
    className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
    const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

    const variants = {
        default: "border-transparent bg-primary text-primary-foreground shadow",
        outline: "text-foreground border border-border",
        secondary: "border-transparent bg-secondary bg-muted text-muted-foreground hover:bg-muted/80",
    };

    return (
        <div className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </div>
    );
}

