
export const caseDispatchReducer = (state, action, cases={}) => ::
  const fnAction = cases[action.type]
  console.log @: state, action, fnAction
  return fnAction ? fnAction(state, action) : cases.default()


export const counterReducer = (state = 0, action) =>
  caseDispatchReducer(state, action, counterReducer.cases)

counterReducer.cases =
  @{} INCREMENT: state => state + 1
    , DECREMENT: state => state - 1
    , default: state => state



export class AwesomeSelfDispatchReducer ::
  reducer = (state, action) => ::
    let methodNameForAction
    if 0 ::
      methodNameForAction = `do__${action.type}`

    else ::
      const m = /^(?:@@(\w+)\/)?(.+)$/.exec(action.type)
      if ! m :: throw new Error(`Unknown action type format: "${action.type}"`)

      methodNameForAction = m[1]
        ? `do_${m[1]}__${m[2]}`
        : `do__${m[2]}`


    const fnActionMethod = this[methodNameForAction]

    if fnActionMethod ::
      return fnActionMethod.call(this, state, action)

    else if this.doesNotUnderstand ::
      const ans = this.doesNotUnderstand(state, action, methodNameForAction)
      if ans !== undefined :: return ans

    return state


  ['do__@@redux/INIT'](state) ::
    return 2142

  do_redux__INIT(state) ::
    return 1942

  do__INCREMENT(state) ::
    return state + 1

  do__DECREMENT(state) ::
    return state - 1

  doesNotUnderstand(state, action, methodNameForAction) ::
    console.log @ `doesNotUnderstand: "${action}" -- todo, implement ${methodNameForAction}`
