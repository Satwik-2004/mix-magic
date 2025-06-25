# Mix Magic 🍹

A modern cocktail discovery application built with React that lets you search and explore cocktail recipes from around the world. Mix Magic fetches data from TheCocktailDB API to provide detailed cocktail recipes, ingredients, and preparation instructions.

## 🌟 Features

- **Cocktail Search**: Search for cocktails by name
- **Detailed Recipes**: View complete cocktail information including ingredients, instructions, and glassware
- **Responsive Design**: Optimized for desktop and mobile devices
- **Fast Navigation**: Single Page Application (SPA) with React Router
- **Newsletter Subscription**: Subscribe to cocktail newsletters
- **Error Handling**: Comprehensive error pages and loading states
- **Modern UI**: Styled with styled-components for a sleek, professional look

## 🚀 Live Demo

[View Live Application](https://mix-magic.netlify.app/)

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **Styling**: Styled Components
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **API**: TheCocktailDB API
- **Deployment**: Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Satwik-2004/mix-magic.git
   cd mix-magic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Project Structure

```
mix-magic/
├── public/
│   ├── _redirects          # Netlify redirects for SPA
│   └── ...
├── src/
│   ├── assets/
│   │   ├── wrappers/       # Styled components
│   │   └── not-found.svg   # 404 error image
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── SearchForm.jsx  # Cocktail search form
│   │   ├── CocktailList.jsx # List of cocktail cards
│   │   └── CocktailCard.jsx # Individual cocktail card
│   ├── pages/
│   │   ├── Landing.jsx     # Home page with search
│   │   ├── Cocktail.jsx    # Single cocktail details
│   │   ├── About.jsx       # About page
│   │   ├── Newsletter.jsx  # Newsletter subscription
│   │   ├── HomeLayout.jsx  # Main layout wrapper
│   │   ├── Error.jsx       # 404 error page
│   │   ├── SinglePageError.jsx # Route-specific errors
│   │   └── index.js        # Page exports
│   ├── App.jsx             # Main app component with routing
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── package.json
└── README.md
```

## 🔧 API Integration

The application uses [TheCocktailDB API](https://www.thecocktaildb.com/api.php) for cocktail data:

- **Search cocktails**: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s={cocktail_name}`
- **Get cocktail details**: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={cocktail_id}`

## 🎨 Key Components

### Landing Page
- Displays search form and cocktail results
- Uses React Query for efficient data fetching and caching
- Handles empty search results gracefully

### Cocktail Details
- Shows complete cocktail information
- Displays ingredients, instructions, and glassware
- Responsive design with grid layout

### Search Functionality
- Real-time search with URL parameter updates
- Form validation and loading states
- Search term persistence across navigation

### Error Handling
- Custom 404 page with navigation back to home
- Route-specific error boundaries
- User-friendly error messages

## 🚀 Deployment

The application is deployed on Netlify with automatic deployments from the main branch.

### Netlify Configuration
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects file: `public/_redirects` (handles SPA routing)

## 📱 Responsive Design

Mix Magic is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile phones

The application uses CSS Grid and Flexbox for layout, with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 992px
- Desktop: > 992px

## 🔮 Features in Detail

### Newsletter Subscription
- Form validation with required fields
- Integration with external newsletter API
- Success/error notifications with React Toastify
- Loading states during form submission

### Search Experience
- Instant search as you type
- URL-based search (shareable links)
- Default cocktail suggestions when no search term is provided
- Loading indicators during API calls

### Navigation
- Active link highlighting
- Breadcrumb navigation on single cocktail pages
- Back-to-home functionality from all pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Satwik** - [GitHub Profile](https://github.com/Satwik-2004)

## 🙏 Acknowledgments

- [TheCocktailDB](https://www.thecocktaildb.com/) for providing the cocktail data API
- [React Router](https://reactrouter.com/) for seamless navigation
- [TanStack Query](https://tanstack.com/query) for efficient data fetching
- [Styled Components](https://styled-components.com/) for component styling

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or contact me through my GitHub profile.

---

**Mix Magic** - Discover your next favorite cocktail! 🍸
