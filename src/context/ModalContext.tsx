import { createContext, ReactNode, useContext, useState } from 'react';

type ModalContextType = {
  isModalOpen: boolean;
  currentModal: string;
  hasUpdatedRowData: boolean;
  modalData: any;
  openModal: () => void;
  closeModal: () => void;
  setModalData: (data: any) => void;
  setCurrentModal: (name: string) => void;
  setHasUpdatedRowData: (status: boolean) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState('');
  const [modalData, setModalData] = useState(null);
  const [hasUpdatedRowData, setHasUpdatedRowData] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        currentModal,
        modalData,
        hasUpdatedRowData,
        setModalData,
        setCurrentModal,
        setHasUpdatedRowData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
