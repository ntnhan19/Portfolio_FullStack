import Link from 'next/link';
import { Project } from '../types/index';
import { Github, ExternalLink, Code } from 'lucide-react';

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <span className="bg-blue-600 text-xs font-bold px-2 py-1 rounded text-white">
                    {project.category}
                </span>
                <div className="flex space-x-3">
                    {project.repo_url && (
                        <a href={project.repo_url} target="_blank" className="text-gray-400 hover:text-white">
                            <Github size={20} />
                        </a>
                    )}
                    {project.demo_url && (
                        <a href={project.demo_url} target="_blank" className="text-gray-400 hover:text-white">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                {project.description}
            </p>

            <div className="mt-auto">
                <div className="flex items-center text-gray-500 text-xs mb-4">
                    <Code size={14} className="mr-1" />
                    <span>{project.tech_stack}</span>
                </div>

                <Link
                    href={`/projects/${project.id}`}
                    className="block w-full text-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded transition-colors"
                >
                    Xem chi tiết báo cáo
                </Link>
            </div>
        </div>
    );
}