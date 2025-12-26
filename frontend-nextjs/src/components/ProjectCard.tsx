'use client';

import Link from 'next/link';
import { Github, ExternalLink, Code, Users, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        description: string;
        tech_stack: string;
        category: string;
        repo_url?: string;
        demo_url?: string;
        image_url?: string;
        metrics?: string;
        highlights?: string;
        duration?: string;
        team_size?: string;
    };
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    let metrics: Record<string, string> = {};
    try {
        if (project.metrics) metrics = JSON.parse(project.metrics);
    } catch (e) { console.error('Metrics parse error', e); }

    const highlights = project.highlights?.split(',').map(h => h.trim()) || [];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
        >
            {/* Ảnh bìa */}
            <div className="relative h-52 w-full overflow-hidden bg-slate-100 group">
                {project.image_url ? (
                    <Image
                        src={project.image_url}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-slate-300">
                        <Code size={48} />
                    </div>
                )}

                {/* Badge Category */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold text-blue-700 bg-white/90 backdrop-blur shadow-sm rounded-full border border-blue-100">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Nội dung */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {project.title}
                    </h3>
                </div>

                <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {project.description}
                </p>

                {/* Metrics Grid - Điểm nhấn Technical */}
                {Object.keys(metrics).length > 0 && (
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {Object.entries(metrics).slice(0, 3).map(([key, value]) => (
                            <div key={key} className="bg-slate-50 p-2 rounded-lg border border-slate-100 text-center">
                                <div className="text-blue-600 font-bold text-sm">{value}</div>
                                <div className="text-[10px] text-slate-500 uppercase font-semibold mt-1 truncate">
                                    {key.replace(/_/g, ' ')}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Highlights Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {highlights.slice(0, 3).map((tag, i) => (
                        <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                        <div className="flex items-center gap-4">
                            {project.team_size && (
                                <span className="flex items-center gap-1"><Users size={14} /> {project.team_size}</span>
                            )}
                            {project.duration && (
                                <span className="flex items-center gap-1"><Clock size={14} /> {project.duration}</span>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Link href={`/projects/${project.id}`} className="flex-1 flex items-center justify-center py-2.5 bg-slate-900 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-all shadow-md hover:shadow-lg">
                            Xem Báo Cáo
                        </Link>
                        {project.repo_url && (
                            <a href={project.repo_url} target="_blank" className="p-2.5 bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 rounded-lg transition-colors">
                                <Github size={20} />
                            </a>
                        )}
                        {project.demo_url && (
                            <a href={project.demo_url} target="_blank" className="p-2.5 bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 rounded-lg transition-colors">
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}