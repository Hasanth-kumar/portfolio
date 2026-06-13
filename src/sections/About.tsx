"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Card from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

import bookImage from "@/assets/images/book-cover.png";
import map2Image from "@/assets/images/map2.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

// Import portfolio data
import { portfolioData } from "@/data/portfolio";

export const AboutSection = () => {
  const constraintRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="My Journey & Skills" description="Discover my educational background, experience, and technical expertise." />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[380px] md:col-span-2 lg:col-span-1">
              <Card.Header title="Education" description="My academic foundation in Information Technology." />
              <div className="px-6 pb-6 flex-1 flex flex-col">
                {/* Institution Info */}
                <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                  <h3 className="font-semibold text-white/90 text-lg mb-3 leading-tight">{portfolioData.education[0].institution.split(",")[0]}</h3>
                  <div className="space-y-2">
                    <p className="text-white/70 text-base font-medium">B.Tech in Information Technology</p>
                    <p className="text-white/60 text-sm">{portfolioData.education[0].period}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-semibold">CGPA:</span>
                      <span className="text-white/80 text-base font-bold">{portfolioData.education[0].gpa}</span>
                    </div>
                  </div>
                </div>
                
                {/* Coursework Section */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-sky-400 rounded-full"></span>
                    <p className="text-white/70 text-base font-medium">Key Coursework</p>
                  </div>
                  <div className="relative">
                    <div className="max-h-32 overflow-y-auto coursework-scroll pr-2">
                      <div className="space-y-2">
                        {portfolioData.education[0].coursework.map((course, index) => (
                          <div key={index} className="flex items-center gap-3 text-white/60 text-sm">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></span>
                            <span className="leading-relaxed">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="h-[380px] md:col-span-3 lg:col-span-2">
              <Card.Header title="My Toolbox" description="Technologies and tools I use to build innovative solutions." />
              <div className="px-6 pb-6 flex-1 flex flex-col justify-center">
                <ToolboxItems 
                  skills={portfolioData.skills} 
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]" 
                />
                <ToolboxItems 
                  skills={portfolioData.skills} 
                  className="mt-6" 
                  itemsWrapperClassName="animate-move-right [animation-duration:15s]" 
                />
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[380px] flex flex-col md:col-span-3 lg:col-span-2">
              <Card.Header
                title="Experience"
                description="My professional journey and achievements."
                className="px-6 py-5 flex-shrink-0"
              />
              <div className="relative flex-1 min-h-0 px-6 pb-5">
                <div className="h-full overflow-y-auto card-scroll pr-2 space-y-4">
                  {portfolioData.experience.map((exp, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4 border-l-2 border-l-emerald-400/50"
                    >
                      <h3 className="font-semibold text-white/90 text-sm md:text-base">{exp.role}</h3>
                      <p className="text-white/70 text-xs md:text-sm mt-1">
                        {exp.company} <span className="text-white/40">•</span> {exp.period}
                      </p>
                      <p className="text-white/50 text-xs mt-0.5">{exp.location}</p>
                      <ul className="mt-3 space-y-1.5">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-white/65 text-xs md:text-sm flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div
                  className="pointer-events-none absolute bottom-5 left-6 right-8 h-10 bg-gradient-to-t from-gray-800 via-gray-800/90 to-transparent"
                  aria-hidden="true"
                />
              </div>
            </Card>

            <Card className="h-[380px] relative md:col-span-2 lg:col-span-1">
              <Image src={map2Image} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="smiling emoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
