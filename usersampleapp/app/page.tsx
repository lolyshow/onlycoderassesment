"use client";
import Button from '../src/components/Button/Button';
import InputField from '../src/components/InputField/InputField';

import React, { useState, ChangeEvent } from 'react';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    // submit
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <InputField
            label="Username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="flex items-center justify-between">
            <Button onClick={handleSubmit}>Sign In</Button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
