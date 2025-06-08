
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Edit() {
  const [content, setContent] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('loggedIn') !== 'true') {
      router.push('/login');
    }
    const saved = localStorage.getItem('willContent') || '';
    setContent(saved);
  }, []);

  const handleSave = () => {
    localStorage.setItem('willContent', content);
    localStorage.setItem('lastHeartbeat', Date.now());
    alert('保存成功');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>编辑遗书</h2>
      <textarea rows={10} cols={50} value={content} onChange={e => setContent(e.target.value)} /><br />
      <button onClick={handleSave}>保存并更新“我还活着”</button>
    </div>
  );
}
