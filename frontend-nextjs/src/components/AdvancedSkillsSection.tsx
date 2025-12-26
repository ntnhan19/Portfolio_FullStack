import { motion } from 'framer-motion';
import { Code2, Database, Server, Globe, Brain, GitBranch, Container, Layers } from 'lucide-react';

export default function AdvancedSkillsSection() {
    const skillCategories = [
        {
            title: "Backend & Core",
            icon: <Server size={24} />,
            color: "text-blue-600 bg-blue-50",
            skills: [
                { name: "Go (Golang)", level: 85, desc: "High Perf, Gin, GORM" },
                { name: "Node.js", level: 90, desc: "Event Loop, Express" },
                { name: "C# .NET", level: 80, desc: "ASP.NET Core, MVC" },
            ]
        },
        {
            title: "Frontend & UI",
            icon: <Globe size={24} />,
            color: "text-purple-600 bg-purple-50",
            skills: [
                { name: "Next.js / React", level: 85, desc: "SSR, Hooks, Redux" },
                { name: "Tailwind CSS", level: 90, desc: "Responsive, Dark mode" },
                { name: "TypeScript", level: 80, desc: "Strict Typing" },
            ]
        },
        {
            title: "Data & AI",
            icon: <Database size={24} />,
            color: "text-emerald-600 bg-emerald-50",
            skills: [
                { name: "PostgreSQL", level: 85, desc: "Complex Queries, Indexing" },
                { name: "Redis", level: 75, desc: "Caching, Pub/Sub" },
                { name: "RAG / LangChain", level: 70, desc: "Vector DB, LLM Integration" },
            ]
        },
        {
            title: "System & Tools",
            icon: <Container size={24} />,
            color: "text-orange-600 bg-orange-50",
            skills: [
                { name: "Docker", level: 75, desc: "Containerization" },
                { name: "Socket.io", level: 85, desc: "Real-time Communication" },
                { name: "Git / CI/CD", level: 80, desc: "GitHub Actions, Vercel" },
            ]
        },
    ];

    return (
        <section className="max-w-6xl mx-auto mb-32 relative z-10 px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Proficiency</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Bộ công cụ kỹ thuật tôi sử dụng để giải quyết các vấn đề phức tạp.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((cat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-shadow"
                    >
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${cat.color}`}>
                            {cat.icon}
                        </div>
                        <h3 className="font-bold text-slate-900 mb-4">{cat.title}</h3>
                        <div className="space-y-4">
                            {cat.skills.map((skill, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-medium text-slate-700">{skill.name}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-slate-900 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1">{skill.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}