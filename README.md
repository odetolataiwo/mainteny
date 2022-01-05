# Mainteny QA Challenge
This repo contains the solution to the QA challenge.

## Question 1 - Test the login page
The test cases created for the login fUnctionality can be found [here](https://docs.google.com/spreadsheets/d/1NAc07C_n4_J2ip32mHlWI_qA4qH_R59CCLZIr5niZI8/edit?usp=sharing). <br>
*Note: Check the different sheets.


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

![alt text](https://github.com/odetolataiwo/mainteny/blob/main/cypress.png?raw=true)


Also, you can run it in headless mode using: 
```bash
npm run cy:run
```


## Question 2 - Test the Backend API

Similarly, the test cases for the API Tests can be found [here](https://docs.google.com/spreadsheets/d/1NAc07C_n4_J2ip32mHlWI_qA4qH_R59CCLZIr5niZI8/edit?usp=sharing). <br>
*Note: Check the different sheets.

The automated test cases were implemted with the Cypress framework also. FOllow the steps above and pick the `api.spec.js` file.

The performance tests (load and stress tests) were implemeted using [K6](k6.io). To run the script, follow these steps:

### 1. Install K6
[Follow these instructions to install K6.](https://k6.io/docs/getting-started/installation/)


### 2. Run the Script
*You need to have cloned the repo to carry out this step.

```bash
## cd into the k6 folder
cd k6

## run the script
k6 run performanceScript.js
```





