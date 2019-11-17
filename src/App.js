import React from 'react';
import {
  Container,
  Button,
  Row,
  Col,
  Jumbotron,
} from 'react-bootstrap';
import './App.css';
import { Intro, PersonalData, KojimaData } from './components';
import { determineNameConditions, generateKojimaName } from './engine';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showForm: false,
      answers: {
        // Personal Data
        originalName: "",
        profession: "",
        firstPet: "",
        embarassingStory: "",
        stabbingObject: "",
        goodAt: "",
        intangibleFear: "",
        tangibleFear: "",
        lastThing: "",
        bodyCondition: "",
        stateOfMatter: "",
        nameSoundsLike: "",
        zodiacSign: "",
        personality: "",
        // Kojima Data
        favoriteFilmCharacter: "",
        kubrickWord: "",
        musicAlbum: "",
        scientificTerm: "",
        militaryHardware: "",
        madsAction: "",
      },
      conditions: {}
    };
  }

  start() {
    this.setState({ showForm: true });
  }

  saveAnswer(answerKey, answerValue) {
    this.setState((state) => ({
      answers: { ...state.answers, [answerKey]: answerValue }
    }));
  }

  rollDice(diceSize) {
    return Math.floor(Math.random() * Math.floor(diceSize)) + 1;
  }

  discoverName() {
    const dices = {
        d4: this.rollDice(4),
        d6: this.rollDice(6),
        d8: this.rollDice(8),
        d12: this.rollDice(12),
        d20: this.rollDice(20),
        d100: this.rollDice(100),
    };
    const conditions = determineNameConditions(dices);
    const randomDice = this.rollDice(conditions.optionCount);

    this.setState({
      kojimaName: generateKojimaName(this.state.answers, conditions, randomDice),
      showForm: false,
      conditions: conditions,
    });
  }

  render() {
    return (
      <>
      <Container>
        <Intro start={this.start.bind(this)} />
      </Container>
      <Container className={this.state.showForm ? 'visible' : 'invisible'}>
        <Row>
          <Col>
            <PersonalData onChange={this.saveAnswer.bind(this)} />
          </Col>
          <Col>
            <KojimaData onChange={this.saveAnswer.bind(this)} />
          </Col>
        </Row>
        <Row>
          <Button block variant="primary" onClick={this.discoverName.bind(this)}>Discover my name</Button>
        </Row>
      </Container>
      <Container className={this.state.kojimaName ? 'visible' : 'invisible'}>
        <Jumbotron>
          <h1>Your Kojima Name is {this.state.kojimaName}</h1>
          <p>It is in the <strong>{this.state.conditions.category}</strong> category. You can fill in your monologue below</p>
          <p>Hi, I'm {this.state.kojimaName}, and if you're wondering how I got this name, let me tell you. I...</p>
        </Jumbotron>
      </Container>
      </>
      );
  }
};

export default App;
