import registerElement from './register-element'

export function globalRegister(app: {
  use: (arg0: (app: any) => void) => void
}) {
  app.use(registerElement)
}
