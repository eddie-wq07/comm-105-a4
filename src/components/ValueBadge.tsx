interface ValueBadgeProps {
  value: string;
  description: string;
}

export const ValueBadge = ({ value, description }: ValueBadgeProps) => {
  return (
    <div className="group relative inline-block">
      <div className="relative px-4 py-2 bg-gradient-to-r from-card to-primary-lighter/30 border-2 border-primary rounded-full text-primary font-semibold text-sm hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-secondary transition-all duration-300 cursor-default hover-scale shadow-md hover:shadow-glow overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        <span className="relative z-10">{value}</span>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-4 py-2 bg-card border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none min-w-max z-10">
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
