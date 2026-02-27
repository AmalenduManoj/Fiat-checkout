# Fiat Checkout – Frontend Assignment 2

A fully functional fiat payment checkout page built with Next.js, styled with Tailwind CSS, and backed by Supabase (PostgreSQL) via Prisma ORM. Converted pixel-perfect from a Figma design with complete form validation, API integration, and success/failure flows.

## Deployed Link

> https://fiat-checkout.vercel.app/

## Figma Design

[Fiat Checkout – Figma](https://www.figma.com/design/E5vorh2keQuheggzhJtFMo/Fiat-checkout?node-id=1-2&t=mIUQA16kqkAUEYk1-0)

---

## Architecture

```
src/
├── components/
│   ├── CheckoutCard.js      # Main container – state, validation, API call
│   ├── CheckoutHeader.js    # Top header with branding
│   ├── ItemSummary.js       # Order item details and pricing
│   ├── PaymentForm.js       # Card input fields with inline errors
│   └── PayButton.js         # Submit button with loading/disabled state
├── lib/
│   └── prisma.js            # Singleton Prisma client instance
├── pages/
│   ├── index.js             # Home page – renders CheckoutCard
│   ├── success.js           # Success screen after payment
│   └── api/
│       └── payment.js       # POST /api/payment – saves to Supabase
prisma/
└── schema.prisma            # Payment model definition
```

### Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Framework  | Next.js 16 (Pages Router)   |
| Styling    | Tailwind CSS 4 (no UI libs) |
| Database   | Supabase (PostgreSQL)       |
| ORM        | Prisma 5                    |
| Deployment | Vercel                      |

---

## Level-wise Implementation

### Level 1 – UI Implementation

- Checkout page built pixel-perfect from the Figma design
- Pure Tailwind CSS – no MUI, Bootstrap, or any UI component library
- Responsive layout with card-based design
- Custom icons using `react-icons`

### Level 2 – Form Behavior & Validation

- All four fields validated: Cardholder Name, Card Number, Expiry Date, CVV
- Inline red error messages appear below each invalid field
- Red border highlight on invalid inputs
- Auto-formatting: card number spacing, expiry date slash, digits-only CVV
- Form submission blocked until all validations pass
- Re-validates on every keystroke after first submit attempt

### Level 3 – Payment API Integration

- `POST /api/payment` – Next.js API route that processes payment
- Saves card details (cardholderName, cardNumber, expiryDate, amount, currency) to Supabase via Prisma
- Returns a unique `transactionId` on success
- Loading spinner shown on the Pay button while the request is in progress
- Button disabled during the API call to prevent double submissions
- Handles both success and failure responses from the server

### Level 4 – Success & Failure Flow

- **On success:** Redirects to `/success` page displaying a green checkmark, confirmation message, and transaction ID
- **On failure:** Displays an inline red error banner above the Pay button with the error message

### Level 5 – Deployment

- Deployed on Vercel
- `prisma generate` runs automatically during the build step
- Environment variable `DATABASE_URL` configured in Vercel project settings

---

## Getting Started (Local Development)

### Prerequisites

- Node.js 20+
- A Supabase project with a PostgreSQL database

### Setup

```bash
git clone https://github.com/AmalenduManoj/Fiat-checkout.git
cd Fiat-checkout
npm install
```

Create a `.env` file in the root:

```env
DATABASE_URL="your_supabase_connection_string"
```

Push the schema to your database and generate the Prisma client:

```bash
npx prisma db push
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Database Schema

```prisma
model Payment {
  id             String   @id @default(uuid())
  cardholderName String
  cardNumber     String
  expiryDate     String
  amount         Int
  currency       String   @default("INR")
  status         String   @default("success")
  transactionId  String   @unique @default(uuid())
  createdAt      DateTime @default(now())
}
```
# Fiat-checkout
