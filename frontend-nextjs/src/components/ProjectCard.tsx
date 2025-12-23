'use client';

import Link from 'next/link';
import { Project } from '../types/index';
import { Github, ExternalLink, Code, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative flex flex-col h-full"
        >
            {/* Hiệu ứng Glow phía sau */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-100 transition duration-500 blur-lg group-hover:blur-xl"></div>

            {/* Nội dung Card chính */}
            <div className="relative flex flex-col h-full bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">

                {/* Header: Category & Links */}
                <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20">
                        {project.category}
                    </span>
                    <div className="flex gap-3">
                        {project.repo_url && (
                            <a href={project.repo_url} target="_blank" className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded">
                                <Github size={18} />
                            </a>
                        )}
                        {project.demo_url && (
                            <a href={project.demo_url} target="_blank" className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded">
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {project.description}
                </p>

                {/* Footer: Stack & Button */}
                <div className="mt-auto space-y-4">
                    <div className="flex items-center text-gray-500 text-xs py-3 border-t border-white/5">
                        <Code size={14} className="mr-2 text-purple-400" />
                        <span className="truncate">{project.tech_stack}</span>
                    </div>

                    <Link
                        href={`/projects/${project.id}`}
                        className="flex items-center justify-center w-full py-2.5 bg-white/5 hover:bg-blue-600/20 text-sm font-medium text-gray-300 hover:text-blue-400 border border-white/5 hover:border-blue-500/50 rounded-lg transition-all group-active:scale-[0.98]"
                    >
                        Xem Báo Cáo Chi Tiết <ArrowRight size={14} className="ml-2" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}