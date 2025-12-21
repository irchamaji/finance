# Project Specifications

This is a personal finance calculation. All the database is using IndexedDB and the user settings also save locally in user browser. There is no data that sent to server. The server only provide the frontend.

## Features
- This project only has one features, an income calculation. The user input their income calculation in an input form, and then the system calculate where the money goes.
- User can add their money objective and the proportion or by number. The objective of these is the user know where can transfer their money each time they got money. Like to emergency fund, their investment, their monthly food, their bills, their money-for-fun, any financial allocation.

## Details
- This project is web based using TanStack Start project with React, TypeScript, and shadcn/ui.
- The styles highly rely on the `styles.css` for consistency and easy to maintain
- The icon is using Lucide Icons (open-source, 1500+ icons)
- The financial allocation is reading on user database (IndexedDB)
- The table of `allocation` has these columns: `id`*, `name`*, `proportion`, `nominal`, `destination`, timestamp. 
- The user can choose proportion or nominal. 
- Each time user access the website, it will directly show this page. This app has only this page.
- Use DexieJS for Indexed DB wrapper
- We are using `bun` instead of `npm`

## Design
- Shadcn UI, Lucide Icons, all based on the template created in `styles.css`
- Dark Mode for default and with a toggle button
- Some blur glow green yellow in the background

## About the project
This is experimental and project for fun only. So it has no target user, it just for me and just for portfolio. 
