import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SearchBar from './SearchBar';

const CreaturePage = ({ creature, onNext, onPrev, hasPrev, hasNext, searchQuery, onSearch, currentIndex, totalCount }) => {
  return (
    <>
      <div className="page page-left">
        <div className="page-content-bg">
          <SearchBar value={searchQuery} onChange={onSearch} />
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            {hasPrev ? (
              <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: 'var(--highlight)' }} onClick={onPrev}>
                <ChevronLeft size={24} />
                <span style={{ fontFamily: 'var(--font-typewriter)', fontWeight: 'bold' }}>Anterior</span>
              </div>
            ) : <div />}
            <span style={{ fontFamily: 'var(--font-typewriter)' }}>Pág {currentIndex + 1} de {totalCount}</span>
          </div>
          
          <h1>{creature.name}</h1>
          <p><span className="label">Conhecido como:</span> {creature.aka}</p>
          
          <div style={{ marginTop: '1.5rem' }}>
            <h2>Evidências</h2>
            <p>{creature.evidence}</p>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h2>Símbolos e Proteção</h2>
            <p>{creature.protection}</p>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h2>Folclore</h2>
            <p>{creature.lore}</p>
          </div>
        </div>
      </div>
      
      <div className="page page-right">
        <div className="page-content-bg" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '1rem' }}>
            {hasNext ? (
              <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: 'var(--highlight)' }} onClick={onNext}>
                <span style={{ fontFamily: 'var(--font-typewriter)', fontWeight: 'bold' }}>Próxima</span>
                <ChevronRight size={24} />
              </div>
            ) : <div />}
          </div>

          {creature.image ? (
            <div className="sketch-container">
              <img src={creature.image} alt={creature.name} className="sketch-img" />
            </div>
          ) : (
            <div className="sketch-container" style={{ border: '2px dashed rgba(10, 6, 3, 0.4)', padding: '4rem 0', borderRadius: '8px' }}>
              <p style={{ transform: 'rotate(-3deg)' }}>[ Esboço Faltando ]</p>
            </div>
          )}
          
          <div style={{ flexGrow: 1 }}>
            <h2>Formas de Combate</h2>
            <p>{creature.combat}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreaturePage;
