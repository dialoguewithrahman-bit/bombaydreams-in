# Deployment Guide — Bombay Dreams

## Step 1: Set up Supabase (free tier)

1. Go to https://supabase.com and create a free account
2. Create a new project (pick any region, note your password)
3. Once the project is ready, go to **SQL Editor**
4. Paste and run the contents of `supabase-schema.sql`
5. Go to **Project Settings → API**
6. Copy:
   - **Project URL** → this is your `NEXT_PUBLIC_SUPABASE_URL`
   - **anon / public key** → this is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## Step 2: Push to GitHub

1. Go to https://github.com/new and create a new **public** repo named `bombaydreams`
2. Do NOT initialize with README
3. In your terminal, inside the `bombaydreams/` folder, run:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/bombaydreams.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy to Vercel (free)

1. Go to https://vercel.com and sign up / log in with GitHub
2. Click **"Add New… → Project"**
3. Import the `bombaydreams` repo
4. In the **Environment Variables** section, add:
   - `NEXT_PUBLIC_SUPABASE_URL` = (from Supabase step)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (from Supabase step)
5. Click **Deploy** — it will build and deploy automatically

---

## Step 4: Connect custom domain (www.bombaydreams.co.in)

1. In Vercel, go to your project → **Settings → Domains**
2. Add `www.bombaydreams.co.in`
3. Vercel will show you DNS records to add:
   - A CNAME record: `www` → `cname.vercel-dns.com`
4. Go to your domain registrar (where you bought bombaydreams.co.in)
5. Add the CNAME record Vercel shows you
6. DNS propagation takes 5–60 minutes

For the apex domain (bombaydreams.co.in without www), also add it in Vercel and set an A record to `76.76.21.21`.

---

## Step 5: Verify everything works

- Visit https://www.bombaydreams.co.in
- Submit a test application via the Apply form
- Check your Supabase dashboard under **Table Editor → applications** to confirm the row was inserted
- Submit a test brand inquiry and check **Table Editor → brand_inquiries**

---

## Local development

```bash
# Create .env.local with your Supabase credentials
cp .env.local.example .env.local
# Edit .env.local and fill in the values

npm run dev
# Open http://localhost:3000
```
