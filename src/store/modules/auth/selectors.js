import { createSelector } from 'reselect'

export const isAuthed = createSelector(
    state => state.auth.profile
)
