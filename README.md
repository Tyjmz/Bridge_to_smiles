# Bridge to Smiles — Phase 1 Website Prototype

A responsive, single-page website introducing Bridge to Smiles and its information and referral support for children and families seeking affordable dental care.

## Technology

The site uses semantic HTML5, CSS3, and vanilla JavaScript. No build step or package installation is required.

## Project structure

```text
index.html       Page content and structure
css/styles.css   Brand styles and responsive layouts
js/script.js     Mobile navigation, inquiry fields, and footer year
assets/images/   Original photographs used by the site
assets/logos/    Reserved for approved logo assets
```

## Preview locally

Open the project folder in VS Code and start the Live Server extension from `index.html`. You can also open `index.html` directly in a browser.

## Website sections

- **Home:** introduction and calls to action.
- **About:** mission and founding story.
- **How We Help:** information about referral and navigation support.
- **Get Involved:** invitations to dental offices, donors, sponsors, and volunteers.
- **Contact:** privacy guidance and a non-submitting contact form prototype.

## Updating the site

Edit page content and navigation in `index.html`; adjust colors, spacing, and responsive presentation in `css/styles.css`. Update the small interactions in `js/script.js`. Add approved original photos to `assets/images/` and reference them from the page; the selected photos are displayed with reversible CSS sizing and cropping. The header and footer currently use a temporary text wordmark because no approved logo file is present.

The contact form is intentionally disabled and does not send or store information. The JavaScript prevents submission as an additional safeguard.

## Before deployment

Confirm the approved logo, public contact details, service area, and the accuracy of available services. Obtain approval for the site content and photos, then choose hosting and domain arrangements. If a live contact form is added later, configure an approved service and review privacy and spam protections before launch.
