# Take Care Of My Cats - Daily Feeding Schedule

This project provides a simple web page to outline the **daily feeding schedule and care instructions** for two cats: **Leona** and **Lenny**. The page ensures clear and accessible instructions are available for anyone responsible for taking care of the cats.

---

## Features

- **Cat Profiles**:
    - Displays individual cards for each cat with their **photo**, **name**, and a short description.
- **Feeding Schedule**:
    - Includes a detailed meal schedule for all cats.
- **Accessible Design**:
    - ARIA roles and accessible markup (e.g., descriptive alt texts, screen reader labels, and focusable elements) are included to accommodate users with assistive technologies.
- **Optimized Assets**:
    - CSS and JavaScript files are processed with Gulp for improved performance.

## Development

### Prerequisites

- Node.js and npm installed on your machine

### Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Gulp Tasks

This project uses Gulp to process CSS and JavaScript files:

- `npm start` - Starts development mode with live reloading
- `npm run build` - Builds production-ready assets

#### Available Gulp Commands

- `gulp` - Default task that builds assets and starts the development server
- `gulp build` - Builds all assets for production
- `gulp clean` - Cleans the dist directory
- `gulp styles` - Processes CSS files
- `gulp scripts` - Processes JavaScript files
- `gulp watch` - Watches for file changes and reloads the browser
