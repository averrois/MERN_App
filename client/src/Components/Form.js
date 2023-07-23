import React from 'react';

function Form({label, username, setUsername, password, setPassword, handleSubmit}) {
  return (
    <div className='left'>
        <div className="contact">
            <form onSubmit={handleSubmit}>
                <h3>{label}</h3>
                <input 
                    type="text" 
                    placeholder="USERNAME"
                    name='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}    
                />
                <input 
                    type="password"
                    name='password'
                    placeholder="USERNAME"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}    
                />
                <button 
                    className="submit"
                    type="submit"    
                >
                    {label}
                </button>
            </form>
        </div>
    </div>
  )
}

export default Form;