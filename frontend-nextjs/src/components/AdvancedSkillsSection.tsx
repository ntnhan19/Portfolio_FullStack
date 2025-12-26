import { motion } from 'framer-motion';
import {
    Code2, Database, Server, Globe,
    Brain, GitBranch, Container
} from 'lucide-react';

export default function AdvancedSkillsSection() {
    const skillCategories = [
        {
            title: "Backend Development",
            icon: <Server size={24} />,
            color: "blue",
            skills: [
                { name: "Go (Golang)", level: 85, experience: "6 tháng" },
                { name: "Node.js", level: 90, experience: "2 năm" },
            ]
        },
        {
            title: "Frontend Development",
            icon: <Globe size={24} />,
            color: "purple",
            skills: [
                { name: "Next.js / React", level: 85, experience: "1.5 năm" },
                { name: "TypeScript", level: 80, experience: "1 năm" },
                { name: "Tailwind CSS", level: 90, experience: "1.5 năm" },
            ]
        },
        {
            title: "Database & Storage",
            icon: <Database size={24} />,
            color: "green",
            skills: [
                { name: "PostgreSQL", level: 85, experience: "1.5 năm" },
                { name: "SQL Server", level: 80, experience: "1 năm" },
            ]
        },
        {
            title: "AI & Machine Learning",
            icon: <Brain size={24} />,
            color: "pink",
            skills: [
                { name: "LangChain", level: 70, experience: "3 tháng" },
                { name: "Gemini API", level: 70, experience: "3 tháng" },
                { name: "Vector DB (Pinecone)", level: 70, experience: "3 tháng" },
            ]
        },
        {
            title: "DevOps & Tools",
            icon: <Container size={24} />,
            color: "orange",
            skills: [
                { name: "Docker", level: 70, experience: "8 tháng" },
                { name: "Git / GitHub", level: 90, experience: "3 năm" },
            ]
        },
        {
            title: "Network Programming",
            icon: <GitBranch size={24} />,
            color: "cyan",
            skills: [
                { name: "Socket.io (WebSocket)", level: 85, experience: "1 năm" },
                { name: "TCP/IP", level: 75, experience: "8 tháng" },
                { name: "HTTP/REST API", level: 90, experience: "2 năm" },
            ]
        },
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, string> = {
            blue: "from-blue-500 to-blue-600",
            purple: "from-purple-500 to-purple-600",
            green: "from-green-500 to-green-600",
            pink: "from-pink-500 to-pink-600",
            orange: "from-orange-500 to-orange-600",
            cyan: "from-cyan-500 to-cyan-600",
        };
        return colors[color] || colors.blue;
    };

    return (
        <section className="max-w-6xl mx-auto mb-32 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Technical Skills
                    </span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Công nghệ và công cụ tôi sử dụng để xây dựng các giải pháp phần mềm chất lượng cao
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${getColorClasses(category.color)} shadow-lg`}>
                                <div className="text-white">
                                    {category.icon}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-white">{category.title}</h3>
                        </div>

                        {/* Skills List */}
                        <div className="space-y-4">
                            {category.skills.map((skill, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                                        <span className="text-xs text-gray-500">{skill.experience}</span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: idx * 0.1 + i * 0.1 }}
                                            className={`h-full bg-gradient-to-r ${getColorClasses(category.color)} rounded-full`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Summary Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
                {[
                    { label: "Years Coding", value: "3+" },
                    { label: "Projects Built", value: "4+" },
                    { label: "Technologies", value: "10+" },
                    { label: "GitHub Commits", value: "1000+" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                        <div className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}