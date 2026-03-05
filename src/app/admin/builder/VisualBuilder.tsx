import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
    ChevronLeft,
    Save,
    Plus,
    Trash2,
    GripVertical,
    Layers,
    Type,
    Image as ImageIcon,
    Layout,
    HelpCircle,
    MessageSquare,
    Sparkles,
    ArrowUp,
    ArrowDown
} from 'lucide-react';

const API_BASE = 'http://localhost:5000/api';

export const VisualBuilder = () => {
    const { id } = useParams();
    const [page, setPage] = useState<any>(null);
    const [sections, setSections] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [activeTab, setActiveTab] = useState<'content' | 'settings'>('content');

    useEffect(() => {
        // Fetch page details
        axios.get(`${API_BASE}/pages`).then(res => {
            const p = res.data.find((x: any) => x._id === id);
            setPage(p);
        });

        fetchSections();
    }, [id]);

    const fetchSections = () => {
        setLoading(true);
        axios.get(`${API_BASE}/pages/${id}/sections`)
            .then(res => setSections(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    };

    const handleAddSection = async (type: string) => {
        const defaults: Record<string, any> = {
            Hero: { title: 'Elite Residences', subtitle: 'The peak of luxury.', backgroundImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200' },
            Features: { heading: 'Our Landmarks', description: 'Experience the perfection of architecture.' },
            Gallery: { heading: 'Interior Excellence', images: [] },
            FAQ: { title: 'Frequently Asked', items: [{ q: 'How do I book?', a: 'Contact our sales team.' }] },
            Testimonials: { heading: 'What Residents Say', list: [{ name: 'John Doe', feedback: 'Amazing view and service!' }] },
            ProjectExecution: { heading: 'Project Execution', description: 'Visionary Minds' }
        };

        try {
            const res = await axios.post(`${API_BASE}/pages/${id}/sections`, {
                type,
                sortOrder: sections.length,
                content: defaults[type] || {}
            });
            setSections([...sections, res.data]);
        } catch (err) { alert("Failed to add block"); }
    };

    const handleUpdateContent = (sectionId: string, content: any) => {
        setSections(sections.map(s => s._id === sectionId ? { ...s, content } : s));
    };

    const handleMove = async (index: number, direction: 'up' | 'down') => {
        const newSections = [...sections];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= newSections.length) return;

        [newSections[index], newSections[targetIndex]] = [newSections[targetIndex], newSections[index]];
        setSections(newSections);
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const promises = sections.map((s, idx) =>
                axios.put(`${API_BASE}/pages/${id}/sections/${s._id}`, { ...s, sortOrder: idx })
            );
            await Promise.all(promises);
            alert("Page Published Successfully!");
        } catch (err) { alert("Save failed"); }
        finally { setIsSaving(false); }
    };

    if (!page) return <div className="h-screen bg-[#0B0B0D] flex items-center justify-center text-gray-500 font-medium">Initializing Astra Engine...</div>;

    return (
        <div className="flex h-screen bg-[#0B0B0D] text-[#F5F5F5] font-sans absolute inset-0 z-[100] overflow-hidden">
            {/* Visual Builder Sidebar */}
            <aside className="w-80 bg-[#111116] border-r border-white/5 flex flex-col shadow-2xl">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                    <Link to="/admin/pages" className="p-2 hover:bg-white/5 rounded-xl transition-colors text-gray-400 hover:text-white">
                        <ChevronLeft size={20} />
                    </Link>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-[#C6A75E]">Builder</h2>
                    <div className="w-8"></div>
                </div>

                <div className="p-6 flex-1 overflow-y-auto space-y-6">
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-4">Structure Elements</p>
                        <div className="grid grid-cols-2 gap-3">
                            <BlockButton icon={<Layout size={18} />} label="Hero" onClick={() => handleAddSection('Hero')} />
                            <BlockButton icon={<Sparkles size={18} />} label="Features" onClick={() => handleAddSection('Features')} />
                            <BlockButton icon={<ImageIcon size={18} />} label="Gallery" onClick={() => handleAddSection('Gallery')} />
                            <BlockButton icon={<HelpCircle size={18} />} label="FAQ" onClick={() => handleAddSection('FAQ')} />
                            <BlockButton icon={<MessageSquare size={18} />} label="Reviews" onClick={() => handleAddSection('Testimonials')} />
                            <BlockButton icon={<Type size={18} />} label="Text Content" onClick={() => handleAddSection('TextContent')} />
                            <BlockButton icon={<Layers size={18} />} label="Project Execution" onClick={() => handleAddSection('ProjectExecution')} />
                        </div>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-4">Page layers</p>
                        <div className="space-y-3">
                            {sections.map((s, idx) => (
                                <div key={s._id} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 text-xs font-semibold hover:border-[#C6A75E]/30 transition-all cursor-move">
                                    <GripVertical size={14} className="text-gray-600" />
                                    <span className="truncate">{s.type} Section</span>
                                    <div className="ml-auto flex gap-1">
                                        <button onClick={() => handleMove(idx, 'up')} className="p-1 hover:text-[#C6A75E] transition-colors"><ArrowUp size={12} /></button>
                                        <button onClick={() => handleMove(idx, 'down')} className="p-1 hover:text-[#C6A75E] transition-colors"><ArrowDown size={12} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-white/5 bg-[#0B0B0D]">
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="w-full bg-[#C6A75E] text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#E2C37C] transition-all shadow-xl shadow-[#C6A75E]/20 disabled:opacity-50"
                    >
                        <Save size={18} /> {isSaving ? 'Synching...' : 'Publish Evolution'}
                    </button>
                </div>
            </aside>

            {/* Editor Main Canvas */}
            <main className="flex-1 overflow-y-auto p-12 bg-[#0B0B0D] relative custom-scrollbar">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="flex flex-col gap-2 mb-8">
                        <h1 className="text-4xl font-bold">Editing: <span className="text-[#C6A75E]">{page.title}</span></h1>
                        <p className="text-gray-500 text-lg">Modify your section data below to update the live website.</p>
                    </div>

                    {sections.length === 0 ? (
                        <div className="py-32 border-2 border-dashed border-white/5 rounded-[40px] flex flex-col items-center justify-center text-gray-600 gap-4">
                            <Layers size={48} className="opacity-20" />
                            <p className="text-xl font-medium">Your canvas is empty.</p>
                            <p className="text-sm">Select a block from the left to start building.</p>
                        </div>
                    ) : (
                        sections.map((section, index) => (
                            <div key={section._id} className="bg-[#111116] rounded-[32px] border border-white/5 shadow-2x-strong overflow-hidden animate-in fade-in slide-in-from-bottom-6 transition-all duration-500 hover:border-white/10 group">
                                {/* Block Header */}
                                <div className="px-10 py-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#1A1A22] border border-white/10 flex items-center justify-center text-[10px] font-bold text-[#C6A75E]">
                                            {index + 1}
                                        </div>
                                        <h3 className="font-bold tracking-wide uppercase text-xs text-gray-400">{section.type} Block</h3>
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (window.confirm("Delete block?")) {
                                                axios.delete(`${API_BASE}/pages/${id}/sections/${section._id}`);
                                                setSections(sections.filter(s => s._id !== section._id));
                                            }
                                        }}
                                        className="p-2 text-gray-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>

                                {/* Block Editor Form */}
                                <div className="p-10 space-y-8">
                                    {section.type === 'Hero' && (
                                        <div className="grid grid-cols-1 gap-6">
                                            <InputField label="Headline Title" value={section.content.title} onChange={v => handleUpdateContent(section._id, { ...section.content, title: v })} />
                                            <TextareaField label="Subtext Description" value={section.content.subtitle} onChange={v => handleUpdateContent(section._id, { ...section.content, subtitle: v })} />
                                            <InputField label="Background Asset URL" value={section.content.backgroundImage} onChange={v => handleUpdateContent(section._id, { ...section.content, backgroundImage: v })} />
                                        </div>
                                    )}
                                    {section.type === 'Features' && (
                                        <div className="grid grid-cols-1 gap-6">
                                            <InputField label="Section Heading" value={section.content.heading} onChange={v => handleUpdateContent(section._id, { ...section.content, heading: v })} />
                                            <TextareaField label="Main Description" value={section.content.description} onChange={v => handleUpdateContent(section._id, { ...section.content, description: v })} />
                                        </div>
                                    )}
                                    {section.type === 'Testimonials' && (
                                        <div className="space-y-6">
                                            <InputField label="Section Heading" value={section.content.heading} onChange={v => handleUpdateContent(section._id, { ...section.content, heading: v })} />
                                            <p className="text-[10px] font-bold text-[#C6A75E] uppercase tracking-widest">Active Feedbacks</p>
                                            {section.content.list?.map((item: any, idx: number) => (
                                                <div key={idx} className="bg-[#0B0B0D] p-6 rounded-2xl border border-white/5 gap-4 space-y-4">
                                                    <InputField label="Subject Name" value={item.name} onChange={v => {
                                                        const newList = [...section.content.list];
                                                        newList[idx].name = v;
                                                        handleUpdateContent(section._id, { ...section.content, list: newList });
                                                    }} />
                                                    <TextareaField label="Feedback Statement" value={item.feedback} onChange={v => {
                                                        const newList = [...section.content.list];
                                                        newList[idx].feedback = v;
                                                        handleUpdateContent(section._id, { ...section.content, list: newList });
                                                    }} />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {section.type === 'TextContent' && (
                                        <TextareaField label="Paragraph Content" value={section.content.text} onChange={v => handleUpdateContent(section._id, { ...section.content, text: v })} rows={10} />
                                    )}
                                    {section.type === 'ProjectExecution' && (
                                        <div className="grid grid-cols-1 gap-6">
                                            <InputField label="Heading" value={section.content.heading} onChange={v => handleUpdateContent(section._id, { ...section.content, heading: v })} />
                                            <InputField label="Description" value={section.content.description} onChange={v => handleUpdateContent(section._id, { ...section.content, description: v })} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
};

// --- MINI UI BUILDER COMPONENTS ---

const BlockButton = ({ icon, label, onClick }: any) => (
    <button onClick={onClick} className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-[#C6A75E]/50 group transition-all">
        <div className="text-gray-400 group-hover:text-[#C6A75E] transition-colors mb-2">{icon}</div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{label}</span>
    </button>
);

const InputField = ({ label, value, onChange }: any) => (
    <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 block">{label}</label>
        <input
            type="text"
            value={value || ''}
            onChange={e => onChange(e.target.value)}
            className="w-full bg-[#0B0B0D] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#C6A75E] transition-all text-white font-medium"
        />
    </div>
);

const TextareaField = ({ label, value, onChange, rows = 4 }: any) => (
    <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 block">{label}</label>
        <textarea
            rows={rows}
            value={value || ''}
            onChange={e => onChange(e.target.value)}
            className="w-full bg-[#0B0B0D] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#C6A75E] transition-all text-white font-medium resize-none leading-relaxed"
        />
    </div>
);
