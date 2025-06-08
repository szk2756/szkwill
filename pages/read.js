
import { useState } from 'react';

export default function Read() {
  const [access, setAccess] = useState(false);
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');

  const handleAccess = () => {
    const last = parseInt(localStorage.getItem('lastHeartbeat'), 10) || 0;
    const now = Date.now();
    const threeMonths = 90 * 24 * 60 * 60 * 1000;

    if (now - last < threeMonths) {
      alert('遗书尚未公开');
      return;
    }

    if (password === 'BeHappy') {
      const saved = localStorage.getItem('willContent') || '暂无内容';
      setContent(saved);
      setAccess(true);
    } else {
      alert('密码错误');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>访客访问</h2>
      {!access ? (
        <>
          <p>请输入访客密码：</p>
          <input value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={handleAccess}>查看</button>
        </>
      ) : (
        <div>
          <h3>遗书内容</h3>
          <pre>{content}</pre>
        </div>
      )}
    </div>
  );
}
