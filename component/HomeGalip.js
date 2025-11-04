import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
export default function Home() {

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
      name: "Git",
      desc: "Version control system for tracking and managing code changes.",
      icon: "/images/Git.png",
      link: "#",
    },
    {
      name: "Java",
      desc: "Object-oriented programming language for building cross-platform applications.",
      icon: "/images/java.png",
      link: "#",
    },
    {
      name: "ReactJS",
      desc: "JavaScript library for building interactive user interfaces.",
      icon: "/images/reactJS.png",
      link: "#",
    },
    {
      name: "Sql server",
      desc: "SQL server",
      icon: "/images/sql.png",
      link: "#",
    },
    {
      name: "My SQL",
      desc: "My sql workbend",
      icon: "/images/mySql.png",
      link: "#",
    },

  ];
  return (
    <div className="min-h-screen bg-white text-gray-800 px-8 py-10">
      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-[25px] mb-10 text-sm font-medium text-gray-700 py-[19px] px-0">
        {["Intro", "About", "Work", "Experience", "Education", "Stack", "Skill", "Blog", "Contact"].map(
          (item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition"
            >
              {item}
            </span>
          )
        )}
      </div>

      {/* Profile Header */}
      <div className="flex items-center justify-center text-center gap-[13%] pb-[20px]">
        {/* Left section */}
        <div className="flex items-center gap-6">
          <Image
            src="/images/IMG_8769.JPG"
            width={128}
            height={128}
            className="rounded-[9%]"
          />
          <div className="flex flex-col gap-[12px] justify-start items-baseline">
            <span className="text-black text-[23px] font-black ml-[15px]" >GALIP NGUYEN</span>
            <span className="text-gray-500 text-[18px]">Software Developer</span>
            <span className="text-gray-500 text-sm mt-1"><Image src="/images/pin.png" sizes="16" width={10} height={10} /> Da Nang, Vietnam</span>
            <span className="text-green-600 text-sm font-medium mt-1"><span style={{ color: "green" }}>●</span> Available for work</span>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col md:items-end items-center gap-2 text-sm">
          <a
            href="#"
            className="text-gray-700  hover:text-blue-600 flex items-center gap-1"
          >
            <Image src="/images/download.png" sizes="16" width={16} height={16} /><span className="no-underline text-black">Download CV</span>
          </a>
        </div>
      </div>
      <hr style={{ width: "50%" }}></hr>
      {/* Footer */}
      <div className="flex justify-evenly py-[6px] flex-row">
        <div className="flex gap-2">
          <Image src="/images/gmail.png" sizes="16" width={16} height={16} />
          <span className="pl-[4px]" >nguyenducthang5601@gmail.com</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-1 hover:text-blue-600">
            <Image src="/images/linkedin.png" className="pr-[4px]" sizes="16" width={16} height={16} /><span className="no-underline text-black">LinkedIn</span>
          </a>
        </div>
      </div>


      {/* About */}
      <div>
        <section className="max-w-[50%] flex flex-col items-start justify-center mx-auto pt-[30px]">
          {/* Title */}
          <h2 className="text-[#0A0A0A] text-[20px]">About me</h2>

          {/* Content */}
          <div className="text-[#595959] text-[16px]">
            <p>
              Hello, I&apos;m <span className="font-semibold">John Smith</span>, a web
              designer with 15 years of expertise in crafting visually stunning and
              user-friendly digital experiences.
            </p>
            <p>
              My journey in web design began with a curiosity for how websites work
              and a desire to create something meaningful on the digital canvas. Over
              the years, I&apos;ve honed my skills in user interface design, front-end
              development, and user experience optimization.
            </p>
          </div>
        </section>

      </div>

      {/* dự án từng làm */}


      {/* Kinh nghiệm */}

      <section class="max-w-[50%] flex flex-col items-start justify-center mx-auto pt-[30px]">
        <h2 class="text-[#0A0A0A] text-[20px]">Experience</h2>

        <div class="mb-8 border-l border-[#ececee] pl-5 pl-[10px]">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-[#595959] text-[14px]">
                <span><Image src="/images/pin.png" sizes="16" width={10} height={10} /></span> San Francisco, CA
              </p>
              <h3 class="text-[#0A0A0A] text-[16px]">Digital Innovations Agency</h3>
              <p class="text-[#595959] text-[14px]">Senior Web Designer</p>
            </div>
            <p class="text-[#595959] text-[14px]">Jan 2019 – Present</p>
          </div>
          <ul class="text-[#595959] text-[14px]">
            <li>Led the redesign of high-traffic websites, resulting in a 30% increase in user engagement.</li>
            <li>Managed a team of junior designers, providing mentorship and overseeing project timelines.</li>
            <li>Collaborated with cross-functional teams to develop innovative design solutions for diverse clients.</li>
            <li>Implemented responsive design principles to ensure optimal performance across all devices.</li>
          </ul>
        </div>

      </section>

      {/* university */}
      <section className="max-w-[50%] flex flex-col items-start justify-center mx-auto pt-[30px]">
        <h2 className="text-[#0A0A0A] text-[20px]">Education</h2>

        <div className="mb-8 border-l border-[#ececee] pl-[10px]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[#595959] text-[14px]">
                <Image
                  src="/images/pin.png"
                  alt="location"
                  width={10}
                  height={10}
                />
                Berkeley, CA
              </p>
              <h3 className="text-[#0A0A0A] text-[16px]">
                Master of Science in Web Design and Development
              </h3>
              <p className="text-[#595959] text-[14px]">University of California</p>
            </div>
            <p className="text-[#595959] text-[14px]">2010 – 2012</p>
          </div>
          <p className="text-[#595959] text-[14px] mt-2">
            Focused on advanced web technologies, user experience design, and
            front-end development.
          </p>
        </div>
      </section>


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
        <div className=" pt-[30px]">
          <h2 className="text-[#0A0A0A] text-[20px] mb-6">skills</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {stack.map((tool, index) => (
              <div
                key={index}
                href={tool.link}
                className="flex items-center gap-3 hover:bg-[#fafafa] p-2 rounded-xl transition p-[10px]"
              >
                <div className="text-transparent p-[5px]">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="flex items-center gap-1 text-[#0A0A0A] text-[16px] font-medium">
                    {tool.name} <ArrowUpRight size={13} />
                  </span>
                  <span className="text-[#595959] text-[14px]">{tool.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
