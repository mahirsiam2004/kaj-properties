'use client';

import { useState, useEffect } from 'react';
import './AdminPage.css';

const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY || '837352934eb053d32ea0e4d9ac7da4ba';

interface Update {
  _id: string; title: string; description: string;
  imageUrl: string; date?: string; createdAt: string;
}

export default function AdminClient() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [activeTab, setActiveTab] = useState('list');
  const [updates, setUpdates] = useState<Update[]>([]);
  const [isLoadingUpdates, setIsLoadingUpdates] = useState(false);
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [date, setDate] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [settingsMessage, setSettingsMessage] = useState('');
  const [isSavingSettings, setIsSavingSettings] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth) { setIsAuthenticated(true); setUsername(localStorage.getItem('adminUsername') || ''); }
  }, []);

  useEffect(() => {
    if (isAuthenticated && activeTab === 'list') fetchUpdates();
  }, [isAuthenticated, activeTab]);

  const fetchUpdates = async () => {
    setIsLoadingUpdates(true);
    try {
      const res = await fetch('/api/updates');
      const data = await res.json();
      if (data.success) setUpdates(data.data);
    } catch { /* ignore */ } finally { setIsLoadingUpdates(false); }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true); setLoginError('');
    try {
      const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }) });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        localStorage.setItem('adminAuth', 'true');
        localStorage.setItem('adminUsername', username);
      } else setLoginError(data.error || 'Invalid credentials');
    } catch { setLoginError('Cannot connect to server.'); } finally { setIsLoggingIn(false); }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth'); localStorage.removeItem('adminUsername');
    setPassword('');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => { setTitle(''); setCaption(''); setDate(''); setImageFile(null); setImagePreview(''); setEditingId(null); setSubmitMessage(''); };

  const handleEdit = (u: Update) => {
    setEditingId(u._id); setTitle(u.title); setCaption(u.description);
    setDate(u.date ? new Date(u.date).toISOString().split('T')[0] : '');
    setImagePreview(u.imageUrl); setActiveTab('add'); setSubmitMessage('');
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this update?')) return;
    const res = await fetch(`/api/updates/${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (data.success) setUpdates(updates.filter(u => u._id !== id));
    else window.alert(data.error || 'Failed to delete');
  };

  const handleSubmitUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !caption) { setSubmitMessage('Please fill all required fields.'); return; }
    if (!editingId && !imageFile && !imagePreview) { setSubmitMessage('Please select an image.'); return; }
    setIsSubmitting(true); setSubmitMessage('');
    try {
      let imageUrl = imagePreview;
      if (imageFile) {
        const fd = new FormData(); fd.append('image', imageFile);
        const imgRes = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, { method: 'POST', body: fd });
        const imgData = await imgRes.json();
        if (!imgData.success) throw new Error('Image upload failed');
        imageUrl = imgData.data.url;
      }
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `/api/updates/${editingId}` : '/api/updates';
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, description: caption, imageUrl, date: date || undefined }) });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || 'Failed to save');
      setSubmitMessage(`Update ${editingId ? 'modified' : 'published'} successfully!`);
      if (!editingId) resetForm();
    } catch (err) { setSubmitMessage(`Error: ${err instanceof Error ? err.message : String(err)}`); }
    finally { setIsSubmitting(false); }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword || !newPassword) return;
    setIsSavingSettings(true); setSettingsMessage('');
    try {
      const res = await fetch('/api/auth/change-password', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, currentPassword, newPassword }) });
      const data = await res.json();
      if (data.success) { setSettingsMessage('Password updated successfully'); setCurrentPassword(''); setNewPassword(''); }
      else setSettingsMessage(data.error || 'Failed to update');
    } catch { setSettingsMessage('Cannot connect to server.'); } finally { setIsSavingSettings(false); }
  };

  if (!isAuthenticated) return (
    <div className="ap-login">
      <div className="ap-login-card">
        <div className="ap-login-header">
            <img src="/logo1.png" alt="Kaz Properties" style={{ width: 80, margin: '0 auto 16px', display: 'block', filter: 'brightness(0) invert(1)' }} />
            <h1>Admin Portal</h1><p>Sign in to manage website content</p></div>
        <form onSubmit={handleLogin}>
          {loginError && <div className="ap-alert ap-alert-error">{loginError}</div>}
          <div className="ap-field"><label>Username</label><input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter admin username" /></div>
          <div className="ap-field"><label>Password</label><input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" /></div>
          <button type="submit" className="ap-btn ap-btn-primary ap-btn-full" disabled={isLoggingIn}>{isLoggingIn ? 'Signing In...' : 'Sign In'}</button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="ap-dashboard">
      <aside className="ap-sidebar">
        <div className="ap-sidebar-header">
          <img src="/logo1.png" alt="Kaz Properties" style={{ width: 44, filter: 'brightness(0) invert(1)', display: 'none' }} className="ap-logo-desktop" />
          <img src="/logo1.png" alt="Kaz Properties" style={{ width: 32, filter: 'brightness(0) invert(1)' }} />
          <span>Admin</span>
        </div>
        <div className="ap-sidebar-nav">
          <button className={activeTab === 'list' ? 'active' : ''} onClick={() => setActiveTab('list')}>📋 All Updates</button>
          <button className={activeTab === 'add' ? 'active' : ''} onClick={() => { resetForm(); setActiveTab('add'); }}>➕ {editingId ? 'Edit Update' : 'Add New'}</button>
          <button className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>⚙️ Settings</button>
        </div>
        <div className="ap-sidebar-footer">
          <a href="/" className="ap-sidebar-link">← Back to Website</a>
          <button className="ap-sidebar-link" onClick={handleLogout}>Logout</button>
        </div>
      </aside>

      <main className="ap-main">
        <div className="ap-main-content">
          {/* LIST TAB */}
          {activeTab === 'list' && (
            <div>
              <div className="ap-page-header"><div><h2>Updates Management</h2><p>View, edit, or delete existing posts</p></div>
                <button className="ap-btn ap-btn-primary" onClick={() => { resetForm(); setActiveTab('add'); }}>+ Publish New Update</button>
              </div>
              {isLoadingUpdates ? <div className="ap-loading">Loading updates...</div>
                : updates.length === 0 ? (
                  <div className="ap-empty">
                    <h3>No updates found</h3><p>You haven&apos;t posted any updates yet</p>
                    <button className="ap-btn ap-btn-primary" onClick={() => { resetForm(); setActiveTab('add'); }}>Add Your First Update</button>
                  </div>
                ) : (
                  <div className="ap-grid">
                    {updates.map(u => (
                      <div key={u._id} className="ap-card">
                        <div className="ap-card-image"><img src={u.imageUrl} alt={u.title} /></div>
                        <div className="ap-card-body">
                          <h3>{u.title}</h3><p>{u.description}</p>
                          <div className="ap-card-footer">
                            <span>{new Date(u.date || u.createdAt).toLocaleDateString()}</span>
                            <div className="ap-card-actions">
                              <button className="ap-icon-btn ap-edit" onClick={() => handleEdit(u)} title="Edit">✏️</button>
                              <button className="ap-icon-btn ap-delete" onClick={() => handleDelete(u._id)} title="Delete">🗑️</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          )}

          {/* ADD/EDIT TAB */}
          {activeTab === 'add' && (
            <div>
              <div className="ap-page-header">
                <div><h2>{editingId ? 'Edit Update' : 'Post New Update'}</h2><p>{editingId ? 'Modify an existing post' : 'Add the latest news to the main page'}</p></div>
                {editingId && <button className="ap-btn ap-btn-ghost" onClick={resetForm}>✕ Cancel Edit</button>}
              </div>
              <div className="ap-form-card">
                {submitMessage && <div className={`ap-alert ${submitMessage.startsWith('Error') ? 'ap-alert-error' : 'ap-alert-success'}`}>{submitMessage}</div>}
                <form onSubmit={handleSubmitUpdate}>
                  <div className="ap-field"><label>Title *</label><input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Post title" /></div>
                  <div className="ap-field"><label>Description *</label><textarea rows={4} value={caption} onChange={e => setCaption(e.target.value)} placeholder="Write content..." /></div>
                  <div className="ap-field"><label>Date</label><input type="date" value={date} onChange={e => setDate(e.target.value)} /></div>
                  <div className="ap-field">
                    <label>Image {!editingId && '*'}</label>
                    {imagePreview ? (
                      <div className="ap-upload-preview">
                        <img src={imagePreview} alt="Preview" />
                        <button type="button" className="ap-btn ap-btn-ghost" style={{ marginTop: 12 }} onClick={() => { setImageFile(null); setImagePreview(''); }}>Remove Image</button>
                      </div>
                    ) : (
                      <div className="ap-upload-zone">
                        <input type="file" accept="image/*" className="ap-upload-input" onChange={handleImageChange} />
                        <div className="ap-upload-placeholder">
                          <span className="ap-upload-icon">📷</span>
                          <p>Drop image here or <span className="ap-upload-link">browse</span></p>
                          <small>JPG, PNG, WEBP up to 10MB</small>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="ap-form-actions">
                    <button type="submit" className="ap-btn ap-btn-primary" disabled={isSubmitting}>{isSubmitting ? 'Saving...' : editingId ? 'Save Changes' : 'Publish Update'}</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === 'settings' && (
            <div>
              <div className="ap-page-header"><div><h2>Settings</h2><p>Manage your admin account</p></div></div>
              <div className="ap-form-card ap-form-card-sm">
                {settingsMessage && <div className={`ap-alert ${settingsMessage.includes('success') ? 'ap-alert-success' : 'ap-alert-error'}`}>{settingsMessage}</div>}
                <form onSubmit={handleChangePassword}>
                  <div className="ap-field"><label>Current Password</label><input type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} placeholder="••••••••" /></div>
                  <div className="ap-field"><label>New Password</label><input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="••••••••" /></div>
                  <div className="ap-form-actions">
                    <button type="submit" className="ap-btn ap-btn-primary" disabled={isSavingSettings}>{isSavingSettings ? 'Saving...' : 'Update Password'}</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
