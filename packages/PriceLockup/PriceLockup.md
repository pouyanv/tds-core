### Usage Criteria

- `PriceLockup` is available in three different sizes:
  - Use `small` for pricing in product catalogue pages (not in cards)
  - Use `medium` for pricing in product compare cards
  - Use `large` for pricing in banners and promo cards
- The size prop refers to the size of the PriceLockup rather than the viewport it is being used in
- PriceLockup is responsive depending on the screensize beinv viewed at
- Must provide pricing value using the `price` prop
- Price rate can be provided using the `rateText` prop (eg. /month)
- Top and bottom text are optional and can be provided using the `topText` and `bottomText` props respectively
- `bottomText` is only available with `small` and `medium` sized `PriceLockup`
- When displaying prices in French, use `signDirection` to position the dollar sign to the right of the price

```jsx
<PriceLockup
  size=“medium”
  topText=“Starting at”
  price=“25”
  rateText=“/month”
  bottomText=“$68 /month after 3 months”
  signDirection=“left”
/>
```

### French and `signDirection`

```jsx
<PriceLockup 
  size="medium" 
  topText="À partir de :" 
  price="25" 
  signDirection="right"
/>
```
