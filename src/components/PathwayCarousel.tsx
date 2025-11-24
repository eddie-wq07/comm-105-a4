import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PathwayNode, PathwayDetail } from "@/components/PathwayNode";
import quantDevImg from "@/assets/quant-developer.png";
import aiMinisterImg from "@/assets/ai-minister.png";
import techLawyerImg from "@/assets/tech-lawyer.png";

interface PathwaySlide {
  id: string;
  title: string;
  color: "primary" | "secondary" | "accent";
  image: string;
  skills: string[];
  education: string;
  experience: string;
  impact: string;
  questions: string[];
}

const pathways: PathwaySlide[] = [
  {
    id: "quant",
    title: "Quantitative Developer",
    color: "primary",
    image: quantDevImg,
    skills: [
      "Python, C++, R programming",
      "Statistical modeling",
      "Financial mathematics",
      "Machine learning",
    ],
    education: "Combined Major in Business & CS (BUCS), quantitative methods focus, CFA Level I certification",
    experience: "UBC Algorithmic Trading Club, CPSC TA, computational finance research, fintech hackathons",
    impact: "Financial literacy workshops, open-source contributions to quantitative libraries",
    questions: [
      "How to balance algorithmic efficiency with ethical trading?",
      "What role will quantum computing play in quant strategies?",
    ],
  },
  {
    id: "minister",
    title: "AI Minister",
    color: "secondary",
    image: aiMinisterImg,
    skills: [
      "Public policy development",
      "AI ethics & governance",
      "Stakeholder engagement",
      "Strategic planning",
    ],
    education: "BUCS with policy courses, graduate studies in public administration, AI policy training",
    experience: "Tech Policy Club president, government tech internships, Model Parliament, tech education advocacy",
    impact: "Inclusive AI policies for diverse communities, digital literacy programs for marginalized groups",
    questions: [
      "How can Canada compete in AI while maintaining values?",
      "What frameworks best balance innovation and protection?",
    ],
  },
  {
    id: "lawyer",
    title: "Tech Lawyer",
    color: "accent",
    image: techLawyerImg,
    skills: [
      "Legal research",
      "Technology & IP law",
      "Contract negotiation",
      "AI systems understanding",
    ],
    education: "BUCS followed by JD, specialized tech law and IP courses, bar admission, continuing education in AI law",
    experience: "Pre-Law Society, tech policy research, legal aid for startups, moot court competitions",
    impact: "Pro bono services for tech startups, workshops on digital rights and AI liability",
    questions: [
      "Who is liable when AI systems cause harm?",
      "How should copyright law evolve for AI-generated content?",
    ],
  },
];

export const PathwayCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {pathways.map((pathway, index) => (
            <div
              key={pathway.id}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_70%] px-2"
            >
              <div
                className={`group perspective-1000 ${
                  index === selectedIndex ? "animate-scale-in" : ""
                }`}
              >
                {/* 3D Card Container */}
                <div className="relative transform-style-3d transition-all duration-500 hover:scale-[1.02]">
                  {/* Image with 3D effect */}
                  <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:shadow-glow">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40 z-10" />
                    <img
                      src={pathway.image}
                      alt={pathway.title}
                      className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent z-20" />
                    <div className="absolute bottom-6 left-6 right-6 z-30">
                      <h3 className="text-3xl font-bold mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        {pathway.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Card */}
                  <PathwayNode
                    title=""
                    color={pathway.color}
                    className="transform transition-all duration-300"
                  >
                    <PathwayDetail label="Skills">
                      <ul className="space-y-1 text-sm">
                        {pathway.skills.map((skill, i) => (
                          <li key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                            • {skill}
                          </li>
                        ))}
                      </ul>
                    </PathwayDetail>

                    <PathwayDetail label="Education & Training">
                      <p className="text-sm">{pathway.education}</p>
                    </PathwayDetail>

                    <PathwayDetail label="Experience">
                      <p className="text-sm">{pathway.experience}</p>
                    </PathwayDetail>

                    <PathwayDetail label="Impact">
                      <p className="text-sm">{pathway.impact}</p>
                    </PathwayDetail>

                    <PathwayDetail label="Questions">
                      <ul className="space-y-1 text-sm">
                        {pathway.questions.map((question, i) => (
                          <li key={i}>• {question}</li>
                        ))}
                      </ul>
                    </PathwayDetail>
                  </PathwayNode>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="rounded-full w-12 h-12 hover-scale shadow-lg hover:shadow-glow transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="rounded-full w-12 h-12 hover-scale shadow-lg hover:shadow-glow transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {pathways.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-primary w-8 shadow-glow"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
