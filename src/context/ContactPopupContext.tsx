import { createContext, useContext, useState, ReactNode } from 'react';
import ContactPopupForm from '@/components/ContactPopupForm';

type ContactPopupContextValue = {
  open: () => void;
};

const ContactPopupContext = createContext<ContactPopupContextValue | null>(null);

export function ContactPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContactPopupContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <ContactPopupForm open={isOpen} onOpenChange={setIsOpen} />
    </ContactPopupContext.Provider>
  );
}

export function useContactPopup() {
  const ctx = useContext(ContactPopupContext);
  if (!ctx) {
    throw new Error('useContactPopup must be used within a ContactPopupProvider');
  }
  return ctx;
}
