
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Calendar, TrendingUp, PiggyBank, Home, GraduationCap } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 32,
    occupation: "Marketing Manager",
    title: "From $30,000 in Debt to Financial Freedom",
    summary: "After years of struggling with credit card debt, Sarah implemented a strict budget and debt snowball method to become debt-free in just 3 years.",
    timeline: [
      { year: 2018, event: "Realized I was $30,000 in debt with high interest rates" },
      { year: 2019, event: "Created a strict budget cutting all non-essential expenses" },
      { year: 2020, event: "Paid off all credit card debt using the snowball method" },
      { year: 2021, event: "Built 6-month emergency fund and started investing" }
    ],
    lessons: [
      "Track every expense, no matter how small",
      "The debt snowball method provides psychological wins",
      "An emergency fund prevents falling back into debt"
    ],
    category: "debt",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    age: 45,
    occupation: "Software Engineer",
    title: "Early Retirement Through Smart Investing",
    summary: "Michael started investing 25% of his income in his 20s, focusing on low-cost index funds, and was able to retire at 45 with a comfortable passive income.",
    timeline: [
      { year: 2000, event: "Started investing 25% of income in index funds at age 23" },
      { year: 2010, event: "Portfolio reached $500,000 through consistent contributions" },
      { year: 2015, event: "Real estate investments added for income diversification" },
      { year: 2022, event: "Reached financial independence with $2M portfolio" }
    ],
    lessons: [
      "Start investing early - compound interest is powerful",
      "Low-cost index funds outperform most active management",
      "Consistency matters more than timing the market"
    ],
    category: "investing",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    age: 38,
    occupation: "Nurse Practitioner",
    title: "Buying a Home While Paying Off Student Loans",
    summary: "Lisa managed to purchase her first home while still paying off $80,000 in student loan debt by using income-based repayment and saving strategically.",
    timeline: [
      { year: 2015, event: "Graduated with $80,000 in student loan debt" },
      { year: 2017, event: "Switched to income-based repayment, started home fund" },
      { year: 2020, event: "Saved 10% down payment, purchased first home" },
      { year: 2023, event: "Refinanced home, accelerated student loan payments" }
    ],
    lessons: [
      "Use income-based repayment when necessary",
      "A smaller down payment can make sense sometimes",
      "House hacking can help cover mortgage costs"
    ],
    category: "housing",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    name: "David Wilson",
    age: 29,
    occupation: "Teacher",
    title: "From Paycheck-to-Paycheck to Saving 30%",
    summary: "On a teacher's salary, David transformed his finances by tracking expenses meticulously and finding creative ways to increase his income through side gigs.",
    timeline: [
      { year: 2019, event: "Living paycheck to paycheck with no savings" },
      { year: 2020, event: "Started expense tracking, cut costs by 15%" },
      { year: 2021, event: "Began tutoring on weekends, increasing income by 20%" },
      { year: 2023, event: "Now saving 30% of total income monthly" }
    ],
    lessons: [
      "Your spending habits matter more than your income",
      "Side hustles can dramatically improve your financial situation",
      "Intentionality with money leads to financial freedom"
    ],
    category: "saving",
    image: "https://images.unsplash.com/photo-1482849297070-f4fae2173ffe?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

const RealStories = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredStories = filter === "all" 
    ? stories 
    : stories.filter(story => story.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "investing":
        return <TrendingUp className="h-4 w-4" />;
      case "debt":
        return <PiggyBank className="h-4 w-4" />;
      case "housing":
        return <Home className="h-4 w-4" />;
      case "saving":
        return <GraduationCap className="h-4 w-4" />;
      default:
        return <TrendingUp className="h-4 w-4" />;
    }
  };

  return (
    <section id="stories" className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">Real Financial Journey Stories</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Learn from the experiences of real people who have overcome financial challenges and achieved their goals.
        </p>
      </div>
      
      <Tabs defaultValue="all" value={filter} onValueChange={setFilter} className="mb-8">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="investing" className="flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            <span className="hidden sm:inline">Investing</span>
          </TabsTrigger>
          <TabsTrigger value="debt" className="flex items-center gap-1">
            <PiggyBank className="h-3 w-3" />
            <span className="hidden sm:inline">Debt</span>
          </TabsTrigger>
          <TabsTrigger value="housing" className="flex items-center gap-1">
            <Home className="h-3 w-3" />
            <span className="hidden sm:inline">Housing</span>
          </TabsTrigger>
          <TabsTrigger value="saving" className="flex items-center gap-1">
            <GraduationCap className="h-3 w-3" />
            <span className="hidden sm:inline">Saving</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredStories.map((story) => (
          <Card key={story.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div className="flex gap-4 items-center">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden">
                    {story.image ? (
                      <img src={story.image} alt={story.name} className="h-full w-full object-cover" />
                    ) : (
                      <User className="h-6 w-6 text-purple-600" />
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-purple-900">{story.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {story.age}, {story.occupation}
                    </CardDescription>
                  </div>
                </div>
                <Badge className="bg-purple-100 text-purple-700 flex items-center gap-1">
                  {getCategoryIcon(story.category)}
                  <span className="capitalize">{story.category}</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-lg text-purple-800 mb-2">{story.title}</h3>
              <p className="text-gray-600 mb-4">{story.summary}</p>
              
              <div className="mt-4">
                <h4 className="font-medium text-purple-800 mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> Financial Journey Timeline
                </h4>
                <div className="ml-2 border-l-2 border-purple-200 pl-4 space-y-2">
                  {story.timeline.map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-6 mt-1.5 h-2 w-2 rounded-full bg-purple-400"></div>
                      <p className="text-sm">
                        <span className="font-semibold text-purple-700">{item.year}: </span>
                        <span className="text-gray-600">{item.event}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium text-purple-800 mb-2">Key Lessons Learned</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {story.lessons.map((lesson, idx) => (
                    <li key={idx}>{lesson}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="pt-2 pb-4">
              <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
                Read Full Story
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Button className="bg-purple-600 hover:bg-purple-700">
          Submit Your Financial Success Story
        </Button>
      </div>
    </section>
  );
};

export default RealStories;
