# Deploy The Sharp Ticket to Vercel

## One-time setup (5 minutes)

### Step 1 — Push to GitHub
1. Go to github.com and create a new repository called `sharp-ticket-website`
2. Run these commands in the `website/` folder:
   ```
   git init
   git add .
   git commit -m "Initial Sharp Ticket website"
   git remote add origin https://github.com/YOUR_USERNAME/sharp-ticket-website.git
   git push -u origin main
   ```

### Step 2 — Deploy on Vercel
1. Go to vercel.com and sign up (free)
2. Click "Add New Project"
3. Import your GitHub repository
4. Click Deploy — that's it. Vercel builds and hosts it automatically.
5. Vercel gives you a URL like: `sharp-ticket-website.vercel.app`

### Step 3 — Point your Squarespace domain to Vercel
1. In Vercel: go to your project → Settings → Domains → Add `thesharpticket.com`
2. Vercel gives you DNS records to add
3. In Squarespace: go to Domains → thesharpticket.com → DNS Settings
4. Add the records Vercel provides (A record and CNAME)
5. Wait 10-30 minutes for DNS to propagate
6. Your site is live at thesharpticket.com

## Next steps after launch
- Add Stripe keys for subscription payments
- Wire in HeyGen video embeds for daily podcast
- Connect picks tracker to display live W/L record
