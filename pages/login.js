
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username === '孙镇坤' && password === 'BuXiangSi') {
      localStorage.setItem('loggedIn', 'true');
      router.push('/edit');
    } else {
      alert('用户名或密码错误');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>登录</h2>
      <input placeholder="用户名" value={username} onChange={e => setUsername(e.target.value)} /><br />
      <input placeholder="密码" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>登录</button>
    </div>
  );
}
