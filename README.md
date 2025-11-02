# Education Support Initiative Dashboard - AI Builder Prompt

## Project Overview

Build a premium, user-friendly **Education Support Initiative Admin Dashboard** for board chairpersons (age 45-50+) to manage donors, beneficiaries, and financial aid distributions. This is a React + TypeScript application using LocalStorage as the database not Bolt database.

**Target Users:** Board chairpersons aged 45-50+ (design must be intuitive, with larger fonts and clear interactions)

**Project Scope Note (Non-MVP):** This is a non-MVP project. The AI should generate code generously and provide full-featured, premium, production-ready implementations where reasonable — including complete components, wiring, seed data, configuration files, styles, accessibility, and small test examples. Favor completeness over minimal stubs unless the user explicitly requests a lighter implementation. Also get design inspirations from the UI design attached.

**Additional Focus:** The AI should prioritize creating production-ready implementations for all items in the `src` folder, ensuring they are fully functional and adhere to best practices for maintainability and scalability.

---

## Tech Stack Requirements

### Core Technologies

- **Frontend:** React 18+ with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Charts:** Recharts
- **Routing:** React Router DOM v6
- **Date Handling:** date-fns
- **Storage:** LocalStorage (no backend)

### Configuration Files Required

Generate complete, production-ready config files:

- `package.json` with all dependencies
- `tsconfig.json`
- `vite.config.ts` with path aliases (@/)
- `tailwind.config.js`
- `postcss.config.js`
- `index.html`

---

## Design System (Extract from Provided UI Image)

### Color Palette

**Primary Colors:**

- Primary Blue: `#5B7FFF` (main brand color)
- Primary Dark: `#4A6FEE` (hover states)
- Primary Light: `#7B96FF` (light accents)

**Secondary Colors:**

- Secondary Purple: `#9BA5FF`
- Secondary Light: `#B5BFFF`

**Accent Colors:**

- Coral/Pink: `#FF7B7B`, `#FF9999` (for alerts, distress)
- Success Green: `#48BB78`
- Warning Orange: `#F6AD55`
- Danger Red: `#FC8181`

**Neutral Colors:**

- Background: `#F5F7FA` (page background)
- Surface: `#FFFFFF` (cards, modals)
- Text Primary: `#2D3748`
- Text Secondary: `#718096`
- Text Muted: `#A0AEC0`
- Border: `#E2E8F0`

**IMPORTANT:** Only use multiple colors for badges. All other components (KPI cards, buttons, etc.) should avoid color conflicts and stick to the primary blue and neutral palette.

### Typography (Optimized for 45-50+ Age Group)

- **Font Sizes:** Larger than standard (base: 18px)
  - xs: 14px
  - sm: 16px
  - base: 18px
  - lg: 20px
  - xl: 24px
  - 2xl: 30px
  - 3xl: 36px
- **Line Height:** 1.7 for body text (enhanced readability)
- **Font Weights:** 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Shadows (Multi-layered, Premium Look)

**KPI Cards:** Multi-layered shadow with blue tint:

```
0 2px 8px rgba(91, 127, 255, 0.08),
0 8px 24px rgba(91, 127, 255, 0.12),
0 16px 48px rgba(91, 127, 255, 0.08)
```

**Regular Cards:**

```
0 2px 8px rgba(0, 0, 0, 0.06),
0 8px 24px rgba(0, 0, 0, 0.08)
```

**Elevated (Modals):**

```
0 4px 16px rgba(0, 0, 0, 0.1),
0 12px 48px rgba(0, 0, 0, 0.15)
```

**Hover State:**

```
0 4px 12px rgba(91, 127, 255, 0.15),
0 12px 32px rgba(91, 127, 255, 0.2)
```

### Border Radius

- Small: 8px
- Medium: 12px
- Large: 16px
- XLarge: 20px
- Full: 9999px (pills, badges)

### Spacing System

Use consistent spacing: 8px, 12px, 16px, 24px, 32px, 48px

---

## Project Structure

