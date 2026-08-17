import React from 'react';
import { PriceListTable } from '../components/PriceListTable';
import { useNavigate } from 'react-router-dom';

interface PriceListPageProps {
  currency: 'CZK' | 'EUR';
}

export const PriceListPage: React.FC<PriceListPageProps> = ({ currency }) => {
  const navigate = useNavigate();

  return (
    <div className="py-6">
      <PriceListTable
        currency={currency}
        onSelectForConfig={(id) => navigate(`/konfigurator?model=${id}`)}
        onOpenInquiry={() => navigate('/kontakt')}
      />
    </div>
  );
};
