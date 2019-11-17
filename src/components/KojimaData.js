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
              <h2>Kojima Data</h2>
              <Form>
                <Form.Group controlId="formFilmCharacter">
                  <Form.Label>What's your favorite film character</Form.Label>
                  <Form.Control type="text" name="filmCharacter" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formLastKubruck">
                  <Form.Label>What's the last word of the title of your favorite Kubrick film?</Form.Label>
                  <Form.Control type="text" name="lastKubrick" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formMusicAlbum">
                  <Form.Label>What is the first word in the title of your favorite music album?</Form.Label>
                  <Form.Control type="text" name="musicAlbum" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formScientificTerm">
                  <Form.Label>What is a scientific term you picked up from listening to NPR once?</Form.Label>
                  <Form.Control type="text" name="scientificTerm" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formMilitaryHardware">
                  <Form.Label>What is a piece of military hardware you think looks cool even though war is bad?</Form.Label>
                  <Form.Control type="text" name="militaryHardware" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formMadsMikkelsenFull">
                  <Form.Label>What is something you’d enjoy watching Mads Mikkelsen do?</Form.Label>
                  <Form.Control type="text" as="textarea" name="madsMikkelsenFull" size="sm"/>
                </Form.Group>
                <Form.Group controlId="formMadsAction">
                  <Form.Label>Condense the previous answer in two words</Form.Label>
                  <Form.Control type="text" name="madsAction" size="sm" onChange={this.handleChange.bind(this)}/>
                </Form.Group>
              </Form>
            </Jumbotron>
        );
    }
};

export default PersonalData;