```
src/
├── App.tsx
├── main.tsx
├── index.css (with all design tokens, button styles, input styles, card styles)
├── types/
│   └── index.ts (all TypeScript interfaces)
├── components/
│   ├── ui/ (reusable base components)
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Modal.tsx
│   │   ├── Badge.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Skeleton.tsx
│   │   └── Pagination.tsx
│   ├── layout/
│   │   ├── Layout.tsx
│   │   ├── Sidebar.tsx (desktop only, lg+)
│   │   ├── MobileNav.tsx (bottom nav, <lg)
│   │   ├── Header.tsx
│   │   └── Breadcrumbs.tsx
│   ├── shared/
│   │   ├── KPICard.tsx
│   │   ├── DataTable.tsx
│   │   ├── StatCard.tsx
│   │   └── EmptyState.tsx
│   └── modals/
│       ├── AddBeneficiaryModal.tsx
│       ├── AddContributorModal.tsx
│       ├── AddPaymentModal.tsx
│       ├── AddContributionModal.tsx
│       ├── AddCategoryModal.tsx
│       └── ConfirmDeleteModal.tsx
├── pages/
│   ├── Dashboard.tsx
│   ├── Beneficiaries.tsx
│   ├── BeneficiaryDetail.tsx
│   ├── Contributors.tsx
│   ├── ContributorDetail.tsx
│   ├── Reports.tsx
│   └── Settings.tsx
├── contexts/
│   └── AppContext.tsx (manage all LocalStorage data)
├── hooks/
│   ├── useLocalStorage.ts
│   └── useSearch.ts (debounced search with 300ms delay)
└── utils/
    ├── helpers.ts
    ├── formatters.ts (date: DD/MM/YYYY, currency: ₦)
    └── constants.ts
```

---

9126220480

## TypeScript Interfaces

### Core Types

```typescript
// Enums
type BeneficiaryStatus = "Orphan" | "Widow" | "Distress";
type PaymentType = "One-time" | "1st Term" | "2nd Term" | "3rd Term";
type Gender = "Male" | "Female";
type ContributorStatus = "Active" | "Inactive";
type CategoryType = "education" | "support";
```

### Main Interfaces

1. **Category:** id, name, type, active, createdAt
2. **Payment:** id, amount, date, term, notes, createdAt
3. **Beneficiary:** id, name, state, lga, gender, class, status, categoryId, categoryName, paymentType, school, payments[], totalReceived, lastPaymentDate, createdAt, updatedAt
4. **Contribution:** id, amount, month, year, dateReceived, notes, createdAt
5. **Contributor:** id, name, email, phone, monthlyAmount, contributions[], totalContributed, lastContributionDate, dateJoined, status, createdAt, updatedAt

---

## Navigation Structure

### Desktop Sidebar (lg screens and up)

- Fixed left side, 280px width
- White background with shadow
- Logo/app name at top
- Nav items with icons + text labels:
  1. **Dashboard** (Home icon)
  2. **Beneficiaries** (Users icon)
  3. **Contributors** (DollarSign icon)
  4. **Reports** (FileText icon)
  5. **Settings** (Settings icon)
- Active state: Blue background, white text
- Hover state: Light blue background

### Mobile Bottom Navigation (<lg screens)

- Fixed bottom bar, full width
- White background with top shadow
- 5 icon-only buttons (same as sidebar)
- Active state: Blue icon with small label
- iOS safe area padding

---

## Reusable Components

### 1. Button Component

**Variants:** primary, secondary, outline, danger, ghost
**Sizes:** sm (36px), md (44px), lg (52px)
**Features:**

- Loading state with spinner
- Disabled state
- Icon support (left/right)
- Full width option
- Smooth animations (scale on click, hover lift)

### 2. Card Component

**Variants:** default, kpi, elevated
**Features:**

- Configurable padding (sm, md, lg)
- Optional hover effect
- Click handler support

### 3. Modal Component

**Features:**

- Backdrop blur with overlay (rgba(0,0,0,0.5))
- Z-index: 50
- Center positioning
- Click outside to close
- ESC key to close
- Smooth fade-in/scale animation (Framer Motion)
- Header with title and close (X) button
- Footer with action buttons
- Scroll lock body when open

### 4. Input Component

**Types:** text, email, number, date, textarea, select
**Features:**

- Label with required indicator
- Error state with message
- Helper text
- Large touch targets (44px min height)
- Clear focus ring (blue)
- Prefix/suffix support (₦ symbol)

### 5. KPICard Component

**Structure:**

- Colored circle icon background (top left)
- Large value text (center)
- Optional trend indicator with percentage (up/down arrow)
- Label text (bottom)
- Premium multi-layered shadow
- Hover lift effect

### 6. DataTable Component

**Features:**

