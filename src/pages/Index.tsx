import { Navigation } from "@/components/Navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { PathwayNode, PathwayDetail } from "@/components/PathwayNode";
import { ValueBadge } from "@/components/ValueBadge";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowRight, Sparkles, Target, Users, Scale, TrendingUp, Gavel, Brain, Code, BookOpen, Briefcase, Lightbulb, Zap, Rocket } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-background via-background to-card animate-gradient">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          
          {/* Geometric shapes */}
          <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-primary/30 rotate-12 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="w-full h-full border border-primary/40 rotate-45" />
          </div>
          <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-secondary/30 rounded-lg rotate-45 animate-float-slow" />
          <div className="absolute top-1/3 left-1/2 w-12 h-12 border-2 border-accent/30 animate-pulse-ring" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm border-2 border-primary/50 rounded-full text-primary text-sm font-bold animate-bounce-in shadow-glow">
                COMM 105
              </div>
              <div className="inline-block px-4 py-2 bg-secondary/10 backdrop-blur-sm border-2 border-secondary/50 rounded-full text-secondary text-sm font-bold animate-bounce-in shadow-glow-secondary" style={{ animationDelay: '0.1s' }}>
                Student #99626
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-scale-in tracking-tight">
              Career Pathways
              <span className="text-gradient block mt-2 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer bg-clip-text">
                in Tech & Innovation
              </span>
            </h1>
          </div>

          {/* Core Interest */}
          <div className="mt-12 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <Card className="p-6 bg-card/90 backdrop-blur-sm border-2 border-primary/40 shadow-xl hover-lift relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-lg shadow-lg animate-pulse-ring">
                  <Sparkles className="w-6 h-6 text-primary animate-float" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary uppercase tracking-wide mb-2">
                    About This Interactive Experience
                  </h3>
                  <p className="text-base text-foreground leading-relaxed font-medium">
                    I spent hours programming and debugging the interactive features to show my passion for business, technology, and impact. The blended gradient colors represent how these areas come together. The interactions highlight innovation and my attention to detail as a software engineer, with the user always at the center. The main takeaway from my visual is that software is both powerful and creative, which is why I chose to code my assignment as a way to express my passion.
                  </p>
                  <p className="text-base text-foreground leading-relaxed font-medium mt-3">
                    The glowing background on hover reflects how I see each pathway: bright, promising, and full of potential, not just for me personally, but for future careers and job creation.
                  </p>
                  <p className="text-base text-foreground leading-relaxed font-medium mt-3">
                    I also paid close attention to the hover effects for the individual skills. To me, each skill stands on its own and requires focused effort, but they all eventually merge into a single, cohesive whole. I included icons to reinforce this: a bullish market chart for quantitative developer to represent growth and opportunity, and a brain for AI minister to emphasize that human intelligence is our natural "supercomputer," something AI can't replace, and a reminder of why it matters.
                  </p>
                  <p className="text-base text-foreground leading-relaxed font-medium mt-3">
                    Finally, the tech lawyer icon uses a gavel to symbolize influence and authority. It represents the need for clarity and guidance in a space full of noise and uncertainty, especially with the rapid rise of AI.
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
      <section id="visual" className="py-20 px-6 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader
            title="Visual Pathways Representation"
            subtitle="Three distinct career paths converging toward technological innovation and societal impact"
          />

          {/* Career Paths Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Path 1: Quantitative Developer */}
            <PathwayNode title="Quantitative Developer" color="primary" icon={TrendingUp} className="animate-slide-in">
              <PathwayDetail label="Skills">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Code className="w-4 h-4 text-primary" />
                    Python, C++, R programming
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Statistical modeling
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Briefcase className="w-4 h-4 text-primary" />
                    Financial mathematics
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Brain className="w-4 h-4 text-primary" />
                    Machine learning
                  </li>
                </ul>
              </PathwayDetail>

              <PathwayDetail label="Education & Training">
                <p className="text-sm">
                  Combined Major in Business & CS (BUCS), quantitative methods focus, CFA Level I certification
                </p>
              </PathwayDetail>

              <PathwayDetail label="Experience">
                <p className="text-sm">
                  UBC Algorithmic Trading Club, CPSC TA, computational finance research, fintech hackathons
                </p>
              </PathwayDetail>

              <PathwayDetail label="Impact">
                <p className="text-sm">
                  Financial literacy workshops, open-source contributions to quantitative libraries
                </p>
              </PathwayDetail>

              <PathwayDetail label="Questions">
                <ul className="space-y-1 text-sm">
                  <li>• How to balance algorithmic efficiency with ethical trading?</li>
                  <li>• What role will quantum computing play in quant strategies?</li>
                </ul>
              </PathwayDetail>
            </PathwayNode>

            {/* Path 2: AI Minister */}
            <PathwayNode
              title="AI Minister"
              color="secondary"
              icon={Brain}
              className="animate-slide-in"
              style={{ animationDelay: "0.1s" }}
            >
              <PathwayDetail label="Skills">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Scale className="w-4 h-4 text-secondary" />
                    Public policy development
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Brain className="w-4 h-4 text-secondary" />
                    AI ethics & governance
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Users className="w-4 h-4 text-secondary" />
                    Stakeholder engagement
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Target className="w-4 h-4 text-secondary" />
                    Strategic planning
                  </li>
                </ul>
              </PathwayDetail>

              <PathwayDetail label="Education & Training">
                <p className="text-sm">
                  BUCS with policy courses, graduate studies in public administration, AI policy training
                </p>
              </PathwayDetail>

              <PathwayDetail label="Experience">
                <p className="text-sm">
                  Tech Policy Club president, government tech internships, Model Parliament, tech education advocacy
                </p>
              </PathwayDetail>

              <PathwayDetail label="Impact">
                <p className="text-sm">
                  Inclusive AI policies for diverse communities, digital literacy programs for marginalized groups
                </p>
              </PathwayDetail>

              <PathwayDetail label="Questions">
                <ul className="space-y-1 text-sm">
                  <li>• How can Canada compete in AI while maintaining values?</li>
                  <li>• What frameworks best balance innovation and protection?</li>
                </ul>
              </PathwayDetail>
            </PathwayNode>

            {/* Path 3: Tech Lawyer */}
            <PathwayNode
              title="Tech Lawyer"
              color="accent"
              icon={Gavel}
              className="animate-slide-in"
              style={{ animationDelay: "0.2s" }}
            >
              <PathwayDetail label="Skills">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <BookOpen className="w-4 h-4 text-accent" />
                    Legal research
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Gavel className="w-4 h-4 text-accent" />
                    Technology & IP law
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Briefcase className="w-4 h-4 text-accent" />
                    Contract negotiation
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Lightbulb className="w-4 h-4 text-accent" />
                    AI systems understanding
                  </li>
                </ul>
              </PathwayDetail>

              <PathwayDetail label="Education & Training">
                <p className="text-sm">
                  BUCS followed by JD, specialized tech law and IP courses, bar admission, continuing education in AI law
                </p>
              </PathwayDetail>

              <PathwayDetail label="Experience">
                <p className="text-sm">
                  Pre-Law Society, tech policy research, legal aid for startups, moot court competitions
                </p>
              </PathwayDetail>

              <PathwayDetail label="Impact">
                <p className="text-sm">
                  Pro bono services for tech startups, workshops on digital rights and AI liability
                </p>
              </PathwayDetail>

              <PathwayDetail label="Questions">
                <ul className="space-y-1 text-sm">
                  <li>• Who is liable when AI systems cause harm?</li>
                  <li>• How should copyright law evolve for AI-generated content?</li>
                </ul>
              </PathwayDetail>
            </PathwayNode>
          </div>

          {/* Ultimate Dream Pathway */}
          <div className="animate-fade-in relative">
            <Card className="p-8 bg-gradient-to-br from-card/80 via-card to-card/80 backdrop-blur-sm border-2 border-primary/50 shadow-2xl hover:shadow-glow relative overflow-hidden group">
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-float-slow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
              </div>

              <div className="text-center mb-8 relative z-10">
                <div className="inline-flex items-center gap-2 mb-3 animate-bounce-in">
                  <Rocket className="w-6 h-6 text-primary animate-float" />
                  <h3 className="text-3xl font-bold text-foreground tracking-tight">Ultimate Dream Pathway</h3>
                  <Zap className="w-6 h-6 text-accent animate-float" style={{ animationDelay: '0.5s' }} />
                </div>
                <p className="text-foreground/70 text-lg font-medium">A journey from technical expertise to national leadership</p>
              </div>

              <TooltipProvider>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-8 relative z-10">
                  {/* Stage 1: Quantitative Developer */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="group/stage relative cursor-pointer">
                        <div className="absolute inset-0 bg-primary/30 rounded-xl blur-xl opacity-0 group-hover/stage:opacity-100 transition-all duration-500 animate-pulse" />
                        <div className="relative flex flex-col items-center gap-3 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm px-8 py-6 rounded-xl shadow-lg border-2 border-primary/60 transition-all duration-500 hover:scale-110 hover:shadow-glow hover:-translate-y-2 hover:border-primary">
                          <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/40 rounded-full shadow-lg group-hover/stage:animate-pulse">
                            <TrendingUp className="w-8 h-8 text-primary transition-transform duration-300 group-hover/stage:rotate-12" />
                          </div>
                          <div className="text-center">
                            <div className="text-xs uppercase tracking-wider text-primary font-bold mb-1">Phase 1</div>
                            <span className="text-lg font-bold text-primary block">Quantitative</span>
                            <span className="text-lg font-bold text-primary">Developer</span>
                          </div>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs p-4">
                      <p className="font-semibold mb-2">Foundation Phase (Years 1-5)</p>
                      <p className="text-sm">Master algorithmic trading, build technical credibility, and develop deep understanding of financial systems through hands-on development.</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Arrow 1 */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 animate-pulse" />
                    <ArrowRight className="w-10 h-10 text-primary rotate-90 md:rotate-0 relative z-10 animate-pulse transition-transform hover:scale-125" />
                  </div>

                  {/* Stage 2: Tech Founder */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="group/stage relative cursor-pointer">
                        <div className="absolute inset-0 bg-secondary/30 rounded-xl blur-xl opacity-0 group-hover/stage:opacity-100 transition-all duration-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="relative flex flex-col items-center gap-3 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm px-8 py-6 rounded-xl shadow-lg border-2 border-secondary/60 transition-all duration-500 hover:scale-110 hover:shadow-glow-secondary hover:-translate-y-2 hover:border-secondary">
                          <div className="p-3 bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/40 rounded-full shadow-lg group-hover/stage:animate-pulse">
                            <Sparkles className="w-8 h-8 text-secondary transition-transform duration-300 group-hover/stage:rotate-12" />
                          </div>
                          <div className="text-center">
                            <div className="text-xs uppercase tracking-wider text-secondary font-bold mb-1">Phase 2</div>
                            <span className="text-lg font-bold text-secondary block">Tech</span>
                            <span className="text-lg font-bold text-secondary">Founder</span>
                          </div>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs p-4">
                      <p className="font-semibold mb-2">Growth Phase (Years 5-12)</p>
                      <p className="text-sm">Launch and scale an AI-driven fintech startup, gain entrepreneurial experience, and build networks across technology and business sectors.</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Arrow 2 */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full blur-lg opacity-50 animate-pulse" style={{ animationDelay: '0.3s' }} />
                    <ArrowRight className="w-10 h-10 text-secondary rotate-90 md:rotate-0 relative z-10 animate-pulse transition-transform hover:scale-125" style={{ animationDelay: '0.2s' }} />
                  </div>

                  {/* Stage 3: AI Minister */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="group/stage relative cursor-pointer">
                        <div className="absolute inset-0 bg-accent/30 rounded-xl blur-xl opacity-0 group-hover/stage:opacity-100 transition-all duration-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                        <div className="relative flex flex-col items-center gap-3 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm px-8 py-6 rounded-xl shadow-lg border-2 border-accent/60 transition-all duration-500 hover:scale-110 hover:shadow-glow-accent hover:-translate-y-2 hover:border-accent">
                          <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/40 rounded-full shadow-lg group-hover/stage:animate-pulse">
                            <Users className="w-8 h-8 text-accent transition-transform duration-300 group-hover/stage:rotate-12" />
                          </div>
                          <div className="text-center">
                            <div className="text-xs uppercase tracking-wider text-accent font-bold mb-1">Phase 3</div>
                            <span className="text-lg font-bold text-accent block">AI</span>
                            <span className="text-lg font-bold text-accent">Minister</span>
                          </div>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs p-4">
                      <p className="font-semibold mb-2">Leadership Phase (Years 12+)</p>
                      <p className="text-sm">Shape national AI policy with real-world experience, lead Canada's technological innovation, and create frameworks that balance progress with ethics.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>

              {/* Enhanced description with timeline */}
              <div className="relative z-10 mt-8 space-y-4">
                <p className="text-center text-sm text-foreground/70 max-w-3xl mx-auto leading-relaxed font-medium">
                  Building technical foundations in quantitative finance, gaining entrepreneurial experience
                  through founding and scaling a tech company, then leveraging this expertise to shape
                  national AI policy and lead Canada's technological future.
                </p>
                
                {/* Key milestones */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <div className="group/milestone px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border-2 border-primary/40 hover:border-primary hover:bg-primary/20 transition-all duration-300 hover:scale-105 cursor-default shadow-md hover:shadow-glow">
                    <span className="text-xs font-bold text-primary tracking-wide">15+ Years Journey</span>
                  </div>
                  <div className="group/milestone px-4 py-2 bg-secondary/10 backdrop-blur-sm rounded-full border-2 border-secondary/40 hover:border-secondary hover:bg-secondary/20 transition-all duration-300 hover:scale-105 cursor-default shadow-md hover:shadow-glow-secondary">
                    <span className="text-xs font-bold text-secondary tracking-wide">3 Distinct Phases</span>
                  </div>
                  <div className="group/milestone px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full border-2 border-accent/40 hover:border-accent hover:bg-accent/20 transition-all duration-300 hover:scale-105 cursor-default shadow-md hover:shadow-glow-accent">
                    <span className="text-xs font-bold text-accent tracking-wide">National Impact</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Written Reflection Section */}
      <section id="reflection" className="py-16 px-6 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            title="Written Reflection"
            subtitle="Connecting values, community, and career aspirations"
          />

          <div className="space-y-6">
            {/* Introduction */}
            <Card className="p-6 hover-lift bg-card/90 backdrop-blur-sm border-2 border-primary/30">
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
            <Card className="p-6 hover-lift bg-card/90 backdrop-blur-sm border-2 border-secondary/30">
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
            <Card className="p-6 hover-lift bg-card/90 backdrop-blur-sm border-2 border-accent/30">
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
            <Card className="p-6 hover-lift bg-card/90 backdrop-blur-sm border-2 border-primary/30">
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
      <section id="references" className="py-16 px-6 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            title="References"
            subtitle="APA 7th Edition sources"
          />

          <Card className="p-6 bg-card/90 backdrop-blur-sm border-2 border-primary/30">
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

              <p className="text-foreground/60 mt-4 italic text-xs font-medium">
                AI-assisted research verified with UBC resources, alumni insights, and faculty consultations.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-card border-t-2 border-primary/20">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-foreground/80 font-medium">
            COMM 105: Values, Ethics, and Community | Student #99626
          </p>
          <p className="text-xs text-foreground/60 mt-2 font-medium">
            UBC Combined Major in Business & Computer Science
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
