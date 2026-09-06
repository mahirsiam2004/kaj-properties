import React, { useState, useEffect } from 'react';
import './AdminPage.css';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const IMGBB_API_KEY = process.env.REACT_APP_IMGBB_API_KEY || '';

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [activeTab, setActiveTab] = useState('list');

  const [updates, setUpdates] = useState([]);
  const [isLoadingUpdates, setIsLoadingUpdates] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [editingId, setEditingId] = useState(null);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [settingsMessage, setSettingsMessage] = useState('');
  const [isSavingSettings, setIsSavingSettings] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth) {
      setIsAuthenticated(true);
      setUsername(localStorage.getItem('adminUsername') || '');
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && activeTab === 'list') {
      fetchUpdates();
    }
  }, [isAuthenticated, activeTab]);

  const fetchUpdates = async () => {
    setIsLoadingUpdates(true);
    try {
      const res = await fetch(`${API_BASE}/api/updates`);
      const data = await res.json();
      if (data.success) {
        setUpdates(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch updates:', error);
    } finally {
      setIsLoadingUpdates(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');
    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        localStorage.setItem('adminAuth', 'true');
        localStorage.setItem('adminUsername', username);
      } else {
        setLoginError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminUsername');
    setPassword('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setImageFile(null);
    setImagePreview('');
    setEditingId(null);
    setSubmitMessage('');
  };

  const handleEdit = (update) => {
    setEditingId(update._id);
    setTitle(update.title);
    setDescription(update.description);
    setImagePreview(update.imageUrl);
    setActiveTab('add');
    setSubmitMessage('');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this update?')) return;
    try {
      const res = await fetch(`${API_BASE}/api/updates/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setUpdates(updates.filter((u) => u._id !== id));
      } else {
        window.alert(data.error || 'Failed to delete');
      }
    } catch (err) {
      console.error(err);
      window.alert('Error deleting update');
    }
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      setSubmitMessage('Please fill all required fields.');
      return;
    }
    if (!editingId && !imageFile && !imagePreview) {
      setSubmitMessage('Please select an image.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      let imageUrl = imagePreview;

      if (imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);

        const imgbbRes = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
          method: 'POST',
          body: formData,
        });
        const imgData = await imgbbRes.json();
        if (!imgData.success) throw new Error('Image upload failed');
        imageUrl = imgData.data.url;
      }

      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `${API_BASE}/api/updates/${editingId}` : `${API_BASE}/api/updates`;

      const saveRes = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, imageUrl }),
      });

      const saveData = await saveRes.json();
      if (!saveData.success) throw new Error(saveData.error || 'Failed to save update');

      setSubmitMessage(`Update ${editingId ? 'modified' : 'published'} successfully!`);
      if (!editingId) resetForm();
    } catch (err) {
      setSubmitMessage(`Error: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (!currentPassword || !newPassword) return;
    setIsSavingSettings(true);
    setSettingsMessage('');
    try {
      const res = await fetch(`${API_BASE}/api/auth/change-password`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, currentPassword, newPassword }),
      });
      const data = await res.json();
      if (data.success) {
        setSettingsMessage('Password updated successfully');
        setCurrentPassword('');
        setNewPassword('');
      } else {
        setSettingsMessage(data.error || 'Failed to update password');
      }
    } catch (err) {
      setSettingsMessage(`Error: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsSavingSettings(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="ap-login">
        <div className="ap-login-card">
          <div className="ap-login-header">
            <h1>Admin Portal</h1>
            <p>Sign in to manage website content</p>
          </div>
          <form onSubmit={handleLogin}>
            {loginError && <div className="ap-alert ap-alert-error">{loginError}</div>}
            <div className="ap-field">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username"
              />
            </div>
            <div className="ap-field">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className="ap-btn ap-btn-primary ap-btn-full" disabled={isLoggingIn}>
              {isLoggingIn ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="ap-dashboard">
      <aside className="ap-sidebar">
        <div className="ap-sidebar-header">
          <span>Dashboard</span>
        </div>
        <div className="ap-sidebar-nav">
          <button
            className={activeTab === 'list' ? 'active' : ''}
            onClick={() => setActiveTab('list')}
          >
            📋 All Updates
          </button>
          <button
            className={activeTab === 'add' ? 'active' : ''}
            onClick={() => {
              resetForm();
              setActiveTab('add');
            }}
          >
            ➕ {editingId ? 'Edit Update' : 'Add New'}
          </button>
          <button
            className={activeTab === 'settings' ? 'active' : ''}
            onClick={() => setActiveTab('settings')}
          >
            ⚙️ Settings
          </button>
        </div>
        <div className="ap-sidebar-footer">
          <a href="/" className="ap-sidebar-link">← Back to Website</a>
          <button className="ap-sidebar-link" onClick={handleLogout}>Logout</button>
        </div>
      </aside>

      <main className="ap-main">
        <div className="ap-main-content">
          {activeTab === 'list' && (
            <div>
              <div className="ap-page-header">
                <div>
                  <h2>Updates Management</h2>
                  <p>View, edit, or delete existing posts</p>
                </div>
              </div>

              {isLoadingUpdates ? (
                <div className="ap-loading">Loading updates...</div>
              ) : updates.length === 0 ? (
                <div className="ap-empty">
                  <h3>No updates found</h3>
                  <p>You haven't posted any updates yet</p>
                  <button
                    className="ap-btn ap-btn-primary"
                    onClick={() => {
                      resetForm();
                      setActiveTab('add');
                    }}
                  >
                    Add Your First Update
                  </button>
                </div>
              ) : (
                <div className="ap-grid">
                  {updates.map((update) => (
                    <div key={update._id} className="ap-card">
                      <div className="ap-card-image">
                        <img src={update.imageUrl} alt={update.title} />
                      </div>
                      <div className="ap-card-body">
                        <h3>{update.title}</h3>
                        <p>{update.description}</p>
                        <div className="ap-card-footer">
                          <span>{new Date(update.createdAt).toLocaleDateString()}</span>
                          <div className="ap-card-actions">
                            <button className="ap-icon-btn ap-edit" onClick={() => handleEdit(update)} title="Edit">
                              ✏️
                            </button>
                            <button className="ap-icon-btn ap-delete" onClick={() => handleDelete(update._id)} title="Delete">
                              🗑️
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'add' && (
            <div>
              <div className="ap-page-header">
                <div>
                  <h2>{editingId ? 'Edit Update' : 'Post New Update'}</h2>
                  <p>{editingId ? 'Modify the details of an existing post' : 'Add the latest news to be shown on the main page'}</p>
                </div>
                {editingId && (
                  <button className="ap-btn ap-btn-ghost" onClick={resetForm}>
                    ✕ Cancel Edit
                  </button>
                )}
              </div>

              <div className="ap-form-card">
                <form onSubmit={handleSubmitUpdate}>
                  <div className="ap-field">
                    <label>Update Title</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. New Project Launch!"
                      required
                    />
                  </div>

                  <div className="ap-field">
                    <label>Description</label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={5}
                      placeholder="Write the details of the update..."
                      required
                    />
                  </div>

                  <div className="ap-field">
                    <label>Featured Image</label>
                    <div className="ap-upload-zone">
                      {imagePreview ? (
                        <div className="ap-upload-preview">
                          <img src={imagePreview} alt="Preview" />
                        </div>
                      ) : (
                        <div className="ap-upload-placeholder">
                          <span className="ap-upload-icon">📁</span>
                          <p>
                            <span className="ap-upload-link">Upload a file</span> or drag and drop
                          </p>
                          <small>PNG, JPG, GIF up to 10MB</small>
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="ap-upload-input"
                        required={!editingId && !imageFile}
                      />
                    </div>
                  </div>

                  {submitMessage && (
                    <div className={`ap-alert ${submitMessage.includes('successfully') ? 'ap-alert-success' : 'ap-alert-error'}`}>
                      {submitMessage}
                    </div>
                  )}

                  <div className="ap-form-actions">
                    <button
                      type="submit"
                      className="ap-btn ap-btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Saving...' : editingId ? '✏️ Update Post' : '➕ Publish Update'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <div className="ap-page-header">
                <div>
                  <h2>Settings</h2>
                  <p>Manage your account settings</p>
                </div>
              </div>

              <div className="ap-form-card ap-form-card-sm">
                <form onSubmit={handleChangePassword}>
                  <div className="ap-field">
                    <label>Current Password</label>
                    <input
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <div className="ap-field">
                    <label>New Password</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  {settingsMessage && (
                    <div className={`ap-alert ${settingsMessage.includes('successfully') ? 'ap-alert-success' : 'ap-alert-error'}`}>
                      {settingsMessage}
                    </div>
                  )}

                  <div className="ap-form-actions">
                    <button
                      type="submit"
                      className="ap-btn ap-btn-primary"
                      disabled={isSavingSettings}
                    >
                      {isSavingSettings ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
