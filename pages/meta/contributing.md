import Layout from 'components/TutorialLayout'

export default Layout

export const meta = { 
  title: "How to Create Your Own Tutorial on this Site", 
  publish: new Date(), 
  authors: [ {name: "Alex Garcia", github: "asg017"} ] 
}

**Note**: This will probably end up being a very long article, that can and should be broken up into many smaller parts. 

This website is a series of tutorials written by people from the open source community at UC San Diego. The tutorials will mainly focus on open source software, whether it is creating, using, or contributing to open source projects. It is maintained by Open Source @ UCSD, an official org at UC San Diego.

Writing your own story and contributing to this site may be scary at first, and that's OK! This post, and hopefully other ones in the future, will help you get comfortable with writing your own tutorials, as well as submitting them and getting them added to this site!

## Step 1: What *is* this site?

This website is built with [Next.js](https://nextjs.org/), which is a React framework to build websites. [React](https://reactjs.org/) is a Javascript library that is used to build user interfaces for websites. Javascript is the main programming language for building websites for standard web browsers.

Thankfully, you don't need to know any of the above to write a tutorial! All of these tutorials are written in Markdown.

You may already be familar with Markdown - it's used for [Reddit comments](https://www.reddit.com/wiki/markdown), [Github](https://guides.github.com/features/mastering-markdown/) READMEs and issues, [Slack](https://api.slack.com/messaging/composing/formatting) messages. 

Every single tutorial here is a single `.md` file. For example, this [index.md](https://github.com/os-ucsd/tutorials/blob/master/pages/posts/2019/acsweb-site/index.md) file, located at `pages/posts/2019/acsweb-site/index.md` in the [project repository](https://github.com/os-ucsd/tutorials), is a single Markdown file that gets rendered and transformed into a nice little [tutorial](http://os-ucsd.ucsd.edu/tutorials/posts/2019/acsweb-site) on our website. 


## Step 3: How do I run my own version of this site?
First off, go to [the website's repository](https://github.com/os-ucsd/tutorials) on Github and fork it. If you're not familar with Github/forking, check out other other tutorials for a good starter project!

Now that you have your own copy of the code, you can run this code to create your own version of the site, meaning you can more easily create a tutorial Markdown file and see how it would look live. 

To run this code, you have two options: the hard way, and the easy way.

### Option 1 - The Hard Way, Running the Site Yourself

If you're familiar with node/npm/javascript, and you have node/npm already installed, and you're familiar with the command line, you could run this yourself, and use your favorite text editors like VS Code, Atom, vim, etc. To do this, try out:

```

$ git clone https://github.com/YOUR_USERNAME/tutorials.git
$ cd tutorials/
$ npm install
$ npm run start
```

This will create a webserver at http://localhost:3000 (I think?), and whenever you change a file, it *should* update automatically.


### Option 2 - The Easy Way, Running the Site on Glitch

Here, we are going to use [Glitch](https://glitch.com/) to run your own version of the website, without having to download anything special on your computer. You have full access to edit files or run code, all within your browser.

To do this, make sure you have a Glitch account, then press this button.

<a href="https://glitch.com/edit/#!/import/github/os-ucsd/tutorials">
  <img 
    src="https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg" 
    alt="Remix on Glitch" />
</a>


The button above will import the project repo from Github into a fresh new Glitch app. It will then run the app, and show you a page where you can edit files and 


### Why Glitch?

Running your own version of this site can be a pain. You have to have all the right software downloaded, you need to know a little Javascript to get things working, and things could blow up or not work on Windows. We don't want contributing to be difficult or annoying, it should be easy and fun! Glitch simplifies all that, and you only need a web browser to use it.

Also, with Glitch, you can just drag and drop pictures (ie, screenshots), and it will upload them and give you a link that you can use in your tutorials. This is **much** easier than having to upload things to imgur/github/some other service.

## Step 4: Adding Your Own Tutorial

I'm assuming you're doing this in Glitch, but if you're doing it manually, you should still be able to follow along.

First off, once your Glitch app is working, make sure you can see the site. It will update whenever you change a file. In Glitch, on the top left, click on the `🕶️ Show` button, and choose the `Next to code` option. Now, you'll have a live preview of your local site, right next to your code!

![](https://cdn.glitch.com/1005a9ae-473a-4fc8-850c-578e32c0573d%2F3922e6a9-2427-4615-bfc1-778ad678ab4b.image.png?v=1572849227447)

Now, every tutorial exists in a specific directory of the project. They exist in the `pages/posts/2019` directory. If you're doing this in a different year, it may be `/2020` or whatever. 

Create a new file, and call it `pages/posts/2019/my-tutorial/index.md`. Change `my-tutorial` to a shortened version of the title of your tutorial. This will appear in the URL of your tutorial once published, it would appear like `http://os-ucsd.ucsd.edu/posts/2019/my-tutorial`. Feel free to change it later, as well!

This `index.md` will be where you put all of your Markdown, that will be your new tutorial!

On your app viewer to the right, you can click on `Change URL` to change which page the viewer is rendering. Change it to your new page, by typing in `/posts/2019/my-tutorial`. Right now, it'll be blank, because the `index.md` file is blank. Let's change that! Add a quick `Hello, world!` to your `index.md` file, and see your previewer on the right update automatically!

![](https://cdn.glitch.com/1005a9ae-473a-4fc8-850c-578e32c0573d%2Fc7d389b5-3609-4670-86f4-5854be313600.image.png?v=1572850176142)

Now, when I said that you *only* need to write Markdown, I lied a little bit. The site isn't only build with plain Markdown, it's actually [MDX](https://mdxjs.com/), which is Markdown with extra features. Basically, we can interweave Javascript/React code into the Markdown file, and our app will parse and run that code. This allows us to do cool things like make interactive components and put it into our tutorials, or create buttons or text inputs or forms in our tutorials with no hassle.

You don't need to worry about it much, but you *do* need to add these few lines of code at the top of your `index.md` file:

```javascript
import Layout from 'components/TutorialLayout'

export default Layout

export const meta = { 
  title: "Put Your Title Here!", 
  publish: new Date("2019-11-29"), 
  authors: [ {name: "Your Name", github: "your_github_username"} ] 
}

```

Let's explain this code. 

The first two lines gives your tutorial the same styling and look as all the other tutorials. We built a base Layout component for all tutorials, defined at `./components/TutorialLayour.jsx`, that gives consistent styling to all tutorials on the site.

The `export const meta` code defines metadata about your tutorial. This is used for 1) easier embeding of your article on the tutorial site homepage, 2) allows the base layout page to render your name and your Github profile pic in the "Authors" section of the page, and 3) allows for easier tagging in future iterations of our site. Make sure to replace these values with something meaningful before sending your tutorial for approval.

Once you add these lines, your tutorial page should now look much better!

![](https://cdn.glitch.com/1005a9ae-473a-4fc8-850c-578e32c0573d%2F4f1a4125-a29a-4436-80c7-1d99e9828bb8.image.png?v=1572850750377)

Now, you can add the rest of your Markdown underneat all these Javascript code that you added. Write out your tutorial here.


TODO add paragraph about adding new tutorial to `components/Tutorials.jsx` for it to show up on homepage

## Step 5: Sending Your Tutorial for Review

Once you finished writing your tutorial, it's now time to send it for review!

Open Source @ UCSD views every tutorial like any other open source contribution - we will accept pull requests, we will review them, and we will approve them once they meet our standards.

To do this, we will export your Glitch app (which contains your new tutorial) to the repository that you forked in Step 3. Once it is there, then you can submit a Pull Request from your forked repository to the master repository owned by OS @ UCSD. Once that PR is made, we will review it and work with you to get it approved and live on the site!


To do this, Go to the `Tools` button on the lower left hand side. Click on `Git, Import, and Export` and click on `Export to Github`. You may have to authenticate your Github account with Glitch to see this option.

On the popup that comes up, type in `YOUR_USERNAME/tutorials` and hit submit. This is the name of the repository that you forked earlier. Glitch will attempt to create a new branch called `glitch` on that forked repostory, and will put all the changes you made into that branch.

Once that is succesful, go to the repo that you forked,, and you should see a message that says the  the `glitch` branch was updated recently. You will see an option to create a Pull Request with this branch. Chose that option, try to send the PR to the [original os-ucsd repo](https://github.com/os-ucsd/tutorials), and submit it!

