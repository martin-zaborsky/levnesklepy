import React from 'react';
import { PriceListTable } from '../components/PriceListTable';
import { useNavigate } from 'react-router-dom';

export const PriceListPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-6">
      <PriceListTable
        onSelectForConfig={(id) => navigate(`/konfigurator?model=${id}`)}
        onOpenInquiry={() => navigate('/kontakt')}
      />
    </div>
  );
};
