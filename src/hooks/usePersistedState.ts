import React from 'react'

type State<T> = [T: T, dispatch: React.Dispatch<React.SetStateAction<T>>]

function usePersistedState<T>(key: string, initialState: any): State<T> {
  const [state, setState] = React.useState(() => {
    const storageValue = localStorage.getItem(key)
    return storageValue ? JSON.parse(storageValue) : initialState
  })

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedState
