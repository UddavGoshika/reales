import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    BarChart3,
    Files,
    Image as ImageIcon,
    Settings as SettingsIcon,
    LogOut,
    Plus,
    Trash2,
    Copy,
    ExternalLink,
    Save,
    CheckCircle2,
    LayoutDashboard
} from 'lucide-react';
import { VisualBuilder } from './builder/VisualBuilder';

const API_BASE = 'http://localhost:5000/api';

// --- PREMIUM COMPONENTS ---

const AdminLayout = ({ children, title }: { children: React.ReactNode, title: string }) => {
    return (
        <div className="flex h-screen bg-[#0B0B0D] text-[#F5F5F5] font-sans overflow-hidden">
            {/* Sidebar with Glassmorphism */}
            <aside className="w-72 bg-[#111116] border-r border-white/5 flex flex-col z-20 shadow-2xl relative">
                <div className="p-8 pb-10 flex items-center gap-3 border-b border-white/5">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#C6A75E] to-[#8E723B] rounded-xl flex items-center justify-center shadow-lg shadow-[#C6A75E]/20">
                        <BarChart3 size={22} className="text-black" />
                    </div>
                    <div>
                        <span className="text-xl font-bold tracking-tight block leading-none">ASTRA</span>
                        <span className="text-[10px] text-[#C6A75E] font-bold uppercase tracking-[0.3em] mt-1 block">Management</span>
                    </div>
                </div>

                <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] px-4 mb-4">Core Explorer</p>
                    <SidebarLink to="/admin" icon={<LayoutDashboard size={20} />} label="Overview" />
                    <SidebarLink to="/admin/pages" icon={<Files size={20} />} label="Pages Manager" />
                    <SidebarLink to="/admin/media" icon={<ImageIcon size={20} />} label="Media Library" />
                    <SidebarLink to="/admin/settings" icon={<SettingsIcon size={20} />} label="Global Settings" />
                </nav>

                <div className="p-6 border-t border-white/5 bg-[#0B0B0D]/50">
                    <button className="w-full group flex items-center gap-3 p-4 rounded-xl hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-all duration-300">
                        <LogOut size={18} className="group-hover:rotate-12 transition-transform" />
                        <span className="font-medium">Sign Out</span>
                    </button>
                    <div className="mt-6 flex items-center gap-3 px-4 py-3 bg-white/5 rounded-2xl border border-white/5">
                        <div className="w-8 h-8 rounded-full bg-[#C6A75E] flex items-center justify-center text-xs font-bold text-black italic">SA</div>
                        <div className="overflow-hidden">
                            <p className="text-xs font-bold truncate">Super Admin</p>
                            <p className="text-[10px] text-gray-500 truncate">admin@astra.com</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Area */}
            <main className="flex-1 flex flex-col relative z-10 overflow-hidden">
                {/* Header Background Glow */}
                <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-[#C6A75E]/5 blur-[120px] rounded-full pointer-events-none"></div>

                <header className="h-20 border-b border-white/5 bg-[#111116]/80 backdrop-blur-xl flex items-center justify-between px-12 z-20">
                    <div className="flex items-center gap-4">
                        <div className="h-1.5 w-8 bg-[#C6A75E] rounded-full"></div>
                        <h1 className="text-lg font-medium text-white/90 tracking-wide">{title}</h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            System Online
                        </div>
                        <div className="h-8 w-px bg-white/5"></div>
                        <button className="bg-white/5 hover:bg-white/10 p-2.5 rounded-xl border border-white/10 transition-colors">
                            <ImageIcon size={18} className="text-[#C6A75E]" />
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-12 relative h-full custom-scrollbar">
                    {children}
                </div>
            </main>
        </div>
    );
};

