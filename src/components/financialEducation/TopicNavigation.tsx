
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, CreditCard, Shield, Clock, Calculator } from "lucide-react";

interface TopicNavigationProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const TopicNavigation = ({ activeFilter, onFilterChange }: TopicNavigationProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-center text-purple-900 mb-6">
        Explore Financial Topics
      </h2>
      
      <Tabs 
        defaultValue="all" 
        value={activeFilter} 
        onValueChange={onFilterChange}
        className="w-full"
      >
        <TabsList className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-2">
          <TabsTrigger value="all" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700">
            All Topics
          </TabsTrigger>
          <TabsTrigger value="investing" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 flex gap-2 items-center">
            <TrendingUp className="h-4 w-4" />
            <span className="hidden md:inline">Investing</span>
          </TabsTrigger>
          <TabsTrigger value="debt" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 flex gap-2 items-center">
            <CreditCard className="h-4 w-4" />
            <span className="hidden md:inline">Debt</span>
          </TabsTrigger>
          <TabsTrigger value="credit" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 flex gap-2 items-center">
            <Shield className="h-4 w-4" />
            <span className="hidden md:inline">Credit</span>
          </TabsTrigger>
          <TabsTrigger value="retirement" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 flex gap-2 items-center">
            <Clock className="h-4 w-4" />
            <span className="hidden md:inline">Retirement</span>
          </TabsTrigger>
          <TabsTrigger value="planning" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 flex gap-2 items-center">
            <Calculator className="h-4 w-4" />
            <span className="hidden md:inline">Planning</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TopicNavigation;
