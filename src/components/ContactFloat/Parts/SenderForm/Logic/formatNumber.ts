export function formatNumber(phoneFormat: string, value: string) {
  switch (phoneFormat) {
    case "us":
      const usInput = value.replace(/\D/g, "").substring(0, 10) // First ten digits of usInput only
      const zip = usInput.substring(0, 3)
      const usMiddle = usInput.substring(3, 6)
      const usLast = usInput.substring(6, 10)
      if (usInput.length > 6) {
        value = `(${zip}) ${usMiddle} - ${usLast}`
      } else if (usInput.length > 3) {
        value = `(${zip}) ${usMiddle}`
      } else if (usInput.length > 0) {
        value = `(${zip}`
      }
      return value
    case "eu":
      const euInput = value.replace(/\D/g, "").substring(0, 12) // First ten digits of input only
      const country = euInput.substring(0, 2)
      const euMiddle = euInput.substring(2, 6)
      const euLast = euInput.substring(6, 12)
      if (euInput.length > 6) {
        value = `+${country} ${euMiddle} ${euLast}`
      } else if (euInput.length > 2) {
        value = `+${country} ${euMiddle}`
      } else if (euInput.length > 0) {
        value = `+${country}`
      }
      return value
  }
}