const SidebarLink = ({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) => {
    const isActive = window.location.pathname === to || (to !== '/admin' && window.location.pathname.startsWith(to));
    return (
        <Link to={to} className={`
            flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group
            ${isActive
                ? 'bg-gradient-to-r from-[#C6A75E]/20 to-transparent border-l-2 border-[#C6A75E] text-white'
                : 'text-gray-400 hover:text-white hover:bg-white/5'}
        `}>
            <span className={`${isActive ? 'text-[#C6A75E]' : 'group-hover:text-[#C6A75E] transition-colors duration-300'}`}>{icon}</span>
            <span className="text-sm font-semibold tracking-wide">{label}</span>
            {isActive && <div className="ml-auto w-1 h-1 bg-[#C6A75E] rounded-full shadow-[0_0_8px_#C6A75E]"></div>}
        </Link>
    );
};

// --- MODULE COMPONENTS ---

const DashboardHome = () => (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-2">Welcome Back, <span className="text-[#C6A75E]">Admin</span></h2>
            <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">Your professional CMS ecosystem is ready. Manage your listings, page layouts, and media assets with high-precision controls.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard label="Active Pages" value="8" trend="+2 this month" color="gold" />
            <StatCard label="Total Assets" value="56" trend="1.2 GB utilized" color="white" />
            <StatCard label="Site Views" value="2.4k" trend="+12% weekly" color="gold" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#111116] border border-white/5 p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <CheckCircle2 size={24} className="text-green-500" />
                    Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    <Link to="/admin/pages" className="bg-white/5 hover:bg-[#C6A75E] hover:text-black transition-all p-6 rounded-2xl border border-white/5 flex flex-col gap-3 group">
                        <Plus size={20} />
                        <span className="font-bold">New Page</span>
                    </Link>
                    <Link to="/admin/settings" className="bg-white/5 hover:bg-white/10 transition-all p-6 rounded-2xl border border-white/5 flex flex-col gap-3">
                        <SettingsIcon size={20} />
                        <span className="font-bold">Edit SEO</span>
                    </Link>
                </div>
            </div>
            <div className="bg-[#111116] border border-white/5 p-8 rounded-3xl shadow-xl flex items-center justify-center">
                <p className="text-gray-500 italic text-center text-sm">Real-time performance metrics for <br /> Astra & Goutam Valley will appear here.</p>
            </div>
        </div>
    </div>
);

const StatCard = ({ label, value, trend, color }: any) => (
    <div className="bg-gradient-to-br from-[#1A1A22] to-[#111116] p-8 rounded-3xl border border-white/5 shadow-2xl relative group transition-all duration-500 hover:translate-y-[-4px] hover:border-[#C6A75E]/20">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <BarChart3 size={60} />
        </div>
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{label}</h3>
        <p className={`text-5xl font-bold mb-4 ${color === 'gold' ? 'text-[#C6A75E]' : 'text-white'}`}>{value}</p>
        <p className="text-xs text-[#C6A75E]/80 font-medium tracking-wide flex items-center gap-1">
            <CheckCircle2 size={12} /> {trend}
        </p>
    </div>
);

const PagesManager = () => {
    const [pages, setPages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API_BASE}/pages`)
            .then(res => setPages(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const handleDuplicate = async (page: any) => {
        try {
            const res = await axios.post(`${API_BASE}/pages`, {
                title: `${page.title} (Copy)`,
                slug: `${page.slug}-copy`
            });
            setPages([res.data, ...pages]);
        } catch (err) { alert("Error duplicating"); }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Delete this page? This cannot be undone.")) return;
        try {
            await axios.delete(`${API_BASE}/pages/${id}`);
            setPages(pages.filter(p => p._id !== id));
        } catch (err) { alert("Error deleting"); }
    };

    return (
        <div className="animate-in fade-in duration-700">
            <div className="flex justify-between items-end mb-10">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Website Structure</h2>
                    <p className="text-gray-500">Manage all your independent and dynamic web pages here.</p>
                </div>
                <button className="bg-[#C6A75E] text-black px-7 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#E2C37C] transition-all shadow-xl shadow-[#C6A75E]/20">
                    <Plus size={20} /> Create New Instance
                </button>
            </div>

            <div className="bg-[#111116] rounded-3xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-2xl">
                {loading ? (
                    <div className="p-20 text-center text-gray-500 flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-[#C6A75E]/20 border-t-[#C6A75E] rounded-full animate-spin"></div>
                        <span>Acquiring page data...</span>
                    </div>
                ) : (
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5 text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
                                <th className="p-6">Title</th>
                                <th className="p-6">URL Path</th>
                                <th className="p-6">Visibility</th>
                                <th className="p-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pages.map(page => (
                                <tr key={page._id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                                    <td className="p-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-[#C6A75E] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                            <span className="font-bold text-lg">{page.title}</span>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <code className="bg-white/5 px-2 py-1 rounded text-[#C6A75E] text-xs">/{page.slug}</code>
                                    </td>
                                    <td className="p-6">
                                        <span className="px-3 py-1.5 text-[10px] font-bold tracking-widest rounded-full uppercase bg-green-500/10 text-green-500 border border-green-500/20">
                                            {page.status || 'published'}
                                        </span>
                                    </td>
                                    <td className="p-6 text-right flex items-center justify-end gap-3">
                                        <Link to={`/admin/pages/${page._id}/build`} className="bg-[#C6A75E]/10 px-4 py-2 rounded-xl text-[#C6A75E] text-xs font-bold hover:bg-[#C6A75E] hover:text-black transition-all">
                                            Edit Design
                                        </Link>
                                        <button onClick={() => handleDuplicate(page)} className="p-2 text-gray-500 hover:text-white transition-colors">
                                            <Copy size={16} />
                                        </button>
                                        <button onClick={() => handleDelete(page._id)} className="p-2 text-gray-500 hover:text-red-400 transition-colors">
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

const MediaLibrary = () => {
    const [media, setMedia] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API_BASE}/media`)
            .then(res => setMedia(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="animate-in fade-in duration-700">
            <div className="flex justify-between items-end mb-10">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Asset Vault</h2>
                    <p className="text-gray-500">Manage high-resolution images and videos for your sections.</p>
                </div>
                <button className="bg-white/10 text-white px-7 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/20 transition-all border border-white/5">
                    <Plus size={20} /> Upload New Asset
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {loading ? (
                    <div className="col-span-full py-20 text-center text-gray-500 italic">Scanning vault...</div>
                ) : media.map((item: any) => (
                    <div key={item._id} className="group relative aspect-square bg-[#1A1A22] rounded-3xl overflow-hidden border border-white/5 hover:border-[#C6A75E]/50 transition-all cursor-pointer">
                        <img src={item.fileUrl} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                            <p className="text-xs font-bold text-white mb-1 truncate">{item.fileName}</p>
                            <p className="text-[10px] text-gray-400">{item.fileType}</p>
                        </div>
                        <button className="absolute top-4 right-4 bg-red-500/20 hover:bg-red-500 p-2 rounded-xl text-red-500 hover:text-white transition-all scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100">
                            <Trash2 size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const GlobalSettings = () => {
    const [settings, setSettings] = useState<any>({});
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        axios.get(`${API_BASE}/settings`)
            .then(res => setSettings(res.data));
    }, []);

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await axios.put(`${API_BASE}/settings`, settings);
            alert("Settings Updated!");
        } catch (err) { alert("Save failed"); }
        finally { setIsSaving(false); }
    };

    return (
        <div className="animate-in fade-in duration-700 max-w-4xl mx-auto">
            <div className="flex justify-between items-end mb-12">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">System Configuration</h2>
                    <p className="text-gray-500">Website identity, global styling, and SEO parameters.</p>
                </div>
                <button onClick={handleSave} className="bg-[#C6A75E] text-black px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#E2C37C] transition-all shadow-xl shadow-[#C6A75E]/20">
                    {isSaving ? 'Processing...' : <><Save size={20} /> Update Master Config</>}
                </button>
            </div>

            <div className="space-y-8">
                <div className="bg-[#111116] p-10 rounded-3xl border border-white/5 shadow-xl">
                    <h3 className="text-xl font-bold mb-8 flex items-center gap-4">
                        <BarChart3 size={20} className="text-[#C6A75E]" />
                        Identity & SEO
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Site Title</label>
                            <input
                                type="text"
                                value={settings.siteName || ''}
                                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#C6A75E] transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Primary Listing Address</label>
                            <input
                                type="text"
                                value={settings.contactEmail || ''}
                                onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#C6A75E] transition-colors"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-[#111116] p-10 rounded-3xl border border-white/5 shadow-xl">
                    <h3 className="text-xl font-bold mb-8 flex items-center gap-4">
                        <BarChart3 size={20} className="text-[#C6A75E]" />
                        Aesthetics
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Primary Brand Color</label>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl" style={{ backgroundColor: settings.primaryColor || '#C6A75E' }}></div>
                                <input
                                    type="text"
                                    value={settings.primaryColor || '#C6A75E'}
                                    onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#C6A75E] transition-colors"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- MAIN WRAPPER ---

export default function AdminDashboard() {
    return (
        <Routes>
            <Route path="/" element={<AdminLayout title="Overview"><DashboardHome /></AdminLayout>} />
            <Route path="/pages" element={<AdminLayout title="Listings & Pages"><PagesManager /></AdminLayout>} />
            <Route path="/pages/:id/build" element={<VisualBuilder />} />
            <Route path="/media" element={<AdminLayout title="The Vault"><MediaLibrary /></AdminLayout>} />
            <Route path="/settings" element={<AdminLayout title="Core Settings"><GlobalSettings /></AdminLayout>} />
        </Routes>
    );
}
