interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <h2 className="text-4xl font-bold text-foreground mb-3">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4 rounded-full" />
    </div>
  );
};