- Responsive (table on desktop, cards on mobile)
- Sortable columns
- Action column with icon-only buttons (Edit, Delete, Eye)
- Row hover effect
- Loading skeleton state
- Empty state with illustration
- Pagination (10, 20, 50 per page)
- Integrates with live search

### 7. SearchBar Component

**Features:**

- Magnifying glass icon (left)
- Clear button (right, when has value)
- Debounced search (300ms)
- Large input for accessibility
- Placeholder text

### 8. Badge Component

**Color Variants (ONLY place to use multiple colors):**

- Orphan: Blue
- Widow: Purple
- Distress: Coral/Pink
- Active: Green
- Inactive: Gray
- Success: Green
- Warning: Orange
- Danger: Red

### 9. Pagination Component

**Features:**

- Previous/Next buttons
- Page numbers (max 5 visible with ellipsis)
- Jump to first/last
- Results per page selector (10, 20, 50)
- Total results display
- Disabled states

### 10. Breadcrumbs Component

**Format:** Dashboard > Beneficiaries > Amina Ibrahim
**Features:**

- Chevron separators (Lucide ChevronRight)
- Clickable links (except current page)
- Current page in bold
- Truncate long names with ellipsis

---

## Page Specifications

### 1. Dashboard Page

**Route:** `/`

**Layout:**

- Breadcrumbs: Dashboard
- KPI Cards (4 cards, responsive grid):
  1. Total Contributors (count + active %)
  2. Total Beneficiaries (count + breakdown)
  3. Monthly Collection (₦ amount for current month)
  4. Total Disbursed (₦ amount for current month)
  5. Available Balance (collection - disbursed)
- Recent Activity Section (card with table showing last 10 payments/contributions)
- Charts Section (2 columns):
  - Pie chart: Distribution by category
  - Bar chart: Last 6 months collection vs disbursement

### 2. Beneficiaries Page

**Route:** `/beneficiaries`

**Layout:**

- Breadcrumbs: Dashboard > Beneficiaries
- KPI Cards (4 cards):
  1. Total Beneficiaries
  2. Active Cases
  3. Total Disbursed This Month
  4. Pending Payments
- Action Bar:
  - SearchBar (left)
  - Filter dropdown (right)
  - "Add Beneficiary" button (right, primary)
- DataTable with columns:
  - Name
  - Category
  - Status (badge)
  - Amount (last payment)
  - Last Paid (DD/MM/YYYY)
  - School/Institution
  - Actions (Eye, Edit, Delete icons)
- Pagination

**Actions:**

- Eye icon → Navigate to `/beneficiaries/:id`
- Edit icon → Open edit modal (pre-filled with beneficiary data)
- Delete icon → Open confirmation modal
- Add button → Open add beneficiary modal

### 3. Beneficiary Detail Page

**Route:** `/beneficiaries/:id`

**Layout:**

- Breadcrumbs: Dashboard > Beneficiaries > [Name]
- Back button (top left)
- Profile Card (top section):
  - Name (heading)
  - All beneficiary details in readable format
  - Edit and Delete buttons
- Payment History Section (card):
  - Header: "Payment History" with "Add Payment" button
  - Stats: Total Received, Last Payment Date
  - Table: Date | Amount | Term | Notes | Actions
  - Pagination

**Add Payment Modal Fields:**

- Amount (₦)
- Date (date picker, default: today)
- Term (select, if payment type is termly)
- Notes (textarea, optional)

### 4. Contributors Page

**Route:** `/contributors`

**Layout:** Similar to Beneficiaries page

**KPI Cards:**

1. Total Contributors
2. Active Contributors
3. Monthly Expected (sum of all monthly amounts)
4. Total Collected This Month

**Table Columns:**

- Name
- Email/Phone
- Monthly Amount (₦)
- Total Contributed (₦)
- Last Contribution (DD/MM/YYYY)
- Status (badge)
- Actions (Eye, Edit, Delete)

### 5. Contributor Detail Page

**Route:** `/contributors/:id`

**Layout:** Similar to Beneficiary Detail

**Sections:**

- Profile card with contributor info
- Contribution history with "Add Contribution" button
- Table: Month | Year | Amount | Date Received | Notes

**Add Contribution Modal Fields:**

- Month (select: Jan-Dec)
- Year (number, default: current year)
- Amount (₦)
- Date Received (date picker, default: today)
- Notes (textarea, optional)

### 6. Reports Page

**Route:** `/reports`

**Layout:**

