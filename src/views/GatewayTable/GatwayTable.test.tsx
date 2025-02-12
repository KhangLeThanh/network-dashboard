import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import GatewayTable from "./GatewayTable"; // Adjust the import path based on your project structure

// Mock the external modules (directly inside jest.mock)
jest.mock("../../data/gateway_listing_response.json", () => ({
  results: [
    {
      gatewayId: "1",
      status: "Active",
      model: "Model A",
      version: "v1.0",
      gatewayStatistics: {
        lastMessageRxTime: 1702462777,
      },
    },
    {
      gatewayId: "2",
      status: "Inactive",
      model: "Model B",
      version: "v2.0",
      gatewayStatistics: {
        lastMessageRxTime: 1702462789,
      },
    },
  ],
}));

describe("GatewayTable", () => {
  it("renders the Gateway Table correctly", () => {
    render(<GatewayTable />);

    // Check if the table header renders correctly
    expect(screen.getByText("Gateway ID")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Model/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Version/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Last Message Time")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });
  it("should display data rows", async () => {
    render(<GatewayTable />);

    // Check if the table displays rows
    await waitFor(() => {
      const gatewayId = screen.getByText("1"); // Using mock data
      expect(gatewayId).toBeInTheDocument();
    });
  });
  it("should handle pagination correctly", async () => {
    render(<GatewayTable />);

    const rowsPerPageButton = screen.getByText(/Rows per page/i);

    // Open the dropdown (trigger the click)
    fireEvent.click(rowsPerPageButton);

    // Find the option for "5" rows per page
    const option = screen.getByText("5");

    // Select the "5" option
    fireEvent.click(option);

    // Wait for pagination to update
    await waitFor(() => {
      // Verify that 3 rows are rendered (1 header + 2 data rows)
      const rows = screen.getAllByRole("row");
      expect(rows).toHaveLength(3); // 1 header row + 3 data rows
    });
  });
  it("filters gateways based on model", async () => {
    render(<GatewayTable />);

    // Use screen.getByTestId to find the TextField (if the input has a specific data-testid)
    const modelFilterInput = screen.getByTestId("model-filter");

    // Use querySelector to target the actual input element inside the TextField component
    const inputElement = modelFilterInput.querySelector("input")!;

    // Type "Model A" into the input element
    userEvent.type(inputElement, "Model A");

    // Wait for the table to update and reflect the filtered result
    await waitFor(() => {
      const rows = screen.getAllByRole("row");
      // Ensure there is only 2 header row (because all data rows should be filtered out)
      expect(rows.length).toBe(2); // 1 header row and 1 data rows
    });

    // Check if Model A is shown and Model B is not shown in the filtered rows
    expect(screen.getByText("Model A")).toBeInTheDocument();
    expect(screen.queryByText("Model B")).toBeNull(); // Ensure Model B is not shown
  });
});
