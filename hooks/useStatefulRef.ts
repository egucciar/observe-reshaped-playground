import { useMemo, useState } from 'react'

export function useStatefulRef<T>(initialVal: T | null = null) {
  const [currentVal, setCurrentVal] = useState(initialVal)

  const statefulRef = useMemo(
    () => ({
      get current() {
        return currentVal
      },
      set current(newValue: T | null) {
        if (!Object.is(currentVal, newValue)) {
          setCurrentVal(newValue)
        }
      },
    }),
    [currentVal]
  )

  return statefulRef
}
