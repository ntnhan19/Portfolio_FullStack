'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getProjects } from '../../../src/lib/api';
import { Project } from '../../../src/types/index';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft, Github, Calendar } from 'lucide-react';

export default function ProjectDetail() {
    const { id } = useParams();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDetail() {
            try {
                const allProjects = await getProjects();
                const found = allProjects.find((p: any) => p.id.toString() === id);
                setProject(found || null);
            } catch (err) {
                console.error('Error fetching project:', err);
            } finally {
                setLoading(false);
            }
        }
        if (id) {
            fetchDetail();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 text-white p-10">
                <div className="text-center py-20">
                    <p className="text-gray-400">Đang tải báo cáo...</p>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-900 text-white p-10">
                <div className="text-center py-20">
                    <p className="text-gray-400 mb-4">Không tìm thấy dự án.</p>
                    <Link href="/" className="text-blue-400 hover:text-blue-300">
                        Quay lại trang chủ
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans">
            {/* Header ảnh bìa (Gradient) */}
            <div className="h-64 bg-gradient-to-r from-blue-900 to-gray-900 flex items-center justify-center">
                <h1 className="text-4xl font-bold px-4 text-center">{project.title}</h1>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-10 -mt-20">
                <div className="bg-gray-800 rounded-lg shadow-2xl p-8">
                    <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
                        <ArrowLeft size={16} className="mr-2" /> Quay lại trang chủ
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-8 text-sm border-b border-gray-700 pb-6">
                        <span className="bg-blue-600 px-3 py-1 rounded text-white font-medium">{project.category}</span>
                        <span className="flex items-center text-gray-400">
                            <Calendar size={14} className="mr-1" /> 
                            {new Date(project.created_at).toLocaleDateString('vi-VN')}
                        </span>
                        {project.repo_url && (
                            <a 
                                href={project.repo_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center text-blue-400 hover:text-blue-300"
                            >
                                <Github size={14} className="mr-1" /> Source Code
                            </a>
                        )}
                    </div>

                    {/* Tech Stack */}
                    {project.tech_stack && (
                        <div className="mb-6">
                            <h3 className="text-sm font-semibold text-gray-400 mb-2">Công nghệ sử dụng:</h3>
                            <p className="text-gray-300">{project.tech_stack}</p>
                        </div>
                    )}

                    {/* Description */}
                    {project.description && (
                        <div className="mb-6">
                            <p className="text-gray-300 text-lg">{project.description}</p>
                        </div>
                    )}

                    {/* Render Markdown Content - Phần nội dung báo cáo */}
                    {project.content && (
                        <article className="prose prose-invert prose-lg max-w-none mt-8">
                            <ReactMarkdown>{project.content}</ReactMarkdown>
                        </article>
                    )}
                </div>
            </div>
        </div>
    );
}

