import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { mockPortalSections } from '../mock';

const SimplifiedPortalSections = () => {
  const navigate = useNavigate();

  const handleSectionClick = (sectionId) => {
    // Navigate to individual section pages
    navigate(`/${sectionId}`);
  };

  return (
    <div className="simplified-portal-sections">
      <h3 className="section-heading text-white mb-4 text-center galactic-title">
        Entradas Mágicas ✨
      </h3>
      
      <div className="portal-sections-row">
        {mockPortalSections.map((section) => (
          <Card
            key={section.id}
            className="simplified-portal-card cursor-pointer transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${section.bgColor}20 0%, ${section.bgColor}10 100%)`,
              borderColor: `${section.textColor}40`,
            }}
            onClick={() => handleSectionClick(section.id)}
          >
            <div className="simplified-card-content">
              {/* Emoji */}
              <div className="portal-emoji" style={{ color: section.textColor }}>
                {section.emoji}
              </div>
              
              {/* Title */}
              <h4 
                className="portal-title"
                style={{ color: section.textColor }}
              >
                {section.title}
              </h4>
              
              {/* Hover indicator */}
              <div className="hover-indicator">
                <span style={{ color: section.textColor }}>Click para entrar →</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SimplifiedPortalSections;