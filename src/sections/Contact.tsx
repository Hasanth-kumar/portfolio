import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { portfolioData } from "@/data/portfolio";

export const ContactSection = () => {
  const { contact } = portfolioData;

  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Let&apos;s build something impactful together</h2>
              <p className="text-sm md:text-base mt-2">
                Software engineer specializing in full-stack development and applied machine learning. I&apos;d love to
                connect about building impactful products, technical collaborations, or your next idea.
              </p>
              <div className="mt-4 text-sm space-y-1">
                <p>
                  📧{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-900 hover:text-gray-700 underline decoration-2 underline-offset-2 transition-colors"
                  >
                    {contact.email}
                  </a>
                </p>
                <p>📱 {contact.phone}</p>
                <p>📍 {contact.location}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex text-white bg-gray-900 items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="font-semibold">Email Me</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-gray-900 bg-white/80 items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900/20 hover:bg-white transition-colors duration-200"
              >
                <span className="font-semibold">LinkedIn</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