- Breadcrumbs: Dashboard > Reports
- KPI Cards (4 cards):
  1. Total Income (This Month)
  2. Total Expenses (This Month)
  3. Balance
  4. Active Beneficiaries
- Filters Section:
  - Date Range Picker (From/To)
  - Category Filter (multi-select)
  - Export button (generates print-friendly view)
- Charts Section (responsive grid):
  - Monthly Trend (line chart: 6 months)
  - Category Breakdown (pie chart)
  - Top Contributors (bar chart)
- Detailed Transactions Table:
  - Type | Name | Category | Amount | Date | Status
  - Pagination

### 7. Settings Page

**Route:** `/settings`

**Layout:**

- Breadcrumbs: Dashboard > Settings
- Category Management Section:
  - Header with "Add Category" button
  - Grid of category cards (2-3 columns):
    - Category name
    - Type badge (Education/Support)
    - Active toggle switch
    - Edit and Delete icons

**Add/Edit Category Modal Fields:**

- Category Name (text, required)
- Type (select: Education/Support, required)
- Active Status (toggle, default: true)

---

## Modal Specifications

### 1. Add Beneficiary Modal

**Fields:**

- Full Name (text, required)
- State (select dropdown, Nigerian states, required)
- LGA (select, dependent on state, required)
- Gender (radio buttons: Male/Female, required)
- Class/Level (text, e.g., "Primary 5", "JSS 2", "200 Level", required)
- Status (select: Orphan/Widow/Distress, required)
- Category (select from active categories only, required)
- Payment Type (select: One-time/1st Term/2nd Term/3rd Term, required)
- School/Institution (text, optional)
- Initial Payment Amount (number with ₦ prefix, optional)
- Notes (textarea, optional)

**Validation:**

- All required fields must be filled
- Show inline error messages below each field
- Disable submit button until form is valid

**Actions:**

- Cancel (outline button)
- Save Beneficiary (primary button)

### 2. Add Contributor Modal

**Fields:**

- Full Name (text, required)
- Email (email, optional, validate format)
- Phone (tel, optional, format: 070 XXX XXX XXXX)
- Monthly Contribution Amount (₦, required, min: 1000)
- Date Joined (date picker, required, default: today)
- Status (select: Active/Inactive, default: Active)
- Notes (textarea, optional)

**Actions:**

- Cancel
- Save Contributor (primary)

### 3. Add Payment Modal

**Fields:**

- Amount (₦, required)
- Date (date picker, required, default: today)
- Term (select, only show if payment type is termly)
- Notes (textarea, optional)

**Actions:**

- Cancel
- Record Payment (primary)

### 4. Add Contribution Modal

**Fields:**

- Month (select: January-December, required)
- Year (number input, 2020-2030, required)
- Amount (₦, required)
- Date Received (date picker, required, default: today)
- Notes (textarea, optional)

**Actions:**

- Cancel
- Record Contribution (primary)

### 5. Add Category Modal

**Fields:**

- Category Name (text, required)
- Type (select: Education/Support, required)
- Active Status (toggle, default: true)

**Actions:**

- Cancel
- Save Category (primary)

### 6. Confirm Delete Modal

**Content:**

- Warning icon (red)
- Title: "Confirm Deletion"
- Message: "Are you sure you want to delete [item name]? This action cannot be undone."

**Actions:**

- Cancel (outline)
- Delete (danger button)

---

## Animation Specifications (Framer Motion)

### General Principles

- **Smooth, not flashy:** Animations should feel premium and natural
- **Duration:** 200-300ms for most transitions
- **Easing:** Use "easeOut" for entering, "easeIn" for exiting

### Page Transitions

- Fade in from bottom (20px translate)
- Duration: 300ms

### KPI Cards

- Stagger children animation (100ms delay between each)
- Fade in from bottom
- Hover: Lift 4px, apply hover shadow

### Modal Animations

- Backdrop: Fade in/out
- Modal content: Scale from 0.95 to 1, fade in/out
- Duration: 200ms

### Table Row Animations

- Stagger rows (50ms delay per row)
- Fade in from left (20px translate)
- Hover: Light blue background color

### Button Animations

- Hover: Scale 1.02
- Active: Scale 0.98
- Transition: 150ms

### Loading States

- Skeleton pulse: Opacity 0.5 to 1 to 0.5 (infinite loop, 1.5s)

---

## LocalStorage Data Structure

### Storage Keys

