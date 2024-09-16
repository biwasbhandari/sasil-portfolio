import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileInfo />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Interests />
        <Contact />
      </div>
    </div>
  );
}

function ProfileInfo() {
  return (
    <Card className="col-span-1 md:col-span-2 lg:col-span-3">
      <CardContent className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 pt-6">
        <Avatar className="w-32 h-32 rounded-full overflow-hidden">
          <AvatarImage
            src="images/sashil.jpeg"
            alt="Sashil Baruwal"
            className="w-full h-full object-cover"
          />
          <AvatarFallback>SB</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">Sashil Baruwal</h1>
          <p className="text-gray-600">
            Chief Business Development Officer at{" "}
            <Link
              href="https://www.ablino.org"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ablino <ExternalLink className="inline-block w-4 h-4 ml-1" />
            </Link>
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge>IT Student</Badge>
            <Badge>Entrepreneur</Badge>
            <Badge>Actor</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function About() {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          I am a dynamic individual with a passion for both technology and the
          arts. As an IT student, I am deeply invested in the world of
          technology and innovation. I balance my academic pursuits with my role
          as the Chief Business Development Officer at ABLINO, a company I
          co-founded to drive forward new solutions in the IT sector. Beyond my
          professional endeavors, I am an enthusiastic trader, a content
          creator, and an actor who loves storytelling and performance.
        </p>
      </CardContent>
    </Card>
  );
}

function Experience() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Professional Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">
          Chief Business Development Officer, ABLINO
        </h3>
        <p>
          1. Co-founded and currently lead the business development efforts at
          ABLINO <br /> <br /> 2. Specializing in SaaS development, AI
          applications, and chatbot creation <br /> <br /> 3. Responsible for
          strategic growth, client acquisition, and partnership development
        </p>
      </CardContent>
    </Card>
  );
}

function Education() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Pursuing a degree in Information Technology</p>
      </CardContent>
    </Card>
  );
}

function Skills() {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Skills and Interests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge>Business Development</Badge>
          <Badge>Technology Enthusiast</Badge>
          <Badge>Acting</Badge>
          <Badge>Content Creation</Badge>
          <Badge>Trading</Badge>
          <Badge>Multilingual Communication</Badge>
        </div>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Expertise in identifying growth opportunities and building strategic
            partnerships
          </li>
          <li>
            Strong interest in software development, artificial intelligence,
            and emerging IT trends
          </li>
          <li>
            Passionate about acting, creating videos, and exploring storytelling
            through visual media
          </li>
          <li>
            Actively engaged in trading with a focus on market analysis and
            investment strategies
          </li>
          <li>Proficient in English, Hindi, and Nepali</li>
        </ul>
      </CardContent>
    </Card>
  );
}

function Interests() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Interests</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          <li>Technology and Innovation</li>
          <li>Trading and Financial Markets</li>
          <li>Acting and Filmmaking</li>
          <li>Continuous Learning and Personal Development</li>
        </ul>
      </CardContent>
    </Card>
  );
}

function Contact() {
  return (
    <Card className="col-span-1 md:col-span-2 lg:col-span-3">
      <CardHeader>
        <CardTitle>Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline">
            <Link href="mailto:example@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Email
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://www.linkedin.com/in/sashil-baruwal-b6b01431a/">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://x.com/sashilchhetri">
              <Twitter className="mr-2 h-4 w-4" /> Twitter
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://medium.com/@Sashil_baruwal">
              <FileText className="mr-2 h-4 w-4" /> Medium
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
