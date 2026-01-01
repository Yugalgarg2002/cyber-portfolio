import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { posts } from '../../../data/posts';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

export function BlogVisualizer() {
    const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

    const selectedPost = posts.find(p => p.id === selectedPostId);

    return (
        <div className="flex flex-col relative bg-vault-dark/50 border border-vault-border rounded-lg min-h-[400px]">
            <div className="absolute top-4 left-4 text-xs font-mono text-vault-text-dim z-20">
                FIELD_LOGS // {selectedPost ? 'READING_MODE' : 'ARCHIVE_INDEX'}
            </div>

            <div className="p-6 pt-16">
                <AnimatePresence mode="wait">
                    {!selectedPost ? (
                        <motion.div
                            key="list"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                            {posts.map((post) => (
                                <div
                                    key={post.id}
                                    onClick={() => setSelectedPostId(post.id)}
                                    className="border border-vault-border bg-vault-panel hover:border-vault-neon/50 hover:bg-vault-neon/5 transition-all p-4 cursor-pointer group flex flex-col gap-2"
                                >
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-display font-bold text-vault-text-primary text-lg group-hover:text-vault-neon transition-colors">
                                            {post.title}
                                        </h3>
                                        <ArrowLeft className="rotate-180 opacity-0 group-hover:opacity-100 text-vault-neon transition-all" size={16} />
                                    </div>
                                    
                                    <div className="flex items-center gap-4 text-xs text-vault-text-dim font-mono mt-auto pt-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={12} /> {post.date}
                                        </span>
                                        <div className="flex gap-2">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="flex items-center gap-1 bg-vault-border/50 px-1.5 py-0.5 rounded">
                                                    <Tag size={10} /> {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="post"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex flex-col"
                        >
                            <button
                                onClick={() => setSelectedPostId(null)}
                                className="self-start flex items-center gap-2 text-vault-neon hover:text-white transition-colors mb-6 font-mono text-xs uppercase tracking-wider"
                            >
                                <ArrowLeft size={14} /> Back to Index
                            </button>

                            <article className="prose prose-invert prose-headings:font-display prose-headings:text-vault-neon prose-p:text-vault-text-secondary prose-a:text-vault-amber prose-code:text-pink-400 prose-pre:bg-vault-dark prose-pre:border prose-pre:border-vault-border max-w-none font-mono text-sm">
                                <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
                            </article>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

