# Relevant notes

## Creating projects table and _current_status_ enum

```sql
drop table if exists projects;

drop type if exists current_status;

create type current_status as enum ('in-progress', 'completed');

create table
  projects (
   id bigint primary key generated always as identity not null,
   created_at timestamp default now() not null,
   name text not null,
   slug text unique not null,
   status current_status default 'in-progress' not null,
   collaborators text array default array[]::varchar[] not null
  );

  insert into projects (name, slug) values ('project 1', 'project-1');
```

### Using Supabase CLI

Install

- https://supabase.com/docs/guides/local-development

- $ supabase init
- $ supabase login
- $ supabase link --project-ref PROJECT_ID

### Creating migrations

- https://supabase.com/docs/reference/cli/supabase-migration-new
- $ supabase migration new projects-schema
- $ supabase db reset --linked

### Faker

- $ node --env-file=.env database/seed.js
