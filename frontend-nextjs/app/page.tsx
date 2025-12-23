'use client';

import { useEffect, useState } from 'react';
import { getProfile, getProjects } from '../src/lib/api';
import { Profile, Project } from '../src/types/index';
import ProjectCard from '../src/components/ProjectCard';
import { Loader2, Server, Database, Layout, Terminal } from 'lucide-react';
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
    <main className="min-h-screen text-white px-6 md:px-12 py-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto mb-24 relative">
        {/* Background Glow Effect */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 relative z-10"
        >
          {/* Avatar Ring */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-50 animate-pulse"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 bg-[#111] rounded-full border-2 border-white/10 flex items-center justify-center text-5xl font-bold text-gray-300 overflow-hidden">
              {profile?.full_name?.charAt(0)}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-blue-400 font-medium tracking-wide uppercase text-sm md:text-base">
              Hello, I am
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-white">{profile?.full_name?.split(' ').slice(0, -2).join(' ')} </span>
              <span className="text-gradient">{profile?.full_name?.split(' ').slice(-2).join(' ')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
              {profile?.title}
            </p>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <a href={profile?.github} target="_blank" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-transform hover:-translate-y-1">
              GitHub Profile
            </a>
            <a href={`mailto:${profile?.email}`} className="px-8 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-transform hover:-translate-y-1 backdrop-blur-sm">
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* Skills Section - Thêm cái này cho đỡ trống */}
      <section className="max-w-5xl mx-auto mb-32">
        <motion.div 
           initial={{ opacity: 0 }} 
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: <Terminal size={24}/>, label: "Backend", desc: "Go, Node.js, C#" },
            { icon: <Layout size={24}/>, label: "Frontend", desc: "Next.js, Tailwind" },
            { icon: <Database size={24}/>, label: "Database", desc: "Postgres, SQL Server" },
            { icon: <Server size={24}/>, label: "DevOps", desc: "Docker, Render" },
          ].map((skill, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="mb-4 text-blue-400">{skill.icon}</div>
              <h3 className="font-bold text-lg mb-1">{skill.label}</h3>
              <p className="text-sm text-gray-400">{skill.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold mr-4">Featured Projects</h2>
          <div className="h-px bg-gray-800 flex-grow"></div>
        </div>
        
        {projects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-gray-800 rounded-xl">
             <p className="text-gray-500">Updating database...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}