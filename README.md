# Node Inventory App

A RESTful API for managing inventory items built with Node.js, Express, TypeScript, and MongoDB.

## Features

- **Create Items**: Add new inventory items with detailed information
- **Retrieve Items**: Fetch all inventory items from the database
- **Item Tracking**: Track item details including manufacturer, model, serial number, and quantity
- **Condition Monitoring**: Monitor item conditions (Operational, Maintenance Due, Under Repair, etc.)
- **Service History**: Record last service dates for maintenance tracking
- **Error Handling**: Comprehensive error handling and validation

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Development**: tsx for watch mode development

## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB instance (local or cloud)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/General4904/nodeInventoryApp
cd nodeInventoryApp
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/inventory
```

4. Update the `MONGODB_URI` with your MongoDB connection string

## Project Structure

```
nodeInventoryApp/
├── src/
│   ├── index.ts              # Application entry point
│   ├── item.model.ts         # Mongoose schema and interfaces
│   ├── items.controller.ts   # Request handlers
│   └── items.routes.ts       # API routes
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## API Endpoints

### Get All Items

```
GET /api/items
```

Returns all inventory items from the database.

**Response:**

```json
{
  "success": true
}
```

### Add New Item

```
POST /api/addItem
```

Creates a new inventory item.

**Request Body:**

```json
{
  "name": "Laptop",
  "manufacturer": "Dell",
  "model": "XPS 13",
  "serialNumber": "ABC123",
  "quantity": 5,
  "condition": "Operational",
  "notes": "Recently updated"
}
```

**Required Fields:**

- `name` (string)
- `manufacturer` (string)
- `model` (string)
- `quantity` (number)
- `condition` (string)
- `notes` (string)

**Condition Values:**

- Operational
- Due for Preventive Maintenance
- Requires corrective maintenance
- Under Repair
- Awaiting Parts
- Out of Service
- Decommissioned

**Response:**

```json
{
  "success": true,
  "message": "Item saved"
}
```

## Development Scripts

### Start Development Server

```bash
npm run dev
```

Runs the app in watch mode with automatic reloading.

### Build

```bash
npm run build
```

Compiles TypeScript to JavaScript in the `dist/` directory.

### Start Production Server

```bash
npm start
```

Runs the compiled application from the `dist/` directory.

## Environment Variables

| Variable      | Description               | Example                               |
| ------------- | ------------------------- | ------------------------------------- |
| `PORT`        | Server port               | `3000`                                |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/inventory` |

## Error Handling

The API returns appropriate HTTP status codes:

- `200`: Success
- `201`: Created
- `400`: Bad request (validation error or duplicate item)
- `500`: Server error

## License

ISC

## Author

Generalissimo

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.
