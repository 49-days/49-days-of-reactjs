# Day 02: Installation

::: info TL;DR
In this lesson we talk about how to install the necessary tools and software to learn React.
:::

## Node.js and  Node Package Manager

::: tip Node là gì?
[Node](https://nodejs.org/en/) is a platform to run on [Javascript](https://www.javascript.com/) on computers, it is
widely used in
develop web applications, mobile applications, desktop applications,... Node is also a platform to run support tools
application development such
as [NPM](https://www.npmjs.com/), [Yarn](https://yarnpkg.com/), [Vite](https://vitejs.dev/),
[Create React App](https://create-react-app.dev/), ...
:::

::: tip NPM là gì?

NPM stands for Node Package Manager and is a tool to create and manage javascript libraries for Nodejs. Those who do
working with javascript, you've probably more or less heard about it.
NPM provides 2 main functions including:

- Is an online repository for packages/modules.
- Managing javascript modules and their versions in our projects is simpler, easier, and more economical.
  more time.

:::

### Install Node.js and Node Package Manager

::: details Install on Windows

- Visit the Node download page at [đây](https://nodejs.org/en/download/)
- Select LTS (Long Term Support) and download the installation version for Windows.
- Run the installation and that's it.
- Check if Node.js has been installed successfully by opening Command Prompt or PowerShell and typing the following
  command:
    ```bash
    node -v 
    ```
- Check if NPM has been installed successfully by opening Command Prompt or PowerShell and typing the following command:
    ```bash
    npm -v
    ```

:::

::: details Install on MacOS

- Visit the Node download page at [đây](https://nodejs.org/en/download/)
- Select LTS (Long Term Support) and download the installation version for macOS
- Run the installation and that's it
- Check if Node.js has been installed successfully by opening Command Prompt or PowerShell and typing the following
  command:
    ```bash
    node -v
    ```
- Check if NPM has been installed successfully by opening Command Prompt or PowerShell and typing the following command:
    ```bash
    npm -v
    ```

:::

::: details Install on Linux

- Update the dependent packages using the following command:
    ```bash
    sudo apt update
    ```
- Install Node.js and NPM with the following command:
    ```bash
    sudo apt install nodejs npm
    ```
- Check if Node.js has been installed successfully by opening Terminal and typing the following command:
    ```bash
    node -v
    ```
- Check if NPM has been installed successfully by opening Terminal and typing the following command:
    ```bash
    npm -v
    ```

:::

## Git and GitHub

::: tip What is Git?
[Git](https://git-scm.com/) is a distributed version management system (Distributed Version Control System – DVCS), it
is one of the most popular distributed version management systems today. Git provides each programmer with a repository
Private repository contains the entire change history. Every time a change is made, Git will save the entire state
files in the archive. When needed, the programmer can access any past state.
:::

::: tip What is GitHub?
[GitHub](https://github.com/) is a service that provides a public Git source code repository for programmers
Students have a place to store their source code, as well as provide programmers with a place to learn, exchange, and
collaborate.
together.
:::

Both Git and GitHub are tools that support software development, as a programmer it is important to know and use Git and
GitHub is essential.

### Install Git

::: details Install on Windows

- Git SCM has installation instructions [here](https://git-scm.com/download/win) you just need to follow and you can
  install it.

:::

::: details Install on macOS

- Git SCM has installation instructions [here](https://git-scm.com/download/mac) you just need to follow and you can
  install it.

:::

::: details Install on Linux

- Git SCM has installation instructions [here](https://git-scm.com/download/linux) you just need to follow and you can
  install it.

:::

### Create a GitHub account

GitHub is extremely important in the 49 Days lesson series so before using GitHub, we need to have a
GitHub account. You can create a GitHub account at
[here](https://github.com/signup) if you don't already have it. Creating a GitHub account is very simple, you just need
to fill out the form
The requested information can create a GitHub account.

## Visual Studio Code

::: tip What is Visual Studio Code?

[Visual Studio Code](https://code.visualstudio.com/) is an open source code editor, developed by Microsoft
for Windows, Linux and macOS. It includes programming support for JavaScript, TypeScript, and Node.js and has a number
of features
Integration for web application development, including programming on the server, as well as development on Azure's
platform
Microsoft.

:::

### Install Visual Studio Code

- Access the Visual Studio Code download page [here](https://code.visualstudio.com/download)
- Select the version suitable for your operating system and download it
- Run the installation and that's it

#### Some necessary extensions for the lesson series

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Is a tool that helps us
  format code, helps us write better code.
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer): Is
  A tool that helps us distinguish between parentheses more easily.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Is a
  labour The tool helps us write code with TailwindCSS more easily.
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets):
  Is a tool that helps we write React code more easily.
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost): Is a tool to help us
  We know the size of the libraries we import.

## Summary of the article

- Learn and install Node.js and Node Package Manager.
- Learn and install Git and GitHub.
- Learn and install Visual Studio Code.
- Install necessary extensions for the lesson series.
