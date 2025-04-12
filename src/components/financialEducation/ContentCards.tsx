
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  CreditCard, 
  Shield, 
  Clock, 
  Calculator, 
  PiggyBank, 
  BarChart, 
  DollarSign,
  ArrowRight,
  Info,
  Calendar
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ContentCardsProps {
  activeFilter: string;
  searchQuery: string;
}

const topics = [
  {
    id: 1,
    title: "Understanding Market Basics",
    description: "Learn how stock markets work, key terms, and fundamental principles of investing.",
    icon: TrendingUp,
    category: "investing",
    difficulty: "beginner",
    progress: 0,
    tooltipText: "The stock market is where investors buy and sell shares of publicly traded companies.",
    expandedContent: {
      summary: "This module covers the fundamental concepts of stock markets and investing.",
      bulletPoints: [
        "What are stocks and how do they work?",
        "Understanding market capitalization",
        "Bull vs. bear markets explained",
        "How to read stock tickers and financial news"
      ]
    }
  },
  {
    id: 2,
    title: "Building an Investment Portfolio",
    description: "Discover how to create a balanced investment portfolio based on your goals and risk tolerance.",
    icon: BarChart,
    category: "investing",
    difficulty: "intermediate",
    progress: 35,
    tooltipText: "A diversified portfolio spreads investments across different asset classes to reduce risk.",
    expandedContent: {
      summary: "Learn how to build and maintain a diversified investment portfolio.",
      bulletPoints: [
        "Asset allocation strategies",
        "Balancing stocks, bonds, and alternative investments",
        "Dollar-cost averaging techniques",
        "Rebalancing your portfolio"
      ]
    }
  },
  {
    id: 3,
    title: "Smart Debt Management",
    description: "Learn strategies to manage and pay down debt efficiently while maintaining financial health.",
    icon: CreditCard,
    category: "debt",
    difficulty: "beginner",
    progress: 10,
    tooltipText: "Not all debt is bad! Learn to distinguish between good and bad debt.",
    expandedContent: {
      summary: "Understand different types of debt and strategies for efficient repayment.",
      bulletPoints: [
        "Good debt vs. bad debt explained",
        "Debt avalanche vs. debt snowball methods",
        "How to negotiate with creditors",
        "Using balance transfers effectively"
      ]
    }
  },
  {
    id: 4,
    title: "Improving Your Credit Score",
    description: "Understand what affects your credit score and actionable steps to improve it.",
    icon: Shield,
    category: "credit",
    difficulty: "beginner",
    progress: 60,
    tooltipText: "Your credit score is a number that represents your creditworthiness, typically ranging from 300-850.",
    expandedContent: {
      summary: "Learn what factors affect your credit score and how to improve it over time.",
      bulletPoints: [
        "The five factors that determine your credit score",
        "How credit utilization impacts your score",
        "Disputing errors on your credit report",
        "Building credit when starting from zero"
      ]
    }
  },
  {
    id: 5,
    title: "Retirement Planning Essentials",
    description: "Start planning for retirement with guidance on savings strategies and account types.",
    icon: Clock,
    category: "retirement",
    difficulty: "intermediate",
    progress: 25,
    tooltipText: "The earlier you start saving for retirement, the more you benefit from compound interest.",
    expandedContent: {
      summary: "Discover the fundamentals of retirement planning and account types.",
      bulletPoints: [
        "401(k) vs. IRA accounts explained",
        "How to calculate your retirement number",
        "Tax advantages of different retirement accounts",
        "Creating a retirement withdrawal strategy"
      ]
    }
  },
  {
    id: 6,
    title: "Creating a Personal Budget",
    description: "Learn how to create and stick to a personal budget that aligns with your financial goals.",
    icon: Calculator,
    category: "planning",
    difficulty: "beginner",
    progress: 15,
    tooltipText: "A budget is a plan that helps you track income and expenses over a specific period.",
    expandedContent: {
      summary: "Master the art of creating and maintaining a personal budget.",
      bulletPoints: [
        "The 50/30/20 budgeting method explained",
        "Tracking expenses effectively",
        "Setting and achieving savings goals",
        "Adjusting your budget as circumstances change"
      ]
    }
  },
  {
    id: 7,
    title: "Emergency Fund Strategies",
    description: "Learn why emergency funds are crucial and how to build one even on a tight budget.",
    icon: PiggyBank,
    category: "planning",
    difficulty: "beginner",
    progress: 45,
    tooltipText: "An emergency fund typically covers 3-6 months of living expenses.",
    expandedContent: {
      summary: "Understand how to build and maintain an appropriate emergency fund.",
      bulletPoints: [
        "How much to save in your emergency fund",
        "Where to keep your emergency savings",
        "How to build an emergency fund on a tight budget",
        "When to use (and not use) your emergency fund"
      ]
    }
  },
  {
    id: 8,
    title: "Maximizing Retirement Contributions",
    description: "Strategies for maximizing your retirement savings through employer matches and catch-up contributions.",
    icon: DollarSign,
    category: "retirement",
    difficulty: "advanced",
    progress: 75,
    tooltipText: "Employer matches are essentially free money for your retirement.",
    expandedContent: {
      summary: "Learn advanced strategies to boost your retirement savings.",
      bulletPoints: [
        "Taking full advantage of employer matching",
        "Catch-up contributions after age 50",
        "Roth vs. traditional retirement accounts",
        "Maximizing Social Security benefits"
      ]
    }
  }
];

