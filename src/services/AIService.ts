
import { toast } from "@/components/ui/use-toast";

export interface ContentIdeaType {
  type: string;
  ideas: string[];
}

export interface WeeklyThemeType {
  week: number;
  theme: string;
  description: string;
  completed: boolean;
}

export interface ContentStrategyResponse {
  weeklyThemes: WeeklyThemeType[];
  contentIdeas: ContentIdeaType[];
  monthlyCalendar: any[];
}

export interface AIServiceOptions {
  mockDelay?: number;
}

class AIService {
  private options: AIServiceOptions;

  constructor(options: AIServiceOptions = {}) {
    this.options = {
      mockDelay: 2000,
      ...options
    };
  }

  /**
   * Generate a content strategy based on user parameters
   */
  async generateContentStrategy(params: {
    goal: string;
    startDate: Date;
    platforms: string[];
  }): Promise<ContentStrategyResponse> {
    // Simulated AI response
    // In a real implementation, this would call an API endpoint
    
    await this.simulateProcessing();
    
    return {
      weeklyThemes: [
        {
          week: 1,
          theme: "Storytelling",
          description: `Share your brand's origin story tailored for ${params.goal} goals`,
          completed: false,
        },
        {
          week: 2,
          theme: "Value Proposition",
          description: "Highlight key benefits with data-backed evidence",
          completed: false,
        },
        {
          week: 3,
          theme: "Social Proof",
          description: "Showcase testimonials and success stories",
          completed: false,
        },
        {
          week: 4,
          theme: "Community Building",
          description: "Engage your audience with interactive content",
          completed: false,
        },
      ],
      contentIdeas: [
        {
          type: "Blog",
          ideas: [
            "The Ultimate Guide to [Industry Topic]",
            "How [Your Product] Solves the Top 5 [Industry] Problems",
            "Behind the Scenes: Our Development Process",
            "Case Study: How [Client] Achieved [Result] with [Your Product]",
          ],
        },
        {
          type: "Video",
          ideas: [
            "Quick Start Guide: Getting the Most from [Product]",
            "Customer Success Story: [Client Name]",
            "[Industry] Trends for 2023 & How We're Adapting",
            "Expert Interview: [Industry Leader] on [Relevant Topic]",
          ],
        },
        {
          type: "Carousel",
          ideas: [
            "10 Stats That Show Why [Topic] Matters",
            "Step-by-Step Guide to [Process]",
            "Before & After: [Product] Results",
            "5 Tips to Improve Your [Relevant Skill]",
          ],
        },
        {
          type: "Reel",
          ideas: [
            "Day in the Life of Our [Team]",
            "Quick Tip: [Simple Hack]",
            "Client Reaction to [Product Feature]",
            "Behind the Scenes at [Event/Location]",
          ],
        },
      ],
      monthlyCalendar: [],
    };
  }

  /**
   * Generate new content ideas for a specific content type
   */
  async generateContentIdeas(type: string): Promise<string[]> {
    await this.simulateProcessing();
    
    const ideaMap: Record<string, string[]> = {
      "Blog": [
        "The Future of [Industry]: What to Expect in 2023",
        "How We Built [Feature] to Solve [Problem]",
        "[Number] Lessons We Learned from [Experience]",
        "Why [Conventional Wisdom] is Wrong About [Topic]",
      ],
      "Video": [
        "Product Demo: New Features in [Version]",
        "Answering Your Top [Number] Questions About [Topic]",
        "How to Solve [Common Problem] in Under 5 Minutes",
        "Expert Tips for Getting the Most Out of [Tool/Product]",
      ],
      "Carousel": [
        "[Number] Surprising Facts About [Industry Topic]",
        "Before vs After: The Impact of [Solution]",
        "The Evolution of [Product/Industry] in [Number] Slides",
        "Data Breakdown: What We Learned from [Research/Survey]",
      ],
      "Reel": [
        "Watch How Easily [Product] Solves [Problem]",
        "Our Team's Reaction to [Achievement/Milestone]",
        "Quick Tip: How to [Simple Task] Faster",
        "Sneak Peek: What We're Working On Next",
      ],
      "all": [
        "The Ultimate Guide to [Topic]",
        "How to Get Started with [Tool/Product]",
        "Expert Interview: Insights from [Name]",
        "Case Study: [Client] Success Story",
      ]
    };
    
    return ideaMap[type] || ideaMap.all;
  }
  
  /**
   * Simulate AI processing time
   */
  private async simulateProcessing(): Promise<void> {
    return new Promise(resolve => {
      setTimeout(resolve, this.options.mockDelay);
    });
  }
}

export const aiService = new AIService();
export default aiService;
