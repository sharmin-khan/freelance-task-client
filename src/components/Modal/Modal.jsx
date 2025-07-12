import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
          <button
            className="float-right text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            ×
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
