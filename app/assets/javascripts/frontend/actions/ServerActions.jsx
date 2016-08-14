import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
  receivedTweets(rawTweets) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets  // value is the same as the property es6 shortcut
    })
  },
  receivedOneTweets(rawTweet) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet
    });
  }
}
