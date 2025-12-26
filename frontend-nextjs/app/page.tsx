"use client";

import { useEffect, useState } from 'react';
import { getProfile, getProjects, getCertificates, getActivities, getBlogPosts } from '../src/lib/api';
import { Profile, Project, Certificate, Activity, BlogPost } from '../src/types';
import ProjectCard from '../src/components/ProjectCard';
import BlogSection from '@/src/components/BlogSection';
import AdvancedSkillsSection from '@/src/components/AdvancedSkillsSection';
import {
  Loader2, Terminal, GraduationCap, Briefcase,
  Trophy, Download, BadgeCheck, Star, HeartHandshake,
  Calendar, MapPin, Mail, Github, Linkedin, ArrowRight
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-blue-600">
      <Loader2 className="w-10 h-10 animate-spin mb-4" />
      <span className="text-sm font-medium tracking-widest uppercase text-slate-500">Initializing...</span>
    </div>
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* BACKGROUND PATTERN: Tạo cảm giác technical */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none h-[600px]"></div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Avatar with Ring */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20"></div>
              <div className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-indigo-500">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                  <Image src="/avatar.jpg" alt="Avatar" fill className="object-cover" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-green-500 border-4 border-white w-6 h-6 rounded-full shadow-sm" title="Available for work"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
              {profile?.full_name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light mb-8">
              {profile?.title}
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 mb-10">
              <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-200">
                <MapPin size={14} /> Ho Chi Minh City
              </span>
              <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-200">
                <GraduationCap size={14} /> GPA: 3.27/4.0
              </span>
            </div>

            <div className="flex justify-center gap-4">
              <a href={profile?.github} target="_blank" className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-slate-900/20">
                <Github size={20} /> GitHub
              </a>
              <a href="/cv.pdf" download className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all flex items-center gap-2 shadow-sm">
                <Download size={20} /> Résumé
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ADVANCED SKILLS */}
      <AdvancedSkillsSection />

      {/* 3. PROJECTS */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Projects</h2>
              <p className="text-slate-500">Các dự án thực tế với kiến trúc Complex System</p>
            </div>
            {/* Có thể thêm nút View All ở đây */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE & EDUCATION (Timeline Style) */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <Briefcase className="text-blue-600" /> Experience
            </h3>
            <div className="space-y-8 border-l-2 border-slate-200 pl-8 relative">
              {/* Item 1 */}
              <div className="relative">
                <span className="absolute -left-[39px] top-1 w-5 h-5 bg-white border-4 border-blue-600 rounded-full"></span>
                <div className="mb-1 text-sm text-blue-600 font-bold">Apr 2025 - Jun 2025</div>
                <h4 className="text-lg font-bold text-slate-900">Backend Developer Intern</h4>
                <div className="text-slate-600 text-sm mb-2">Academic Project Team</div>
                <p className="text-slate-500 text-sm">Xây dựng hệ thống IELTS LMS với kiến trúc Microservices cơ bản sử dụng ASP.NET Core.</p>
              </div>
              {/* Item 2 */}
              <div className="relative">
                <span className="absolute -left-[39px] top-1 w-5 h-5 bg-white border-4 border-blue-600 rounded-full"></span>
                <div className="mb-1 text-sm text-blue-600 font-bold">Mar 2025 - Present</div>
                <h4 className="text-lg font-bold text-slate-900">Full-Stack Developer</h4>
                <div className="text-slate-600 text-sm mb-2">Freelance</div>
                <p className="text-slate-500 text-sm">Phát triển ứng dụng đặt vé realtime, tối ưu hóa database handling cho 1000+ users.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <Trophy className="text-yellow-600" /> Awards & Certs
            </h3>
            <div className="space-y-4">
              {certs.slice(0, 4).map((cert) => (
                <div key={cert.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="mt-1 text-yellow-500"><BadgeCheck size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{cert.name}</h4>
                    <div className="text-xs text-slate-500">{cert.issuer} • {cert.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACTIVITIES (Grid Card) */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Activities & Life</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((act) => (
              <div key={act.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex gap-6 items-center">
                <div className="w-24 h-24 flex-shrink-0 relative rounded-lg overflow-hidden bg-slate-100">
                  {act.image_url && <Image src={act.image_url} alt={act.name} fill className="object-cover" />}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{act.name}</h4>
                  <div className="text-sm text-blue-600 font-medium mb-2">{act.role}</div>
                  <p className="text-xs text-slate-500 line-clamp-2">{act.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BLOG SECTION (Giữ nguyên logic, chỉ đổi style sáng) */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Writing</h2>
          <a href="#" className="text-blue-600 font-medium hover:underline flex items-center gap-1">View all posts <ArrowRight size={16} /></a>
        </div>
        <BlogSection posts={blogPosts} />
        {/* Lưu ý: Bạn cần vào file BlogSection.tsx sửa lại class text-white -> text-slate-900 tương tự như trên */}
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 text-center">
        <div className="flex justify-center gap-6 mb-8 text-slate-400">
          <Github className="hover:text-slate-900 cursor-pointer transition-colors" />
          <Linkedin className="hover:text-blue-700 cursor-pointer transition-colors" />
          <Mail className="hover:text-red-500 cursor-pointer transition-colors" />
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Nguyen Tran Ngoc Han. <br />
          Built with <span className="text-slate-900 font-medium">Go (Gin)</span> & <span className="text-slate-900 font-medium">Next.js</span>. Deployed on Render/Vercel.
        </p>
      </footer>
    </main>
  );
}