
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "How to Discover Your Personal Brand Archetype",
    excerpt: "Learn how to identify your unique brand voice and leverage it for authentic content creation.",
    category: "branding",
    date: "May 15, 2023",
    author: "Sarah Johnson",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "10 Content Frameworks That Drive Engagement",
    excerpt: "Proven templates to help you create content that resonates with your audience and drives meaningful interaction.",
    category: "content",
    date: "June 3, 2023",
    author: "Michael Chen",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 3,
    title: "The Science Behind Viral LinkedIn Posts",
    excerpt: "Research-backed strategies to increase your content's reach and virality on professional networks.",
    category: "social",
    date: "June 21, 2023",
    author: "Emily Rodriguez",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 4,
    title: "From Expert to Thought Leader: A Strategic Approach",
    excerpt: "How to transition from being recognized for your skills to becoming an influential voice in your industry.",
    category: "strategy",
    date: "July 10, 2023",
    author: "David Wilson",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    title: "AI Tools That Will Transform Your Content Creation",
    excerpt: "Discover how AI can help you create better content in less time while maintaining your authentic voice.",
    category: "tools",
    date: "July 25, 2023",
    author: "Alex Zhang",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Content Calendar Strategy for Busy Professionals",
    excerpt: "How to maintain a consistent content schedule even when you have limited time to create.",
    category: "content",
    date: "August 8, 2023",
    author: "Jessica Lee",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 7,
    title: "Building a Personal Brand That Attracts Opportunities",
    excerpt: "Strategic approaches to positioning yourself as the go-to expert in your field.",
    category: "branding",
    date: "August 17, 2023",
    author: "Marcus Johnson",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 8,
    title: "The Psychology of Persuasive Content",
    excerpt: "Understanding cognitive biases and how to ethically leverage them in your content.",
    category: "strategy",
    date: "September 2, 2023",
    author: "Sophia Chen",
    readTime: "9 min read",
    featured: false,
  },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="py-16 text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">AuthorityX Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights on personal branding, content strategy, and building authority in your industry.
            </p>
            <div className="max-w-md mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 bg-muted"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Featured Posts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-muted"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <span className="capitalize px-2 py-1 bg-muted rounded-full text-xs mr-2">
                        {post.category}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm">
                        <div className="h-6 w-6 rounded-full bg-muted mr-2"></div>
                        <span>{post.author}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* All Posts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            
            <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveCategory}>
              <TabsList className="w-full max-w-lg mx-auto grid grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="branding">Branding</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="strategy">Strategy</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <span className="capitalize px-2 py-1 bg-muted rounded-full text-xs mr-2">
                            {post.category}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-sm">
                            <div className="h-6 w-6 rounded-full bg-muted mr-2 flex items-center justify-center">
                              <User className="h-3 w-3" />
                            </div>
                            <span>{post.author}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="branding" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <span className="capitalize px-2 py-1 bg-muted rounded-full text-xs mr-2">
                            {post.category}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-sm">
                            <div className="h-6 w-6 rounded-full bg-muted mr-2 flex items-center justify-center">
                              <User className="h-3 w-3" />
                            </div>
                            <span>{post.author}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="content" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <span className="capitalize px-2 py-1 bg-muted rounded-full text-xs mr-2">
                            {post.category}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-sm">
                            <div className="h-6 w-6 rounded-full bg-muted mr-2 flex items-center justify-center">
                              <User className="h-3 w-3" />
                            </div>
                            <span>{post.author}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="strategy" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <span className="capitalize px-2 py-1 bg-muted rounded-full text-xs mr-2">
                            {post.category}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-sm">
                            <div className="h-6 w-6 rounded-full bg-muted mr-2 flex items-center justify-center">
                              <User className="h-3 w-3" />
                            </div>
                            <span>{post.author}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="rounded-full px-8">
                Load More Articles
              </Button>
            </div>
          </section>

          {/* Newsletter */}
          <section className="py-16 bg-card rounded-lg mb-16">
            <div className="max-w-3xl mx-auto text-center px-4">
              <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
              <p className="text-muted-foreground mb-6">
                Get the latest personal branding strategies and tips delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-muted flex-grow"
                />
                <Button className="bg-brand-purple hover:bg-brand-dark-purple whitespace-nowrap">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
