interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <h2 className="text-4xl font-bold text-foreground mb-3 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-medium">{subtitle}</p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4 rounded-full shadow-glow" />
    </div>
  );
};
