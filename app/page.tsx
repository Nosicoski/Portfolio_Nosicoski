"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Calendar,
  Briefcase,
  Code,
  Database,
  Server,
  Coffee,
  Hash,
  MessageSquare,
  CheckSquare,
  TrelloIcon,
  Phone,
  GitBranch,
  X,
  FileText,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [showAllBackendProjects, setShowAllBackendProjects] = useState(false)
  const [showAllFrontendProjects, setShowAllFrontendProjects] = useState(false)
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [certificateImage, setCertificateImage] = useState<string | null>(null)
  const [activeButton, setActiveButton] = useState<string | null>(null)

  const initialBackendProjects = [
    {
      id: 1,
      title: "PROFIT",
      description: "Inventory, customer, sales, and supplier management system for businesses.",
      image: "/PROFIT.png",
      tags: ["Java", "PostgreSQL", "C#", ".NET","SQL Server", "Postman"],
      demoUrl: "#",
      codeUrl: "https://github.com/Nosicoski",
    },
    {
      id: 2,
      title: "NOMADNOOK",
      description: "Cabin management system, with management of clients, cabins, users, favorites, etc.",
      image: "/NOMADNOOK.png",
      tags: ["Java", "API REST", "PostgreSQL", "AWS", "Postman", "React", "Tailwind CSS"],
      demoUrl: "#",
      codeUrl: "https://github.com/Nosicoski",
    },
    {
      id: 3,
      title: "CLÍNICA BOCASANA",
      description: "Clinic, dentist, and patient management system.",
      image: "/PROYECTO2.jpg",
      tags: ["Java", "API REST", "H2", "Postman"],
      demoUrl: "#",
      codeUrl: "https://github.com/Nosicoski",
    },
  ]

  const additionalBackendProjects = [
    {
      id: 4,
      title: "TASK'S",
      description: "Task management system.",
      image: "/PROYECTO 6.png",
      tags: ["Java", "API REST", "PostgreSQL"],
      demoUrl: "#",
      codeUrl: "https://github.com/Nosicoski",
    },
  ]

  const initialFrontendProjects = [
    {
      id: 5,
      title: "E-COMMERCE PLATFORM",
      description: "A full-featured online store with product catalog, cart, and checkout functionality.",
      image: "/PROYECTO 3.1.png",
      tags: ["React", "Next.js", "Tailwind CSS"],
      demoUrl: "#",
      codeUrl: "https://github.com/Nosicoski",
    },
    {
      id: 6,
      title: "ASTRO BLOG",
      description: "A productivity application for managing tasks, projects, and deadlines.",
      image: "/PROYECTO 4.png",
      tags: ["TypeScript", "React", "Redux"],
      demoUrl: "#",
      codeUrl: "https://github.com/Nosicoski",
    },
    {
      id: 7,
      title: "FINGER COUNTER",
      description: "A responsive portfolio website to showcase projects and skills.",
      image: "/PROYECTO 1.png",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demoUrl: "#",
      codeUrl: "https://github.com/Nosicoski",
    },
  ]

  const additionalFrontendProjects = [
    {
      id: 8,
      title: "FACE DETECTOR",
      description: "A web application that detects faces in images using AI.",
      image: "/PROYECTO 3.png",
      tags: ["React", "API Integration", "CSS"],
      demoUrl: "#",
      codeUrl: "https://github.com/Nosicoski",
    },
  ]

  const certificates = {
    "digital-house": "/Juan Manuel Nosicoski DH.jpeg",
    "java-developer": "/Certificado Java.png",
    cybersecurity: "/Certificado Ciberseguridad.png",
  }

  const displayedBackendProjects = showAllBackendProjects
    ? [...initialBackendProjects, ...additionalBackendProjects]
    : initialBackendProjects

  const displayedFrontendProjects = showAllFrontendProjects
    ? [...initialFrontendProjects, ...additionalFrontendProjects]
    : initialFrontendProjects

  const handleDownloadCV = () => {
    // In a real implementation, this would be a link to your actual CV file
    const link = document.createElement("a")
   link.href = "/JuanManuel_Nosicoski_Resume.pdf" // This would be your actual CV file path
    link.download = "Nosicoski Juan Manuel CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openImageModal = (imageUrl: string) => {
    setModalImage(imageUrl)
  }

  const closeImageModal = () => {
    setModalImage(null)
  }

  const viewCertificate = (certificateId: string) => {
    setCertificateImage(certificates[certificateId as keyof typeof certificates])
    setActiveButton(certificateId)

    // Reset the active button state after animation completes
    setTimeout(() => {
      setActiveButton(null)
    }, 500)
  }

  const closeCertificateModal = () => {
    setCertificateImage(null)
  }
  const medals = [
    {
      id: 1,
      title: "MySQL Course", 
      image: "/Medal1.png",
      description: "Certification that verifies my completed course in MySQL",
    }
    
  ]

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Social Media Sidebar */}
      <div className="hidden md:flex flex-col gap-4 absolute left-6 top-1/2 -translate-y-1/2 z-50">
        <Link
          href="https://github.com/Nosicoski"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md border border-border hover:border-primary transition-colors hover:text-primary"
        >
          <Github className="h-5 w-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/juan-manuel-nosicoski-b26876291/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md border border-border hover:border-primary transition-colors hover:text-primary"
        >
          <Linkedin className="h-5 w-5" />
        </Link>
        <Link
          href="https://wa.me/?text=Hello,%20I'm%20contacting%20you%20for..."
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md border border-border hover:border-primary transition-colors hover:text-primary"
        >
          <Phone className="h-5 w-5" />
        </Link>
      </div>

      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Portfolio</div>
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
              Education
            </button>
            <button
              onClick={() => scrollToSection("medals")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Medals
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>
          <Button onClick={handleDownloadCV}>
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <Badge className="text-sm" variant="outline">
              Full Stack Developer
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Creating beautiful <span className="text-primary">web experiences</span>
            </h1>
            <p className="text-xl text-muted-foreground md:w-3/4">
              I build modern, responsive, and user-friendly applications with cutting-edge technologies.
            </p>
            <div className="flex gap-4">
              <Button onClick={() => scrollToSection("projects")}>
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
              <p className="text-muted-foreground">
              I'm a passionate full-stack developer specializing in backend development. While I have experience in both front-end and back-end technologies, my true expertise lies in building robust, scalable, and efficient backend systems that power modern web applications.              </p>
              <p className="text-muted-foreground">
              My journey in web development started 3 years ago, and since then, I've worked on various projects ranging from small business websites to complex enterprise applications. I'm constantly learning and adapting to new technologies to stay at the forefront of backend development.
              </p>
            </div>
            <div className="w-3/4 mx-auto aspect-square bg-muted rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-muted/50 py-24 md:py-32">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Work Experience</h2>
              <p className="text-muted-foreground md:w-2/3 mx-auto">My professional journey in the tech industry.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* Timeline */}
              <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
                {/* Experience Item 1 - BACKEND DEVELOPER */}
                <div className="relative flex items-start md:justify-between md:even:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow-md shadow-primary/10 shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2 z-10">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>

                  <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group-even:hover:translate-x-1 group-odd:hover:-translate-x-1">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-xl">BACKEND DEVELOPER</h3>
                        <p className="text-muted-foreground font-medium">INTEGRATIVE PROJECT - Freelance</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Jan 2025 - Mar 2025 · 3 months</span>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <p className="text-muted-foreground">
                          Worked as a Backend Developer on an integrative project.
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>Designed and implemented RESTful APIs</li>
                          <li>Developed backend services and database schemas</li>
                          <li>Ensured security and performance of backend systems</li>
                        </ul>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">Java</Badge>
                        <Badge variant="secondary">SpringBoot</Badge>
                        <Badge variant="secondary">MongoDB</Badge>
                        <Badge variant="secondary">API Design</Badge>
                        <Badge variant="secondary">Postman</Badge>
                        <Badge variant="secondary">Git</Badge>
                        <Badge variant="secondary">Github</Badge>
                        <Badge variant="secondary">Discord</Badge>

                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Experience Item 2 - SOFTWARE DEVELOPER */}
                <div className="relative flex items-start md:justify-between md:even:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow-md shadow-primary/10 shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2 z-10">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>

                  <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group-even:hover:translate-x-1 group-odd:hover:-translate-x-1">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-xl">SOFTWARE DEVELOPER</h3>
                        <p className="text-muted-foreground font-medium">Argensoft</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>May 2024 - Present</span>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <p className="text-muted-foreground">
                          Working as a Software Developer focusing on building modern applications.
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>Developing and maintaining web applications</li>
                          <li>Collaborating with cross-functional teams</li>
                          <li>Implementing best practices and coding standards</li>
                          <li>Developing and migrating desktop applications with Java and C#</li>
                        </ul>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">Java</Badge>
                        <Badge variant="secondary">C#</Badge>
                        <Badge variant="secondary">SQL/NoSQL</Badge>
                        <Badge variant="secondary">Node.js</Badge>
                        <Badge variant="secondary">.NET</Badge>
                        <Badge variant="secondary">Git</Badge>
                        <Badge variant="secondary">Github</Badge>
                        <Badge variant="secondary">Slack</Badge>
                        <Badge variant="secondary">ClickUp</Badge>
                        <Badge variant="secondary">Trello</Badge>
                        

                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32">
          <div className="container space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Featured Projects</h2>
              <p className="text-muted-foreground md:w-2/3 mx-auto">
                Here are some of my recent projects that showcase my skills and expertise in web development.
              </p>
            </div>

            {/* Backend Projects */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold tracking-tighter text-center">Backend Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedBackendProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden group">
                    <div
                      className="aspect-video overflow-hidden cursor-pointer"
                      onClick={() => openImageModal(project.image || "/placeholder.svg")}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={`Project ${project.id}`}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        
                        <Button variant="outline" size="sm" asChild>
                          <Link href={project.codeUrl}>
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline" onClick={() => setShowAllBackendProjects(!showAllBackendProjects)}>
                  {showAllBackendProjects ? "Show Less" : "View All Backend Projects"}
                  <ArrowRight
                    className={`ml-2 h-4 w-4 transition-transform ${showAllBackendProjects ? "rotate-90" : ""}`}
                  />
                </Button>
              </div>
            </div>

            {/* Frontend Projects */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold tracking-tighter text-center">Frontend Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedFrontendProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden group">
                    <div
                      className="aspect-video overflow-hidden cursor-pointer"
                      onClick={() => openImageModal(project.image || "/placeholder.svg")}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={`Project ${project.id}`}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                       
                        <Button variant="outline" size="sm" asChild>
                          <Link href={project.codeUrl}>
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline" onClick={() => setShowAllFrontendProjects(!showAllFrontendProjects)}>
                  {showAllFrontendProjects ? "Show Less" : "View All Frontend Projects"}
                  <ArrowRight
                    className={`ml-2 h-4 w-4 transition-transform ${showAllFrontendProjects ? "rotate-90" : ""}`}
                  />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container py-24 md:py-32">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Skills & Technologies</h2>
              <p className="text-muted-foreground md:w-2/3 mx-auto">
                I work with a variety of technologies to create robust and scalable applications.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12">
              {/* Backend Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-6 border-b pb-2">Backend Technologies</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Node.js", icon: <Server className="w-6 h-6 text-green-500" /> },
                    { name: "Express", icon: <Server className="w-6 h-6 text-gray-500" /> },
                    { name: "MongoDB", icon: <Database className="w-6 h-6 text-green-600" /> },
                    { name: "PostgreSQL", icon: <Database className="w-6 h-6 text-blue-600" /> },
                    { name: "Java", icon: <Coffee className="w-6 h-6 text-red-600" /> },
                    { name: "C#", icon: <Hash className="w-6 h-6 text-purple-600" /> },
                    { name: ".NET", icon: <Code className="w-6 h-6 text-blue-500" /> },
                  ].map((skill) => (
                    <Card key={skill.name} className="text-center p-6 hover:border-primary transition-colors">
                      <CardContent className="p-0 space-y-2">
                        <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                          {skill.icon}
                        </div>
                        <h3 className="font-medium">{skill.name}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Frontend Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-6 border-b pb-2">Frontend Technologies</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: "JavaScript", icon: <Code className="w-6 h-6 text-yellow-500" /> },
                  
                    { name: "HTML", icon: <Code className="w-6 h-6 text-orange-500" /> },
                    { name: "CSS", icon: <Code className="w-6 h-6 text-blue-400" /> },
                    { name: "React", icon: <Code className="w-6 h-6 text-cyan-500" /> },
                    { name: "Next.js", icon: <Code className="w-6 h-6 text-black dark:text-white" /> },
                    { name: "Tailwind CSS", icon: <Code className="w-6 h-6 text-cyan-400" /> },
                  ].map((skill) => (
                    <Card key={skill.name} className="text-center p-6 hover:border-primary transition-colors">
                      <CardContent className="p-0 space-y-2">
                        <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                          {skill.icon}
                        </div>
                        <h3 className="font-medium">{skill.name}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Infrastructure Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-6 border-b pb-2">Infrastructure Technologies</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: "AWS", icon: <Server className="w-6 h-6 text-orange-400" /> },
                    { name: "Docker", icon: <Code className="w-6 h-6 text-blue-400" /> },
                  ].map((skill) => (
                    <Card key={skill.name} className="text-center p-6 hover:border-primary transition-colors">
                      <CardContent className="p-0 space-y-2">
                        <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                          {skill.icon}
                        </div>
                        <h3 className="font-medium">{skill.name}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Version Control & Organization Tools */}
              <div>
                <h3 className="text-xl font-semibold mb-6 border-b pb-2">Version Control & Organization Tools</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Git", icon: <GitBranch className="w-6 h-6 text-orange-500" /> },
                    { name: "Slack", icon: <MessageSquare className="w-6 h-6 text-purple-500" /> },
                    { name: "ClickUp", icon: <CheckSquare className="w-6 h-6 text-pink-500" /> },
                    { name: "Trello", icon: <TrelloIcon className="w-6 h-6 text-blue-500" /> },
                    { name: "Discord", icon: <MessageSquare className="w-6 h-6 text-indigo-500" /> },
                  ].map((skill) => (
                    <Card key={skill.name} className="text-center p-6 hover:border-primary transition-colors">
                      <CardContent className="p-0 space-y-2">
                        <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                          {skill.icon}
                        </div>
                        <h3 className="font-medium">{skill.name}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="container py-24 md:py-32">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Education</h2>
              <p className="text-muted-foreground md:w-2/3 mx-auto">
                My academic background and professional certifications.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Certified Tech Developer</h3>
                      <p className="text-muted-foreground">Digital House</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>July 2022 - April 2024</span>
                      </div>
                      <p className="text-muted-foreground mt-2">
                        Comprehensive full-stack development program covering both frontend and backend technologies.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        onClick={() => viewCertificate("digital-house")}
                        className={`relative transition-all ${activeButton === "digital-house" ? "translate-y-1 shadow-inner" : "hover:-translate-y-1 hover:shadow-md"}`}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Java Developer</h3>
                      <p className="text-muted-foreground">Coderhouse</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>January 2024 - March 2024</span>
                      </div>
                      <p className="text-muted-foreground mt-2">
                        Advanced Java programming with focus on enterprise application development.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        onClick={() => viewCertificate("java-developer")}
                        className={`relative transition-all ${activeButton === "java-developer" ? "translate-y-1 shadow-inner" : "hover:-translate-y-1 hover:shadow-md"}`}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">CyberSecurity</h3>
                      <p className="text-muted-foreground">Coderhouse</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>July 2024 - September 2024</span>
                      </div>
                      <p className="text-muted-foreground mt-2">
                        Comprehensive cybersecurity program covering threat detection, prevention, and security best
                        practices.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        onClick={() => viewCertificate("cybersecurity")}
                        className={`relative transition-all ${activeButton === "cybersecurity" ? "translate-y-1 shadow-inner" : "hover:-translate-y-1 hover:shadow-md"}`}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
           {/* Medals Section */}
           <section id="medals" className="bg-muted/50 py-24 md:py-32">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Medals</h2>
              <p className="text-muted-foreground md:w-2/3 mx-auto">
                Recognition and achievements from completed courses and competitions.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {medals.map((medal) => (
                  <div key={medal.id} className="flex flex-col items-center text-center space-y-4">
                    <div
                      className="w-24 h-24 rounded-full overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      onClick={() => openImageModal(medal.image)}
                    >
                      <img
                        src={medal.image || "/placeholder.svg"}
                        alt={medal.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold">{medal.title}</h3>
                      <p className="text-sm text-muted-foreground">{medal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted/50 py-24 md:py-32">
          <div className="container">
            <div className="max-w-md mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
                <p className="text-muted-foreground">
                  Feel free to reach out if you have any questions or want to work together.
                </p>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium">juanmanosicoski@hotmail.com</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">LinkedIn</div>
                      <div className="font-medium">
                        <Link
                          href="https://www.linkedin.com/in/juan-manuel-nosicoski-b26876291/"
                          className="hover:underline"
                        >
                          Juan Manuel Nosicoski
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">GitHub</div>
                      <div className="font-medium">
                        <Link href="https://github.com/Nosicoski" className="hover:underline">
                          Nosicoski
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">WhatsApp</div>
                      <div className="font-medium">Send me a message</div>
                    </div>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link
                        href="https://wa.me/?text=Hello,%20I'm%20contacting%20you%20for..."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chat
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-sm text-muted-foreground">© 2025 Portfolio. All rights reserved.</div>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Nosicoski">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/juan-manuel-nosicoski-b26876291/">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:juanmanosicoski@hotmail.com">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              className="absolute -top-10 right-0 text-white hover:text-primary"
              onClick={(e) => {
                e.stopPropagation()
                closeImageModal()
              }}
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={modalImage || "/placeholder.svg"}
              alt="Project Preview"
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {certificateImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeCertificateModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              className="absolute -top-10 right-0 text-white hover:text-primary"
              onClick={(e) => {
                e.stopPropagation()
                closeCertificateModal()
              }}
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={certificateImage || "/placeholder.svg"}
              alt="Certificate"
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}

