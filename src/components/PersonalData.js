import React from 'react';
import {
  Jumbotron,
  Form,
} from 'react-bootstrap';

class PersonalData extends React.Component {
    handleChange(e) {
      this.props.onChange(e.target.name, e.target.value);
    }

    render() {
        return (
            <Jumbotron>
              <h2>Personal Data</h2>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>What is your full name?</Form.Label>
                  <Form.Control type="text" name="originalName" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formProfessionFull">
                  <Form.Label>What do you do for living?</Form.Label>
                  <Form.Control type="text" name="professionFull" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formProfession">
                  <Form.Label>Condense the previous answer in two words</Form.Label>
                  <Form.Control type="text" name="profession" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formFirstPet">
                  <Form.Label>What is your first pet species or breed?</Form.Label>
                  <Form.Control type="text" name="firstPet" size="sm" onChange={this.handleChange.bind(this)}/>
                  <Form.Text className="text-muted">
                    If you never had a pet, <s>I'm sorry</s> inform an animal you wish you owned.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formEmbarassingStoryFull">
                  <Form.Label>What is your most embarassing childhood memory?</Form.Label>
                  <Form.Control type="text" as="textarea" name="embarassingStoryFull" size="sm"/>
                </Form.Group>
                <Form.Group controlId="formEmbarassingStory">
                  <Form.Label>Condense the previous answer in two words</Form.Label>
                  <Form.Control type="text" name="embarassingStory" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formStabbingObject">
                  <Form.Label>What object you would least liked to be stabbed by?</Form.Label>
                  <Form.Control type="text" name="stabbingObject" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formGoodAt">
                  <Form.Label>What is something you're goot at?</Form.Label>
                  <Form.Control type="text" name="goodAt" size="sm" onChange={this.handleChange.bind(this)}/>
                  <Form.Text className="text-muted">
                    Verb ending in -ing
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formNumberOfCarrots">
                  <Form.Label>How many carrots do you believe you could eat in one sitting, if someone, like, forced you to eat as many carrots as possible?</Form.Label>
                  <Form.Control type="text" name="numberOfCarrots" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formIntangibleFear">
                  <Form.Label>What is your greatest intangible fear?</Form.Label>
                  <Form.Control type="text" name="intangibleFear" size="sm" onChange={this.handleChange.bind(this)}/>
                  <Form.Text className="text-muted">
                    Like fear, death, fear itself.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formTangibleFear">
                  <Form.Label>What is your greatest tangible fear?</Form.Label>
                  <Form.Control type="text" name="tangibleFear" size="sm" onChange={this.handleChange.bind(this)}/>
                  <Form.Text className="text-muted">
                    Like horses
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formLastThing">
                  <Form.Label>What is the last thing you did before this?</Form.Label>
                  <Form.Control type="text" name="lastThing" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formBodyCondition">
                  <Form.Label>What condition is your body currently in?</Form.Label>
                  <Form.Control type="text" name="bodyCondition" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formBodyCondition">
                  <Form.Label>What is your favorite state of matter?</Form.Label>
                  <Form.Control type="text" name="stateOfMatter" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formNameSoundsLike">
                  <Form.Label>What does your name sound like?</Form.Label>
                  <Form.Control type="text" name="nameSoundsLike" size="sm" onChange={this.handleChange.bind(this)}/>
                  <Form.Text className="text-muted">
                    Like Brian -> Brain
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formZodiacSign">
                  <Form.Label>What is your Zodiac Sign?</Form.Label>
                  <Form.Control type="text" name="zodiacSign" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formPersonality">
                  <Form.Label>Define your personality in one word</Form.Label>
                  <Form.Control type="text" name="personality" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
              </Form>
            </Jumbotron>
        );
    }
};

export default PersonalData;
