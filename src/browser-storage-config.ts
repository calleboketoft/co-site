export const NAMESPACE = 'cosite'
export const DEBUG = 'debug'

export const browserStorageConfig = {
  namespace: NAMESPACE,
  initialState: [
    {
      key: DEBUG,
      default: 'false',
      storageType: 'localStorage',
      valueType: 'text'
    }
  ]
}