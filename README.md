# Next Portfolio

A modern, responsive portfolio website built with Next.js, showcasing UX & Web Design projects. This project serves as a personal portfolio for Elin Eurenius, featuring an interactive design with project showcases, contact information, and a clean, professional layout.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices using Tailwind CSS.
- **Dynamic Project Showcase**: Displays projects with detailed information including roles, tools, wireframes, and images.
- **Interactive Components**: Custom buttons, navigation, and gradient effects for an engaging user experience.
- **SEO Optimized**: Built with Next.js for fast loading and search engine visibility.
- **TypeScript Support**: Fully typed for better development experience and fewer bugs.
- **Analytics Integration**: Includes Google Tag Manager support for tracking user interactions.
- **Modular Components**: Reusable React components for easy maintenance and scalability.

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Analytics**: @next/third-parties (Google Tag Manager)
- **Linting**: ESLint
- **Build Tool**: Next.js (with React 19)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/fneel/next-portfolio.git
   cd next-portfolio
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables** (if needed):
   - Copy `.env.example` to `.env.local` and fill in your values (e.g., for analytics).

## Usage

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### Build for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Check for code quality issues:

```bash
npm run lint
```

## Project Structure

```
next-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   └── projects/           # Dynamic project pages
├── components/             # Reusable React components
│   ├── buttons/            # Button components
│   ├── social links/       # Social media links
│   └── ...                 # Other components
├── data/                   # Static data files
│   ├── projects.json       # Project data
│   └── projects.ts         # TypeScript types for projects
├── public/                 # Static assets
│   └── images/             # Images and project screenshots
├── types/                  # TypeScript type definitions
├── utils/                  # Utility functions
└── lib/                    # Library configurations
```

## Adding Projects

To add a new project:

1. Add project data to `data/projects.json` with the required fields (id, title, myRole, etc.).
2. Place project images in `public/images/projects/[project-id]/`.
3. The project will automatically appear in the portfolio and have its own dynamic page at `/projects/[id]`.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Elin Eurenius - [Your Contact Information]

Project Link: [https://github.com/fneel/next-portfolio](https://github.com/fneel/next-portfolio)
