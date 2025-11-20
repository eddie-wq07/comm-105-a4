import { Navigation } from "@/components/Navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { PathwayNode, PathwayDetail } from "@/components/PathwayNode";
import { ValueBadge } from "@/components/ValueBadge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Target, Users, Scale } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-background via-primary-lighter/30 to-secondary-lighter/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-primary-lighter border border-primary rounded-full text-primary text-sm font-semibold">
              UBC BUCS Student
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Career Pathways
              <span className="text-gradient block mt-2">in Tech & Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Exploring the intersection of software applications, artificial intelligence, and policy to
              improve well-being and solve impossible questions.
            </p>
          </div>

          {/* Core Interest */}
          <div className="mt-16 animate-scale-in">
            <Card className="p-8 bg-card border-2 border-primary/20 shadow-lg hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-lighter rounded-lg">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Core Interest
                  </h3>
                  <p className="text-xl text-foreground leading-relaxed">
                    Building software applications to improve the well-being of all, while solving
                    impossible questions through AI and innovative technology solutions.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Professional Values */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-center text-lg font-semibold text-muted-foreground uppercase tracking-wide mb-6">
              Professional Values
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <ValueBadge
                value="Loyalty"
                description="Commitment to long-term relationships and organizational success"
              />
              <ValueBadge
                value="Rigour"
                description="Dedication to excellence, precision, and thorough analysis"
              />
              <ValueBadge
                value="Balance"
                description="Maintaining equilibrium between innovation and stability"
              />
              <ValueBadge
                value="Risk-taking"
                description="Calculated ventures into uncharted technological territories"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Pathways Section */}
      <section id="visual" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader
            title="Visual Pathways Representation"
            subtitle="Three distinct career paths converging toward technological innovation and societal impact"
          />

          {/* Career Paths Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Path 1: Quantitative Developer */}
            <PathwayNode title="Quantitative Developer" color="primary" className="animate-slide-in">
              <PathwayDetail label="Skills">
                <ul className="space-y-1 text-sm">
                  <li>• Advanced Python, C++, R programming</li>
                  <li>• Statistical modeling & machine learning</li>
                  <li>• Financial mathematics & derivatives</li>
                  <li>• High-frequency trading systems</li>
                  <li>• Data structures & algorithms</li>
                </ul>
              </PathwayDetail>

              <PathwayDetail label="Education & Training">
                <p className="text-sm">
                  Combined Major in Business & Computer Science (BUCS), with focus on quantitative
                  methods, financial modeling, and algorithmic trading. Additional certifications in
                  CFA Level I and financial engineering.
                </p>
              </PathwayDetail>

              <PathwayDetail label="UBC Experience">
                <p className="text-sm">
                  Member of UBC Algorithmic Trading Club, TA for CPSC courses, research assistant in
                  computational finance lab, participation in hackathons focused on fintech solutions.
                </p>
              </PathwayDetail>

              <PathwayDetail label="Community Impact">
                <ul className="space-y-1 text-sm">
                  <li>• Financial literacy workshops for underserved communities</li>
                  <li>• Open-source contributions to quantitative finance libraries</li>
                </ul>
              </PathwayDetail>

              <PathwayDetail label="Dream Job Pathway">
                <div className="flex items-center gap-2 text-sm bg-primary-lighter/50 p-3 rounded-lg">
                  <span className="font-semibold">Junior Quant</span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span className="font-semibold">Senior Quant</span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-primary">Tech Founder</span>
                </div>
              </PathwayDetail>

              <PathwayDetail label="Unanswered Questions">
                <ul className="space-y-1 text-sm">
                  <li>1. How to balance algorithmic efficiency with ethical trading practices?</li>
                  <li>2. What role will quantum computing play in future quantitative strategies?</li>
                </ul>
              </PathwayDetail>
            </PathwayNode>

            {/* Path 2: AI Minister */}
            <PathwayNode
              title="AI Minister (Canada's Tech Future)"
              color="secondary"
              className="animate-slide-in"
              style={{ animationDelay: "0.1s" }}
            >
              <PathwayDetail label="Skills">
                <ul className="space-y-1 text-sm">
                  <li>• Public policy development & analysis</li>
                  <li>• AI ethics & governance frameworks</li>
                  <li>• Stakeholder engagement & negotiation</li>
                  <li>• Strategic planning & vision-setting</li>
                  <li>• Cross-cultural communication</li>
                </ul>
              </PathwayDetail>

              <PathwayDetail label="Education & Training">
                <p className="text-sm">
                  BUCS degree supplemented with policy courses, graduate studies in public
                  administration or AI policy, extensive training in governmental processes and
                  international technology diplomacy.
                </p>
              </PathwayDetail>

              <PathwayDetail label="UBC Experience">
                <p className="text-sm">
                  President of Tech Policy Club, intern at Canadian government technology
                  departments, participation in Model Parliament, leadership in student advocacy for
                  tech education reform.
                </p>
              </PathwayDetail>

              <PathwayDetail label="Community Impact">
                <ul className="space-y-1 text-sm">
                  <li>• Development of inclusive AI policies for diverse communities</li>
                  <li>• Digital literacy programs for seniors and marginalized groups</li>
                </ul>
              </PathwayDetail>

              <PathwayDetail label="Dream Job Pathway">
                <div className="flex items-center gap-2 text-sm bg-secondary-lighter/50 p-3 rounded-lg">
                  <span className="font-semibold">Tech Founder</span>
                  <ArrowRight className="w-4 h-4 text-secondary" />
                  <span className="font-semibold">Policy Advisor</span>
                  <ArrowRight className="w-4 h-4 text-secondary" />
                  <span className="font-semibold text-secondary">AI Minister</span>
                </div>
              </PathwayDetail>

              <PathwayDetail label="Unanswered Questions">
                <ul className="space-y-1 text-sm">
                  <li>1. How can Canada compete with US/China in AI while maintaining values?</li>
                  <li>2. What regulatory frameworks best balance innovation and protection?</li>
                </ul>
              </PathwayDetail>
            </PathwayNode>

            {/* Path 3: Tech Lawyer */}
            <PathwayNode
              title="Tech Lawyer (AI Cases)"
              color="accent"
              className="animate-slide-in"
              style={{ animationDelay: "0.2s" }}
            >
              <PathwayDetail label="Skills">
                <ul className="space-y-1 text-sm">
                  <li>• Legal research & case analysis</li>
                  <li>• Technology & IP law expertise</li>
                  <li>• Contract negotiation & drafting</li>
                  <li>• AI systems understanding</li>
                  <li>• Litigation & dispute resolution</li>
                </ul>
              </PathwayDetail>

              <PathwayDetail label="Education & Training">
                <p className="text-sm">
                  BUCS degree followed by JD from top law school, specialized courses in technology
                  law, intellectual property, and AI regulation. Bar admission and continuing
                  education in emerging tech law.
                </p>
              </PathwayDetail>

              <PathwayDetail label="UBC Experience">
                <p className="text-sm">
                  Member of Pre-Law Society, research assistant on tech policy projects, volunteer at
                  legal aid clinic helping startups, participation in moot court competitions focused
                  on technology cases.
                </p>
              </PathwayDetail>

              <PathwayDetail label="Community Impact">
                <ul className="space-y-1 text-sm">
                  <li>• Pro bono legal services for tech startups in underserved communities</li>
                  <li>• Education workshops on digital rights and AI liability</li>
                </ul>
              </PathwayDetail>

              <PathwayDetail label="Dream Job Pathway">
                <div className="flex items-center gap-2 text-sm bg-accent-lighter/50 p-3 rounded-lg">
                  <span className="font-semibold">Associate</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                  <span className="font-semibold">Partner</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                  <span className="font-semibold text-accent">Tech Law Leader</span>
                </div>
              </PathwayDetail>

              <PathwayDetail label="Unanswered Questions">
                <ul className="space-y-1 text-sm">
                  <li>1. Who is liable when AI systems cause harm - developer, user, or AI itself?</li>
                  <li>2. How should copyright law evolve for AI-generated content?</li>
                </ul>
              </PathwayDetail>
            </PathwayNode>
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
      <section id="reflection" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            title="Written Reflection"
            subtitle="Exploring the alignment of values, community, and career aspirations"
          />

          <div className="space-y-8">
            {/* Introduction */}
            <Card className="p-8 hover-lift">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <div className="w-2 h-8 bg-primary rounded-full" />
                Introduction and Explanation
              </h3>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  My visual pathways representation centers on a fundamental belief: technology, when
                  thoughtfully developed and ethically deployed, can solve humanity's most pressing
                  challenges. What distinguishes my approach is the convergence of technical excellence,
                  entrepreneurial drive, and policy leadership - three seemingly disparate paths that form
                  a coherent journey toward meaningful impact.
                </p>
                <p>
                  The key takeaway is my commitment to <strong>rigour</strong> in quantitative
                  development, <strong>balance</strong> in considering diverse stakeholder perspectives,
                  calculated <strong>risk-taking</strong> in founding ventures, and unwavering{" "}
                  <strong>loyalty</strong> to improving collective well-being. These values permeate each
                  career path, creating a unified vision where technical mastery, business acumen, and
                  policy insight reinforce one another rather than compete.
                </p>
              </div>
            </Card>

            {/* Values Fit */}
            <Card className="p-8 hover-lift">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <div className="w-2 h-8 bg-secondary rounded-full" />
                Values Fit
              </h3>
              <div className="space-y-6 text-foreground leading-relaxed">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-3">
                    Quantitative Developer Success
                  </h4>
                  <p className="mb-2">
                    <strong>Measurable Indicators:</strong>
                  </p>
                  <ul className="list-disc list-inside mb-3 space-y-1 ml-4">
                    <li>
                      Development of trading algorithms achieving consistent risk-adjusted returns
                      (Sharpe ratio &gt; 2.0), reflecting <em>rigour</em>
                    </li>
                    <li>
                      Publication of 3+ open-source quantitative libraries adopted by 1,000+
                      developers, demonstrating <em>loyalty</em> to community advancement
                    </li>
                  </ul>
                  <p className="mb-2">
                    <strong>Value Conflict Scenario:</strong> Being pressured to implement
                    high-frequency trading strategies that exploit market inefficiencies at the expense
                    of retail investors, conflicting with my value of <em>balance</em>.
                  </p>
                  <p>
                    <strong>Mitigation Action:</strong> Establish transparent trading practices and
                    dedicate a percentage of profits to financial literacy programs, ensuring technical
                    excellence doesn't compromise equitable market access.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-secondary mb-3">AI Minister Success</h4>
                  <p className="mb-2">
                    <strong>Measurable Indicators:</strong>
                  </p>
                  <ul className="list-disc list-inside mb-3 space-y-1 ml-4">
                    <li>
                      Implementation of AI governance frameworks adopted by 5+ Canadian provinces,
                      reflecting <em>risk-taking</em> in policy innovation
                    </li>
                    <li>
                      Recognition through national awards for inclusive technology policy, demonstrating
                      commitment to <em>balance</em> across diverse communities
                    </li>
                  </ul>
                  <p className="mb-2">
                    <strong>Value Conflict Scenario:</strong> Political pressure to prioritize economic
                    competitiveness over AI safety standards, conflicting with <em>rigour</em>.
                  </p>
                  <p>
                    <strong>Mitigation Action:</strong> Commission independent AI safety research and
                    establish multi-stakeholder advisory committees to ensure evidence-based policy
                    decisions that don't sacrifice long-term safety for short-term gains.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-accent mb-3">Tech Lawyer Success</h4>
                  <p className="mb-2">
                    <strong>Measurable Indicators:</strong>
                  </p>
                  <ul className="list-disc list-inside mb-3 space-y-1 ml-4">
                    <li>
                      Successfully representing 20+ AI liability cases establishing precedents for
                      responsible AI deployment, reflecting <em>rigour</em>
                    </li>
                    <li>
                      Pro bono hours exceeding 200 annually for tech startups in underserved
                      communities, demonstrating <em>loyalty</em> to equitable access
                    </li>
                  </ul>
                  <p className="mb-2">
                    <strong>Value Conflict Scenario:</strong> Defending a client whose AI system caused
                    harm but where taking the case would secure career advancement, conflicting with{" "}
                    <em>balance</em>.
                  </p>
                  <p>
                    <strong>Mitigation Action:</strong> Decline cases that fundamentally undermine
                    societal welfare, regardless of financial incentives, and maintain a personal code
                    of ethics that prioritizes harm prevention over career progression.
                  </p>
                </div>
              </div>
            </Card>

            {/* Community Interaction */}
            <Card className="p-8 hover-lift">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <div className="w-2 h-8 bg-accent rounded-full" />
                Community Interaction
              </h3>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  My career pathways exploration has been profoundly shaped by interactions with the{" "}
                  <strong>UBC Sauder and Computer Science faculty community</strong>. Conversations with
                  professors who bridge academic research and industry practice revealed the importance
                  of maintaining technical depth while developing business acumen. Specifically, a CS
                  professor's research on AI fairness illuminated how technical decisions embed societal
                  values, inspiring my interest in AI policy.
                </p>
                <p>
                  Additionally, the <strong>UBC alumni network in quantitative finance</strong> provided
                  invaluable insights through informational interviews. Alumni working at prop trading
                  firms shared the reality of balancing algorithmic performance with ethical
                  considerations, directly influencing my understanding of how <em>rigour</em> and{" "}
                  <em>balance</em> must coexist in practice.
                </p>
                <p>
                  Most influentially, the <strong>Tech Policy Club community</strong> exposed me to
                  diverse perspectives on technology's societal role. Debates with peers about AI
                  regulation, digital rights, and innovation policy challenged my assumptions and
                  reinforced the necessity of my ultimate dream pathway - combining technical expertise,
                  entrepreneurial experience, and policy leadership to create comprehensive, informed
                  solutions.
                </p>
              </div>
            </Card>

            {/* AI Reflection */}
            <Card className="p-8 hover-lift">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <div className="w-2 h-8 bg-primary rounded-full" />
                AI Reflection
              </h3>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  <strong>AI Usage in Career Exploration:</strong>
                </p>
                <p>
                  I leveraged ChatGPT-4 extensively to explore each career pathway's technical
                  requirements, typical career progressions, and emerging challenges. My initial prompt
                  was: "What skills and experiences are essential for a quantitative developer role in
                  2025?" The AI provided a comprehensive list but lacked specificity about ethical
                  dimensions and Canadian market nuances.
                </p>
                <p>
                  <strong>Revised Prompt:</strong> "What skills and experiences are essential for a
                  quantitative developer role in Canadian markets in 2025, with emphasis on ethical
                  trading practices and open-source contributions to the quant community?"
                </p>
                <p>
                  The improved output highlighted regulatory considerations specific to Canadian
                  financial markets, the growing importance of ESG (Environmental, Social, Governance)
                  factors in quantitative strategies, and opportunities for community impact through
                  knowledge sharing - directly aligning with my values of <em>rigour</em>,{" "}
                  <em>balance</em>, and <em>loyalty</em>.
                </p>
                <p>
                  <strong>Responsible AI Use in Career Pathways:</strong>
                </p>
                <p>
                  In quantitative development, AI could responsibly analyze vast market datasets while
                  implementing bias detection algorithms to ensure trading strategies don't
                  disproportionately impact vulnerable market participants. Ethical safeguards include
                  regular audits of AI-driven trading systems for fairness and transparency reporting
                  mechanisms.
                </p>
                <p>
                  As an AI Minister, I would champion responsible AI deployment through mandatory impact
                  assessments for government AI systems, establishment of independent AI ethics boards
                  with diverse representation, and requirements for explainability in high-stakes
                  decision-making contexts. Research from the Ada Lovelace Institute emphasizes the
                  necessity of participatory governance structures that include marginalized communities
                  in AI policy development.
                </p>
                <p>
                  In tech law practice, AI could enhance legal research efficiency while maintaining
                  human oversight for nuanced interpretation. Ethical safeguards include client consent
                  for AI tool usage, verification of AI-generated legal analysis against primary sources,
                  and recognition that AI cannot replace the contextual judgment and ethical reasoning
                  fundamental to legal practice.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            title="References"
            subtitle="APA 7th Edition formatted sources"
          />

          <Card className="p-8">
            <div className="space-y-4 text-sm text-foreground leading-relaxed">
              <p className="font-semibold text-base mb-4">Academic and Professional Sources:</p>

              <p className="hanging-indent">
                Ada Lovelace Institute. (2023). <em>Participatory AI governance: A framework for inclusive technology policy</em>. https://www.adalovelaceinstitute.org/report/participatory-ai-governance/
              </p>

              <p className="hanging-indent">
                Canadian Securities Administrators. (2024). <em>Guidance on algorithmic trading and direct electronic access</em>. https://www.securities-administrators.ca/
              </p>

              <p className="hanging-indent">
                Government of Canada. (2023). <em>Directive on automated decision-making</em>. Treasury Board of Canada Secretariat. https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32592
              </p>

              <p className="hanging-indent">
                Lopez de Prado, M. (2018). <em>Advances in financial machine learning</em>. Wiley.
              </p>

              <p className="hanging-indent">
                O'Neil, C. (2016). <em>Weapons of math destruction: How big data increases inequality and threatens democracy</em>. Crown.
              </p>

              <p className="hanging-indent">
                University of British Columbia Sauder School of Business. (2024). <em>Business Career Centre resources</em>. https://www.sauder.ubc.ca/career-resources
              </p>

              <p className="hanging-indent">
                University of British Columbia. (2024). <em>Combined Major in Business and Computer Science program guide</em>. https://www.calendar.ubc.ca/
              </p>

              <p className="font-semibold text-base mt-6 mb-4">AI Tools Used:</p>

              <p className="hanging-indent">
                OpenAI. (2024). <em>ChatGPT (GPT-4 version)</em> [Large language model]. https://chat.openai.com/
              </p>

              <p className="text-muted-foreground mt-6 italic text-xs">
                Note: Career pathway details, skill requirements, and progression insights were informed by AI-assisted research, UBC Career Centre resources, LinkedIn profile analysis of Sauder alumni, and conversations with faculty and industry professionals. All AI-generated content was verified against credible sources and supplemented with traditional research methods.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-muted border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            UBC Sauder School of Business | COMM 105: Values, Ethics, and Community
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Combined Major in Business & Computer Science | Assignment 4: Pathways Project
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
