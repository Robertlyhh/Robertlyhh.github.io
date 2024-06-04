---
title: How to Build a Website on GitHub
date: 2024-06-01 11:14:17
tags: website building, tutorial, GitHub
---

# Robert

Creating a website on GitHub is a great way to showcase your projects, write blogs, or even create a portfolio. GitHub Pages provides a free and easy way to host your static websites. In this tutorial, we will walk through the steps to build and deploy a website on GitHub.

## Step 1: Create a GitHub Repository

1. Log in to your [GitHub](https://github.com) account.
2. Click the **New repository** button on your GitHub dashboard.
3. Name your repository as `yourusername.github.io`. This is important as GitHub Pages will use this naming convention to recognize your repository as a website.
4. Add a short description, select **Public**, and initialize the repository with a `README.md` file.
5. Click **Create repository**.

## Step 2: Install Git and Hexo

If you haven't already, you'll need to install Git and Hexo:

1. **Install Git**: Download and install Git from [git-scm.com](https://git-scm.com/).
2. **Install Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
3. **Install Hexo**: Open your terminal and run the following command:
    ```bash
    npm install -g hexo-cli
    ```

## Step 3: Set Up Your Hexo Site

1. Open your terminal and navigate to the folder where you want to create your website.
2. Run the following commands to set up your Hexo site:
    ```bash
    hexo init my-website
    cd my-website
    npm install
    ```

## Step 4: Configure Your Site

1. Open the `_config.yml` file in the root of your Hexo project.
2. Customize the basic settings like `title`, `subtitle`, `description`, `author`, etc.

    ```yaml
    title: Robert's Website
    subtitle: The most interesting website in the world
    description: Welcome to the personal website of Robert, where you will find funny ideas and more.
    author: Robert
    ```

## Step 5: Choose a Theme

1. Browse for Hexo themes at [Hexo Themes](https://hexo.io/themes/).
2. Once you find a theme you like, follow the installation instructions provided by the theme developer.
3. For example, to install the **Next** theme:
    ```bash
    cd themes
    git clone https://github.com/next-theme/hexo-theme-next next
    ```

4. Update the `_config.yml` file to use the new theme:
    ```yaml
    theme: next
    ```

## Step 6: Write Your First Post

1. Create a new post with the following command:
    ```bash
    hexo new post "My First Post"
    ```

2. Open the newly created file in the `source/_posts` directory and start writing your post in Markdown.

## Step 7: Deploy Your Site

1. Open the `_config.yml` file and add the following lines for deployment:
    ```yaml
    deploy:
      type: git
      repo: https://github.com/yourusername/yourusername.github.io.git
      branch: main
    ```

2. Install the Hexo deployer plugin:
    ```bash
    npm install hexo-deployer-git --save
    ```

3. Generate the static files and deploy your site:
    ```bash
    hexo clean
    hexo generate
    hexo deploy
    ```

## Step 8: Access Your Website

Once the deployment is complete, you can access your website at `https://yourusername.github.io`.

Congratulations! You have successfully built and deployed your website on GitHub. Continue to update your content, customize the theme, and make your website a reflection of your unique personality and interests.

---

*Happy coding and welcome to the world of web development!*
