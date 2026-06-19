import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = "" }: CardProps) {
    return (
        <div className={`rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md ${className}`}>
            {children}
        </div>
    );
}

