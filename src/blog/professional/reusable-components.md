# Why I Stopped Creating "Reusable" React Components

I used to love making reusable components. I would write a card or a button, abstract all the styles, and feel like a programming genius. 

Then came the reality of daily usage. 

A designer would ask for a card with a red border on the profile page. Then, a product manager would want the same card but without the subtitle on the settings page. Next, a marketing campaign would need the card to have an action button at the bottom.

To support this, I would add props: `isRed`, `hideSubtitle`, `hasButton`. 

After a few months, my simple card component would look like a configurations checklist:

```tsx
<Card 
  title="Profile" 
  isRed={true} 
  hideSubtitle={true} 
  hasButton={true} 
  buttonText="Save" 
  isFluid={true}
  showIcon={false}
/>
```

Inside the component, the JSX would be filled with nested ternary operators and conditions. It became a fragile box where fixing a bug for the settings page would accidentally break the profile page.

---

## Don't Fear Writing "More Code"

The software industry drilled *DRY (Don't Repeat Yourself)* into our heads so hard that we became terrified of duplicate code. 

But in my daily routine, I've realized something: **duplication is far cheaper than the wrong abstraction.**

If the profile page needs a card and the settings page needs a card, and they do different things, I just write two components: `ProfileCard.tsx` and `SettingsCard.tsx`.

Yes, I am writing "more code." The HTML structure might look identical, and the CSS might share classes. But they are completely independent. If I need to change the Profile Card, I edit `ProfileCard.tsx` and sleep peacefully knowing the Settings Page is untouched.

---

## My Daily Advice

When you're coding your UI, keep it simple:

* **Keep components focused**: A component should do one job for one specific page.
* **If it looks similar but does different things, duplicate it**: Don't force a catalog product card and a checkout shopping cart card into the same template.
* **Use slots / composition**: If you really need layout containers, let the parent pass elements down as children instead of passing flags.

Writing straightforward code is much easier to maintain than trying to write clever, universal code that does everything.
