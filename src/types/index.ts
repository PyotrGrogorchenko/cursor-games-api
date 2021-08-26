export type ReqBase = {
  headers: {
    authorization?: number
  }
}

export type ResBase = {
  status: number
  data: {
    error: string
    reason: string
  }
}

// USER CREATE
export type ReqUserCreate = {
  body: {
    displayName: string
    avatar?: string
  }
} & ReqBase

export type ResUserCreate = {
  user: {
    displayName: string,
    avatar: string
  }
} & ResBase

// SCORE SAVE
export type ReqScoreSave = {
  body: {
    gameId: string
    score: number
  }
} & ReqBase

export type ResScoreSave = ResBase

// SCORE GET
export type ReqScoreGet = {
  body: {
    gameId: string
  }
} & ReqBase

export type ResScoreGet = {
  score: number
} & ResBase
