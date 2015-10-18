# AccessibilityOz Accessible Slideshow

This is an accessible slideshow built by replacing some parts of the [Flexslider](https://github.com/woothemes/FlexSlider) library.

It works by removing the controls and replacing them with our own accessible controls.
It also fiddles with ARIA states and the keyboard focus order as slides change by using
the "after" callback.

The main limitation is that you can only use the "fade" animation. "slide" messes with the source order too much to be accessible.

A screen reader user who encounters this slider should simply see blocks of content in an unordered list. They won't even know there's a slideshow.

## License

This work is licensed under the GPLv2.
