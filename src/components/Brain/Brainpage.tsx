import { useState, useEffect } from 'react';
import { deleteBrain, getUserBrains, updateBrain, searchBrains } from '../../services/api';

function BrainPage() {
  const [brains, setBrains] = useState([]);
  interface Brain {
    _id: string;
    contentType: string;
    contentLink: string;
    title: string;
    description: string;
    tags: string;
    manualContent: string;
  }

  const [editingBrain, setEditingBrain] = useState<Brain | null>(null);
  const [searchQuery, setSearchQuery] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    contentType: '',
    contentLink: '',
    title: '',
    description: '',
    tags: '',
    manualContent: '',
  });

  const token = localStorage.getItem('token') as string;

  const fetchBrains = async () => {
    try {
      const data = await getUserBrains(token);
      setBrains(data);
    } catch (error) {
      console.error('Error fetching brains:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const data = await searchBrains(searchQuery, token);
      setBrains(data);
    } catch (error) {
      console.error('Error searching brains:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBrain(id, token);
      alert('Brain deleted successfully!');
      fetchBrains();
    } catch (error) {
      console.error('Error deleting brain:', error);
    }
  };

  const handleEditClick = (brain: any) => {
    setEditingBrain(brain);
    setForm(brain);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingBrain) {
        await updateBrain(editingBrain._id, form, token);
      }
      alert('Brain updated successfully!');
      setEditingBrain(null);
      fetchBrains();
    } catch (error) {
      console.error('Error updating brain:', error);
    }
  };

  useEffect(() => {
    fetchBrains();
  }, []);

  return (
    <div>
      <h1>Brains</h1>
      <div>
        <input
          type="text"
          placeholder="Search by title, content type, or tags"
          value={searchQuery.query || ''}
          onChange={(e) => setSearchQuery({ query: e.target.value })}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {editingBrain ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="contentType"
            value={form.contentType}
            onChange={(e) => setForm({ ...form, contentType: e.target.value })}
          />
          <input
            type="text"
            name="contentLink"
            value={form.contentLink}
            onChange={(e) => setForm({ ...form, contentLink: e.target.value })}
          />
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            name="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <input
            type="text"
            name="tags"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
          />
          <textarea
            name="manualContent"
            value={form.manualContent}
            onChange={(e) => setForm({ ...form, manualContent: e.target.value })}
          />
          <button type="submit">Update Brain</button>
          <button onClick={() => setEditingBrain(null)}>Cancel</button>
        </form>
      ) : (
        <div>
          {brains.map((brain: any) => (
            <div key={brain._id}>
              <h3>{brain.title}</h3>
              <p>{brain.description}</p>
              <button onClick={() => handleEditClick(brain)}>Update</button>
              <button onClick={() => handleDelete(brain._id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BrainPage;
