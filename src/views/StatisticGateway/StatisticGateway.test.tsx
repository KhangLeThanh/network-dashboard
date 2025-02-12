import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useParams } from "react-router-dom"; // Import Routes
import StatisticGateway from "./StatisticGateway"; // Path to your component

// Mock the `useParams` hook from react-router
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

// Example of mock data for testing
const mockGatewayData = {
  historySamples: [
    {
      startTime: 1703240100,
      endTime: 1703241000,
      timeInStatusesS: {
        active: 580.33,
        inactive: 0,
        unstable: 0,
        offline: 0,
      },
    },
    {
      startTime: 1703239200,
      endTime: 1703240100,
      timeInStatusesS: {
        active: 900,
        inactive: 0,
        unstable: 0,
        offline: 0,
      },
    },
  ],
};

describe("StatisticGateway", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Mock the gatewayData import for testing
    jest.mock("../../data/single_gateway_stats.json", () => ({
      historySamples: mockGatewayData.historySamples,
    }));
  });

  it("renders the component correctly", async () => {
    // Mock the `gatewayId` in useParams
    (useParams as jest.Mock).mockReturnValue({ gatewayId: "123" });

    render(
      <MemoryRouter initialEntries={["/gateway/123"]}>
        <Routes>
          <Route path="/gateway/:gatewayId" element={<StatisticGateway />} />
        </Routes>
      </MemoryRouter>
    );

    // Check that breadcrumbs are displayed correctly
    const homeLink = screen.getByText("Home");
    const historyTimeText = screen.getByText(/History Time in Status Of 123/);

    expect(homeLink).toBeInTheDocument();
    expect(historyTimeText).toBeInTheDocument();

    // Check for the presence of the chart, it should be rendered with the proper status (active, inactive, etc.)
    await waitFor(() => {
      const activeChart = screen.getByText("Active:"); // Look for the chart header
      expect(activeChart).toBeInTheDocument();

      const inactiveChart = screen.getByText("Inactive:");
      expect(inactiveChart).toBeInTheDocument();
    });
  });
});
