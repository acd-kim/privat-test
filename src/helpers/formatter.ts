export const formatterCurrency = (locale: string, currency: string) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  });
