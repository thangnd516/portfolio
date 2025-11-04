import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function CertificationsAndStack() {
  const certifications = [
    {
      title: "Certified Web Developer (CWD)",
      org: "International Web Association",
      year: "2021",
      link: "#",
    },
    {
      title: "User Experience (UX) Design Certification",
      org: "Nielsen Norman Group",
      year: "2018",
      link: "#",
    },
    {
      title: "Advanced HTML5 and CSS3 Specialist",
      org: "W3Schools",
      year: "2016",
      link: "#",
    },
    {
      title: "Google Analytics Individual Qualification (GAIQ)",
      org: "Google",
      year: "2015",
      link: "#",
    },
  ];

  const stack = [
    {
      name: "Framer",
      desc: "No-code web design.",
      icon: "/icons/framer.svg",
      link: "#",
    },
    {
      name: "Design",
      desc: "General Design Tool",
      icon: "/icons/design.svg",
      link: "#",
    },
    {
      name: "Managment",
      desc: "Project Managment",
      icon: "/icons/management.svg",
      link: "#",
    },
    {
      name: "Payments",
      desc: "Payment Platform",
      icon: "/icons/payments.svg",
      link: "#",
    },
    {
      name: "Meetings",
      desc: "Collaboration",
      icon: "/icons/meetings.svg",
      link: "#",
    },
    {
      name: "Calls",
      desc: "Communication",
      icon: "/icons/calls.svg",
      link: "#",
    },
  ];

  return (
    <section className="max-w-[50%] mx-auto pt-[30px]">
      {/* Certifications */}
      <div className="mb-12">
        <h2 className="text-[#0A0A0A] text-[20px] mb-6">Certifications</h2>
        <div className="space-y-6">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start border-b border-transparent hover:border-[#ececee] pb-2"
            >
              <div>
                <h3 className="text-[#0A0A0A] text-[16px]">{item.title}</h3>
                <p className="text-[#595959] text-[14px]">
                  {item.org}, {item.year}
                </p>
              </div>
              <a
                href={item.link}
                className="flex items-center gap-1 text-[#0A0A0A] text-[14px] hover:underline"
              >
                View
                <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div>
        <h2 className="text-[#0A0A0A] text-[20px] mb-6">Stack</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {stack.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              className="flex items-center gap-3 hover:bg-[#fafafa] p-2 rounded-xl transition"
            >
              <Image
                src={tool.icon}
                alt={tool.name}
                width={36}
                height={36}
                className="object-contain"
              />
              <div>
                <p className="flex items-center gap-1 text-[#0A0A0A] text-[15px] font-medium">
                  {tool.name} <ArrowUpRight size={13} />
                </p>
                <p className="text-[#595959] text-[13px]">{tool.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
