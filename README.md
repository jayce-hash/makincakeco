# MAKINCAKECo. website

The public site plus a password-protected owner dashboard at **/admin**. Sarah can add photos, remove them, reorder them, and edit every piece of text from her phone. She never needs GitHub or a code editor, and nothing has to be redeployed.

## How it works

| Part | Where it lives |
|---|---|
| Homepage | `netlify/functions/page.mjs` builds the page from saved content. Netlify's CDN caches it, and the cache clears on every save. |
| Dashboard | `public/admin/`: plain HTML/JS, no build step |
| Dashboard API | `netlify/functions/api.mjs` (sign in, save text, upload, reorder, delete) |
| Uploaded photos | Netlify Blobs (store `photos`), served by `netlify/functions/media.mjs` |
| Saved text and photo list | Netlify Blobs (store `site`): `content.json` and `photos.json` |
| Starting content | `lib/defaults.mjs`, used until the first save |
| Original 21 photos | `public/img/gallery/` (already optimized) |

Photos are resized in the browser before upload: 1800px for full size and 700px for previews. A 4–5 MB phone photo ends up around 300 KB, which keeps the site fast and the bandwidth well inside Netlify's free plan.

Edits don't trigger deploys, so they don't use any build credits.

## Setup (one time, about 5 minutes)

The site stays on your Netlify account. Sarah never needs a Netlify or GitHub account. She only uses `/admin`.

1. Replace the contents of the existing repo with this folder and push. Netlify deploys it automatically: `netlify.toml` sets the publish folder to `public`, and there's no build command. (Or run `npm install && npx netlify-cli deploy --prod` from this folder.)
2. In Netlify, go to **Site configuration → Environment variables** and add `ADMIN_PASSWORD`. This is your master key.
3. Redeploy once (**Deploys → Trigger deploy**) so the functions pick up the variable.
4. Open `https://makincakeco.netlify.app/admin` and sign in. Add a test photo, then delete it.

## Give Sarah

- The link: `https://makincakeco.netlify.app/admin`
- A starting password: either your `ADMIN_PASSWORD`, or set one for her under **Help → Change your password**.
- Tell her she can change her password herself in the **Help** tab, which also explains everything else, including adding the dashboard to her home screen.

**Passwords:** Sarah's password is stored hashed in the site's Blobs storage, and she can change it any time. `ADMIN_PASSWORD` always works too, so if she forgets hers, sign in with your master key and set a new one for her. Changing either password signs out every other device.

**Her edits never trigger a deploy,** so they don't use deploy credits. You'll never need to push code again unless you want to change the design.

## If you ever want to hand over the hosting too

Deploy this folder to a Netlify account in her name and set `ADMIN_PASSWORD` there. Content saved on the old site doesn't move with it, so do this before she starts uploading, or plan to re-add her photos.

## Local development

`netlify dev` serves everything, including local Blobs. Set `ADMIN_PASSWORD` in your shell or in a `.env` file first.
