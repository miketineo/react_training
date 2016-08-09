import AppDispatcher from "./../dispatcher";
import ActionTypes from "./../constants";
import { EventEmitter } from "events";

let _tweets = [];
let CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter {
  getAll() {
    return _tweets;
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register( action => {

  switch(action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
      //
      console.log(4, "Store");
      _tweets = action.rawTweets;
      TweetStore.emitChange();
      break;
    default:
  }
})
