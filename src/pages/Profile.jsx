import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock auth logic
    if (form.email && form.password) {
      navigate('/payment');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 shadow-lg rounded bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">
        {isSigningUp ? 'Create Account' : 'Login to Continue'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          {isSigningUp ? 'Sign Up' : 'Login'}
        </button>
      </form>

      <p className="text-center mt-4 text-sm">
        {isSigningUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button onClick={() => setIsSigningUp(!isSigningUp)} className="text-blue-600 underline">
          {isSigningUp ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default Profile;
