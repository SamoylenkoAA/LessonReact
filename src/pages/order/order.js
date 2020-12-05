import React from 'react';
import PropTypes from 'prop-types';
import  {Form, Button, Modal} from 'react-bootstrap';

export default class extends React.Component{

    static propTypes = {
        formData: PropTypes.object.isRequired,
        onSend: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired
    }

    state = {
        showModal: false
    }

    render(){
        let formFields = [];

        for(let name in this.props.formData){
            let field = this.props.formData[name];

            formFields.push(
                <Form.Group key={name} controlId={"order-form-"+field.label}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control type="text"
                                  value = {field.value}
                                  onChange = {(e) => this.props.onChange(e.target.value, name)} />
                </Form.Group>
            )
        }
        return(
            <div>
                <h2>Order</h2>
                <form>
                    {formFields}
                </form>
                <div>
                    <Button variant ="link" onClick = {this.props.onBack}>
                        On Back
                    </Button>
                    <Button variant="link" onClick = {() => this.setState({showModal: true})}>
                        On Send
                    </Button>
                </div>
                <Modal show={this.state.showModal} backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Потвердить заказ?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" 
                                onClick={() => this.setState({showModal: false})}>
                            Close
                        </Button>
                        <Button variant="primary"
                                onClick = {this.props.onSend}>
                           OK
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}