```
esi_beneficiaries
esi_contributors
esi_categories
esi_payments (embedded in beneficiaries)
esi_contributions (embedded in contributors)
```

### Initial Seed Data

**Categories (9 default categories):**

1. Primary School Fees (education)
2. Secondary School Fees (education)
3. University Fees (education)
4. Registration Fees (education)
5. Upkeep (University) (support)
6. Upkeep (Boarding School) (support)
7. Distress Support (support)
8. Widow Support (support)
9. Hospitalization (support)

**Sample Data:**

- 5-10 sample beneficiaries with payment history
- 5-10 sample contributors with contribution history
- Realistic Nigerian names, locations, and amounts
- Dates spanning last 6-12 months

### Data Persistence

- Save to LocalStorage on every create/update/delete operation
- Load from LocalStorage on app mount
- If no data exists, initialize with seed data
- Provide "Reset Data" option in Settings (admin section placeholder)

---

## Custom Hooks

### useLocalStorage

- Generic hook for managing LocalStorage
- Handles JSON parse/stringify
- Returns [value, setValue] like useState
- Auto-syncs across browser tabs

### useSearch

- Accepts data array and search keys
- Returns searchTerm, setSearchTerm, filteredData
- Debounced search (300ms delay)
- Case-insensitive search across multiple fields

---

## Context (AppContext)

**Responsibilities:**

- Manage all application state (beneficiaries, contributors, categories)
- Provide CRUD operations for each entity
- Handle LocalStorage persistence
- Calculate derived stats (totals, counts, aggregations)
- Expose search and filter functions

**Provider Structure:**

- Wrap entire app in AppContext.Provider
- Use useContext hook in components to access data and functions

---

## Formatting Utilities

### Date Formatter

- Format: DD/MM/YYYY (Nigerian standard)
- Example: 24/10/2025
- Use date-fns library

### Currency Formatter

- Always prefix with ₦ (Naira symbol)
- Format with thousands separator: ₦1,250,000
- No decimal places for whole numbers
- Show decimals only when necessary

### Number Formatter

- Use commas for thousands: 1,250
- Percentages with 1 decimal: 12.5%

---

## Responsive Design

### Breakpoints

- sm: 640px
- md: 768px
- lg: 1024px (sidebar appears)
- xl: 1280px
- 2xl: 1536px

### Mobile Adaptations

- KPI Cards: 1 column on mobile, 2 on tablet, 4 on desktop
- Tables: Transform to stacked cards on mobile (<md)
- Sidebar: Hidden on mobile, show bottom nav instead
- Modals: Full width with padding on mobile
- Font sizes: Slightly smaller base (14px) on mobile

### Touch-Friendly

- Minimum touch target: 44px x 44px
- Larger buttons and inputs
- Adequate spacing between interactive elements

---

## Accessibility Requirements

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Clear focus indicators (blue ring, 2px)
- Tab order follows logical flow
- ESC key closes modals

### Screen Readers

- Semantic HTML (nav, main, article, aside, footer)
- ARIA labels for icon-only buttons
- Alt text for images/icons
- Form labels properly associated

### Color Contrast

- WCAG AA compliant (4.5:1 for text)
- Don't rely on color alone for information
- Ensure badge colors have sufficient contrast

---

## Additional Features

### Search Functionality

- Live search with 300ms debounce
- Search across multiple fields (name, category, status, etc.)
- Clear search button
- Show "No results found" state

### Pagination

- Default: 10 items per page
- Options: 10, 20, 50
- Show total count: "Showing 1-10 of 45"
- Disable prev/next when at boundaries

### Empty States

- Friendly illustrations or icons
- Clear message: "No beneficiaries found"
- Action button: "Add your first beneficiary"

### Loading States

- Skeleton loaders for tables, cards, charts, and lists
- Spinner for modals and async operations
- Disable buttons during loading

### Skeleton Loaders (Design Details)

- Purpose: provide an immediate, low-fidelity visual placeholder while data loads to reduce perceived latency and layout shift.
- Use cases (where to show skeletons):

  - KPI cards (while metrics load)
  - Data tables (rows and cells)
  - Card grids and list views (beneficiaries, contributors)
  - Profile / detail panels (left column content)
  - Charts area (show simple skeleton boxes or chart skeletons until data arrives)
  - Modals that fetch or compute data (replace content with skeletons while loading)

