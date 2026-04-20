-- Run this in your Supabase SQL editor

create table if not exists applications (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  phone text,
  profession text not null,
  instagram text,
  message text
);

create table if not exists brand_inquiries (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  company text not null,
  name text,
  email text not null,
  campaign_type text not null,
  budget text,
  brief text
);

-- Enable Row Level Security
alter table applications enable row level security;
alter table brand_inquiries enable row level security;

-- Allow anonymous inserts (for public form submissions)
create policy "Allow public inserts" on applications
  for insert with check (true);

create policy "Allow public inserts" on brand_inquiries
  for insert with check (true);
