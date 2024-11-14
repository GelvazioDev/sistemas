# saisrv
* update


## upstash
* API_KEY
e9cf87f1-97bf-4618-9f19-31afa362e0b1

## Biblioteca sendo usada:vite
https://vite.dev/guide/env-and-mode

# update branch

# biblioteca dotenv 
* https://www.dotenv.org/pricing/


# api de autenticacao 
https://auth0.com/pricing

# Scripts policies 
create table profiles (
  id uuid primary key,
  user_id uuid,
  avatar_url text
);

alter table profiles add CONSTRAINT profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE;


-- 2. Enable RLS
alter table profiles enable row level security;

-- 3. Create Policy
create policy "User can see their own profile only."
on profiles
for select using ( (select auth.uid()) = user_id );


** CSS GRADIENT
* https://cssgradient.io/