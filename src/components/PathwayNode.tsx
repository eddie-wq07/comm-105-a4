import { ReactNode, CSSProperties } from "react";
import { Card } from "@/components/ui/card";

interface PathwayNodeProps {
  title: string;
  color: "primary" | "secondary" | "accent";
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const PathwayNode = ({ title, color, children, className = "", style }: PathwayNodeProps) => {
  const colorClasses = {
    primary: "border-primary bg-primary-lighter hover:shadow-primary/20",
    secondary: "border-secondary bg-secondary-lighter hover:shadow-secondary/20",
    accent: "border-accent bg-accent-lighter hover:shadow-accent/20",
  };

  const titleColorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  return (
    <Card
      className={`p-6 border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${colorClasses[color]} ${className}`}
      style={style}
    >
      <h3 className={`text-xl font-bold mb-4 ${titleColorClasses[color]}`}>{title}</h3>
      <div className="space-y-4">{children}</div>
    </Card>
  );
};

interface PathwayDetailProps {
  label: string;
  children: ReactNode;
}

export const PathwayDetail = ({ label, children }: PathwayDetailProps) => {
  return (
    <div className="group">
      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 group-hover:text-primary transition-colors">
        {label}
      </h4>
      <div className="text-foreground leading-relaxed">{children}</div>
    </div>
  );
};
