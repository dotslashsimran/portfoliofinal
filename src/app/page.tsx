/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  const words = useMemo(
    () => ["Software Engineer", "Learner", "Problem Solver", "Innovator"],
    []
  );
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => {
        const currentIndex = words.indexOf(prev);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [words]);

  const travelPhotos = useMemo(
    () => [
      "/photos/1.jpg",
      "/photos/2.jpg",
      "/photos/3.jpg",
      "/photos/4.jpg",
      "/photos/5.jpg",
      "/photos/6.jpg",
    ],
    []
  );
  const [visiblePhotos, setVisiblePhotos] = useState<string[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < travelPhotos.length) {
        setVisiblePhotos((prev) => [...prev, travelPhotos[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [travelPhotos]);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Simran&apos;s Portfolio</h1>
          <div className="flex gap-6">
            <a
              href="https://medium.com/@dotslashsimran"
              className="hover:text-gray-600"
              aria-label="Blog"
            >
              BLOG
            </a>
            <a href="#" className="hover:text-gray-600" aria-label="Podcast">
              PODCAST
            </a>
            <a href="#" className="hover:text-gray-600" aria-label="YouTube">
              YOUTUBE
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row justify-center items-center px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col items-center lg:items-start lg:w-1/2 space-y-6">
          <h1 className="text-6xl font-extrabold mb-4 text-center lg:text-left leading-tight text-gray-900">
            Hi, I&apos;m{" "}
            <span className="text-gray-800 underline decoration-pink-300">
              Simran Sachdeva
            </span>
            .
          </h1>
          <h3 className="text-3xl text-center lg:text-left text-gray-600 font-medium">
            A Passionate{" "}
            <span className="font-semibold text-gray-800">{currentWord}</span>.
          </h3>
          <p className="text-lg text-center lg:text-left text-gray-700 max-w-lg leading-relaxed">
            I specialize in building scalable software solutions, designing
            seamless user experiences, and solving complex technical challenges
            through clean, efficient code.
          </p>
          <div className="flex gap-6 justify-center lg:justify-start mt-4">
            <a
              href="https://github.com/dotslashsimran"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github
                className="cursor-pointer hover:scale-110 transition-transform duration-200 text-gray-800"
                size={28}
              />
            </a>
            <a
              href="https://linkedin.com/in/simran-sachdeva-b88258222/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin
                className="cursor-pointer hover:scale-110 transition-transform duration-200 text-blue-500"
                size={28}
              />
            </a>
            <a
              href="mailto:dotslashsimran@gmail.com"
              aria-label="Email Simran"
            >
              <Mail
                className="cursor-pointer hover:scale-110 transition-transform duration-200 text-red-400"
                size={28}
              />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <img
            src="/photos/hero.svg"
            alt="Hero illustration"
            className="w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg transition-shadow duration-300"
          />
        </div>
      </section>

{/* About Section */}
<section id="about" className="min-h-screen flex items-center bg-white text-gray-800 px-4 py-16">
  <div className="max-w-6xl mx-auto w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* About Content */}
      <div className="space-y-6">
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">About Me</h2>
        <p className="text-base leading-relaxed text-gray-600">
          I am a <span className="font-semibold text-gray-900">Developer</span> with a passion for building AI solutions that solve real-world challenges. My primary expertise lies in <span className="font-semibold">generative adversarial networks (GANs)</span> and <span className="font-semibold">large language models</span>, and I thrive on deploying scalable ML models to production environments.
        </p>
        <p className="text-base leading-relaxed text-gray-600">
          My focus is on delivering end-to-end AI systems that bring measurable business value. Learning by the day. I've also recently started experimenting with <span className="font-semibold">Figma</span> and building <span className="font-semibold">React</span> apps. As you can clearly see with this website.
        </p>
      </div>

      {/* Skills Chart */}
      <div className="space-y-6">
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">Skills</h2>
        <div className="space-y-4">
          {[
            { name: "Python Development", level: 90 },
            { name: "API Design & Integration", level: 85 },
            { name: "AI Agents & Workflow Automation", level: 80 },
            { name: "MLOps & Deployment", level: 75 },
          ].map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-800 uppercase tracking-wide">{skill.name}</span>
                <span className="text-xs text-gray-500">{skill.level}%</span>
              </div>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute h-full bg-gray-800 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* Experience Section */}
<section id="experience" className="py-20 bg-white text-gray-800 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">Experience</h2>

    {/* Timeline */}
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 h-full hidden md:block"></div>

      {/* Experience Items */}
      {[
        {
          title: "Software Engineer Intern",
          company: "Microsoft",
          duration: "June 2024 - August 2024",
          responsibilities: [
            "Optimized technical debt cleanup and refactoring processes by automating it using RESTful APIs and large language models.",
            "Bringing down Dev effort from 12-14 Dev hours to approx 10 minutes."
          ],
        },
        {
          title: "Business Tech Analyst Intern",
          company: "Deloitte",
          duration: "January 2024 - March 2024",
          responsibilities: [
            "Analyzed business requirements and developed technical solutions for client projects.",
            "Collaborated with cross-functional teams to improve business processes. Built Salesforce dashboards for to manage client requirements.",
          ],
        },
        {
          title: "Data Science Intern",
          company: "Paytm",
          duration: "June 2023 - August 2023",
          responsibilities: [
            "Utilized Apache Spark for distributed data processing, ensuring high-throughput analysis and optimization of data workflows.",
            "Optimized data pipelines using PySpark and XGBoost models.",
          ],
        },
      ].map((experience, index) => (
        <div key={index} className="relative flex flex-col md:flex-row items-start mb-12">
          {/* Left Section */}
          <div className="md:w-1/2 md:pr-12 text-right hidden md:block">
            <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
            <p className="text-md text-gray-500">{experience.company}</p>
          </div>

          {/* Timeline Dot */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full"></div>

          {/* Right Section */}
          <div className="md:w-1/2 md:pl-12">
            {/* Mobile Header */}
            <div className="md:hidden mb-4">
              <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
              <p className="text-md text-gray-500">{experience.company}</p>
            </div>
            <p className="text-sm text-gray-500 mb-4">{experience.duration}</p>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                {experience.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Travel Photos Section */}
<section
  id="photos"
  className="relative min-h-screen flex items-center justify-center bg-gray-50 text-black px-4 overflow-hidden"
>
  <div className="z-10 text-center">
    <h1 className="text-6xl md:text-6xl font-extrabold mb-4">
      I also love to travel and take (semi-cool) photos.
    </h1>
  </div>
  <div className="absolute inset-0 z-0 grid grid-cols-3 gap-6 p-12 md:p-20">
    {travelPhotos.map((photo, index) => (
      <div
        key={photo}
        className="relative w-32 h-32 md:w-48 md:h-48 opacity-70 hover:opacity-100 transform hover:scale-105"
      >
        <img
          src={photo}
          alt={`Travel photo ${index + 1}`}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    ))}
  </div>
</section>
{/* Rickroll Section */}
<section className="min-h-screen flex items-center justify-center bg-gray-900">
  <div className="relative w-full max-w-6xl h-[90vh]">
    <iframe
      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0&controls=0&loop=1&playlist=dQw4w9WgXcQ"
      title="Rickroll"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</section>
    </main>
  );
}
