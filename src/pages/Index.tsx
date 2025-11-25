import { Navigation } from "@/components/Navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { PathwayNode, PathwayDetail } from "@/components/PathwayNode";
import { ValueBadge } from "@/components/ValueBadge";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowRight, Sparkles, Target, Users, Scale, TrendingUp, Briefcase, Code, BookOpen, Lightbulb, Zap, Rocket, Satellite, BarChart3 } from "lucide-react";

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
                    My Passion
                  </h3>
                  <p className="text-lg text-foreground leading-relaxed font-medium">
                    Exploring the frontiers of space, technology, and economics to advance human potential and solve complex challenges across multiple disciplines
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
            subtitle="Three distinct career paths exploring space exploration, strategic consulting, and economic analysis"
          />

          {/* Career Paths Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Path 1: Astronaut */}
            <PathwayNode title="Astronaut" color="primary" icon={Rocket} className="animate-slide-in">
              <PathwayDetail label="Skills">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Rocket className="w-4 h-4 text-primary" />
                    Spacecraft operations & piloting
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Code className="w-4 h-4 text-primary" />
                    Engineering & robotics
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Target className="w-4 h-4 text-primary" />
                    Extreme environment adaptation
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Users className="w-4 h-4 text-primary" />
                    Team collaboration under pressure
                  </li>
                </ul>
              </PathwayDetail>

              <PathwayDetail label="Education & Training">
                <p className="text-sm">
                  BUCS with aerospace focus, advanced degrees in engineering or physics, astronaut candidate program, extensive flight training
                </p>
              </PathwayDetail>

              <PathwayDetail label="Experience">
                <p className="text-sm">
                  Canadian Space Agency programs, pilot training, research missions, International Space Station simulations
                </p>
              </PathwayDetail>

              <PathwayDetail label="Impact">
                <p className="text-sm">
                  Advancing human space exploration, contributing to scientific research, inspiring future generations in STEM
                </p>
              </PathwayDetail>

              <PathwayDetail label="Questions">
                <ul className="space-y-1 text-sm">
                  <li>• How can we make space exploration more accessible and sustainable?</li>
                  <li>• What role will private space companies play in future missions?</li>
                </ul>
              </PathwayDetail>
            </PathwayNode>

            {/* Path 2: Consultant (Tech & Astrodynamics) */}
            <PathwayNode
              title="Tech & Astrodynamics Consultant"
              color="secondary"
              icon={Satellite}
              className="animate-slide-in"
              style={{ animationDelay: "0.1s" }}
            >
              <PathwayDetail label="Skills">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Satellite className="w-4 h-4 text-secondary" />
                    Orbital mechanics & trajectory analysis
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Briefcase className="w-4 h-4 text-secondary" />
                    Strategic business consulting
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Code className="w-4 h-4 text-secondary" />
                    Technical systems analysis
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Users className="w-4 h-4 text-secondary" />
                    Client relationship management
                  </li>
                </ul>
              </PathwayDetail>

              <PathwayDetail label="Education & Training">
                <p className="text-sm">
                  BUCS with aerospace specialization, MBA or graduate studies in engineering, consulting methodology training
                </p>
              </PathwayDetail>

              <PathwayDetail label="Experience">
                <p className="text-sm">
                  Space technology firms, consulting rotations, satellite systems projects, aerospace industry research
                </p>
              </PathwayDetail>

              <PathwayDetail label="Impact">
                <p className="text-sm">
                  Optimizing space mission designs, advising aerospace startups, advancing satellite technology applications
                </p>
              </PathwayDetail>

              <PathwayDetail label="Questions">
                <ul className="space-y-1 text-sm">
                  <li>• How can astrodynamics expertise drive commercial space ventures?</li>
                  <li>• What consulting approaches best serve emerging space tech companies?</li>
                </ul>
              </PathwayDetail>
            </PathwayNode>

            {/* Path 3: Financial Analyst (Quantitative Economics) */}
            <PathwayNode
              title="Financial Analyst (Quantitative Economics)"
              color="accent"
              icon={BarChart3}
              className="animate-slide-in"
              style={{ animationDelay: "0.2s" }}
            >
              <PathwayDetail label="Skills">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <BarChart3 className="w-4 h-4 text-accent" />
                    Econometric modeling
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    Financial forecasting & analysis
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <Code className="w-4 h-4 text-accent" />
                    Python, R, SQL programming
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <BookOpen className="w-4 h-4 text-accent" />
                    Economic policy analysis
                  </li>
                </ul>
              </PathwayDetail>

              <PathwayDetail label="Education & Training">
                <p className="text-sm">
                  BUCS with economics concentration, CFA certification, advanced econometrics courses, quantitative methods training
                </p>
              </PathwayDetail>

              <PathwayDetail label="Experience">
                <p className="text-sm">
                  Economic research assistant, financial modeling internships, data analysis projects, investment banking rotations
                </p>
              </PathwayDetail>

              <PathwayDetail label="Impact">
                <p className="text-sm">
                  Developing accessible economic education resources, pro bono financial analysis for non-profits
                </p>
              </PathwayDetail>

              <PathwayDetail label="Questions">
                <ul className="space-y-1 text-sm">
                  <li>• How can quantitative economics inform sustainable investment strategies?</li>
                  <li>• What role does behavioral economics play in financial forecasting?</li>
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
                <p className="text-foreground/70 text-lg font-medium">A journey from space exploration to strategic consulting and economic leadership</p>
              </div>

              <TooltipProvider>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-8 relative z-10">
                  {/* Stage 1: Astronaut */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="group/stage relative cursor-pointer">
                        <div className="absolute inset-0 bg-primary/30 rounded-xl blur-xl opacity-0 group-hover/stage:opacity-100 transition-all duration-500 animate-pulse" />
                        <div className="relative flex flex-col items-center gap-3 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm px-8 py-6 rounded-xl shadow-lg border-2 border-primary/60 transition-all duration-500 hover:scale-110 hover:shadow-glow hover:-translate-y-2 hover:border-primary">
                          <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/40 rounded-full shadow-lg group-hover/stage:animate-pulse">
                            <Rocket className="w-8 h-8 text-primary transition-transform duration-300 group-hover/stage:rotate-12" />
                          </div>
                          <div className="text-center">
                            <div className="text-xs uppercase tracking-wider text-primary font-bold mb-1">Phase 1</div>
                            <span className="text-lg font-bold text-primary block">Astronaut</span>
                          </div>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs p-4">
                      <p className="font-semibold mb-2">Foundation Phase (Years 1-8)</p>
                      <p className="text-sm">Complete rigorous astronaut training, participate in space missions, and develop expertise in spacecraft operations and scientific research in extreme environments.</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Arrow 1 */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 animate-pulse" />
                    <ArrowRight className="w-10 h-10 text-primary rotate-90 md:rotate-0 relative z-10 animate-pulse transition-transform hover:scale-125" />
                  </div>

                  {/* Stage 2: Consultant */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="group/stage relative cursor-pointer">
                        <div className="absolute inset-0 bg-secondary/30 rounded-xl blur-xl opacity-0 group-hover/stage:opacity-100 transition-all duration-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="relative flex flex-col items-center gap-3 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm px-8 py-6 rounded-xl shadow-lg border-2 border-secondary/60 transition-all duration-500 hover:scale-110 hover:shadow-glow-secondary hover:-translate-y-2 hover:border-secondary">
                          <div className="p-3 bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/40 rounded-full shadow-lg group-hover/stage:animate-pulse">
                            <Satellite className="w-8 h-8 text-secondary transition-transform duration-300 group-hover/stage:rotate-12" />
                          </div>
                          <div className="text-center">
                            <div className="text-xs uppercase tracking-wider text-secondary font-bold mb-1">Phase 2</div>
                            <span className="text-lg font-bold text-secondary block">Tech & Astrodynamics</span>
                            <span className="text-lg font-bold text-secondary">Consultant</span>
                          </div>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs p-4">
                      <p className="font-semibold mb-2">Growth Phase (Years 8-15)</p>
                      <p className="text-sm">Leverage space experience to advise aerospace companies, optimize mission designs, and bridge technical expertise with business strategy in the emerging space economy.</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Arrow 2 */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full blur-lg opacity-50 animate-pulse" style={{ animationDelay: '0.3s' }} />
                    <ArrowRight className="w-10 h-10 text-secondary rotate-90 md:rotate-0 relative z-10 animate-pulse transition-transform hover:scale-125" style={{ animationDelay: '0.2s' }} />
                  </div>

                  {/* Stage 3: Financial Analyst */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="group/stage relative cursor-pointer">
                        <div className="absolute inset-0 bg-accent/30 rounded-xl blur-xl opacity-0 group-hover/stage:opacity-100 transition-all duration-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                        <div className="relative flex flex-col items-center gap-3 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm px-8 py-6 rounded-xl shadow-lg border-2 border-accent/60 transition-all duration-500 hover:scale-110 hover:shadow-glow-accent hover:-translate-y-2 hover:border-accent">
                          <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/40 rounded-full shadow-lg group-hover/stage:animate-pulse">
                            <BarChart3 className="w-8 h-8 text-accent transition-transform duration-300 group-hover/stage:rotate-12" />
                          </div>
                          <div className="text-center">
                            <div className="text-xs uppercase tracking-wider text-accent font-bold mb-1">Phase 3</div>
                            <span className="text-lg font-bold text-accent block">Financial Analyst</span>
                            <span className="text-lg font-bold text-accent">(Quant Economics)</span>
                          </div>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs p-4">
                      <p className="font-semibold mb-2">Leadership Phase (Years 15+)</p>
                      <p className="text-sm">Apply quantitative economics expertise to analyze space industry investments, evaluate emerging markets, and shape economic policy for the commercial space sector.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>

              {/* Enhanced description with timeline */}
              <div className="relative z-10 mt-8 space-y-4">
                <p className="text-center text-sm text-foreground/70 max-w-3xl mx-auto leading-relaxed font-medium">
                  Beginning with space exploration as an astronaut, transitioning to strategic consulting in aerospace technology and astrodynamics, then applying quantitative economics expertise to analyze and shape the future of the space economy.
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
                  I spent hours programming and debugging the interactive features to show my passion for space exploration, technology consulting, and economic analysis. The blended gradient colors represent how these distinct fields converge into a unified vision. The interactions highlight innovation and my attention to detail as a software engineer, with the user always at the center. The main takeaway from my visual is that software is both powerful and creative, which is why I chose to code my assignment as a way to express my passion.
                </p>
                <p>
                  The glowing background on hover reflects how I see each pathway: bright, promising, and full of potential, not just for me personally, but for advancing human exploration and understanding across multiple frontiers.
                </p>
                <p>
                  I also paid close attention to the hover effects for the individual skills. To me, each skill stands on its own and requires focused effort, but they all eventually merge into a single, cohesive whole. I included icons to reinforce this: a rocket for astronaut to represent exploration and pushing boundaries, a satellite for the consultant pathway to symbolize the intersection of technology and orbital dynamics, and a bar chart for the financial analyst to represent data-driven economic insights.
                </p>
                <p>
                  These icons reflect the core essence of each career: the astronaut represents human potential reaching for the stars, the consultant bridges technical expertise with strategic thinking, and the financial analyst applies rigorous quantitative methods to understand complex economic systems.
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
                  <strong>Astronaut:</strong> Success measured by successful mission completions, scientific research contributions, and inspiring public engagement in space exploration. Potential conflict: prioritizing personal achievement over crew safety. Mitigation: rigorous adherence to safety protocols and emphasis on collaborative mission success.
                </p>
                <p>
                  <strong>Tech & Astrodynamics Consultant:</strong> Success through optimized mission designs adopted by 10+ aerospace clients and thought leadership in space technology strategy. Potential conflict: recommending cost-cutting measures that compromise safety. Mitigation: maintaining independence and prioritizing ethical considerations in all recommendations.
                </p>
                <p>
                  <strong>Financial Analyst (Quantitative Economics):</strong> Success via accurate economic forecasts (90%+ confidence intervals), influential policy papers, and accessible economic education initiatives. Potential conflict: pressure to manipulate data for favorable outcomes. Mitigation: commitment to data integrity and transparent methodology disclosure.
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
                  <strong>UBC Faculty:</strong> Engineering professors working on aerospace systems demonstrated how interdisciplinary thinking drives innovation. <strong>Alumni Network:</strong> Former astronauts and aerospace consultants shared insights on career pathways and the importance of diverse skill sets. <strong>Student Organizations:</strong> Participation in space exploration clubs and economics societies revealed the interconnectedness of technology, business strategy, and quantitative analysis.
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
                  Used ChatGPT-4 to explore career pathways in aerospace and economics. Initial prompt: "What skills are essential for becoming an astronaut in 2025?" Output focused on technical requirements. Revised: "What skills and experiences are needed for a career path from astronaut to aerospace consultant to quantitative economics analyst, emphasizing interdisciplinary connections?" This revealed how space exploration experience translates to consulting expertise and economic analysis applications.
                </p>
                <p>
                  <strong>Learning:</strong> AI tools excel at identifying connections between disparate fields when prompted thoughtfully. Iterative questioning reveals how skills transfer across career transitions, aligning with my values of <em>rigour</em> in preparation and <em>risk-taking</em> in pursuing unconventional pathways.
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
