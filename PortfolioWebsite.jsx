
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const PortfolioWebsite = () => {
  return (
    <div style={{ backgroundColor: "#D6B588" }} className="min-h-screen p-4">
      <Tabs defaultValue="home" className="max-w-4xl mx-auto">
        <TabsList className="flex justify-center mb-4">
          <TabsTrigger value="home" className="px-4 py-2">Home</TabsTrigger>
          <TabsTrigger value="portfolio" className="px-4 py-2">Portfolio</TabsTrigger>
        </TabsList>

        <TabsContent value="home">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="w-1/3">
              {/* Replace 'image-placeholder.jpg' with the actual image URL */}
              <img
                src="image-placeholder.jpg"
                alt="Anthony De Milio"
                className="rounded-full shadow-lg w-full h-auto"
              />
            </div>

            <div className="flex flex-col gap-4 w-full lg:w-2/3">
              <Card style={{ backgroundColor: "#BAB86C" }} className="p-4">
                <CardContent>
                  <h2 className="text-xl font-bold mb-2">About Me</h2>
                  <p>
                    Hi, I'm Anthony De Milio. I'm a student at the University of
                    Central Florida, working toward a Bachelor's degree in
                    Information Technology. I'm passionate about building
                    innovative solutions and sharpening my skills in software
                    development and backend engineering.
                  </p>
                </CardContent>
              </Card>

              <Card style={{ backgroundColor: "#BAB86C" }} className="p-4">
                <CardContent>
                  <h2 className="text-xl font-bold mb-2">Contact Information</h2>
                  <p>Email: anthony.demilio@example.com</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>LinkedIn: linkedin.com/in/anthony-demilio</p>
                </CardContent>
              </Card>

              <Card style={{ backgroundColor: "#BAB86C" }} className="p-4">
                <CardContent>
                  <h2 className="text-xl font-bold mb-2">Experience & Education</h2>
                  <h3 className="font-bold">Experience</h3>
                  <p><strong>Red Leg Dev, LLC</strong> | Orlando, FL<br />
                  Software Engineer Intern | 01/2025 – Present<br />
                  [Details to be added based on your internship experience.]</p>

                  <p><strong>Apex Custom Assembly</strong> | Apopka, FL<br />
                  Electrical Manufacturer | 2023–2024<br />
                  Designed and assembled custom electrical harnesses for applications, including boat electronics and motion sensors.</p>

                  <h3 className="font-bold">Education</h3>
                  <p><strong>University of Central Florida</strong> | Orlando, FL<br />
                  B.S. Information Technology | Expected 2026 | GPA: 3.0<br />
                  Active member of Alpha Tau Omega fraternity, contributing to leadership and organizational initiatives.</p>

                  <p><strong>Keiser University</strong> | West Palm Beach, FL<br />
                  Marketing | 2023 | GPA: 4.0<br />
                  Member of the baseball team, demonstrating teamwork and discipline.</p>

                  <p><strong>Valencia College</strong> | Orlando, FL<br />
                  General Studies (Dual Enrollment) | 2022 | GPA: 4.0<br />
                  Earned college credits while in high school, showcasing time management and academic excellence.</p>

                  <p><strong>Apopka High School</strong> | Apopka, FL<br />
                  High School Diploma | 2022 | GPA: 4.0<br />
                  Varsity baseball player and student government member while dual enrolled at Valencia.</p>

                  <h3 className="font-bold">Certifications</h3>
                  <p>Microsoft Office Specialist (MOS) | Keiser University | 2023<br />
                  Proficient in Microsoft Word, Excel, and other Office tools.</p>

                  <h3 className="font-bold">Technical Skills</h3>
                  <p>Programming Languages: Python, Java, C, HTML.<br />
                  Tools & Technologies: Git, SQL, Microsoft Office Suite.<br />
                  Soft Skills: Leadership, teamwork, problem-solving, and a strong willingness to learn.</p>

                  <h3 className="font-bold">Projects</h3>
                  <p>Personal Portfolio Website: Developed a responsive portfolio website showcasing projects and skills.</p>

                  <h3 className="font-bold">Key Strengths</h3>
                  <p>Strong foundation in IT principles and software development.<br />
                  Proven ability to manage multiple responsibilities (e.g., balancing academics, work, and extracurriculars).</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="portfolio">
          <div className="flex flex-col gap-4">
            <Card style={{ backgroundColor: "#BAB86C" }} className="p-4">
              <CardContent>
                <h2 className="text-xl font-bold mb-2">My Projects</h2>
                <div className="flex flex-wrap gap-4">
                  {/* Replace these placeholders with actual project data */}
                  <div className="w-full lg:w-1/2 flex flex-col items-center">
                    <img
                      src="project1-placeholder.jpg"
                      alt="Project 1"
                      className="rounded shadow-lg mb-2 w-full h-auto"
                    />
                    <h3 className="font-bold">Project 1</h3>
                    <p>Description of Project 1 goes here.</p>
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col items-center">
                    <img
                      src="project2-placeholder.jpg"
                      alt="Project 2"
                      className="rounded shadow-lg mb-2 w-full h-auto"
                    />
                    <h3 className="font-bold">Project 2</h3>
                    <p>Description of Project 2 goes here.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PortfolioWebsite;
