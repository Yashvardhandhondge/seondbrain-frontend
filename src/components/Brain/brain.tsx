import { useState } from 'react';
import { addBrain } from '../../services/api';
import Sidebar from './sidebar';

function Brain() {
  const [form, setForm] = useState({
    contentType: '',
    contentLink: '',
    title: '',
    description: '',
    tags: '',
    manualContent: '',
  });

  const [toggleMenu, setToggleMenu] = useState(false);
  const token = localStorage.getItem('token') as string;

  const HandleFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const brainData = await addBrain(form, token);
      console.log('Brain created successfully:', brainData);
      alert('Brain created successfully!');
      setForm({
        contentType: '',
        contentLink: '',
        title: '',
        description: '',
        tags: '',
        manualContent: '',
      });
      setToggleMenu(false); 
    } catch (error) {
      console.error('Error creating brain:', error);
      alert('Failed to create brain. Please try again later.');
    }
  };

  const toogle = () =>{
    setToggleMenu(!toggleMenu);
  }
  const inputcss = 'bg-gray-700 p-2 rounded-lg text-white w-80 mb-4'

  return (
    <>
    <div className='flex min-h-screen'>
    <Sidebar />
    <div className="min-h-screen w-screen  bg-gray-800  justify-center items-center ">
      <button onClick={toogle} className='px-4 py-2 bg-purple-400  ml-[100px] sm:ml-[200px] md:ml-[240px] lg:ml-[580px] mt-5 rounded-2xl'>{toggleMenu ? 'Close brain' : 'Create Brain'}</button>
      {toggleMenu ? 
     <div className="min-h-screen bg-gray-800 text-center justify-center ">
     <form
       className="flex flex-col items-center jsutify-center p-5 mt-20"
       onSubmit={HandleSubmit}
     >
          <input
            type="text"
            name="contentType"
            placeholder="Content Type"
            value={form.contentType}
            onChange={HandleFormData}
            className={inputcss}
          />
          <input
            type="text"
            name="contentLink"
            placeholder="Content Link"
            value={form.contentLink}
            onChange={HandleFormData}
            className={inputcss}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={HandleFormData}
            className={inputcss}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={HandleFormData}
            className={inputcss}
          />
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma-separated)"
            value={form.tags}
            onChange={HandleFormData}
            className={inputcss}
          />
          <textarea
            name="manualContent"
            placeholder="Manual Content"
            value={form.manualContent}
            onChange={HandleFormData}
            className={inputcss}
          />
          <button type="submit" className='px-4 py-2 bg-purple-400 rounded-2xl'>Create Brain</button>
        </form>
      </div>
      : null
     }
    </div>
    </div>
    </>
  );
}

export default Brain;
