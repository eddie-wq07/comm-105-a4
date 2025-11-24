import { ReactNode, CSSProperties } from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PathwayNodeProps {
  title: string;
  color: "primary" | "secondary" | "accent";
  icon: LucideIcon;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const PathwayNode = ({ title, color, icon: Icon, children, className = "", style }: PathwayNodeProps) => {
  const colorClasses = {
    primary: "border-primary bg-primary-lighter hover:shadow-primary/20 hover:shadow-2xl",
    secondary: "border-secondary bg-secondary-lighter hover:shadow-secondary/20 hover:shadow-2xl",
    accent: "border-accent bg-accent-lighter hover:shadow-accent/20 hover:shadow-2xl",
  };

  const titleColorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  const iconBgClasses = {
    primary: "bg-gradient-to-br from-primary-lighter to-primary/30",
    secondary: "bg-gradient-to-br from-secondary-lighter to-secondary/30",
    accent: "bg-gradient-to-br from-accent-lighter to-accent/30",
  };

  return (
    <Card
      className={`group p-6 border-2 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl ${colorClasses[color]} ${className} relative overflow-hidden`}
      style={style}
    >
      {/* Animated background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${colorClasses[color]}`} />
      
      {/* Icon header */}
      <div className="relative z-10 flex items-center gap-4 mb-6">
        <div className={`p-4 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${iconBgClasses[color]}`}>
          <Icon className={`w-8 h-8 ${titleColorClasses[color]} transition-transform duration-300 group-hover:scale-110`} />
        </div>
        <h3 className={`text-xl font-bold transition-all duration-300 ${titleColorClasses[color]} group-hover:translate-x-1`}>
          {title}
        </h3>
      </div>
      
      <div className="space-y-4 relative z-10">{children}</div>
      
      {/* Decorative corner accent */}
      <div className={`absolute -bottom-8 -right-8 w-32 h-32 ${iconBgClasses[color]} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
    </Card>
  );
};

interface PathwayDetailProps {
  label: string;
  children: ReactNode;
}

export const PathwayDetail = ({ label, children }: PathwayDetailProps) => {
  return (
    <div className="group/detail cursor-pointer">
      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 group-hover/detail:text-primary transition-all duration-300 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover/detail:bg-primary group-hover/detail:scale-150 transition-all duration-300" />
        {label}
      </h4>
      <div className="text-foreground leading-relaxed group-hover/detail:translate-x-2 transition-transform duration-300">
        {children}
      </div>
    </div>
  );
};
