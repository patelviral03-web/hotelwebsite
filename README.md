# Himalayan Haven - Premium Mountain Retreat Website

A modern, luxury React Vite.js website for a premium hotel in Himachal Pradesh, India. This website showcases geodesic domes, private rooms, and exclusive experiences in the heart of the Himalayas.

## Features

### 🏔️ Home Page
- **Immersive Hero Section** with drone footage background of Himalayan peaks
- **Real-time Availability Calendar** for booking geodesic domes and private rooms
- **Curated Gallery** of local trekking experiences and accommodations
- **Featured Services** highlighting popular experiences
- **Guest Testimonials** with star ratings
- **Call-to-Action** sections for bookings

### 📖 About Page
- **Our Story, Mission & Values** sections with beautiful imagery
- **Achievements** showcase with statistics
- **Team Members** profiles with photos and descriptions
- **Contact Information** and office details

### 🏨 Services Page
- **Service Categories** (Accommodation, Adventure, Wellness, Dining, Experiences)
- **Detailed Service Cards** with features, pricing, and descriptions
- **Service Comparison** table
- **Service Highlights** section

### 🛏️ Accommodation Page
- **Accommodation Types** (Geodesic Domes, Private Rooms, Mountain Suites)
- **Detailed Descriptions** with amenities and features
- **Image Galleries** for each accommodation type
- **Comparison Table** for easy decision making
- **Booking Integration**

### 📸 Gallery Page
- **Category Filtering** (All, Domes, Rooms, Nature, Activities)
- **Interactive Lightbox** with navigation
- **Like Functionality** for favorite images
- **Responsive Grid Layout**

### 🗺️ Plan Your Journey Page
- **Seasonal Packing Lists** (Spring, Summer, Autumn, Winter, Monsoon)
- **Travel Options** (By Air, Road, Train, Bus)
- **Interactive Map** with hidden waterfalls and attractions
- **Travel Tips & FAQs**
- **Seasonal Activity Recommendations**

### 📅 Booking Page
- **Multi-step Booking Form**
- **Accommodation Selection** with visual cards
- **Real-time Availability Calendar**
- **Guest Information Form**
- **Additional Services Selection**
- **Payment Method Options**
- **Booking Confirmation** with summary

### 📞 Contact Page
- **Contact Form** with validation
- **Multiple Contact Methods** (Phone, Email, WhatsApp, Address)
- **Interactive Map** showing location
- **Travel Directions**
- **Frequently Asked Questions** with expandable answers
- **Social Media Links**

## Tech Stack

- **Frontend**: React 18+ with Vite
- **Styling**: Custom CSS with CSS Variables
- **Animations**: Framer Motion for smooth transitions
- **Routing**: React Router DOM
- **Icons**: Lucide React for beautiful icons
- **Date Handling**: date-fns for calendar functionality
- **Responsive Design**: Mobile-first approach

## Installation

1. Clone the repository:
```bash
git clone https://github.com/patelviral03-web/hotelwebsite.git
cd hotelwebsite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Project Structure

```
hotelwebsite/
├── src/
│   ├── assets/
│   │   └── images/          # Static images
│   ├── components/          # Reusable components
│   │   ├── AvailabilityCalendar.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── InteractiveMap.jsx
│   │   ├── Navbar.jsx
│   │   └── ScrollToTop.jsx
│   ├── data/                # Data files
│   │   └── galleryData.js
│   ├── pages/               # Page components
│   │   ├── About.jsx
│   │   ├── Accommodation.jsx
│   │   ├── Booking.jsx
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   │   ├── PlanYourJourney.jsx
│   │   └── Services.jsx
│   ├── styles/              # Additional styles
│   ├── App.jsx              # Main App component
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Changing Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary: #1a1a2e;
  --secondary: #16213e;
  --accent: #0f3460;
  --gold: #d4af37;
  --gold-light: #f4e4bc;
  /* ... */
}
```

### Adding New Pages
1. Create a new file in `src/pages/`
2. Import and add a route in `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

### Updating Content
- **Accommodation**: Edit `src/pages/Accommodation.jsx`
- **Services**: Edit `src/pages/Services.jsx`
- **Gallery**: Edit `src/data/galleryData.js`
- **Contact Info**: Edit `src/pages/Contact.jsx`

## Features Highlights

### ✨ Premium Design Elements
- **Gradient Text** and backgrounds
- **Glassmorphism** effects with backdrop blur
- **Smooth Animations** using Framer Motion
- **Hover Effects** on interactive elements
- **Responsive Layout** for all devices

### 🎯 User Experience
- **Multi-step Booking** process
- **Real-time Availability** checking
- **Interactive Maps** with location details
- **Seasonal Recommendations**
- **Mobile-Friendly** navigation

### 🚀 Performance
- **Lazy Loading** for images
- **Optimized Animations**
- **Efficient State Management**
- **Fast Page Transitions**

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
1. Update `vite.config.js` base path
2. Run `npm run build`
3. Deploy the `dist` folder

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is proprietary. All rights reserved.

## Credits

- **Design Inspiration**: Modern luxury hotel websites
- **Images**: Unsplash (placeholder images)
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Contact

For inquiries about this project, please contact:
- Email: reservations@himalayanhaven.com
- Website: https://himalayanhaven.com

---

**Himalayan Haven** - Where Luxury Meets Adventure in the Heart of the Himalayas
