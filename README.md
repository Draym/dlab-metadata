# `DLab Metadata service` ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Project Setup

### Description
NFT Metadata service handle the management of metadata for any NFT collections.

Metadata are stored in Database using standardized format and then are formatted for the desired chain.

Currently supported format:
- ETH: Opensea format
- IMX: IMX format

Metadata example:
```json
{
   "name":"Cool Nft",
   "description":"description",
   "imageUrl":"image.png",
   "animationUrl":"animation.mp4",
   "properties":{
      "rarity":"common",
      "mouth":"eagle",
      "hand":"bear"
   }
}
```


### Prerequisite
1) MySQL database
    - start a local MySql server
        - Wamp (Windows)
        - Mamp (Mac)
    - create a new database named 'dlab_metadata'

### Start Application
- Build application
```bash
npm run build
```
- Run in local
```bash
npm run dev
```
- Run in production
```bash
npm run build
npm run start
```

- with Docker
```bash
docker build .
```

## API Documentation (ApiFox)
API documentation can be viewed on [ApiFox](https://dlab-metadata.apifox.cn)

## Branch Workflow

### Gitflow

- Standard branch iterative process：`{jira_number}/{branch_name}` -> `dev` & developer test -> `staging` & QA test -> `main`
- Fixing high-priority bugs：`hotfix/{jira_task_number}>{branch_name}` -> `staging` & QA test -> `main`

> `<BRANCH_NAME>` should be replaced with a short description of the changes on your branch.

### Branches
- `main`：Host the latest stable code. Deployment to production should be triggered by creating a new GitHub TAG.
- `staging`: Test environment branch in order to test Release branch by QA.
- `dev`: Dev environment branch in order to test Release branch by Developers.
- `{jira_number}/{branch_name}`： Release branch. Responsible for development destined to a specific release.
- `{jira_number}/{jira_task_number}_{sub_branch_name}`： SubRelease branch. Responsible for split heavy workload for multiple developers within a Release branch.
- `hotfix/{jira_task_number}_{branch_name}`: HotFix branch. Responsible for fixing issues from Main branch.

This project follows these [documented guidelines](https://github.com/Draym/git-guidelines)
