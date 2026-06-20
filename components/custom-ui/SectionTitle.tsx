import React from "react";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionTitle({ title, subtitle, align = "left", className = "" }: SectionTitleProps) {
    const hasMargin = /\bm[a-zA-Z]?-/.test(className);
    return (
        <div className={`${hasMargin ? "" : "mb-12"} ${align === "center" ? "text-center" : "text-left"} ${className}`}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

