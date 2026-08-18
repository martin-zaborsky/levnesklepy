import React from 'react';
import { ConfiguratorSection } from '../components/ConfiguratorSection';
import { useNavigate } from 'react-router-dom';

export const ConfiguratorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-6">
      <ConfiguratorSection
        onOpenInquiryWithConfig={(summary, total) => navigate('/kontakt')}
      />
    </div>
  );
};
