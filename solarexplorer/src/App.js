import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Repository from './components/Repository';
import './App.css';

function App() {
  const [searchAddress, setSearchAddress] = useState('');
  const [repositories] = useState([
    {
      name: 'Repository 1',
      address: '0x123...abc',
      owner: 'John Doe'
    },
    {
      name: 'Repository 2',
      address: '0x456...def',
      owner: 'Jane Smith'
    },
    {
      name: 'Repository 3',
      address: '0x789...ghi',
      owner: 'Alex Johnson'
    },
  ]);

  const handleCopyAddress = (e, address) => {
    e.preventDefault(); // Prevent navigation
    navigator.clipboard.writeText(address);
  };

  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>SOLAR</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Enter contract address..."
              value={searchAddress}
              onChange={(e) => setSearchAddress(e.target.value)}
            />
          </div>
          <button className="explore-btn">Explore</button>
        </header>

        <main>
          <Routes>
            <Route path="/" element={
              <section className="recent-repositories">
                <h2>Recent Repositories</h2>
                <div className="repository-grid">
                  {repositories.map((repo, index) => (
                    <Link
                      to={`/repository/${repo.address}`}
                      key={index}
                      className="repository-card"
                    >
                      <h3>{repo.name}</h3>
                      <p className="owner-name">{repo.owner}</p>
                      <button
                        className="copy-address"
                        onClick={(e) => handleCopyAddress(e, repo.address)}
                      >
                        {repo.address}
                      </button>
                    </Link>
                  ))}
                </div>
              </section>
            } />
            <Route path="/repository/:address" element={<Repository />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
