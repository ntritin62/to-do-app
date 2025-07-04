'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

type ModalContextType = {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const openModal = (content: ReactNode) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent && (
        <>
          <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className=" p-6 rounded shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {modalContent}
            </div>
          </div>
        </>
      )}
    </ModalContext.Provider>
  );
};
