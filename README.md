```md
# TypeScript × AWS CDK – 90-Day Public Journey

From **zero** to **production-ready IaC** in 12 weeks.  
Every folder = one bite-sized lesson.  
Every commit = one new concept.

## 3-Second Start
```bash
git clone https://github.com/YOURNAME/typescript-cdk-journey.git
cd typescript-cdk-journey
npm i && npx ts-node 00-SETUP.ts   # installs everything
```

## Navigation Map
| Week | Topic                     | Folder                | One-liner |
|------|---------------------------|-----------------------|---------|
| 1-2  | Types, Interfaces, Generics | `01-typescript-basics` | `tsc && node dist/...` |
| 3-4  | Union, Guards, Utilities   | `02-typescript-advanced` | |
| 5    | First CDK App              | `03-cdk-hello-world`  | `cdk deploy` |
| 6-12 | Real Projects              | `99-projects`         | Live on AWS |

## Weekly Challenges
Open [EXERCISES.md](EXERCISES.md) → pick → PR your solution!

## One-Page Cheatsheet
[CHEATSHEET.md](CHEATSHEET.md)

## Contribute
1. Fork  
2. Add a new `07-your-topic/` folder  
3. Open PR → get merged → badge on README

## Live Demos
- Blog API: https://api.yourname.dev  
- Static Site: https://site.yourname.dev  

⭐ Star = motivation for daily commits!
```

### 00-SETUP.md (copy-paste)

```md
# 30-Second Setup
1. `node -v` → v20+
2. `npm i -g aws-cdk typescript ts-node`
3. `aws configure` (use Free Tier credentials)
4. Done! Run any folder: `cd 03-cdk-hello-world && cdk deploy`
```

### Weekly README template (inside every folder)
Create a `README.md` in each folder with this exact template:

```md
# 01 – Hello Types
**Goal**: Write your first `.ts` file that compiles and runs.

## Run
```bash
npx ts-node index.ts
```

## What you learn
- `string | number` union
- `tsc --init` once per project

## Challenge
Convert `any` to proper types → commit → tag me!
```

### Bonus: GitHub badges (add to top of README)

```md
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript)
![AWS CDK](https://img.shields.io/badge/AWS_CDK-F7A41D?logo=amazonaws)
![90 Days](https://img.shields.io/badge/90_Days_Challenge-100000?)
```

### Result
- Visitor lands → reads **3 lines** → clicks **one folder** → runs **one command** → learns.
- You commit daily → GitHub streak → portfolio ready in 90 days.

Just push this structure today and tweet:
“Day 0: Public TypeScript+CDK repo is LIVE! Follow my 90-day journey → link”

Happy coding!