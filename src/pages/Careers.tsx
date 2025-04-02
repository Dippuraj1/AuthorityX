
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Careers = () => {
  const openPositions = [
    {
      title: "AI Engineer",
      department: "Engineering",
      location: "Remote",
      description: "Join our AI team to develop cutting-edge personal branding algorithms and models."
    },
    {
      title: "Content Strategist",
      department: "Marketing",
      location: "New York / Remote",
      description: "Help our clients develop effective content strategies for their personal brands."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      description: "Create intuitive and beautiful interfaces for our AI-powered tools."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-grow pt-24">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help us empower professionals to build authentic personal brands through AI innovation.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Work at AuthorityX?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Innovation-Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Work with cutting-edge AI technologies and contribute to the future of personal branding.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Flexible Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Remote-first culture with flexible hours to help you maintain a healthy work-life balance.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Growth Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Continuous learning and development with clear paths for career advancement.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{position.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {position.department} · {position.location}
                        </CardDescription>
                      </div>
                      <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/10">
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{position.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center p-10 bg-brand-purple/10 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Don't See a Perfect Fit?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about personal branding and AI.
              Send us your resume and let us know how you can contribute to our mission.
            </p>
            <Button className="bg-brand-purple hover:bg-brand-dark-purple text-white">
              Submit Open Application
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
