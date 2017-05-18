
export const counter = (state = 0 , action) => ::

  console.log @ state, action

  const cases = 
    @{} INCREMENT: () => state + 1
      , DECREMENT: () => state - 1
      , default: () => state

  const hasAction = actionType => ::
    let caseOptions = Object.keys(cases)
    return -1 == caseOptions.indexOf(actionType) ? false : true

  return hasAction(action.type) ? cases[action.type]() : cases.default()
