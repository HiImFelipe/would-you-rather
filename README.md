# Would You Rather 🌤️

A simple backend application for a would you rather game, written in TypeScript. This project aims to do things in a simple yet sophisticated manner.

## Tools 🛠️

I have tried my best to get rid of the need for third parties, including auto-injectors, http routers and even dedicated databases.

- NodeJS native HTTP solution;
- TypeScript;
- UUID;

Since the project was made with in-memory data in mind, your content will reset once the process ends.

## Goals ⚽

It's been a while since I last published a public project, so I am trying to apply the concepts and techniques I have learned from last year.

It makes usage of DDD concepts but nothing super-extra fancy. SOLID principles are also present.

## Challenges 🎯

1. First time routing things by hand instead of making usage of something fancier like express or fastify.
1. I have never injected class dependencies by hand as well, and it is something I am willing to learn.
1. Improving the organization of the project overall.

## Running the project

### Prerequisites

- Node v20.11 or above (Cannot guarantee lower versions will work, but you can try)

### Installing Dependencies

This project is compatible with yarn and pnpm, but it was done with npm in mind. With that said, the following command will install the dependencies for you.

```bash
npm install
```

### Running the project

```bash
npm run start
```

Or if you don't wish to compile the TS stuff and just run:

```bash
npm run dev
```

<p align="right">
    <sub>* You may experience problems running the project as it is still in development.</sub>
</p>
