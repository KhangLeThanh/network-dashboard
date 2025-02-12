# Network Dashboard

🚀 **Tech Stack**

- **ReactJS** – Frontend framework
- **TypeScript** – Statically typed JavaScript
- **Material-UI** – UI components

## 📌 Overview

**Network Dashboard** is a web application that provides an interactive view of gateway data. It features a **Gateway Table** and a **Statistic Gateway** view, allowing users to filter, analyze, and edit gateway information efficiently.

---

## 🖥️ Views

### 1️⃣ **Gateway Table**

**Displays a list of gateways in a table, ordered by the most recent message received.**

#### Features:

- ✔️ **Filtering** – Users can filter the table by:

  - **Status**
  - **Model**
  - **Version**

- ✔️ **Sorting** – Gateways are sorted based on the latest received message.

- ✔️ **Menu Actions:**
  - **Edit** – Modify gateway details. The updated gateway will be reflected on the listing gateway.
  - **View History Time in Status** – Navigate to the Statistic Gateway view for a selected gateway.

---

### 2️⃣ **Statistic Gateway**

**Shows detailed historical data for a selected gateway using Line Charts.**

#### Features:

- ✔️ **4 Line Charts** representing **Time in Status (seconds)**:

  - **Active**
  - **Inactive**
  - **Unstable**
  - **Offline**

- ✔️ **Insight** – Users can analyze how long the given gateway has spent in each status.

---

### Example of how it looks:

- **Gateway Table**: You can filter by Status, Model, and Version. Once sorted, it will display the most recent gateway at the top.
- **Statistic Gateway**: The page will show line charts that track how much time each gateway spent in different statuses.

---

## 💻 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/network-dashboard.git
   ```
2. Install Dependencies:
   ```bash
   npm install
   ```
3. Run the Application:
   ```bash
   npm run dev
   ```
