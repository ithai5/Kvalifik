declare const require: any;
const deepFreeze = require('deep-freeze');
import { postReducer, INITIAL_STATE } from './postReducer'
import { Post } from '../../entities/post'
import * as types from '../actions/postActions'

describe('Post Reducer', () => {

    it('Testing Add Post functionality on non-empty array', () => {
        const oldState = INITIAL_STATE;
        deepFreeze(oldState);
        
        const actions = {type: types.PostActions.ADD_POST, payload: {}};
        const posts = postReducer(oldState, actions);
        expect(posts.posts).toHaveSize(oldState.posts.length + 1);
    })
})