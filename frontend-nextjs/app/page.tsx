'use client';

import { useEffect, useState } from 'react';
import { getProfile, getProjects } from '../src/lib/api';
import { Profile, Project } from '../src/types/index';
import ProjectCard from '../src/components/ProjectCard';
import { Loader2, Server, Database, Layout, Terminal, GraduationCap, Briefcase, Award, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [profileRes, projectsRes] = await Promise.all([getProfile(), getProjects()]);
        setProfile(profileRes);
        setProjects(projectsRes);
      } catch (error) {
        console.error("Lỗi tải data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-blue-400 bg-[#0a0a0a]">
      <Loader2 className="w-10 h-10 animate-spin mb-4" />
      <span className="text-sm font-medium tracking-widest uppercase opacity-70">Initializing System...</span>
    </div>
  );

  return (
    <main className="min-h-screen text-white px-6 md:px-12 py-20 overflow-hidden relative">

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="max-w-5xl mx-auto mb-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 relative z-10"
        >
          {/* Avatar Ring */}
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-50 animate-pulse"></div>
            <div className="relative w-32 h-32 md:w-44 md:h-44 bg-[#111] rounded-full border-2 border-white/10 flex items-center justify-center text-6xl font-bold text-gray-300 overflow-hidden shadow-2xl">
              {/* Bạn có thể thay bằng thẻ <img src="/avatar.jpg" /> nếu có ảnh */}
              {profile?.full_name?.charAt(0)}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-blue-400 font-medium tracking-[0.2em] uppercase text-sm">
              Portfolio & Report
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-white">{profile?.full_name?.split(' ').slice(0, -2).join(' ')} </span>
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                {profile?.full_name?.split(' ').slice(-2).join(' ')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              {profile?.title}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 pt-6">
            <a href={profile?.github} target="_blank" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 flex items-center justify-center">
              <Terminal size={18} className="mr-2" /> GitHub Profile
            </a>
            {/* Nút Download CV Mới */}
            <a href="/cv.pdf" download className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all hover:scale-105 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Download size={18} className="mr-2" /> Download CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. SKILLS GRID */}
      <section className="max-w-5xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: <Terminal size={24} />, label: "Backend", desc: "Go (Gin), Node.js, C#" },
            { icon: <Layout size={24} />, label: "Frontend", desc: "Next.js, Tailwind, React" },
            { icon: <Database size={24} />, label: "Database", desc: "Postgres, SQL Server" },
            { icon: <Server size={24} />, label: "System", desc: "Socket.io, Docker, Linux" },
          ].map((skill, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all group cursor-default">
              <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">{skill.icon}</div>
              <h3 className="font-bold text-lg mb-1">{skill.label}</h3>
              <p className="text-sm text-gray-400">{skill.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 3. TIMELINE & EXPERIENCE (Phần Mới - Lấy từ CV) */}
      <section className="max-w-5xl mx-auto mb-32 grid md:grid-cols-2 gap-12">
        {/* Education */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <GraduationCap className="mr-3 text-purple-400" /> Education
          </h3>
          <div className="space-y-8 border-l-2 border-white/10 pl-8 ml-3 relative">
            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 bg-purple-500 rounded-full border-4 border-[#0a0a0a]"></span>
              <h4 className="text-xl font-bold">HUTECH University</h4>
              <p className="text-purple-400 text-sm mb-2">2022 - 2026</p>
              <p className="text-gray-300">Bachelor of Software Engineering</p>
              <p className="text-gray-500 text-sm mt-1">GPA: 3.26/4.0</p>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-3 text-blue-400" /> Experience
          </h3>
          <div className="space-y-8 border-l-2 border-white/10 pl-8 ml-3 relative">
            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-[#0a0a0a]"></span>
              <h4 className="text-xl font-bold">Backend Developer Intern</h4>
              <p className="text-blue-400 text-sm mb-2">Apr 2025 - Jun 2025</p>
              <p className="text-gray-300">Academic Project Team</p>
              <ul className="text-gray-500 text-sm mt-2 list-disc ml-4 space-y-1">
                <li>Built IELTS LMS using ASP.NET Core.</li>
                <li>Designed SQL Server database schema.</li>
              </ul>
            </div>
            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-[#0a0a0a]"></span>
              <h4 className="text-xl font-bold">Full-Stack Developer</h4>
              <p className="text-blue-400 text-sm mb-2">Mar 2025 - Jun 2025</p>
              <p className="text-gray-300">Freelance / Project</p>
              <p className="text-gray-500 text-sm mt-1">
                Developed Real-time Cinema Booking using Node.js & Socket.io.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. PROJECTS GRID */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold mr-4">Featured Projects</h2>
          <div className="h-px bg-gray-800 flex-grow"></div>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-gray-800 rounded-xl bg-white/5">
            <p className="text-gray-500">Connecting to Render Database...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        )}
      </section>

      {/* 5. CERTIFICATES (Phần Mới) */}
      <section className="max-w-4xl mx-auto pb-20 text-center">
        <h2 className="text-2xl font-bold mb-8 inline-flex items-center">
          <Award className="mr-2 text-yellow-500" /> Certificates & Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-white/5 rounded-xl hover:border-yellow-500/50 transition-colors">
            <h3 className="font-bold text-lg text-white">IELTS Certificate</h3>
            <p className="text-gray-400 text-sm">English Proficiency</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-white/5 rounded-xl hover:border-blue-500/50 transition-colors">
            <h3 className="font-bold text-lg text-white">Problem Solving (Basic)</h3>
            <p className="text-gray-400 text-sm">HackerRank / LeetCode</p>
          </div>
        </div>
      </section>

    </main>
  );
}