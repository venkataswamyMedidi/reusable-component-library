import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  const mockClose = jest.fn();

  beforeEach(() => {
    mockClose.mockReset();
  });

  test('renders modal with expected controls', () => {
    render(<Modal isOpen={true} onClose={mockClose} title="Modal Title">Modal Content</Modal>);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Modal Title');
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  describe('when passed onClose handler', () => {
    test('calls onClose action when pressing the ESC key', async () => {
      render(<Modal isOpen={true} onClose={mockClose} title="Modal Title">Modal Content</Modal>);

      fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape', code: 'Escape' });
      await waitFor(() => expect(mockClose).toHaveBeenCalledTimes(1));
    });

    test('renders dismissible button that calls onClose action when clicked', async () => {
      render(<Modal isOpen={true} onClose={mockClose} title="Modal Title">Modal Content</Modal>);

      const closeButton = screen.getByRole('button', { name: /close/i });
      fireEvent.click(closeButton);

      await waitFor(() => expect(mockClose).toHaveBeenCalledTimes(1));
    });

    test('calls onClose action when clicking outside of the modal', async () => {
      render(<Modal isOpen={true} onClose={mockClose} title="Modal Title">Modal Content</Modal>);

      const scrimElement = screen.getByTestId('mockId');
      fireEvent.click(scrimElement);

      await waitFor(() => expect(mockClose).toHaveBeenCalledTimes(1));
    });
  });
});
