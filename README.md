# Scooby's Meds

A single-page medication tracker for one dog, built for a phone. Open it, tap
**Give now** when a dose goes in, and the countdown to the next one starts.

Everything is stored in the browser on that phone. No account, no server,
nothing sent anywhere.

## What it tracks out of the box

| Medication | Schedule |
|---|---|
| Pepcid (famotidine) | 1 tablet every 12 hours |
| Prednisone | tapering — 14 doses every 12 hours, then 7 doses once a day, then 4 doses every other day (25 tablets total) |
| Cerenia (maropitant) | 1 tablet every 24 hours |
| Sucralfate | 1 tablet every 24 hours, 1 hour before food |

The prednisone card advances through the taper on its own as doses are logged,
and shows which stage it's on and how many tablets are left in the course.

Any of these can be edited, removed, or added to from the app — the four above
are just the starting point.

## Using it

- **Give now** — logs the dose at the current time.
- **⋯** — log a dose at an earlier time, undo the last dose, edit the schedule.
- **How he's doing** — one tap to log vomiting, blood, black stool, whether he
  ate, energy level. Free-text notes too. This is the part worth showing the vet.
- **Share** (↑ in the header) — builds a plain-text summary of where every
  medication stands plus the last three days of history, ready to text or email.
- **Bell** — turn on in-app alerts, or drop the next dose of each medication
  into the phone's calendar with an alarm.
- **Gear** — rename the dog, back up or restore the log, start over.

## Putting it on a phone

Open the page, then:

- **iPhone (Safari):** Share → Add to Home Screen
- **Android (Chrome):** ⋮ → Add to home screen

It then opens full-screen like an app and works with no signal.

## Two people, two phones

Each phone keeps its own log — there's no sync. If you're both giving meds,
pick one phone as the record, and use **Share** to send the other person an
update. Settings → Back up copies the whole log as text that can be pasted into
the other phone to restore it.

## Hosting it

It's static — `index.html` plus icons, a manifest, and a service worker for
offline use. Any static host works. To use GitHub Pages: repository
**Settings → Pages → Source: Deploy from a branch**, pick this branch and the
root folder, and the app appears at `https://<user>.github.io/scooby/`.

## Not medical advice

This records what was given and when. It doesn't check doses or interactions.
Follow the vet's instructions, and call them about anything new or worse.
