import React, { useState, useEffect } from "react";
import { IKContext, IKUpload } from "imagekitio-react";
import { FaTrash, FaEdit, FaPlus, FaSave, FaTimes, FaArrowUp, FaArrowDown } from "react-icons/fa";

const authenticator = async () => {
  const token = localStorage.getItem("dev_token");
  try {
    const response = await fetch("/api/imagekit/auth", {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (!response.ok) throw new Error("Auth request failed");
    const data = await response.json();
    const { signature, expire, token: auth_token } = data;
    return { signature, expire, token: auth_token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

export default function Dev() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("dev_token"));
  const [data, setData] = useState({ projects: [], team: { core: [], board: [] } });
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");
  const [editingItem, setEditingItem] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  const login = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });
    if (res.ok) {
      const { token } = await res.json();
      localStorage.setItem("dev_token", token);
      setToken(token);
    } else {
      alert("Invalid password");
    }
  };

  const logout = () => {
    localStorage.removeItem("dev_token");
    setToken(null);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [projRes, teamRes] = await Promise.all([
        fetch("/api/projects"),
        fetch("/api/team")
      ]);
      const projects = await projRes.json();
      const team = await teamRes.json();
      setData({ projects, team });
    } catch (e) {
      console.error(e);
      alert("Failed to fetch data");
    }
    setLoading(false);
  };

  const deleteItem = async (type, id) => {
    if (!confirm("Are you sure?")) return;
    const endpoint = type === "projects" ? `/api/projects/${id}` : `/api/team/${activeTab}/${id}`;
    const res = await fetch(endpoint, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) {
      fetchData();
    } else {
      alert("Delete failed");
    }
  };

  const saveItem = async (e) => {
    e.preventDefault();
    const isProject = activeTab === "projects";
    const endpoint = isProject
      ? (editingItem.id ? `/api/projects/${editingItem.id}` : "/api/projects")
      : (editingItem.id ? `/api/team/${activeTab}/${editingItem.id}` : `/api/team/${activeTab}`);
    const method = editingItem.id ? "PUT" : "POST";

    const res = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(editingItem)
    });

    if (res.ok) {
      setEditingItem(null);
      fetchData();
    } else {
      alert("Save failed");
    }
  };

  const onError = err => {
    setUploading(false);
    alert("Image upload failed: " + err.message);
  };

  const onSuccess = res => {
    setUploading(false);
    setEditingItem(prev => ({ ...prev, img: res.url }));
  };

  const onUploadStart = () => {
    setUploading(true);
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
        <form onSubmit={login} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#b6316c]">Admin Login</h2>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Admin Password"
            className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#b6316c]"
          />
          <button type="submit" className="w-full bg-[#b6316c] text-white p-3 rounded font-bold hover:bg-[#9a295c] transition">
            Login
          </button>
        </form>
      </div>
    );
  }

  const renderForm = () => {
    const isProject = activeTab === "projects";
    return (
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 relative">
          <button onClick={() => setEditingItem(null)} className="absolute top-4 right-4 text-gray-500 hover:text-black">
            <FaTimes size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-6 text-[#b6316c]">
            {editingItem.id ? "Edit" : "Add"} {isProject ? "Project" : "Team Member"}
          </h2>
          <form onSubmit={saveItem} className="space-y-4">
            
            {/* Common fields */}
            <div>
              <label className="block text-sm font-bold mb-1">Image</label>
              {editingItem.img && (
                <img src={editingItem.img} alt="Preview" className="h-32 w-auto object-cover rounded mb-2 border" />
              )}
              <IKContext
                publicKey={import.meta.env.VITE_IMG_KIT_PUBLIC_KEY}
                urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
                authenticator={authenticator}
              >
                <div className="relative">
                  <IKUpload
                    fileName="upload.jpg"
                    onError={onError}
                    onSuccess={onSuccess}
                    onUploadStart={onUploadStart}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#f9eaf1] file:text-[#b6316c] hover:file:bg-[#f3d5e2]"
                  />
                  {uploading && <span className="absolute right-2 top-2 text-sm text-[#b6316c] animate-pulse">Uploading...</span>}
                </div>
              </IKContext>
            </div>

            {isProject ? (
              <>
                <div>
                  <label className="block text-sm font-bold mb-1">Title</label>
                  <input type="text" required value={editingItem.title || ""} onChange={e => setEditingItem({ ...editingItem, title: e.target.value })} className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Description</label>
                  <textarea required value={editingItem.desc || ""} onChange={e => setEditingItem({ ...editingItem, desc: e.target.value })} className="w-full p-2 border rounded" rows={3}></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1">Category</label>
                    <select value={editingItem.category || ""} onChange={e => setEditingItem({ ...editingItem, category: e.target.value })} className="w-full p-2 border rounded">
                      <option value="">Select Category</option>
                      <option value="community">Community</option>
                      <option value="education">Education</option>
                      <option value="environment">Environment</option>
                      <option value="health">Health</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Status</label>
                    <select value={editingItem.status || "completed"} onChange={e => setEditingItem({ ...editingItem, status: e.target.value })} className="w-full p-2 border rounded">
                      <option value="completed">Completed</option>
                      <option value="ongoing">Ongoing</option>
                      <option value="upcoming">Upcoming</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Date</label>
                    <input type="date" value={editingItem.date || ""} onChange={e => setEditingItem({ ...editingItem, date: e.target.value })} className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Location</label>
                    <input type="text" value={editingItem.location || ""} onChange={e => setEditingItem({ ...editingItem, location: e.target.value })} className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Volunteers</label>
                    <input type="number" value={editingItem.volunteers || 0} onChange={e => setEditingItem({ ...editingItem, volunteers: parseInt(e.target.value) })} className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Impact</label>
                    <input type="text" value={editingItem.impact || ""} onChange={e => setEditingItem({ ...editingItem, impact: e.target.value })} className="w-full p-2 border rounded" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">What Happened</label>
                  <textarea value={editingItem.whatHappened || ""} onChange={e => setEditingItem({ ...editingItem, whatHappened: e.target.value })} className="w-full p-2 border rounded" rows={3}></textarea>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-bold mb-1">Name</label>
                  <input type="text" required value={editingItem.name || ""} onChange={e => setEditingItem({ ...editingItem, name: e.target.value })} className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Roles (comma separated)</label>
                  <input type="text" required value={(editingItem.roles || []).join(", ")} onChange={e => setEditingItem({ ...editingItem, roles: e.target.value.split(",").map(r => r.trim()) })} className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Intro/Bio</label>
                  <textarea required value={editingItem.intro || ""} onChange={e => setEditingItem({ ...editingItem, intro: e.target.value })} className="w-full p-2 border rounded" rows={3}></textarea>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1">LinkedIn</label>
                    <input type="text" value={editingItem.social?.linkedin || ""} onChange={e => setEditingItem({ ...editingItem, social: { ...editingItem.social, linkedin: e.target.value } })} className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Instagram</label>
                    <input type="text" value={editingItem.social?.instagram || ""} onChange={e => setEditingItem({ ...editingItem, social: { ...editingItem.social, instagram: e.target.value } })} className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Email</label>
                    <input type="email" value={editingItem.social?.email || ""} onChange={e => setEditingItem({ ...editingItem, social: { ...editingItem.social, email: e.target.value } })} className="w-full p-2 border rounded" />
                  </div>
                </div>
              </>
            )}

            <button disabled={uploading} type="submit" className="w-full bg-[#b6316c] text-white p-3 rounded-full font-bold hover:bg-[#9a295c] transition disabled:opacity-50">
              <FaSave className="inline mr-2" /> Save
            </button>
          </form>
        </div>
      </div>
    );
  };

  const getActiveData = () => {
    if (activeTab === "projects") return data.projects;
    if (activeTab === "core") return data.team.core;
    if (activeTab === "board") return data.team.board;
    return [];
  };

  const reorder = async (index, direction) => {
    const list = [...getActiveData()];
    if (direction === "up" && index > 0) {
      [list[index - 1], list[index]] = [list[index], list[index - 1]];
    } else if (direction === "down" && index < list.length - 1) {
      [list[index + 1], list[index]] = [list[index], list[index + 1]];
    } else {
      return;
    }
    
    // update locally
    if (activeTab === "projects") {
      setData(prev => ({ ...prev, projects: list }));
    } else if (activeTab === "core") {
      setData(prev => ({ ...prev, team: { ...prev.team, core: list } }));
    } else if (activeTab === "board") {
      setData(prev => ({ ...prev, team: { ...prev.team, board: list } }));
    }

    // save to server
    const endpoint = activeTab === "projects" ? "/api/projects/reorder" : `/api/team/${activeTab}/reorder`;
    const body = activeTab === "projects" ? { reorderedProjects: list } : { reorderedTeam: list };
    
    await fetch(endpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(body)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#b6316c]">Content Management</h1>
          <button onClick={logout} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 font-semibold">
            Logout
          </button>
        </div>

        <div className="flex gap-4 mb-8">
          <button onClick={() => setActiveTab("projects")} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === "projects" ? "bg-[#b6316c] text-white shadow-md" : "bg-white text-gray-600 border hover:bg-gray-50"}`}>
            Projects
          </button>
          <button onClick={() => setActiveTab("core")} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === "core" ? "bg-[#b6316c] text-white shadow-md" : "bg-white text-gray-600 border hover:bg-gray-50"}`}>
            Core Team
          </button>
          <button onClick={() => setActiveTab("board")} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === "board" ? "bg-[#b6316c] text-white shadow-md" : "bg-white text-gray-600 border hover:bg-gray-50"}`}>
            Board of Directors
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500 text-xl font-semibold">Loading...</div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold capitalize text-gray-800">Manage {activeTab}</h2>
              <button 
                onClick={() => setEditingItem(activeTab === "projects" ? { status: "completed" } : { social: {} })} 
                className="bg-[#b6316c] text-white px-4 py-2 rounded font-semibold flex items-center gap-2 hover:bg-[#9a295c]"
              >
                <FaPlus /> Add New
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-100 text-gray-600">
                    <th className="p-3">Order</th>
                    <th className="p-3">Image</th>
                    <th className="p-3">{activeTab === "projects" ? "Title" : "Name"}</th>
                    <th className="p-3 hidden md:table-cell">{activeTab === "projects" ? "Category" : "Role"}</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {getActiveData().map((item, index) => (
                    <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="p-3 w-20">
                        <div className="flex flex-col gap-1 text-gray-400">
                          <button onClick={() => reorder(index, "up")} className="hover:text-[#b6316c]"><FaArrowUp /></button>
                          <button onClick={() => reorder(index, "down")} className="hover:text-[#b6316c]"><FaArrowDown /></button>
                        </div>
                      </td>
                      <td className="p-3">
                        <img src={item.img} alt={item.title || item.name} className="w-16 h-16 object-cover rounded-lg border" />
                      </td>
                      <td className="p-3 font-semibold text-gray-800">{item.title || item.name}</td>
                      <td className="p-3 hidden md:table-cell text-gray-500">
                        {activeTab === "projects" ? item.category : (item.roles?.join(", ") || "")}
                      </td>
                      <td className="p-3 text-right">
                        <button onClick={() => setEditingItem(item)} className="text-blue-500 hover:text-blue-700 mx-2 p-2 bg-blue-50 rounded-full">
                          <FaEdit />
                        </button>
                        <button onClick={() => deleteItem(activeTab, item.id)} className="text-red-500 hover:text-red-700 mx-2 p-2 bg-red-50 rounded-full">
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {getActiveData().length === 0 && (
                    <tr>
                      <td colSpan="5" className="p-8 text-center text-gray-500">No data found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {editingItem && renderForm()}
        
      </div>
    </div>
  );
}
