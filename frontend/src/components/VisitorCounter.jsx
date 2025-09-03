import React, { useState, useEffect } from 'react';
import { Eye, Users, Activity } from 'lucide-react';

const VisitorCounter = () => {
  const [visitorData, setVisitorData] = useState({
    unique_visitors: 0,
    total_visits: 0,
    last_updated: null
  });
  const [loading, setLoading] = useState(true);

  const fetchVisitorCount = async () => {
    try {
      const backendUrl = import.meta.env.REACT_APP_BACKEND_URL || process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${backendUrl}/api/visitor-count`);
      if (response.ok) {
        const data = await response.json();
        setVisitorData(data);
      }
    } catch (error) {
      console.error('Error fetching visitor count:', error);
    } finally {
      setLoading(false);
    }
  };

  const trackVisit = async () => {
    try {
      const backendUrl = import.meta.env.REACT_APP_BACKEND_URL || process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${backendUrl}/api/track-visit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.ok) {
        const data = await response.json();
        setVisitorData({
          unique_visitors: data.unique_visitors,
          total_visits: data.total_visits,
          last_updated: new Date()
        });
      }
    } catch (error) {
      console.error('Error tracking visit:', error);
    }
  };

  useEffect(() => {
    // Track this visit and get updated counts
    trackVisit();
    
    // Set up periodic refresh every 30 seconds
    const interval = setInterval(fetchVisitorCount, 30000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="visitor-counter loading">
        <div className="cosmic-loader">
          <Eye className="w-4 h-4 text-cosmic-blue animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="visitor-counter">
      <div className="visitor-stats-container">
        
        {/* Unique Explorers */}
        <div className="visitor-stat">
          <div className="stat-icon">
            <Users className="w-4 h-4 text-cosmic-blue" />
          </div>
          <div className="stat-content">
            <div className="stat-number">{visitorData.unique_visitors.toLocaleString()}</div>
            <div className="stat-label">Exploradores únicos</div>
          </div>
        </div>

        {/* Total Visits */}
        <div className="visitor-stat">
          <div className="stat-icon">
            <Activity className="w-4 h-4 text-cosmic-mint" />
          </div>
          <div className="stat-content">
            <div className="stat-number">{visitorData.total_visits.toLocaleString()}</div>
            <div className="stat-label">Visitas totales</div>
          </div>
        </div>

      </div>
      
      {/* Live indicator */}
      <div className="live-indicator">
        <div className="live-dot"></div>
        <span className="live-text">En tiempo real</span>
      </div>
    </div>
  );
};

export default VisitorCounter;