import React from 'react';
import PropTypes from 'prop-types';
import  {Form, Button, Modal} from 'react-bootstrap';

import orderModel from '~s/order.js';
import {routesMap} from '~/routes/routes.js';
import {Link} from 'react-router-dom';

import {observer} from 'mobx-react';
@observer class Order extends React.Component{

    state = {
        showModal: false
    }

    show = () =>{
        this.setState({showModal: true});
    }

    hide = () =>{
        this.setState({showModal: false});
        this.props.history.push(routesMap.order);
    }

    confirm = () =>{
        this.hide();
        this.props.history.push(routesMap.result);
    }
    render(){
        let formFields = [];

        for(let name in orderModel.formData){
            let field = orderModel.formData[name];

            formFields.push(
                <Form.Group key={name} controlId={"order-form-"+field.label}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control type="text"
                                  value = {field.value}
                                  onChange = {(e) => orderModel.change(name, e.target.value)} />
                    {field.valid === null || field.valid ? '' : 
                        <Form.Text className="text-muted">
                            {field.errorText}
                        </Form.Text>
                    }
                    
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
                    <Link to={routesMap.home} className = "btn btn-primary">
                        On Back
                    </Link>
                    <Button variant="link" 
                            onClick = {this.show}
                            disabled = {!orderModel.formValid} >
                            
                        On Send
                    </Button>
                </div>
                <Modal show={this.state.showModal} backdrop="static" 
                       onHide = {this.hide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Потвердить заказ {orderModel.formData['name'].value}    ?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" 
                                onClick={this.hide}>
                            Close
                        </Button>
                        <Button variant="primary"
                                onClick = {this.confirm}>
                           OK
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Order;