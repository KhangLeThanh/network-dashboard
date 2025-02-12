import { render, screen, fireEvent } from "@testing-library/react";
import FormDialog from "./FormDialog";

describe("FormDialog Component", () => {
  const mockOnClose = jest.fn();
  const mockOnConfirm = jest.fn();

  const defaultProps = {
    isOpen: true, // Dialog is open by default for testing
    onClose: mockOnClose,
    onConfirm: mockOnConfirm,
    title: "Test Dialog",
    confirmText: "Save",
    closeText: "Cancel",
    children: <p>Dialog Content</p>,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the dialog with the correct title and buttons", () => {
    render(<FormDialog {...defaultProps} />);

    // Check if the title is rendered
    expect(screen.getByText("Test Dialog")).toBeInTheDocument();

    // Check if the confirm and close buttons exist
    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();

    // Check if children are displayed
    expect(screen.getByText("Dialog Content")).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    render(<FormDialog {...defaultProps} />);

    const closeButton = screen.getByText("Cancel");
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("calls onConfirm when the confirm button is clicked", () => {
    render(<FormDialog {...defaultProps} />);

    const confirmButton = screen.getByText("Save");
    fireEvent.click(confirmButton);

    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when the close icon is clicked", () => {
    render(<FormDialog {...defaultProps} />);

    const closeIcon = screen.getByLabelText("close");
    fireEvent.click(closeIcon);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("does not render when isOpen is false", () => {
    render(<FormDialog {...defaultProps} isOpen={false} />);

    expect(screen.queryByText("Test Dialog")).not.toBeInTheDocument();
    expect(screen.queryByText("Save")).not.toBeInTheDocument();
    expect(screen.queryByText("Cancel")).not.toBeInTheDocument();
  });
});
