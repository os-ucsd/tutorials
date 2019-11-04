import Layout from 'components/TutorialLayout';

export default Layout;

export const meta = {
  title: "How to create a Github-synced Website as a UCSD Student",
  publish: new Date(),
  authors: [
    {name: "Alex Garcia", github: "asg017"}
  ]
}


**Goal** - By the end of this tutorial, you will have your own ACSWeb site set up, and a repository on Github that will sync your site automatically on every push!

**WARNING** - If you do this, and you already have files in your acsweb server, they will be deleted! You can back them up by using `scp` to [save them locally](https://unix.stackexchange.com/questions/188285/how-to-copy-a-file-from-a-remote-server-to-a-local-machine). 


## TL;DR

In a hurry? Here's what you have to do to get this working ASAP:

1. Setup your acsweb site [here](https://ucsdservicedesk.service-now.com/its?id=kb_article_view&sys_kb_id=a7d72b1bdbc67bc09736f35aaf961975). Enable the `public_html` option.
2. Create a new repository on Gitub. Initialize with a README.
3. Create an `index.html` file in that new repo. Just put "Hello World!" inside of it. Commit the file.
4. In your repo, go to Settings->Secrets->Add new Secret. Create a Secret with the label `password` and the value of your UCSD password.
5. Create a file called `.github/workflows/main.yml`. Use [this](https://github.com/asg017/my-acsweb-site/blob/master/.github/workflows/main.yml) as a sample - copy and paste that into your file. Change `asg017` to your own UCSD username. Commit the file.
6. Open your http://acsweb.ucsd.edu/~your_username site. See if you see your "Hello World!" `index.html` file.
7. Change your `index.html` file in your Github repo. So if it synced automatically to your acsweb site. 

## Problems, Questions, Stuck on Something?

If you have any issues at all, or if you get confused or stuck, we are here to help! Here are some ways you can get in contact with us:

- Create an issue in our [Github repo](https://github.com/os-ucsd/acsweb-deploy-action) for this Action.
- Join the Open Source @ UCSD [Discord server](https://discord.gg/c32GCcR), and post a question in the #hacktoberfest channel or message me directly (username alex-garcia).
- Make a post in [our Facebook group](https://www.facebook.com/groups/836957346704768/)

No question is too small - we want to see you all succeed!

## Step 1: Configure your ACSWeb site

This takes a few moments to work out, so might as well do it first!

If you haven't already, follow these [ITS instructions](https://ucsdservicedesk.service-now.com/its?id=kb_article_view&sys_kb_id=a7d72b1bdbc67bc09736f35aaf961975) on how to set up your site. Most importantly, make sure you follow the step that takes you to the [Home Page Setup Tool](https://sdacs.ucsd.edu/accttools-cgi-bin/web.cgi) and allow others to see the `public_html` directory. 

If you want to make sure it worked, and you're comfortable with using the terminal, you can try ssh'ing into your server like so:

```bash
ssh your_username@acsweb.ucsd.edu
```

It'll prompt for your password (should be the same as your email/ucsd password). Once your in, if you `ls` and you see a `public_html` directory, then you are good to go!

## Step 2: Create a new Repository on Github that'll host your site!

Sign into Github, then create a [new repository](https://github.com/new) This repository will contain files for your website. 


This tutorial will use just plain old-fashion `.html` and `.js` files. If you wanted to take a step further you *could* use React, Vue.js, Jekyll, Next.js, Gatsby, or some other static site generator for this (and we encourage you to later!). But for simplicity, we will keep it as minimal as posible!

You can name the repository anything (`my-acsweb-site`, `site`, `ucsd-site`, etc.). Chose the `Initialize this repository with a README` option, which you can edit later as you see fit. 

## Step 3: Create your first file - `index.html`

Visit the repo you just created. Find the `Create a new file` button, and click on it. Name this new file `index.html`. This will be your root HTML file for your website. In the text editor, you can paste this snippet to get started:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Website!</title>
  </head>
  <body>
    <h1>
      Hey!
    </h1>
    <p>
      This is my website! 👋 
    </p>
  </body>
</html>
```

Feel free to make this snippet your own! Add your name, your favorite emoji, a picture of a dog. You'll have more time later to make this site your own, but you should totally play around a bit instead of just copy-pasting!

Your editor should look like this:

<img src="https://cdn.glitch.com/5205efe9-d61a-4cbe-b2a4-5bac65d65272%2F469a4d5b-7c58-4564-b41b-dc45f3fa19f5.image.png?v=1572505689302"/>

Once you're done, scroll to the bottom of the page to the `Commit new file` button. 

If you're doing Hacktoberfest, and you're trying to get a PR (Pull Request) in, then select the `Create a new branch for this commit and start a pull request.` option! Then click `Propose new file` button at the bottom, which will start a pull request form. Complete that form by clicking on the `Create pull request` button, then merge it into master by merging the pull reqest with the `Merge pull request button`. Congrats, you just created and accepting your own pull request - which contributes to your Hacktoberfest count! 

If not, the ` Commit directly to the master branch.` will work as well. After, click on `Commit new file`at the bottom, and this file will be added to your repository.

And that's first and only file you need to get your website set up! Your repo on Github should now look something like this:

![](https://cdn.glitch.com/5205efe9-d61a-4cbe-b2a4-5bac65d65272%2Fed93025d-adb1-4360-b6bc-62d346cd71b3.image.png?v=1572506817782)

## Step 4: Add your password as a Github secret in your repo

In the next step, we will connect a Github Action to your newly-created repository. But, that Action requires your password to your UCSD account. 

We do NOT want to add your password in any file in your repository. Your repo is public, anyone can see it. So, we need another way to securely store your password in Github. 

Thankfully, Github has a feature for this - on your repository, go to the `Settings` tab, and click on the `Secrets` option on the left. You should see this screen: 

![](https://cdn.glitch.com/5205efe9-d61a-4cbe-b2a4-5bac65d65272%2Fb26681d5-324c-4c0b-b0ee-94faab21ff4e.image.png?v=1572507017346)

From here, click on `Add a new secret`. For `Name`, you can just call it "password". In `Value`, type in the password to your UCSD account. This is the same password you used to ssh into your account in Step 1 (if you did that). 

![](https://cdn.glitch.com/5205efe9-d61a-4cbe-b2a4-5bac65d65272%2Fa1825717-b4cb-448f-acf5-c123647f7952.image.png?v=1572507302091)

Once your done, click on `Add secret`, and Github will securely store this secret alongside your repository.

Noone, except for you, can see this secret. The Github Action that you'll connect in the next step can also see it - but it only uses it to sync files between your repo and your acsweb server. To see the source code for that action, take a look at [this file](https://github.com/os-ucsd/acsweb-deploy-action/blob/master/entrypoint.sh#L8).

## Step 5: Add the UCSD ACSWeb Site Deploy Github Action

First off: **What *is* a Github Action?**

Github Actions are a new feature that you can add to your repositories. You're able to create "workflows" around your codebase that could automate certain tasks. These "workflows" can be started after a certain event happens. For example, you can start a workflow whenever you push to the master branch of your repo, or when someone creates an issue in your repo, or when someone creates a pull request.

One workflow can contain several actions, which get ran one after the other as a series of "steps." To add a workflow to a repository, you only need one `.yml` file.

We are going to be using the [UCSD ACSWeb Site Deploy Github Action](https://github.com/marketplace/actions/ucsd-acsweb-site-deploy). It is created, and maintained, by Open Source @ UCSD. Under the hood, it uses [rsync](https://linux.die.net/man/1/rsync) to sync files from a repo to a specific server (acsweb.ucsd.edu).

If order to create your workflow, go to the `Actions` tab at the top of your repository. Then, click on the `Set up workflow yourself` button on the right hand side, as shown here:

![](https://cdn.glitch.com/5205efe9-d61a-4cbe-b2a4-5bac65d65272%2F28940226-dd07-44c8-805a-84d4b1dbd206.image.png?v=1572542415438)

Now, you'll see a pre-filled `main.yml` file that you can edit, and a list of sample Github Actions to the right, like so:

![](https://cdn.glitch.com/5205efe9-d61a-4cbe-b2a4-5bac65d65272%2F9e84ec00-9b7a-4335-b1a7-a99c0e31b50a.image.png?v=1572542508184)

The file on the left is your workflow. Replace that text with this instead:

```yml
name: Deploy to ACSWeb

on: 
  push:
    branches: 
      - master

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    - uses: os-ucsd/actions/acsweb@0.1.1
      with:
        username: YOUR_USERNAME_HERE
        password: "${{secrets.password}}"
```

To better understand this, let's go over each part of this workflow.

```yml
name: Deploy to ACSWeb

on: 
  push:
    branches: 
      - master
```

The name of this workflow is "Deploy to ACSWeb". You can change this to whatever you want.

This workflow will only run whenever you push to the master branch of your repository. This ensures that you won't accidentally deploy the wrong changes if you make branches/fork your repository. 


```
jobs:
  build:

    runs-on: ubuntu-latest


```

Now, we are saying what jobs we want to run in this workflow. We only have one job, named `build`, that runs on an Ubuntu virtual machine. 

```
    steps:
    - uses: actions/checkout@v1
    
```

Now, we are defining the specific steps we want the workflow to take. The first step uses a Github Action - [`actions/checkout`](https://github.com/actions/checkout). This is a Github Action, created by Github, that tells our Ubuntu VM to checkout the latest version of your code from your repository. We will then use this version of your code in the next step.


```
    - uses: os-ucsd/actions/acsweb@0.1.1
      with:
        username: YOUR_USERNAME_HERE
        password: "${{secrets.password}}"
```

This is where the UCSD-specific Github Action we talked about above comes in - we are using the [`os-ucsd/actions/acsweb`](https://github.com/marketplace/actions/ucsd-acsweb-site-deploy) Github Action, and you are injecting your own values here. 

You can think of this like a function call in any programming language - `action(username, password)`. Replace `YOUR_USERNAME_HERE` with your UCSD username. The password portion you can leave alone, it is using a special Github Action ["context"](https://help.github.com/en/github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions) that accesses the secret you made in Step 4. That way, you don't commit your plain password to a file, and it stays safe in Github's hands!

And that's it! Click on the "Start commit" button on the top right, then commit your new file in.

## Step 6: Make sure it deployed correctly

On your repo, click on the "Actions" tab at the top again. After you committed the file from Step 5, it *should* have kickstarted the workflow and synced your files to your acsweb server. You *should* see an event that was trigged recently, with either a yellow circle, green checkmark, or red X.

A yellow circle means the workflow is still running, so give it about a minute. A red X means the workflow failed for some reason - if this happened, click on the job and take a look at the logs. If you're lost and confused, open an [issue](https://github.com/os-ucsd/acsweb-deploy-action/issues/new) on our repo and we can help you debug. 

A green check means you're all good! Checkout out your site at `http://acsweb.uscd.edu/~YOUR_USERNAME` and see if your `index.html` shows up!

## Step 7: Edit your `index.html`, and see if it automatically deploys

We set up the workflow such that it will deploy your site everyone you push to master. So, let's test it!

Go your your repo on github, click on your `index.html` file, and click on the pencil ✏️ icon to edit the file.

Change the file in some way - add your name, add an [image](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) of a [dog](https://dog.ceo/img/dog.jpg), put a link to an article, whatever. Once your done, "Commmit changes" at the bottom. 

Once you hit "Commit changes", it will create a new commit and push it onto the master branch. Ideally, this will trigger your new workflow, and it should upload your changes to your acsweb server.

It may take a minute or so for the workflow to complete. So wait a bit, then refresh your page, and you should see your new changes.

If this didn't work for whatever reason, create an [issue](https://github.com/os-ucsd/acsweb-deploy-action/issues/new) in our repo and we can help you debug!

## Step 8: Enjoy!

You now have a working site that's synced to a Github repository! You can now do whatever you want on this site. You could create a portfolio of projects/designs that you're proud of, you can host notes you took during classes you enjoyed, or use it as a virtual resume.

If you want to make a site with React, vue.js, Jekyll, Gatsby, Next.js, or some other service, [let us know]()! 