import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ContactSection } from '../components/ContactSection';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialModel = searchParams.get('model') || undefined;

  return (
    <div className="py-6">
      <ContactSection
        initialProduct={initialModel}
      />
    </div>
  );
};