- Visual spec:

  - Shape variants: rectangle (for lines/content), circle (for avatars/icons), and bar (for charts)
  - Base color: use a neutral low-contrast surface token (e.g., --color-surface-muted)
  - Highlight: subtle linear gradient or lighten for the pulse effect
  - Animation: pulse (opacity/brightness sweep) with duration 1.5s, easing ease-in-out, infinite
  - Border radius: match the target component (e.g., 8px for small cards, 12px for larger surfaces)

- Accessibility and preferences:

  - Respect the OS/browser `prefers-reduced-motion` media query: disable pulse animation and show a static placeholder when reduced motion is requested
  - Ensure skeleton blocks include aria-hidden="true" and convey loading state with `role="status"` + visually-hidden "Loading" text for screen readers where appropriate

- Developer contracts (API / classes):

  - `.skeleton` — base skeleton block (applies background, border-radius)
  - `.skeleton--rect`, `.skeleton--circle`, `.skeleton--bar` — shape modifiers
  - `.skeleton-pulse` — enables pulsing animation
  - `.skeleton-row` — table-row skeleton helper that composes multiple `.skeleton` cells
  - Example usage: `<div class="skeleton skeleton--rect skeleton-pulse" style="width:120px;height:28px"></div>`

- Animation details (implementation suggestion):

  - Keyframes: from { opacity: 0.6 } to { opacity: 1 } (or translate subtle gradient)
  - Duration: 1500ms; iteration: infinite; timing-function: ease-in-out
  - Reduced motion: `@media (prefers-reduced-motion: reduce) { .skeleton-pulse { animation: none; } }`

- UX rules:

  - Show skeleton placeholders immediately for any UI region that will be visibly changed by remote or async data.
  - Keep skeleton shapes close to the final content layout to reduce layout shift when content arrives.
  - Avoid using colored skeletons that create confusion with semantic color (stick to neutral surfaces).
  - Transition from skeleton to real content using a short fade (150-250ms) to make the swap feel natural.

- Testing & edge cases:
  - Test long-loading flows and ensure skeletons don't trap keyboard focus; focusable elements should not be hidden behind skeletons.
  - On very fast loads (<120ms), consider skipping skeletons to avoid flicker. Implement a small show-delay (e.g., 80-120ms) before rendering skeletons for transient loads.

### Error Handling

- Form validation with inline error messages
- Toast notifications for success/error actions
- Graceful fallbacks for missing data

### Date Handling

- All dates in DD/MM/YYYY format
- Date pickers use date-fns
- Default to today's date for new entries
- Validate date ranges

---

## index.css Requirements

Define in `src/index.css`:

1. CSS custom properties (variables) for all colors, spacing, shadows, etc.
2. Base styles (reset, body, html)
3. Typography styles (h1-h6, p, enhanced line-height)
4. Scrollbar styling
5. Focus styles (blue ring)
6. Reusable classes:
   - `.card`, `.card-hover`, `.card-kpi`
   - `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.btn-danger`, `.btn-ghost`
   - `.input`, `.input-error`, `.select`
   - `.badge`, `.badge-orphan`, `.badge-widow`, etc.
   - `.table-container`, `.table`
   - `.modal-backdrop`, `.modal-content`
7. Utility classes for text colors, backgrounds, shadows
8. Responsive typography adjustments
9. Print styles (hide nav, remove shadows)

---

## Nigerian Context

### States and LGAs

- Include all 36 Nigerian states in state selector
- Populate LGA dropdown based on selected state
- Use realistic Nigerian state/LGA data

### Currency

- Always use ₦ (Naira symbol)
- Typical amounts:
  - Primary school: ₦30,000 - ₦50,000/term
  - Secondary school: ₦60,000 - ₦100,000/term
  - University: ₦200,000 - ₦500,000/session
  - Upkeep: ₦20,000 - ₦50,000/month
  - Monthly contributions: ₦20,000 - ₦100,000

### Names

- Use authentic Nigerian names (Hausa, Yoruba, Fulani, etc.)
- Examples: Amina Ibrahim, Hassan Mudi, Fatima Yusuf, Tunde Adebayo

### School Terms

- Nigerian academic year: 3 terms
  - 1st Term: September - December
  - 2nd Term: January - April
  - 3rd Term: May - July

---

## Final Checklist

✅ All configuration files generated (package.json, vite.config, tsconfig, tailwind.config, etc.)
✅ Complete folder structure with all files
✅ All TypeScript interfaces defined
