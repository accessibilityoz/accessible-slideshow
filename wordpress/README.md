# About

This is a WordPress plugin that acts as an overlay on top of
[WooSlider](http://www.woothemes.com/products/wooslider/). You'll
need that plugin installed before this one will do anything useful.

There's a live example of it in action on the [AccessibilityOz](http://www.accessibilityoz.com/) site.

It works by initialising the slider itself rather than letting the
WooSlider plugin do that. So the settings available in WooSlider are
over-ridden if you're using this plugin.

It does the following:

  - disables all of WooSlider's attempts at keyboard controls
  - forces the use of the 'fade' animation
  - drops custom always-visible controls over the top of the slider
  - those controls have highly-visible keyboard and hover indicators
  - when those controls come in to use via the keyboard ARIA and tabindex
    on the slides are fiddled-with.
  - on mobile the pause button is made much larger and the previous/next
    buttons hidden

# Expected user interaction

A sighted user who is not using the keyboard to navigate will get the usual
slider experience. They'll likely never notice anything different.

A blind user using a screen reader will get the contents of each slide presented
in sequence as an unordered list. The slider controls are hidden from them as they
would only complicate matters.

A sighted keyboard user will find the slider controls to be the first focussable
set of elements in the slider. When they tab in, the slider will automatically pause.
They can then use the next/previous controls to move between slides, and can tab in to
the current slide.

# Gotchas

The original version of this code used the "after" callback in FlexSlider to do
the ARIA/etc fiddles. This seems to be broken in WooSlider as of October 12th 2015.
So if a keyboard user tabs in to the controls and then re-enables playback the keyboard
focus will get a bit funny.

# Customisation

You will almost certainly want to customise the appearance of the controls!

By default they're set to sit over the top-left of the slides. They're circular with
a black background and white foreground. On hover they become squares with black
foreground and white background. They're using the flexslider control font that is
already being loaded on the page via WooSlider.

Just remember to keep an eye on colour contrast!

