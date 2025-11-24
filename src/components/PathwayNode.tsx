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
    primary: "border-primary/60 bg-card shadow-glow/50 hover:shadow-glow hover:border-primary",
    secondary: "border-secondary/60 bg-card shadow-glow-secondary/50 hover:shadow-glow-secondary hover:border-secondary",
    accent: "border-accent/60 bg-card shadow-glow-accent/50 hover:shadow-glow-accent hover:border-accent",
  };

  const titleColorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  const iconBgClasses = {
    primary: "bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30",
    secondary: "bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30",
    accent: "bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30",
  };

  return (
    <Card
      className={`group p-6 border-2 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${colorClasses[color]} ${className} relative overflow-hidden backdrop-blur-sm`}
      style={style}
    >
      {/* Animated background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
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
      <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 ${colorClasses[color]}`} />
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
      <h4 className="text-sm font-bold text-foreground/90 uppercase tracking-wide mb-2 group-hover/detail:text-primary transition-all duration-300 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 group-hover/detail:bg-primary group-hover/detail:scale-150 transition-all duration-300" />
        {label}
      </h4>
      <div className="text-foreground font-medium leading-relaxed group-hover/detail:translate-x-2 transition-transform duration-300">
        {children}
      </div>
    </div>
  );
};
