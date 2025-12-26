"use client";

import { useEffect, useState } from 'react';
import { getProfile, getProjects, getCertificates, getActivities, getBlogPosts } from '../src/lib/api';
import { Profile, Project, Certificate, Activity, BlogPost } from '../src/types/index';
import ProjectCard from '../src/components/ProjectCard';
import BlogSection from '../src/components/BlogSection';
import AdvancedSkillsSection from '../src/components/AdvancedSkillsSection';
import {
  Loader2, Terminal, GraduationCap, Briefcase,
  Trophy, Download, BadgeCheck, Star, HeartHandshake,
  Calendar, MapPin, Mail, Github, Linkedin
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [certs, setCerts] = useState<Certificate[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [profileRes, projectsRes, certsRes, actRes, blogRes] = await Promise.all([
          getProfile(),
          getProjects(),
          getCertificates(),
          getActivities(),
          getBlogPosts()
        ]);
        setProfile(profileRes);
        setProjects(projectsRes);
        setCerts(certsRes);
        setActivities(actRes);
        setBlogPosts(blogRes);
      } catch (error) {
        console.error("Lỗi tải dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-blue-400 bg-[#0a0a0a]">
      <Loader2 className="w-10 h-10 animate-spin mb-4" />
      <span className="text-sm font-medium tracking-widest uppercase opacity-70">Loading System...</span>
    </div>
  );

  return (
    <main className="min-h-screen text-white px-6 md:px-12 py-20 overflow-hidden relative bg-[#0a0a0a]">
      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="max-w-5xl mx-auto mb-32 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Avatar */}
          <div className="relative inline-block mb-6 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-gray-900 overflow-hidden shadow-2xl mx-auto bg-gray-800">
              <Image
                src="/avatar.jpg"
                alt="Profile Avatar"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.currentTarget.style.opacity = "0"; }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#111] -z-10">
                <span className="text-6xl font-bold text-gray-700">{profile?.full_name?.charAt(0)}</span>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-green-500 border-4 border-gray-900 w-6 h-6 rounded-full" title="Open to work"></div>
          </div>

          <div className="space-y-4">
            <h2 className="text-blue-400 font-medium tracking-[0.2em] uppercase text-sm">
              Software Engineer
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-white">{profile?.full_name?.split(' ').slice(0, -2).join(' ')} </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                {profile?.full_name?.split(' ').slice(-2).join(' ')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              {profile?.title}
            </p>
            <p className="text-gray-500 max-w-xl mx-auto">
              {profile?.bio}
            </p>
            <div className="flex items-center justify-center text-gray-500 text-sm gap-2">
              <MapPin size={16} /> Ho Chi Minh City, Vietnam
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 pt-6">
            <a href={profile?.github} target="_blank" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 flex items-center justify-center">
              <Terminal size={18} className="mr-2" /> GitHub Profile
            </a>
            <a href="/cv.pdf" download className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all hover:scale-105 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Download size={18} className="mr-2" /> Download CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. PROJECTS */}
      <section className="max-w-6xl mx-auto mb-32 relative z-10">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold mr-4">Featured Projects</h2>
          <div className="h-px bg-gray-800 flex-grow"></div>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-gray-800 rounded-xl bg-white/5">
            <p className="text-gray-500">Connecting to Database...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        )}
      </section>

      {/* 3. ADVANCED SKILLS */}
      <AdvancedSkillsSection />

      {/* 4. CERTIFICATES */}
      <section className="max-w-6xl mx-auto mb-32 relative z-10">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold mr-4 flex items-center">
            <Trophy className="mr-3 text-yellow-500" /> Honors & Certificates
          </h2>
          <div className="h-px bg-gray-800 flex-grow"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-gray-900 border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all hover:-translate-y-1 h-full flex flex-col"
            >
              <div className="absolute inset-0 h-32 overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity">
                {cert.image_url ? (
                  <Image src={cert.image_url} alt={cert.name} fill className="object-cover filter blur-sm" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-blue-900 to-gray-900"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>

              <div className="relative p-6 pt-20 z-10 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <div className={`p-2 rounded-lg shadow-lg ${cert.type === 'Title' ? 'bg-yellow-500 text-black' :
                      cert.type === 'Award' ? 'bg-purple-500 text-white' : 'bg-blue-600 text-white'
                    }`}>
                    {cert.type === 'Title' ? <Star size={20} /> :
                      cert.type === 'Award' ? <Trophy size={20} /> : <BadgeCheck size={20} />}
                  </div>
                </div>

                <h3 className="font-bold text-lg text-white mb-1 group-hover:text-blue-300 transition-colors">{cert.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-xs text-gray-500">
                  <span>Issued</span>
                  <span className="font-mono bg-white/5 px-2 py-1 rounded">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. ACTIVITIES */}
      <section className="max-w-5xl mx-auto mb-32 relative z-10">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold mr-4 flex items-center">
            <HeartHandshake className="mr-3 text-pink-500" /> Activities & Volunteering
          </h2>
          <div className="h-px bg-gray-800 flex-grow"></div>
        </div>

        <div className="space-y-6">
          {activities.map((act, i) => (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-6 bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group"
            >
              <div className="w-full md:w-56 h-40 flex-shrink-0 relative rounded-xl overflow-hidden bg-gray-800 border border-white/10">
                {act.image_url ? (
                  <Image src={act.image_url} alt={act.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-600"><HeartHandshake size={32} /></div>
                )}
              </div>

              <div className="flex-grow flex flex-col justify-center">
                <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">{act.name}</h3>
                  <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full flex items-center">
                    <Calendar size={12} className="mr-2" /> {act.date}
                  </span>
                </div>
                <p className="text-pink-400 font-medium mb-3 flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span> {act.role}
                </p>
                <p className="text-gray-300 leading-relaxed text-sm">{act.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. BLOG POSTS */}
      <BlogSection posts={blogPosts} />

      {/* 7. TIMELINE */}
      <section className="max-w-5xl mx-auto mb-32 grid md:grid-cols-2 gap-12 relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <GraduationCap className="mr-3 text-purple-400" /> Education
          </h3>
          <div className="space-y-8 border-l-2 border-white/10 pl-8 ml-3 relative">
            <div className="relative group">
              <span className="absolute -left-[41px] top-1 w-5 h-5 bg-purple-500 rounded-full border-4 border-[#0a0a0a] group-hover:scale-125 transition-transform"></span>
              <h4 className="text-xl font-bold text-white">HUTECH University</h4>
              <p className="text-purple-400 text-sm mb-2 font-mono">2022 - 2026</p>
              <p className="text-gray-300">Bachelor of Software Engineering</p>
              <p className="text-gray-500 text-sm mt-1">GPA: 3.27/4.0</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-3 text-blue-400" /> Experience
          </h3>
          <div className="space-y-8 border-l-2 border-white/10 pl-8 ml-3 relative">
            <div className="relative group">
              <span className="absolute -left-[41px] top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-[#0a0a0a] group-hover:scale-125 transition-transform"></span>
              <h4 className="text-xl font-bold text-white">Backend Developer Intern</h4>
              <p className="text-blue-400 text-sm mb-2 font-mono">Apr 2025 - Jun 2025</p>
              <p className="text-gray-300">Academic Project Team</p>
              <p className="text-gray-500 text-sm mt-1">Built IELTS LMS using ASP.NET Core & SQL Server.</p>
            </div>
            <div className="relative group">
              <span className="absolute -left-[41px] top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-[#0a0a0a] group-hover:scale-125 transition-transform"></span>
              <h4 className="text-xl font-bold text-white">Full-Stack Developer</h4>
              <p className="text-blue-400 text-sm mb-2 font-mono">Mar 2025 - Jun 2025</p>
              <p className="text-gray-300">Freelance / Project</p>
              <p className="text-gray-500 text-sm mt-1">Developed Real-time Cinema Booking using Node.js & Socket.io.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. CONTACT CTA */}
      <section className="max-w-4xl mx-auto mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Tôi đang tìm kiếm cơ hội thực tập và làm việc full-time trong lĩnh vực Backend Development,
            AI/LLM, hoặc Full-Stack. Hãy liên hệ nếu bạn có dự án thú vị!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={`mailto:${profile?.email}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all hover:scale-105 flex items-center gap-2">
              <Mail size={18} />
              Email Me
            </a>
            <a href={profile?.github} target="_blank" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all hover:scale-105 flex items-center gap-2">
              <Github size={18} />
              GitHub
            </a>
            <a href={profile?.linkedin} target="_blank" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all hover:scale-105 flex items-center gap-2">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>

          <p className="text-sm text-gray-500">
            Response time: Thường trong vòng 24 giờ
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm relative z-10 border-t border-white/5">
        <p>© {new Date().getFullYear()} Nguyen Tran Ngoc Han. Built with Go & Next.js</p>
        <p className="mt-2 text-xs">Deployed on Render (Backend) & Vercel (Frontend)</p>
      </footer>
    </main>
  );
}