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

Pretty much the first time routing things by hand instead of making usage of something fancier like express or fastify.

I have also pretty much never injected class dependencies by hand as well, and it is something I am willing to learn, so that is why it's a little confusing and not super polished at the time.

## Running the project

### Prerequisites 

- Node v20.11 or above (Cannot guarantee lower versions will work, but you can try)

### Installing Dependencies

You can run the project with any package manager you want, but this project relies on npm alone. Run the following to download the project's dependencies:

```bash
npm install
```

### Running the project

You may experience problems running the project as it is still in development and it's not ready for general-purpose usage. But if you wish to try or fixing problems on your own, run the following:

```bash
npm run start
```

If you don't wish to compile the typescript and you wish to simply run the app to see changes quickly, run the following:

```bash
npm run dev
```