"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";

// Import memoji images for certifications
import memoji1 from "@/assets/images/memoji-avatar-1.png";
import memoji2 from "@/assets/images/memoji-avatar-2.png";
import memoji3 from "@/assets/images/memoji-avatar-3.png";
import memoji4 from "@/assets/images/memoji-avatar-4.png";

export const TestimonialsSection = () => {
  // Memoji mapping for certifications
  const memojiMap = [memoji1, memoji2, memoji3, memoji4];
  
  // Custom descriptions for each certification
  const getCertificationDescription = (certification: string) => {
    if (certification.includes('AI & ML Virtual Internship')) {
      return "I completed the Google AI/ML Virtual Internship, where I gained hands-on experience building and deploying machine learning models. I applied key concepts like computer vision and neural networks to solve real-world problems. This program enhanced my skills in developing and implementing AI solutions.";
    } else if (certification.includes('Generative AI Internship')) {
      return "I completed the Google Generative AI Virtual Internship, focusing on cutting-edge tools to create new content and applications. I gained expertise in prompt engineering and ethical AI development while using large language models like Gemini. This experience honed my ability to build innovative generative AI solutions.";
    } else if (certification.includes('Cisco')) {
      return "Comprehensive data analytics training covering essential tools and methodologies for business intelligence.";
    } else if (certification.includes('EFSET')) {
      return "Official English proficiency certification demonstrating advanced language skills for international opportunities.";
    }
    return "Professional certification demonstrating expertise and commitment to continuous learning.";
  };
  
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader 
          eyebrow="Achievements" 
          title="Certifications & Training" 
          description="Professional certifications and specialized training programs I've completed." 
        />
        <div className="mt-12 lg:mt-20">
          <div className="overflow-hidden">
            <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex flex-none gap-8 py-4 pr-8 animate-move-left [animation-duration:30s]">
                {[...new Array(2)].fill(0).map((_, index) => (
                  <div key={index} className="flex gap-8">
                    {portfolioData.certifications.map((certification, certIndex) => (
                      <motion.div
                        key={`${certification}-${index}`}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.8, 
                          delay: certIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="w-96 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                      >
                        {/* Memoji Avatar */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative">
                            <Image 
                              src={memojiMap[certIndex % memojiMap.length]} 
                              alt="Certification Avatar" 
                              className="w-12 h-12 rounded-full"
                              width={48}
                              height={48}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white/90 text-base">
                              {certification.split(' — ')[0]}
                            </h3>
                            <p className="text-white/60 text-sm">
                              {certification.split(' — ')[1] || 'Professional Certification'}
                            </p>
                          </div>
                        </div>
                        
                        {/* Certification Details */}
                        <div className="space-y-2">
                          <p className="text-white/70 text-sm leading-relaxed">
                            {getCertificationDescription(certification)}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
