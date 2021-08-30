export const userDataRules = {
  body: {
    displayName: 'required',
    avatar: 'required'
  }
}

export const scoreSaveDataRules = {
  body: {
    gameId: 'required',
    score: 'required'
  }
}

export const scoreGetDataRules = {
  body: {
    gameId: 'required'
  }
}
