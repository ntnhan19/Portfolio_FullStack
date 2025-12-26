'use client';

import Link from 'next/link';
import { Github, ExternalLink, Code2, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
    project: any; // Dùng type Project import từ type thì tốt hơn
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    let metrics: Record<string, string> = {};
    try {
        if (project.metrics) metrics = JSON.parse(project.metrics);
    } catch (e) { }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
        >
            <div className="relative h-48 bg-slate-100 overflow-hidden">
                {project.image_url ? (
                    <Image src={project.image_url} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                    <div className="flex items-center justify-center h-full text-slate-300"><Code2 size={40} /></div>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                    {project.category}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {project.description}
                </p>

                {/* Metrics Grid - Style mới gọn gàng */}
                {Object.keys(metrics).length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        {Object.entries(metrics).slice(0, 2).map(([key, value]) => (
                            <div key={key} className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                                <div className="text-xs text-slate-500 uppercase font-semibold">{key.replace(/_/g, ' ')}</div>
                                <div className="text-sm font-bold text-blue-600">{value}</div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex gap-3">
                        {project.repo_url && (
                            <a href={project.repo_url} target="_blank" className="text-slate-500 hover:text-slate-900 transition-colors" title="Source Code">
                                <Github size={20} />
                            </a>
                        )}
                        {project.demo_url && (
                            <a href={project.demo_url} target="_blank" className="text-slate-500 hover:text-blue-600 transition-colors" title="Live Demo">
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                    <Link href={`/projects/${project.id}`} className="text-sm font-semibold text-blue-600 hover:underline">
                        Xem chi tiết →
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}