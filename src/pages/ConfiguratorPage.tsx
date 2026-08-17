import React from 'react';
import { ConfiguratorSection } from '../components/ConfiguratorSection';
import { useNavigate } from 'react-router-dom';

interface ConfiguratorPageProps {
  currency: 'CZK' | 'EUR';
}

export const ConfiguratorPage: React.FC<ConfiguratorPageProps> = ({ currency }) => {
  const navigate = useNavigate();

  return (
    <div className="py-6">
      <ConfiguratorSection
        currency={currency}
        onOpenInquiryWithConfig={(summary, total) => navigate('/kontakt')}
      />
    </div>
  );
};
