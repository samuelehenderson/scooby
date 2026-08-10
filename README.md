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

## Medications that end

Every medication can be told when to stop, from **⋯ → Edit everything about it**:

- **Keep going** — open-ended, the default.
- **Runs out** — say how many doses are left in the bottle. The card counts down
  ("6 doses left"), turns amber at three, and when it hits zero the medication
  reads *Finished*, stops appearing as due, drops out of the calendar, and is
  left out of any alarms exported after that. A **Refilled** button puts it back.
- **On a date** — nothing is scheduled past that day.

A tapering medication also ends on its own once its stages are used up.

## Changing a schedule

The editor reaches every field: name, dose, note, and the schedule itself —
a fixed interval, a multi-stage taper (add, remove, or retime any stage), or
*as needed* for something with no clock at all. Edits are made on a copy, so
Cancel really cancels.

Nothing is stored twice: the countdowns, the calendar, the vet summary and the
calendar alarms are all derived from the medication and the dose log. Change a
taper stage from every 12 hours to every 8 and every one of them follows in the
same breath.

## Two views

**Doses** is the working screen: what's due, how long until the next one, and
one big button per medication. A strip across the top shows what's already gone
in today.

**Calendar** is the whole picture. Each day carries a dot per dose — filled for
given, hollow for due, amber for missed, clay for a symptom logged that day.
Tap any day to see it in detail; tap a future day to see exactly what's coming
and when, prednisone step-downs included.

## Using it

- **Give now** — logs the dose at the current time.
- **⋯** — log a dose at an earlier time, undo the last dose, edit the schedule.
- **How he's doing** — one tap to log vomiting, blood, black stool, whether he
  ate, energy level. Free-text notes too. This is the part worth showing the vet.
- **Share** (↑ in the header) — a plain-text summary of where every medication
  stands, a three-day symptom tally ("Vomited ×2, Blood in vomit"), and the
  recent history with initials. Written to be pasted into a message to the vet.
- **Bell** — puts the upcoming schedule into the phone's own calendar, one
  alarmed event per dose, a week or 30 days at a time. This is the reminder
  that actually works: a web page can't wake a sleeping phone, but a calendar
  alarm can. In-app alerts are offered too, clearly marked as the weaker option.
- **Gear** — set who's using the phone, hand the log to another phone, rename
  the dog, back up or restore, start over.

## Putting it on a phone

Open the page, then:

- **iPhone (Safari):** Share → Add to Home Screen
- **Android (Chrome):** ⋮ → Add to home screen

It then opens full-screen like an app and works with no signal.

## Two people, two phones

Put a name in Settings → *Who's using this phone* and every dose records who
gave it — so "did anyone give him the Pepcid?" has an answer.

There's still no live sync, but **Settings → Send the log to another phone**
builds a link that carries the whole log inside it. The other phone opens the
link, sees what's missing, and merges it in. Nothing is deleted on either side,
nothing goes through a server, and opening the same link twice is harmless.

## Hosting it

It's static — `index.html` plus icons, a manifest, and a service worker for
offline use. Any static host works. To use GitHub Pages: repository
**Settings → Pages → Source: Deploy from a branch**, pick this branch and the
root folder, and the app appears at `https://<user>.github.io/scooby/`.

## Not medical advice

This records what was given and when. It doesn't check doses or interactions.
Follow the vet's instructions, and call them about anything new or worse.
