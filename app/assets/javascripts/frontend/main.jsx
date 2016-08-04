import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

let mockTweets = [
  { "id": 1, "name": "Miguel Tineo", "body": "This is my first tweet"},
  { "id": 2, "name": "Gilliam Kingland", "body": "And this is my first tweet"},
  { "id": 3, "name": "Other Guy", "body": "And?? #boring"},
  { "id": 4, "name": "Jose Tineo", "body": "GTFO link -> https://google.com"}
];

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = { tweetsList: mockTweets };
  }

  addTweet(tweetToAdd) {
    // mockTweets.unshift({...})
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({ id: Date.now(), name: 'Guest', body: tweetToAdd });
    this.setState({ tweetsList: newTweetsList });
  }

  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
