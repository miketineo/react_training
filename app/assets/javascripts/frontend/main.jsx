import Greet from './greet';

class Main extends React.Component {
  render() {
    return (
      <div>Hello there</div>
    );
  }
}

let documentReady = () => {
  React.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
