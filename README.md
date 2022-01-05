# Mainteny QA Challenge
This repo contains the solution to the QA challenge.

## Question 1
The test cases created for the login fUnctionality can be found [here](https://docs.google.com/spreadsheets/d/1NAc07C_n4_J2ip32mHlWI_qA4qH_R59CCLZIr5niZI8/edit?usp=sharing)

The test cases are automated with the [Cypress](cypress.io) framework. 
To run the code, follow these steps:

### 1. Install Cypress
[Follow these instructions to install Cypress.](https://on.cypress.io/installing-cypress)

### 2. Clone this repo


```bash
## clone this repo to a local directory
git clone https://github.com/odetolataiwo/mainteny.git

## cd into the cloned repo
cd mainteny

## install the node_modules
npm install
```

### 3. Run Cypress
```
npx cypress open
```
A dialog shows. Click on the scripts to run them.
For this question, run the `login.spec.js` file

![alt text](https://github.com/odetolataiwo/mainteny/blob/[branch]/image.jpg?raw=true)


Also, you can run it in headless mode using: 
```
npm run cy:run
```

