import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  subtitle,
  children,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 md:mb-12 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto font-light">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