const ContentCards = ({ activeFilter, searchQuery }: ContentCardsProps) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [userProgress, setUserProgress] = useState<{ [key: number]: number }>(
    topics.reduce((acc, topic) => ({ ...acc, [topic.id]: topic.progress }), {})
  );

  const filteredTopics = topics.filter(topic => {
    // Filter by category
    const categoryMatch = activeFilter === "all" || topic.category === activeFilter;
    
    // Filter by search query
    const searchMatch = 
      !searchQuery || 
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  const handleLearnMore = (topicId: number) => {
    // Toggle expanded state
    setExpandedCard(expandedCard === topicId ? null : topicId);
    
    // Update progress
    if (userProgress[topicId] < 100) {
      setUserProgress({
        ...userProgress,
        [topicId]: Math.min(userProgress[topicId] + 20, 100)
      });
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "investing":
        return TrendingUp;
      case "debt":
        return CreditCard;
      case "credit":
        return Shield;
      case "retirement":
        return Clock;
      case "planning":
        return Calculator;
      default:
        return Info;
    }
  };

  return (
    <div className="mb-16">
      {filteredTopics.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No matching topics found. Try a different search or filter.</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTopics.map((topic) => {
          const Icon = topic.icon;
          const CategoryIcon = getCategoryIcon(topic.category);
          
          return (
            <div key={topic.id} className="flex flex-col">
              <Card className="flex-1 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge className={`${getDifficultyColor(topic.difficulty)}`}>
                      {topic.difficulty.charAt(0).toUpperCase() + topic.difficulty.slice(1)}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-purple-900">{topic.title}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {topic.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <CategoryIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500 capitalize">{topic.category}</span>
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full p-0 ml-auto">
                            <Info className="h-4 w-4 text-gray-400" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-60">{topic.tooltipText}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-purple-600 font-medium">{userProgress[topic.id]}%</span>
                    </div>
                    <Progress value={userProgress[topic.id]} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handleLearnMore(topic.id)} 
                    variant="outline" 
                    className="w-full border-purple-200 text-purple-700 hover:bg-purple-50"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              
              {expandedCard === topic.id && (
                <Accordion type="single" collapsible className="mt-2 w-full bg-white rounded-lg shadow-md overflow-hidden">
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="px-4 py-3 text-purple-700 hover:bg-purple-50">
                      Explore this topic
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="text-sm text-gray-700 mb-4">
                        {topic.expandedContent.summary}
                      </div>
                      
                      <h4 className="font-medium text-purple-900 mb-2">What you'll learn:</h4>
                      <ul className="list-disc pl-5 space-y-1 mb-4">
                        {topic.expandedContent.bulletPoints.map((point, idx) => (
                          <li key={idx} className="text-sm text-gray-600">{point}</li>
                        ))}
                      </ul>
                      
                      <div className="flex justify-between mt-4">
                        <Button variant="ghost" size="sm" className="text-gray-500">
                          <Calendar className="mr-1 h-4 w-4" />
                          15 min read
                        </Button>
                        <Button className="bg-purple-600 hover:bg-purple-700">
                          Continue Learning
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentCards;
