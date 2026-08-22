import { useState } from 'react';
import JournalLayout from './components/JournalLayout';
import CreaturePage from './components/CreaturePage';
import SearchBar from './components/SearchBar';
import { creatures } from './data/bestiary';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = creatures.filter(c => {
    const q = searchQuery.toLowerCase();
    return c.name.toLowerCase().includes(q) ||
           c.aka.toLowerCase().includes(q) ||
           c.evidence.toLowerCase().includes(q);
  });

  const currentCreature = filtered[currentIndex] || filtered[0];

  const handleNext = () => {
    if (currentIndex < filtered.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  // Reset to first page when search changes
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentIndex(0);
  };

  return (
    <JournalLayout>
      {filtered.length > 0 && currentCreature ? (
        <CreaturePage 
          creature={currentCreature} 
          onNext={handleNext} 
          onPrev={handlePrev}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex < filtered.length - 1}
          searchQuery={searchQuery}
          onSearch={handleSearch}
          currentIndex={currentIndex}
          totalCount={filtered.length}
        />
      ) : (
        <div className="page page-left" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div className="page-content-bg" style={{ textAlign: 'center', width: '100%' }}>
            <SearchBar value={searchQuery} onChange={handleSearch} />
            <h2 style={{ marginTop: '2rem' }}>Nenhuma criatura encontrada para '{searchQuery}'</h2>
          </div>
        </div>
      )}
    </JournalLayout>
  );
}

export default App;
