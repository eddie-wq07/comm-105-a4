interface ValueBadgeProps {
  value: string;
  description: string;
}

export const ValueBadge = ({ value, description }: ValueBadgeProps) => {
  return (
    <div className="group relative inline-block">
      <div className="px-4 py-2 bg-card border-2 border-primary rounded-full text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover-scale">
        {value}
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-4 py-2 bg-card border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none min-w-max z-10">
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
