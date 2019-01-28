## NOTES for Deployment

1. In const client change uri to just `"/graphql"`
2. Set static files `app.use(express.static('public'))` then,

```javascript
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
```

3.Run `$ npm run build` in client but put all those public files in server's public folder

```javascript
  "scripts" : {
    "build": "react-scripts build && mv build ../public"
  }
```

4. Heroku
   - `heroku login`
   - `heroku create`
   - `heroku git:remote -q <name-of-app>` This add the app as remote repo
   - `git add . && git commit -m "upto date"` To make sure everything is upto date.
   - `git push heroku master` Push heoku to master branch.
   - `heroku open` Opens the app in browser
   - If we want a domain name, then goto setting > Domains and Certifications > Add domain and Follow docs to point our DNS to Heroku.
