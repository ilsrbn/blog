# Blog

This project is Monorepo to host Admin dashboard and Client side of my personal website.

Both apps were written with [Angular v17][angular-v17], within one workspace. Client side also will use SSR.

As backend service were chosen [PocketBase][pocketbase].

## Project Structure (brief)

```bash
📁 projects
├── 📁 admin-dashboard              # Application which stands for Admin interface
│   └── 📁 src                      
│       ├── 📁 app                  
│       │   ├── 📁 core             # Reusable or non-related to any domain parts of application, e.g., header, layouts, cards, etc.
│       │   ├── 📁 posts            # Posts Domain, handles Crud operations over blog posts
│       │   └── 📁 pages            # Pages Domain, same as posts, but for other website pages (it's *not* application routes)
│       └── 📁...                   # Other default files
│
├── 📁 admin-dashboard              # Application which stands for Client part
│   └── 📁 src                      
│       ├── 📁 app                  
│       └── TODO
│
└── 📁 api                          # Shared library to interact with PocketBase api and possible to share design system and components
    └── 📁 src                      
        ├── 📁 lib                  # Where all modules placed
        │   ├── 📁 core             # Core features + PocketBase service
        │   └── 📁 post             # Domain logic for Post entity
        └── 📄 public-api.ts        # Globally exported

```

## Local development

### Prerequesites

1. NodeJS Iron (20 LTS)
2. PocketBase instance running locally on port 8090. [Guide](https://pocketbase.io/docs/)
3. Angular CLI v17.

### Commands to install and run locally

```bash
git clone git@github.com:ilsrbn/blog.git
cd ./blog

npm ci
ng serve admin-dashboard
```

[angular-v17]: https://angular.dev/
[pocketbase]: https://pocketbase.io/
