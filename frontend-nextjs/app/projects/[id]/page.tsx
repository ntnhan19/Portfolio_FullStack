'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getBlogPosts } from '../../../src/lib/api';
import { BlogPost } from '../../../src/types/index';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

export default function BlogDetail() {
    const { id } = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPost() {
            try {
                const allPosts = await getBlogPosts();
                const found = allPosts.find((p: BlogPost) => p.id.toString() === id);
                setPost(found || null);
            } catch (err) {
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        }
        if (id) fetchPost();
    }, [id]);

    if (loading) return <div className="min-h-screen bg-[#0a0a0a] text-white p-10"><p className="text-center">Loading...</p></div>;
    if (!post) return <div className="min-h-screen bg-[#0a0a0a] text-white p-10"><p className="text-center">Blog not found</p></div>;

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <div className="max-w-4xl mx-auto px-6 py-20">
                <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
                    <ArrowLeft size={16} className="mr-2" /> Quay lại trang chủ
                </Link>

                <article>
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

                    <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <Calendar size={14} /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <Tag size={14} /> {post.tags}
                        </span>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </article>
            </div>
        </div>
    );
}