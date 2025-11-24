import { Navigation } from "@/components/Navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { ValueBadge } from "@/components/ValueBadge";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PathwayCarousel } from "@/components/PathwayCarousel";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Target, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-background via-primary-lighter/30 to-secondary-lighter/30 animate-gradient">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          
          {/* Geometric shapes */}
          <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-primary/20 rotate-12 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="w-full h-full border border-primary/30 rotate-45" />
          </div>
          <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-secondary/20 rounded-lg rotate-45 animate-float-slow" />
          <div className="absolute top-1/3 left-1/2 w-12 h-12 border-2 border-accent/20 animate-pulse-ring" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="inline-block px-4 py-2 bg-primary-lighter border border-primary rounded-full text-primary text-sm font-semibold animate-bounce-in shadow-glow">
                COMM 105
              </div>
              <div className="inline-block px-4 py-2 bg-secondary-lighter border border-secondary rounded-full text-secondary text-sm font-semibold animate-bounce-in shadow-glow" style={{ animationDelay: '0.1s' }}>
                Student #99626
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-scale-in">
              Career Pathways
              <span className="text-gradient block mt-2 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer bg-clip-text">
                in Tech & Innovation
              </span>
            </h1>
          </div>

          {/* Core Interest */}
          <div className="mt-12 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-primary/30 shadow-xl hover-lift relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-gradient-to-br from-primary-lighter to-primary/20 rounded-lg shadow-lg animate-pulse-ring">
                  <Sparkles className="w-6 h-6 text-primary animate-float" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    My Passion
                  </h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    Building software applications to improve the well-being of all while solving impossible questions through AI and innovative technology
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Professional Values */}
          <div className="mt-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-center text-lg font-semibold text-muted-foreground uppercase tracking-wide mb-5">
              My Professional Values
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="animate-bounce-in" style={{ animationDelay: '0.6s' }}>
                <ValueBadge
                  value="Loyalty"
                  description="Commitment to long-term relationships and organizational success"
                />
              </div>
              <div className="animate-bounce-in" style={{ animationDelay: '0.7s' }}>
                <ValueBadge
                  value="Rigour"
                  description="Dedication to excellence, precision, and thorough analysis"
                />
              </div>
              <div className="animate-bounce-in" style={{ animationDelay: '0.8s' }}>
                <ValueBadge
                  value="Balance"
                  description="Maintaining equilibrium between innovation and stability"
                />
              </div>
              <div className="animate-bounce-in" style={{ animationDelay: '0.9s' }}>
                <ValueBadge
                  value="Risk-taking"
                  description="Calculated ventures into uncharted technological territories"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Pathways Section */}
      <section id="visual" className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader
            title="Visual Pathways Representation"
            subtitle="Three distinct career paths converging toward technological innovation and societal impact"
          />

          {/* Career Paths Carousel */}
          <div className="mb-16">
            <PathwayCarousel />
          </div>

          {/* Ultimate Dream Pathway */}
          <div className="animate-fade-in">
            <Card className="p-8 bg-gradient-to-br from-primary-lighter via-secondary-lighter to-accent-lighter border-2 border-primary shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Ultimate Dream Pathway</h3>
                <p className="text-muted-foreground">A journey from technical expertise to national leadership</p>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                <div className="flex items-center gap-3 bg-card/80 px-6 py-4 rounded-lg shadow-md border-2 border-primary">
                  <Target className="w-6 h-6 text-primary" />
                  <span className="text-lg font-bold text-primary">Quantitative Developer</span>
                </div>
                <ArrowRight className="w-8 h-8 text-primary rotate-90 md:rotate-0" />
                <div className="flex items-center gap-3 bg-card/80 px-6 py-4 rounded-lg shadow-md border-2 border-secondary">
                  <Sparkles className="w-6 h-6 text-secondary" />
                  <span className="text-lg font-bold text-secondary">Tech Founder</span>
                </div>
                <ArrowRight className="w-8 h-8 text-secondary rotate-90 md:rotate-0" />
                <div className="flex items-center gap-3 bg-card/80 px-6 py-4 rounded-lg shadow-md border-2 border-accent">
                  <Users className="w-6 h-6 text-accent" />
                  <span className="text-lg font-bold text-accent">AI Minister</span>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6 max-w-3xl mx-auto">
                Building technical foundations in quantitative finance, gaining entrepreneurial experience
                through founding and scaling a tech company, then leveraging this expertise to shape
                national AI policy and lead Canada's technological future.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Written Reflection Section */}
      <section id="reflection" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            title="Written Reflection"
            subtitle="Connecting values, community, and career aspirations"
          />

          <div className="space-y-6">
            {/* Introduction */}
            <Card className="p-6 hover-lift">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                <div className="w-2 h-6 bg-primary rounded-full" />
                Introduction
              </h3>
              <div className="space-y-3 text-foreground leading-relaxed text-sm">
                <p>
                  My career pathways converge on using technology to solve impossible questions and improve well-being. The key takeaway is my commitment to <strong>rigour</strong> in technical development, <strong>balance</strong> in stakeholder perspectives, calculated <strong>risk-taking</strong> in ventures, and <strong>loyalty</strong> to collective well-being. These values create a unified vision where technical mastery, business acumen, and policy insight reinforce each other.
                </p>
              </div>
            </Card>

            {/* Values Fit */}
            <Card className="p-6 hover-lift">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                <div className="w-2 h-6 bg-secondary rounded-full" />
                Values Fit & Success Metrics
              </h3>
              <div className="space-y-3 text-foreground leading-relaxed text-sm">
                <p>
                  <strong>Quantitative Developer:</strong> Success measured by algorithmic performance (Sharpe ratio &gt; 2.0) and open-source contributions (3+ libraries with 1,000+ users). Potential conflict: pressure to exploit inefficiencies at retail investors' expense. Mitigation: transparent practices and financial literacy programs.
                </p>
                <p>
                  <strong>AI Minister:</strong> Success through AI governance frameworks adopted by 5+ provinces and inclusive policy recognition. Potential conflict: prioritizing economic gains over safety. Mitigation: independent research and multi-stakeholder advisory committees.
                </p>
                <p>
                  <strong>Tech Lawyer:</strong> Success via 20+ precedent-setting AI cases and 200+ pro bono hours annually. Potential conflict: career-advancing cases that cause societal harm. Mitigation: maintain ethical code prioritizing harm prevention over advancement.
                </p>
              </div>
            </Card>

            {/* Community */}
            <Card className="p-6 hover-lift">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                <div className="w-2 h-6 bg-accent rounded-full" />
                Community Influence
              </h3>
              <div className="space-y-3 text-foreground leading-relaxed text-sm">
                <p>
                  <strong>UBC Faculty:</strong> CS professors researching AI fairness revealed how technical decisions embed values, inspiring policy interest. <strong>Alumni Network:</strong> Quant finance alumni shared ethical considerations in algorithmic trading. <strong>Tech Policy Club:</strong> Peer debates on AI regulation challenged assumptions and reinforced the need for combined technical, entrepreneurial, and policy expertise.
                </p>
              </div>
            </Card>

            {/* AI Reflection */}
            <Card className="p-6 hover-lift">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                <div className="w-2 h-6 bg-primary rounded-full" />
                AI Usage
              </h3>
              <div className="space-y-2 text-foreground leading-relaxed text-sm">
                <p>
                  Used ChatGPT-4 to explore career requirements. Initial prompt: "What skills are essential for a quantitative developer in 2025?" Output lacked ethical dimensions. Revised: "What skills for Canadian quant roles in 2025, emphasizing ethical practices and open-source contributions?" This highlighted ESG factors and community impact opportunities, aligning with my <em>balance</em> value.
                </p>
                <p>
                  <strong>Learning:</strong> AI tools excel at breadth but require iterative prompting to incorporate values and context. They complement but don't replace human judgment in career exploration.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* References Section */}
      <section id="references" className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            title="References"
            subtitle="APA 7th Edition sources"
          />

          <Card className="p-6">
            <div className="space-y-3 text-sm text-foreground leading-relaxed">
              <p className="font-semibold text-base mb-3">Sources:</p>

              <p className="hanging-indent">
                Ada Lovelace Institute. (2023). <em>Participatory AI governance</em>. https://www.adalovelaceinstitute.org/
              </p>

              <p className="hanging-indent">
                Government of Canada. (2023). <em>Directive on automated decision-making</em>. https://www.tbs-sct.canada.ca/
              </p>

              <p className="hanging-indent">
                Lopez de Prado, M. (2018). <em>Advances in financial machine learning</em>. Wiley.
              </p>

              <p className="hanging-indent">
                UBC Sauder School of Business. (2024). <em>Career Centre resources</em>. https://www.sauder.ubc.ca/
              </p>

              <p className="font-semibold text-base mt-4 mb-3">AI Tools:</p>

              <p className="hanging-indent">
                OpenAI. (2024). <em>ChatGPT (GPT-4)</em>. https://chat.openai.com/
              </p>

              <p className="text-muted-foreground mt-4 italic text-xs">
                AI-assisted research verified with UBC resources, alumni insights, and faculty consultations.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-muted border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            COMM 105: Values, Ethics, and Community | Student #11699626
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            UBC Combined Major in Business & Computer Science
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
