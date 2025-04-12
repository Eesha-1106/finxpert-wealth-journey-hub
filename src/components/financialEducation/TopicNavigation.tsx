
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  CreditCard, 
  Shield, 
  Clock, 
  Calculator, 
  Layers, 
  Landmark, 
  Home, 
  Briefcase, 
  Stars, 
  Building, 
  Coins 
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

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
      
      <div className="hidden md:block">
        <Tabs 
          defaultValue="all" 
          value={activeFilter} 
          onValueChange={onFilterChange}
          className="w-full"
        >
          <TabsList className="w-full max-w-4xl mx-auto grid grid-cols-6 gap-2 mb-4">
            <TabsTrigger value="all" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700">
              All Topics
            </TabsTrigger>
            <TabsTrigger value="investing" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 flex gap-2 items-center">
              <TrendingUp className="h-4 w-4" />
              <span>Investing</span>
            </TabsTrigger>
            <TabsTrigger value="debt" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 flex gap-2 items-center">
              <CreditCard className="h-4 w-4" />
              <span>Debt</span>
            </TabsTrigger>
            <TabsTrigger value="credit" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 flex gap-2 items-center">
              <Shield className="h-4 w-4" />
              <span>Credit</span>
            </TabsTrigger>
            <TabsTrigger value="retirement" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 flex gap-2 items-center">
              <Clock className="h-4 w-4" />
              <span>Retirement</span>
            </TabsTrigger>
            <TabsTrigger value="planning" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 flex gap-2 items-center">
              <Calculator className="h-4 w-4" />
              <span>Planning</span>
            </TabsTrigger>
          </TabsList>
          
          {activeFilter === "all" && (
            <NavigationMenu className="max-w-4xl mx-auto">
              <NavigationMenuList className="flex flex-wrap justify-center gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                    <Layers className="h-4 w-4 mr-2" /> Mutual Funds
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => onFilterChange("mutual-funds")}>
                      All Mutual Funds
                    </Button>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                    <TrendingUp className="h-4 w-4 mr-2" /> Stock Market
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => onFilterChange("stock-market")}>
                      Stock Market Basics
                    </Button>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                    <Landmark className="h-4 w-4 mr-2" /> Fixed Deposits
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => onFilterChange("fixed-deposits")}>
                      Fixed Deposit Guides
                    </Button>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                    <Home className="h-4 w-4 mr-2" /> Real Estate
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => onFilterChange("real-estate")}>
                      Property Investment
                    </Button>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                    <Briefcase className="h-4 w-4 mr-2" /> PPF
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => onFilterChange("ppf")}>
                      Public Provident Fund
                    </Button>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                    <Stars className="h-4 w-4 mr-2" /> ELSS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => onFilterChange("elss")}>
                      Tax-saving Mutual Funds
                    </Button>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                    <Building className="h-4 w-4 mr-2" /> NPS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => onFilterChange("nps")}>
                      National Pension System
                    </Button>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                    <Coins className="h-4 w-4 mr-2" /> Gold Bonds
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => onFilterChange("gold-bonds")}>
                      Sovereign Gold Bonds
                    </Button>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </Tabs>
      </div>
      
      {/* Mobile view */}
      <div className="md:hidden">
        <Tabs 
          defaultValue="all" 
          value={activeFilter} 
          onValueChange={onFilterChange}
          className="w-full"
        >
          <TabsList className="w-full grid grid-cols-2 gap-2 mb-4">
            <TabsTrigger value="all" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700">
              All Topics
            </TabsTrigger>
            <TabsTrigger value="investing" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 flex gap-2 items-center">
              <TrendingUp className="h-4 w-4" />
              <span>Investing</span>
            </TabsTrigger>
            <TabsTrigger value="debt" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 flex gap-2 items-center">
              <CreditCard className="h-4 w-4" />
              <span>Debt</span>
            </TabsTrigger>
            <TabsTrigger value="credit" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 flex gap-2 items-center">
              <Shield className="h-4 w-4" />
              <span>Credit</span>
            </TabsTrigger>
            <TabsTrigger value="retirement" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 flex gap-2 items-center">
              <Clock className="h-4 w-4" />
              <span>Retirement</span>
            </TabsTrigger>
            <TabsTrigger value="planning" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 flex gap-2 items-center">
              <Calculator className="h-4 w-4" />
              <span>Planning</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        {activeFilter === "all" && (
          <Collapsible className="w-full">
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full mb-4 flex justify-between items-center">
                <span>Investment Vehicles</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2">
              <Button 
                variant="ghost" 
                className="w-full justify-start" 
                onClick={() => onFilterChange("mutual-funds")}
              >
                <Layers className="h-4 w-4 mr-2" /> Mutual Funds
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start" 
                onClick={() => onFilterChange("stock-market")}
              >
                <TrendingUp className="h-4 w-4 mr-2" /> Stock Market
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start" 
                onClick={() => onFilterChange("fixed-deposits")}
              >
                <Landmark className="h-4 w-4 mr-2" /> Fixed Deposits
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start" 
                onClick={() => onFilterChange("real-estate")}
              >
                <Home className="h-4 w-4 mr-2" /> Real Estate
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start" 
                onClick={() => onFilterChange("ppf")}
              >
                <Briefcase className="h-4 w-4 mr-2" /> PPF
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start" 
                onClick={() => onFilterChange("elss")}
              >
                <Stars className="h-4 w-4 mr-2" /> ELSS
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start" 
                onClick={() => onFilterChange("nps")}
              >
                <Building className="h-4 w-4 mr-2" /> NPS
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start" 
                onClick={() => onFilterChange("gold-bonds")}
              >
                <Coins className="h-4 w-4 mr-2" /> Gold Bonds
              </Button>
            </CollapsibleContent>
          </Collapsible>
        )}
      </div>
    </div>
  );
};

export default TopicNavigation;
