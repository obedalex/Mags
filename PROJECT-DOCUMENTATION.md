# 📚 WhatsApp Catalog Dashboard - Project Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Features Implemented](#features-implemented)
5. [Component Architecture](#component-architecture)
6. [State Management](#state-management)
7. [Dark Mode System](#dark-mode-system)
8. [Pages Overview](#pages-overview)
9. [Key Learning Concepts](#key-learning-concepts)
10. [Next Steps](#next-steps)

---

## 🎯 Project Overview

### What Is This Project?
A **WhatsApp Catalog Dashboard** for managing an online store where customers contact sellers via WhatsApp instead of traditional e-commerce checkout.

### Core Purpose
- **Admin Dashboard**: Manage products, view analytics, configure settings
- **No Inventory Tracking**: Focus on catalog display, not stock management
- **WhatsApp Integration**: Customers click products → opens WhatsApp with pre-filled message
- **Analytics Focus**: Track product views, WhatsApp clicks, and visitor traffic

### Business Model
1. Seller adds products to dashboard
2. Products display on frontend store (to be built later)
3. Customer views product → clicks "Contact on WhatsApp"
4. WhatsApp opens with message: "Hi! I'm interested in [Product Name]. Is it still available for [Price]?"
5. Transaction happens via WhatsApp conversation

---

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: React 18+ (with Vite)
- **Language**: JavaScript (JSX)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Context (page switching)
- **State Management**: React useState, useContext

### Development Tools
- **Package Manager**: npm
- **Build Tool**: Vite
- **Version Control**: Git (assumed)

### Future Integrations (Planned)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **File Storage**: Supabase Storage (for product images)
- **Charts**: Recharts (for analytics visualization)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx              # Left navigation menu
│   │   ├── TopBar.jsx               # Top bar with title, notifications, dark mode toggle
│   │   └── DashboardLayout.jsx      # Wrapper combining Sidebar + TopBar
│   │
│   ├── products/
│   │   ├── Searchbar.jsx            # Product search input + Add button
│   │   └── ProductTable.jsx         # Product listing table
│   │
│   └── settings/
│       └── AppearanceSettings.jsx   # Dark mode toggle settings
│
├── pages/
│   ├── ProductsPage.jsx             # Product management page (CRUD)
│   ├── AnalyticsPage.jsx            # Analytics dashboard (planned)
│   └── SettingsPage.jsx             # Settings configuration (planned)
│
├── context/
│   └── DarkModeContext.jsx          # Global dark mode state management
│
├── lib/
│   └── utils.js                     # Utility functions (e.g., cn for classNames)
│
├── App.jsx                          # Main app component, routing logic
└── main.jsx                         # Entry point, renders App
```

---

## ✅ Features Implemented

### 1. Layout System ✅
- **Sidebar Navigation**: Fixed left sidebar with menu items
- **TopBar**: Page title, notification bell, dark mode toggle
- **Responsive Layout**: Sidebar + TopBar always visible, content area changes
- **Page Switching**: Click navigation items to switch between pages

### 2. Dark Mode System ✅
- **Global Theme**: Dark/light mode affects entire application
- **Persistent**: Saves preference to localStorage
- **Toggle Locations**: TopBar (moon/sun icon) + Settings page
- **Tailwind Integration**: Uses `dark:` prefix for styling
- **Smooth Transitions**: Colors fade smoothly when switching themes

### 3. Products Page (Partial) ✅
- **Display Products**: Table showing product list with mock data
- **Search/Filter**: Real-time search by product name
- **Delete Products**: Remove products with confirmation dialog
- **Product Data**: Name, category, price, views
- **Action Buttons**: Edit and Delete (edit not yet implemented)

### 4. Component Architecture ✅
- **Reusable Components**: SearchBar, ProductTable separated
- **Props System**: Parent passes data to children
- **State Management**: State lives in parent, children receive via props
- **Event Handling**: Children report back via callback props

---

## 🧩 Component Architecture

### Layout Components

#### **Sidebar** (`components/layout/Sidebar.jsx`)
**Purpose**: Left navigation menu

**Props**:
- `currentPage` (string): Which page is active
- `onNavigate` (function): Called when menu item clicked

**Features**:
- Fixed position (always visible)
- Menu items: Analytics, Products, Settings
- Active state highlighting
- Dark mode support
- User profile section at bottom

**Icons Used**:
- `BarChart3` - Analytics
- `Package` - Products
- `Settings` - Settings
- `Store` - Logo

---

#### **TopBar** (`components/layout/TopBar.jsx`)
**Purpose**: Top navigation bar

**Props**:
- `title` (string): Page title to display

**Features**:
- Sticky position (stays at top when scrolling)
- Notification bell with badge
- Dark mode toggle (moon/sun icon)
- Switches between Moon (light) and Sun (dark) icons
- Dark mode support

---

#### **DashboardLayout** (`components/layout/DashboardLayout.jsx`)
**Purpose**: Wrapper that combines Sidebar + TopBar

**Props**:
- `children` (ReactNode): Page content to display
- `currentPage` (string): Active page
- `onPageChange` (function): Page navigation handler

**Structure**:
```
<DashboardLayout>
  ├── Sidebar (left, fixed)
  └── Main Content (right)
      ├── TopBar (top, sticky)
      └── Page Content (scrollable)
```

---

### Product Components

#### **SearchBar** (`components/products/Searchbar.jsx`)
**Purpose**: Product search input + Add Product button

**Props**:
- `value` (string): Current search query
- `onChange` (function): Called when search text changes

**Features**:
- Search icon (magnifying glass)
- Controlled input (value from parent)
- "Add Product" button (not yet functional)
- Dark mode support

**Usage**:
```javascript
<Searchbar
  value={searchQuery}
  onChange={setSearchQuery}
/>
```

---

#### **ProductTable** (`components/products/ProductTable.jsx`)
**Purpose**: Display products in table format

**Props**:
- `products` (array): List of products to display
- `onDelete` (function): Called when delete button clicked
- `onEdit` (function): Called when edit button clicked

**Product Object Structure**:
```javascript
{
  id: 1,
  productName: "Wireless Headphones",
  category: "Electronics",
  price: "$99.9",
  views: 234
}
```

**Features**:
- Responsive table layout
- Category badges (colored pills)
- View count with eye icon
- Edit button (blue)
- Delete button (red)
- Hover effects on rows
- Dark mode support

---

### Settings Components

#### **AppearanceSettings** (`components/settings/AppearanceSettings.jsx`)
**Purpose**: Dark mode toggle in settings

**Props**: None (uses global context)

**Features**:
- Toggle switch (slides left/right)
- Moon icon (dark mode)
- Sun icon (light mode)
- Current theme indicator
- Connected to global dark mode context

---

## 🔄 State Management

### React State (useState)

**Where Used**: ProductsPage

**Products State**:
```javascript
const [products, setProducts] = useState(INITIAL_PRODUCTS);
```
- Stores array of product objects
- Updated when adding, editing, or deleting products

**Search State**:
```javascript
const [searchQuery, setSearchQuery] = useState("");
```
- Stores current search text
- Updates as user types

**Computed State** (Filtered Products):
```javascript
const filteredProducts = products.filter(product =>
  product.productName.toLowerCase().includes(searchQuery.toLowerCase())
);
```
- Automatically recalculates when `products` or `searchQuery` changes
- No explicit state needed

---

### React Context (Dark Mode)

**File**: `context/DarkModeContext.jsx`

**Purpose**: Share dark mode state across entire app

**Context Provides**:
```javascript
{
  darkMode: boolean,      // Current dark mode state
  toggleDarkMode: function, // Function to toggle
  setDarkMode: function    // Function to set directly
}
```

**How It Works**:
1. DarkModeProvider wraps entire app in `App.jsx`
2. Stores `darkMode` state in localStorage
3. Adds/removes `dark` class on `<html>` element
4. Any component can access via `useDarkMode()` hook

**Usage in Components**:
```javascript
import { useDarkMode } from '../context/DarkModeContext';

const MyComponent = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  return (
    <div className="bg-white dark:bg-gray-800">
      <button onClick={toggleDarkMode}>Toggle</button>
    </div>
  );
};
```

---

## 🌓 Dark Mode System

### Implementation Approach: Global Theme with Tailwind

**Method**: CSS class-based dark mode

**How It Works**:
1. **Tailwind Config** (`tailwind.config.js`):
   ```javascript
   export default {
     darkMode: 'class', // Enable class-based dark mode
     // ...
   }
   ```

2. **Context Manages HTML Class**:
   ```javascript
   // When darkMode = true
   document.documentElement.classList.add('dark');
   // <html class="dark">
   
   // When darkMode = false
   document.documentElement.classList.remove('dark');
   // <html>
   ```

3. **Components Use dark: Prefix**:
   ```javascript
   // Light mode: bg-white
   // Dark mode: bg-gray-800
   <div className="bg-white dark:bg-gray-800">
   ```

### Dark Mode Color Palette

**Backgrounds**:
- Light: `bg-white`, `bg-gray-50`, `bg-gray-100`
- Dark: `bg-gray-900`, `bg-gray-800`, `bg-gray-700`

**Text**:
- Light: `text-gray-900`, `text-gray-700`, `text-gray-600`
- Dark: `text-white`, `text-gray-200`, `text-gray-400`

**Borders**:
- Light: `border-gray-200`, `border-gray-300`
- Dark: `border-gray-700`, `border-gray-600`

**Example Usage**:
```javascript
<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
  <h1 className="text-gray-900 dark:text-white">Title</h1>
  <p className="text-gray-600 dark:text-gray-400">Description</p>
</div>
```

### Persistence
- Saved to `localStorage` as JSON
- Key: `"darkMode"`
- Value: `true` or `false`
- Restored on page refresh

---

## 📄 Pages Overview

### Products Page (`pages/ProductsPage.jsx`)

**Status**: Partially Implemented ✅

**Features Implemented**:
- Display products from state
- Search/filter products by name
- Delete products with confirmation

**State**:
```javascript
const [products, setProducts] = useState([...]);
const [searchQuery, setSearchQuery] = useState("");
```

**Data Flow**:
```
ProductsPage (has state)
    ↓
    ├── SearchBar (receives value, reports onChange)
    └── ProductTable (receives filtered products, reports onDelete/onEdit)
```

**Features Pending**:
- Add new product (modal/form)
- Edit existing product
- Category filter
- Image upload
- Save to database

---

### Analytics Page (`pages/AnalyticsPage.jsx`)

**Status**: Planned (Not Started) ❌

**Planned Features**:
- **Stat Cards**: Total Products, Product Views, WhatsApp Clicks, Visitors
- **Charts**: Product views over time (line/bar chart)
- **Top Products**: Most viewed products list
- **Traffic Sources**: Visitor source breakdown (Direct, Social, Search, Email)
- **Alerts**: High traffic notifications, low product count warnings

**Data Structure** (Mock for now):
```javascript
{
  totalProducts: 127,
  productViews: 2543,
  whatsappClicks: 345,
  visitors: 1234,
  viewsOverTime: [
    { date: "2024-01-01", views: 234 },
    // ...
  ],
  topProducts: [
    { id: 1, name: "Headphones", views: 234 },
    // ...
  ],
  trafficSources: {
    direct: 45,
    social: 35,
    search: 15,
    email: 5
  }
}
```

---

### Settings Page (`pages/SettingsPage.jsx`)

**Status**: Partially Implemented ✅

**Sections**:

1. **Appearance** ✅
   - Dark mode toggle
   - Current theme indicator

2. **WhatsApp Integration** (Planned) ❌
   - WhatsApp number input
   - Message template textarea
   - Placeholders: `{product_name}`, `{price}`
   - Test button (opens WhatsApp)

3. **Store Information** (Planned) ❌
   - Store name
   - Store description
   - Currency selector (USD, EUR, GBP, etc.)

4. **Notification Preferences** (Planned) ❌
   - Email notifications toggle
   - High traffic alerts toggle
   - Low product count alerts toggle
   - Weekly summary toggle

**Data Structure**:
```javascript
{
  whatsappNumber: "+1234567890",
  messageTemplate: "Hi! I'm interested in {product_name}...",
  storeName: "TechHub Store",
  storeDescription: "Quality electronics...",
  currency: "USD",
  notifications: {
    email: true,
    trafficAlerts: true,
    lowProductAlerts: true,
    weeklySummary: false
  }
}
```

---

## 🧠 Key Learning Concepts

### 1. React State Management

**useState Hook**:
```javascript
const [value, setValue] = useState(initialValue);
```
- `value`: Current state value
- `setValue`: Function to update state
- State changes trigger re-renders

**Example**:
```javascript
const [count, setCount] = useState(0);
setCount(count + 1); // Updates state
```

---

### 2. Props (Component Communication)

**Parent → Child** (Pass data down):
```javascript
// Parent
<ChildComponent name="John" age={25} />

// Child
const ChildComponent = ({ name, age }) => {
  return <div>{name} is {age}</div>;
};
```

**Child → Parent** (Pass events up):
```javascript
// Parent
const handleClick = (id) => {
  console.log("Clicked:", id);
};

<ChildComponent onClick={handleClick} />

// Child
const ChildComponent = ({ onClick }) => {
  return <button onClick={() => onClick(123)}>Click</button>;
};
```

---

### 3. Array Methods

**map()** - Transform array:
```javascript
const products = [{ id: 1, name: "A" }, { id: 2, name: "B" }];

products.map(product => (
  <div key={product.id}>{product.name}</div>
));
// Result: <div>A</div>, <div>B</div>
```

**filter()** - Keep matching items:
```javascript
const products = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" }
];

const filtered = products.filter(p => p.name.includes("App"));
// Result: [{ id: 1, name: "Apple" }]
```

**Why filter() for deletion**:
```javascript
// ❌ Wrong - mutates state directly
products.splice(index, 1);

// ✅ Correct - creates new array
setProducts(products.filter(p => p.id !== deleteId));
```

---

### 4. Controlled Inputs

**Controlled Input** (React controls value):
```javascript
const [value, setValue] = useState("");

<input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

**Why?**
- React knows the value at all times
- Can validate, transform, or block input
- Single source of truth (state)

**Flow**:
```
User types → onChange fires → setValue updates state → 
input re-renders with new value
```

---

### 5. Context API

**Purpose**: Share data across many components without prop drilling

**Problem Without Context**:
```javascript
<App darkMode={darkMode}>
  <Layout darkMode={darkMode}>
    <Sidebar darkMode={darkMode}>
      <Button darkMode={darkMode} />
    </Sidebar>
  </Layout>
</App>
```
Props passed through every level!

**Solution With Context**:
```javascript
<DarkModeProvider>
  <App>
    <Layout>
      <Sidebar>
        <Button />  {/* Uses useDarkMode() directly */}
      </Sidebar>
    </Layout>
  </App>
</DarkModeProvider>
```

---

### 6. Conditional Rendering

**Ternary Operator**:
```javascript
{darkMode ? 'Dark Theme' : 'Light Theme'}
```

**Logical AND**:
```javascript
{products.length === 0 && <p>No products found</p>}
```

**Conditional Classes**:
```javascript
className={`base-class ${darkMode ? 'dark-class' : 'light-class'}`}
```

---

### 7. Event Handling

**onClick**:
```javascript
<button onClick={() => handleDelete(productId)}>
  Delete
</button>
```

**onChange**:
```javascript
<input
  onChange={(e) => setSearchQuery(e.target.value)}
/>
```

**Why arrow functions?**
```javascript
// ❌ Wrong - calls immediately
<button onClick={handleDelete(id)}>

// ✅ Correct - calls when clicked
<button onClick={() => handleDelete(id)}>
```

---

## 🚀 Next Steps

### Phase 1: Complete Products Page
- [ ] **Add Product Modal**
  - Create modal component
  - Form with inputs (name, category, price, description)
  - Image upload placeholder
  - Validation
  - Add to products array

- [ ] **Edit Product**
  - Open modal with existing data
  - Update product in array
  - Close modal after save

- [ ] **Category Management**
  - Add new categories
  - Delete categories
  - Assign to products

- [ ] **Advanced Features**
  - Sort products (by name, price, views)
  - Category filter dropdown
  - Bulk actions (delete multiple)
  - Export products (CSV)

---

### Phase 2: Complete Settings Page
- [ ] **WhatsApp Integration**
  - Save WhatsApp number to state/localStorage
  - Save message template
  - Test button opens WhatsApp with sample message
  - Validate phone number format

- [ ] **Store Information**
  - Save store name, description, currency
  - Persist to localStorage
  - Load on mount

- [ ] **Notification Preferences**
  - Toggle switches for each preference
  - Save to localStorage

---

### Phase 3: Build Analytics Page
- [ ] **Mock Data**
  - Create fake analytics data
  - Generate random views/clicks over time

- [ ] **Stat Cards**
  - Display 4 metric cards
  - Calculate from products data

- [ ] **Charts**
  - Install Recharts library
  - Line chart for views over time
  - Bar chart for orders per day

- [ ] **Top Products**
  - Sort products by views
  - Display top 5

- [ ] **Traffic Sources**
  - Progress bars for each source
  - Calculate percentages

---

### Phase 4: Database Integration (Supabase)
- [ ] **Setup Supabase**
  - Create account
  - Create project
  - Get API keys

- [ ] **Database Schema**
  - Products table
  - Categories table
  - Analytics table
  - Settings table

- [ ] **Connect to Supabase**
  - Install Supabase client
  - Configure connection
  - Create API service layer

- [ ] **Replace Mock Data**
  - Fetch products from database
  - Save new products to database
  - Update/delete via API

- [ ] **Image Upload**
  - Supabase Storage setup
  - Upload product images
  - Store URLs in database

- [ ] **Authentication**
  - Add login page
  - Protect dashboard routes
  - User sessions

---

### Phase 5: Frontend Store (Customer-Facing)
- [ ] **Product Catalog Page**
  - Grid layout of products
  - Category filter
  - Search functionality
  - Responsive design

- [ ] **Product Detail Page**
  - Large product image(s)
  - Description
  - Price
  - Category
  - WhatsApp button

- [ ] **WhatsApp Integration**
  - Generate WhatsApp link with pre-filled message
  - Include product name and price
  - Open in new tab/window

- [ ] **Routing**
  - React Router setup
  - /products
  - /products/:id
  - /category/:name

---

### Phase 6: Polish & Deploy
- [ ] **Error Handling**
  - Loading states
  - Error messages
  - Empty states

- [ ] **Responsive Design**
  - Mobile-first approach
  - Tablet breakpoints
  - Desktop optimization

- [ ] **Performance**
  - Code splitting
  - Lazy loading
  - Image optimization

- [ ] **SEO** (Frontend Store)
  - Meta tags
  - Open Graph tags
  - Sitemap

- [ ] **Deployment**
  - Build for production
  - Deploy dashboard
  - Deploy frontend store
  - Connect domain

---

## 📊 Data Models

### Product
```javascript
{
  id: number | string,
  productName: string,
  category: string,
  price: string | number,
  description?: string,
  image?: string,
  views: number,
  whatsappClicks?: number,
  createdAt?: Date,
  updatedAt?: Date
}
```

### Category
```javascript
{
  id: number | string,
  name: string,
  slug: string,
  productCount: number
}
```

### Analytics (Daily)
```javascript
{
  date: Date,
  totalViews: number,
  whatsappClicks: number,
  visitors: number,
  topProducts: [
    { productId: number, views: number }
  ],
  trafficSources: {
    direct: number,
    social: number,
    search: number,
    email: number
  }
}
```

### Settings
```javascript
{
  whatsapp: {
    number: string,
    messageTemplate: string
  },
  store: {
    name: string,
    description: string,
    currency: string
  },
  notifications: {
    email: boolean,
    trafficAlerts: boolean,
    lowProductAlerts: boolean,
    weeklySummary: boolean
  },
  theme: {
    darkMode: boolean
  }
}
```

---

## 🎨 Design System

### Colors

**Light Mode**:
- Background: `#F9FAFB` (gray-50)
- Surface: `#FFFFFF` (white)
- Primary: `#3B82F6` (blue-500)
- Text Primary: `#111827` (gray-900)
- Text Secondary: `#6B7280` (gray-600)
- Border: `#E5E7EB` (gray-200)

**Dark Mode**:
- Background: `#111827` (gray-900)
- Surface: `#1F2937` (gray-800)
- Primary: `#3B82F6` (blue-500)
- Text Primary: `#F9FAFB` (gray-50)
- Text Secondary: `#9CA3AF` (gray-400)
- Border: `#374151` (gray-700)

### Typography
- **Headings**: `font-bold` (700)
- **Body**: `font-normal` (400)
- **Labels**: `font-medium` (500)

### Spacing
- Small: `gap-2`, `p-2` (8px)
- Medium: `gap-4`, `p-4` (16px)
- Large: `gap-6`, `p-6` (24px)

### Border Radius
- Small: `rounded` (4px)
- Medium: `rounded-lg` (8px)
- Large: `rounded-xl` (12px)
- Full: `rounded-full` (9999px)

---

## 🐛 Common Issues & Solutions

### Issue 1: Props Not Working
**Symptom**: Component receives props but doesn't display data

**Solution**: Check prop names match
```javascript
// Parent sends:
<Child product={data} />

// Child expects:
const Child = ({ products }) => { ... }  // ❌ Mismatch!

// Fix:
const Child = ({ product }) => { ... }  // ✅ Match
```

---

### Issue 2: State Not Updating
**Symptom**: State change doesn't trigger re-render

**Solution**: Never mutate state directly
```javascript
// ❌ Wrong - mutates array
products.push(newProduct);

// ✅ Correct - creates new array
setProducts([...products, newProduct]);
```

---

### Issue 3: Dark Mode Not Working
**Symptom**: `dark:` classes don't apply

**Solution**: Check Tailwind config
```javascript
// tailwind.config.js
export default {
  darkMode: 'class', // Must be present!
  // ...
}
```

---

### Issue 4: Input Not Accepting Text
**Symptom**: Can't type in controlled input

**Solution**: Check onChange is connected
```javascript
// ❌ Missing onChange
<input value={value} />

// ✅ With onChange
<input value={value} onChange={(e) => setValue(e.target.value)} />
```

---

## 📚 Resources & References

### React Documentation
- [React Docs](https://react.dev)
- [useState Hook](https://react.dev/reference/react/useState)
- [useContext Hook](https://react.dev/reference/react/useContext)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Dark Mode](https://tailwindcss.com/docs/dark-mode)

### Lucide Icons
- [Icon Gallery](https://lucide.dev/icons)

### Future Tools
- [Supabase Docs](https://supabase.com/docs)
- [Recharts Docs](https://recharts.org)

---

## 📝 Notes

### Development Approach
- **Learn by Building**: Start simple, add complexity gradually
- **Component-First**: Build small, reusable components
- **State Management**: Keep state as close to where it's used as possible
- **Props Down, Events Up**: Data flows down, events bubble up

### Best Practices Followed
- ✅ Consistent naming conventions
- ✅ Component separation (layout, pages, features)
- ✅ Reusable components
- ✅ Dark mode throughout
- ✅ Responsive design considerations
- ✅ Accessibility (aria-labels, semantic HTML)

### Future Improvements
- TypeScript for type safety
- Unit tests (Jest, React Testing Library)
- E2E tests (Playwright, Cypress)
- Storybook for component documentation
- CI/CD pipeline
- Error boundary components
- Loading skeletons
- Optimistic UI updates

---

## 🎓 Lessons Learned

### React Fundamentals
1. **State is the single source of truth**
2. **Props flow down, never up**
3. **Never mutate state directly**
4. **Keys are important for lists**
5. **Context for global state**

### Component Design
1. **Small, focused components**
2. **Props for configuration**
3. **Composition over inheritance**
4. **Controlled components**

### Styling with Tailwind
1. **Utility-first approach**
2. **Dark mode with class strategy**
3. **Responsive by default**
4. **Consistent spacing system**

---

## 🤝 Contributing

### Adding New Features
1. Create component in appropriate folder
2. Follow existing naming conventions
3. Add dark mode support
4. Test in both light and dark modes
5. Update this documentation

### Code Style
- Use functional components
- Destructure props
- Add comments for complex logic
- Use meaningful variable names
- Keep components under 200 lines

---

**Last Updated**: February 2026  
**Version**: 0.1.0 (MVP in progress)  
**Status**: Active Development 🚧
