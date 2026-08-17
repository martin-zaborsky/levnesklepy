import React from 'react';
import { ServicesSection } from '../components/ServicesSection';
import { useNavigate } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-6">
      <ServicesSection
        onOpenInquiry={() => navigate('/kontakt')}
      />
    </div>
  );
};
