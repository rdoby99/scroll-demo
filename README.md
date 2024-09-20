# GSAP ScrollSmoother Jump Bug

I've created a simple page with three sections and a button that opens a dialog. If you scroll to the button, let the smoother come to a complete stop, open the dialog, close it, and immediately scroll down, it jumps.

## Observations

1. If the page is still scrolling when you open the dialog, it doesn't happen.
2. The window.scrollY property is correct when console.logged. It's the scrollSmoothers transform value that jumps the page back up.
3. If you close the dialog, wait a few seconds, then scroll it doesn't jump.

## Question

What is causing this jump behavior? Is it a bug?
