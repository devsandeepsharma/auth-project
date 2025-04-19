# Auth Project 🔐

A sleek, modern authentication system built with **React**, **Firebase Authentication**, and **React Bootstrap**. Supports user signup, login, email verification, profile editing, and route protection.

---

## 🚀 Features

- ✅ User Signup & Login
- ✅ Email Verification Flow
- ✅ Protected Routes (Only verified users can access core pages)
- ✅ Edit Profile (Display name + photo)
- ✅ Context API for Auth State Management
- ✅ Persistent Login via Local Storage
- ✅ Responsive UI with React Bootstrap
- ✅ Firebase SDK Integration

---

## 🧠 Tech Stack

- **Frontend**: React, React Router v6, React Bootstrap
- **Authentication**: Firebase Auth
- **State Management**: React Context API
- **Routing**: Protected & Public Routes via React Router
- **Data Persistence**: Local Storage

---

## 📚 What I Learned While Building This Project

This project wasn't just about writing code. I messed up, got stuck, Googled a ton, and finally figured out stuff I didn’t even know I needed. Here’s how things went down:

### 🔐 Why I had to protect some pages — and how I actually did it

At first, I thought once a user logs in, that’s it — they’re good to go. But then I noticed something strange…  
Even if someone wasn’t logged in, they could just type `/home` or `/profile` into the browser and access those pages 😬

That’s when it clicked:

> “Wait… I need to stop people from getting in unless they’re really logged in!”

At first, I tried using a fancy-looking `ProtectedRoute` with `<Route>` inside it, but React Router started yelling at me with errors like:

> "A `<Route>` can’t be used outside of `<Routes>`!"

So I ditched that messy idea and went for something much simpler.

Instead of overcomplicating things, I made a basic `ProtectedRoute` component that just checks if a token exists in `localStorage`. If it does, we show the page. If not — boom, we send them to the login screen.

```js
const ProtectedRoute = ({children}) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}
```

### 📬 Why email verification was harder than I thought

Sending a verification email with Firebase was easy. Just one function and done.  
But then I thought: “Wait... how do I know if the user really clicked the link and verified their email?”

Firebase didn’t update the user info right away, and that confused me.  
Later, I learned that I had to manually check the user again using something like `getCurrentUser()`. Once I did that, I could see if the email was verified or not.  
Now I understand — Firebase helps a lot, but sometimes it won’t do everything for you automatically. You gotta ask for updates yourself.


### 🔄 Why my app forgot the user after a refresh — and how I made it remember

Every time I refreshed the page, the user would disappear like magic. I was like:

> “Bro, where did you go? You were just here!”

That’s because React’s context doesn’t save data after refresh. And Firebase doesn’t instantly tell you who’s logged in.

So I saved the user data in `localStorage` (kind of like a notebook the browser keeps). And then, when the page refreshed, I used that saved data to put the user back into the app.  
Now it remembers who’s logged in — even after a refresh. 🎉

### 📂 Why renaming files in Git wasn't as simple as I thought

I renamed some files locally, thinking everything would be fine when I pushed to GitHub. But when deploying to Vercel, I hit a snag: the file names weren't updating in the repository, and the app was breaking.

The issue? Git wasn't tracking the file name changes because I didn’t use the right command. Instead of just renaming the files in my file system, I needed to run git `mv` to let Git know about the rename.

Here’s what I did to fix it:

#### Renamed the file using git mv:

```bash
git mv src/store/authContext.js src/store/AuthContext.js
```

#### Committed the changes:

```bash
git commit -m "Renamed authContext.js to AuthContext.js"
```

#### Pushed the changes to GitHub:

```bash
git push origin main  # or the branch you're working on
```

Once I pushed the changes, Vercel redeployed the project, and everything worked smoothly.

Lesson learned: Git needs a little help to track file renames properly — it’s not just about changing the names locally.

## 📸 Preview
<img src="./public/01.png" />
<img src="./public/02.png" />
<img src="./public/03.png" />
<img src="./public/04.png" />
<img src="./public/05.png" />
<img src="./public/06.png" />
<img src="./public/07.png" />
<img src="./public/08.png" />
<img src="./public/09.png" />
<img src="./public/10.png" />
<img src="./public/11.png" />
<img src="./public/12.png" />
<img src="./public/13.png" />
<img src="./public/14.png" />
<img src="./public/15.png" />