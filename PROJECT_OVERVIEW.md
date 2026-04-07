# 🏨 Rizwan Hotel Premium Dining - Ordering App

A modern, high-end React-Vite application designed for seamless hotel in-room dining and pickup experiences. This platform allows guests to browse a curated menu, manage their cart, and place orders directly via WhatsApp.

---

## ✨ Key Features

### 🍽️ Dynamic Menu Exploration
- **Categorized Browsing**: Quickly navigate through Starters, Main Course, Desserts, and Beverages.
- **Smart Search**: Real-time filtering by dish name or description.
- **Dietary Filters**: One-tap "Pure Veg" toggle to cater to specific dietary preferences.
- **Trending Section**: An infinite-scroll showcase of the most popular culinary masterpieces.

### 🛒 Advanced Cart System
- **Persistent Storage**: Cart state is saved to `localStorage`, ensuring guests don't lose their selection upon page refresh.
- **Quantity Management**: Easily add, remove, or adjust quantities with instant visual feedback via `react-hot-toast`.
- **Floating Quick-Access**: A dedicated floating button to view the cart from anywhere on the page.

### 🛎️ Seamless Checkout Experience
- **Two-Step Validation**:
  1. **Guest Details**: Capture name, room/table number, and special delivery instructions.
  2. **Order Review**: A comprehensive summary of items and the final total before placement.
- **WhatsApp Integration**: Orders are formatted into a professional template and sent directly to the hotel's service desk via WhatsApp API.

---

## 🛠️ Technical Stack

- **Frontend**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Custom Gold/Charcoal Luxury Theme)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid transitions and interactive components
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **State Management**: React Context API (`CartContext`)

---

## 🏗️ Architecture & Data Flow

### 1. State Management (`src/context/CartContext.jsx`)
The application uses a centralized `CartProvider` wrapping the `App` component. It exposes:
- `cartItems`: Array of selected products with quantities.
- `cartTotal`: Computed real-time total.
- `addToCart` / `removeFromCart` / `updateQuantity`: Actions to manipulate the state.

### 2. Component Structure
- **Layout**: `Header.jsx`, `Hero.jsx`, `Footer`
- **Menu**: `FoodCard.jsx` (Individual item display and "Add to Cart" logic)
- **Cart**: `CartSidebar.jsx`, `FloatingCartButton.jsx`
- **Checkout**: `CheckoutModal.jsx` (Form handling and WhatsApp URL construction)
- **UI primitives**: Custom `Button`, `Input`, `Badge`, and `Skeleton` components for consistent design.

### 3. WhatsApp Integration Logic
The `handlePlaceOrder` function in `CheckoutModal.jsx` generates a formatted message:
```javascript
const message = `🛎️ *NEW ORDER RECEIVED*
👤 *CUSTOMER:* ${formData.name}
🏨 *ROOM/TABLE:* ${formData.room}
...
💰 *TOTAL PAYABLE: ₹${cartTotal}*`;
```
It then encodes this into a `wa.me` link to bridge the web app with the hotel's operational staff.

---

## 🎨 Design Philosophy
The app utilizes a **Luxury Minimalist** aesthetic:
- **Primary Color**: `#D4AF37` (Gold) for accents and primary actions.
- **Secondary Color**: `#1A1A1A` (Charcoal) for depth and sophisticated typography.
- **Accent**: `#FDFBF7` (Cream) for a soft, readable background.
- **Typography**: A blend of Serif (for elegance) and Sans-serif (for clarity).

---

## 🚀 Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
3.  **Build for Production**:
    ```bash
    npm run build
    ```
