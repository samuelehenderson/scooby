# Scooby

A plain medication tracker for pets and people. Open it, tap **Give now** when a
dose goes in, and the countdown to the next one starts.

Everything is stored in the browser on that device. No account, no server,
nothing sent anywhere.

It's named after a dog who needed a chart like this one.

## Not medical advice

This is a notebook, not a medical device. It records what you tell it and counts
the hours — it does **not** check doses, interactions, allergies, or whether a
medication is right for anyone. If the app and the label disagree, the label is
right. Reminders can fail, so don't rely on it alone.

The full text stays out of the way. It's summarised in two lines on the screen
where a profile is created, where continuing accepts it, and after that it lives
behind a quiet **Legal & safety** link at the foot of the page (also in
Settings). Anyone upgrading from an older version acknowledges it once, in a
sheet, without losing access to their log.

## Who it tracks

As many as you like — a dog, a cat, another animal, a person. Each one keeps its
own medications, dose log and notes, and you switch between them from the name
at the top left. Language follows the profile: a pet's notes talk about *vet*
and offer "wouldn't eat" and "black / tarry stool"; a person's talk about
*doctor* and offer "nausea", "dizzy", "slept well".

## Adding medications

Two ways, both from **+ Add a medication**:

- **From the list** — around sixty common medications, one set for animals and
  one for people, searchable across both. Picking one fills in the name, what
  it's for, and a common schedule as a starting point. No amounts are ever
  suggested: the dose comes from the label in your hand.
- **Manually** — type anything the list doesn't have.

Either way the editor opens for you to confirm before it's saved.

## Schedules

A medication can be:

- **On a clock** — every N hours.
- **Stepping down** — a multi-stage taper. Each stage has its own dose count and
  spacing, and the app advances through them as you log doses. A prednisone
  taper of "twice daily for a week, then daily for a week, then every other day"
  is three stages and runs itself.
- **As needed** — no schedule, just a record of when it was taken.

## Medications that end

From **⋯ → Edit everything about it**:

- **Keep going** — open-ended, the default.
- **Runs out** — say how many doses are left in the bottle. The card counts down,
  turns amber at three, and at zero reads *Finished*: no longer due, gone from
  the calendar, and left out of alarms exported after that. **Refilled** puts it
  back.
- **On a date** — nothing is scheduled past that day.

A taper also ends on its own once its stages are used up. Whichever limit comes
first wins.

Nothing is stored twice: the countdowns, the calendar, the summary and the
calendar alarms are all derived from the medications and the dose log. Retime a
taper stage and every one of them follows in the same breath.

## Two views

**Doses** is the working screen: what's due, how long until the next one, and one
big button per medication. A strip across the top shows what's already gone in
today.

**Calendar** is the whole picture. Each day carries a dot per dose — filled for
given, hollow for due, amber for missed, clay for a symptom logged that day. Tap
any day for its detail; tap a future day to see exactly what's coming.

## Reminders

**Bell** puts the upcoming schedule into the phone's own calendar, one alarmed
event per dose, a week or 30 days at a time. This is the reminder that actually
works — a web page can't wake a sleeping phone, but a calendar alarm can. In-app
alerts are offered too, clearly marked as the weaker option.

## Sharing and hand-off

- **Share** (↑) builds a plain-text summary: where every medication stands, a
  three-day symptom tally, and recent history with initials. Written to be pasted
  into a message to a vet or doctor.
- Put a name in Settings → *Who's using this phone* and every dose records who
  gave it.
- **Send the log to another phone** builds a link carrying the log inside it. The
  other phone previews what's missing and merges it into the matching profile —
  creating that profile if it doesn't have it yet. Nothing is deleted on either
  side, nothing goes through a server, and opening the same link twice is
  harmless.

## Putting it on a phone

- **iPhone (Safari):** Share → Add to Home Screen
- **Android (Chrome):** ⋮ → Add to home screen

It then opens full-screen like an app and works with no signal.

## Hosting it

Static — `index.html` plus icons, a manifest, and a service worker for offline
use. Any static host works. For GitHub Pages: **Settings → Pages → Source:
Deploy from a branch**, pick `main` and the root folder.
