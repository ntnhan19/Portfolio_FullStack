'use client';

import { useEffect, useState } from 'react';
import { getProfile, getProjects, getCertificates, getActivities, getBlogPosts } from '@/src/lib/api';
import { Profile, Project, Certificate, Activity, BlogPost } from '@/src/types';
import ProjectCard from '@/src/components/ProjectCard'; // (Sẽ update ở bước 4)
import {
  Loader2, Terminal, GraduationCap, Briefcase,
  Trophy, Download, BadgeCheck, HeartHandshake,
  Calendar, MapPin, Mail, Github, Linkedin, ArrowRight,
  Code2, Database, Server, Globe
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

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
          getProfile(), getProjects(), getCertificates(), getActivities(), getBlogPosts()
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-blue-600">
      <Loader2 className="w-10 h-10 animate-spin mb-4" />
      <span className="text-sm font-medium tracking-widest uppercase text-slate-500">Initializing Portfolio...</span>
    </div>
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">

      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-slate opacity-[0.6] pointer-events-none h-[800px]"></div>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            {/* Avatar */}
            <motion.div variants={fadeInUp} className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-40 h-40 rounded-full p-1 bg-white border border-slate-200 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image src="/avatar.jpg" alt="Avatar" fill className="object-cover" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-green-500 border-4 border-white w-6 h-6 rounded-full shadow-sm" title="Open to work"></div>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
              {profile?.full_name}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-2xl mx-auto font-light mb-8 leading-relaxed">
              {profile?.title}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 mb-10">
              <span className="flex items-center gap-1 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
                <MapPin size={16} className="text-red-500" /> TP. Hồ Chí Minh
              </span>
              <span className="flex items-center gap-1 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
                <GraduationCap size={16} className="text-blue-500" /> GPA: 3.26/4.0
              </span>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center gap-4">
              <a href={profile?.github} target="_blank" className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1">
                <Github size={20} /> GitHub
              </a>
              <a href="/cv.pdf" download className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all flex items-center gap-2 shadow-sm hover:-translate-y-1">
                <Download size={20} /> Tải CV (PDF)
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. SKILLS (Thay thế Progress Bar bằng Cards) --- */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { title: "Backend", icon: <Server />, skills: "Go (Gin), Node.js, C# .NET, REST API" },
            { title: "Frontend", icon: <Globe />, skills: "Next.js, React, Tailwind, TypeScript" },
            { title: "Database", icon: <Database />, skills: "PostgreSQL, SQL Server, Redis" },
            { title: "Tools & DevOps", icon: <Terminal />, skills: "Docker, Git, Postman, Linux" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.skills}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* --- 3. PROJECTS (Metric thực tế cho sinh viên) --- */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Dự Án Tiêu Biểu</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Các dự án học thuật và cá nhân được đầu tư kỹ lưỡng, áp dụng công nghệ thực tế.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. TIMELINE (Kết hợp Học vấn & Kinh nghiệm) --- */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center flex items-center justify-center gap-3">
          <Briefcase className="text-blue-600" /> Hành Trình & Kinh Nghiệm
        </h2>

        <div className="space-y-12 border-l-2 border-slate-200 pl-8 ml-4 relative">
          {/* Mục 1: Internship (Quan trọng nhất) */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <span className="absolute -left-[43px] top-1 w-6 h-6 bg-white border-4 border-blue-600 rounded-full"></span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-900">Backend Developer Intern</h3>
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Apr 2025 - Present</span>
            </div>
            <p className="text-slate-700 font-medium mb-2">Dự án Học thuật (Academic Team)</p>
            <ul className="list-disc list-outside ml-4 text-slate-600 text-sm space-y-1">
              <li>Xây dựng hệ thống IELTS LMS sử dụng <strong>ASP.NET Core</strong> và kiến trúc Layered Architecture.</li>
              <li>Thiết kế Database SQL Server tối ưu cho việc truy vấn lịch sử bài thi.</li>
            </ul>
          </motion.div>

          {/* Mục 2: Dự án lớn */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <span className="absolute -left-[43px] top-1 w-6 h-6 bg-white border-4 border-slate-400 rounded-full"></span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-900">Full-Stack Developer (Project Leader)</h3>
              <span className="text-sm text-slate-500">Mar 2025 - Jun 2025</span>
            </div>
            <p className="text-slate-700 font-medium mb-2">Dự án Môn học: Lập trình mạng</p>
            <ul className="list-disc list-outside ml-4 text-slate-600 text-sm space-y-1">
              <li>Dẫn dắt team 4 người xây dựng Website đặt vé xem phim Real-time.</li>
              <li>Giải quyết vấn đề <strong>Race Condition</strong> (đặt trùng ghế) bằng Socket.io và Transaction.</li>
            </ul>
          </motion.div>

          {/* Mục 3: Học vấn */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <span className="absolute -left-[43px] top-1 w-6 h-6 bg-white border-4 border-purple-500 rounded-full"></span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-900">Đại học Công Nghệ TP.HCM (HUTECH)</h3>
              <span className="text-sm text-slate-500">2022 - 2026</span>
            </div>
            <p className="text-slate-700 font-medium">Kỹ thuật phần mềm (Software Engineering)</p>
            <p className="text-sm text-slate-500 mt-1">GPA: 3.26/4.0 • Sinh viên 5 Tốt cấp Khoa</p>
          </motion.div>
        </div>
      </section>

      {/* --- 5. CERTIFICATES & AWARDS (Grid có ảnh) --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center flex items-center justify-center gap-3">
            <Trophy className="text-yellow-500" /> Chứng Chỉ & Giải Thưởng
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="h-40 relative bg-slate-100">
                  {cert.image_url ? (
                    <Image src={cert.image_url} alt={cert.name} fill className="object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-300"><BadgeCheck size={40} /></div>
                  )}
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-slate-900 line-clamp-2 min-h-[3rem]">{cert.name}</h4>
                  <div className="mt-2 flex justify-between items-center text-xs text-slate-500">
                    <span>{cert.issuer}</span>
                    <span className="bg-slate-100 px-2 py-1 rounded">{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. BLOG (Gợi ý nội dung) --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Bài Viết & Chia Sẻ</h2>
            <p className="text-slate-500">Ghi lại hành trình học tập và phát triển.</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-blue-600 hover:underline font-medium">
            Xem tất cả <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative h-52 rounded-2xl overflow-hidden mb-4 border border-slate-100">
                {post.cover_image ? (
                  <Image src={post.cover_image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full bg-slate-100"></div>
                )}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                  {post.tags.split(',')[0]}
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <Calendar size={12} /> {post.date}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 text-sm line-clamp-2">{post.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* --- 7. FOOTER --- */}
      <footer className="bg-white border-t border-slate-200 py-12 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href={profile?.github} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition text-slate-600"><Github size={20} /></a>
          <a href={profile?.linkedin} className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition text-blue-600"><Linkedin size={20} /></a>
          <a href={`mailto:${profile?.email}`} className="p-2 bg-red-50 rounded-full hover:bg-red-100 transition text-red-600"><Mail size={20} /></a>
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {profile?.full_name}. Built with <span className="font-semibold text-slate-900">Go & Next.js</span>.
        </p>
      </footer>
    </main>
  );
}