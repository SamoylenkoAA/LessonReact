import {makeObservable, observable, computed, action} from 'mobx';
import { object } from 'prop-types';

export default class {
    constructor(rootStore){
        this.rootStore = rootStore;
        makeObservable(this, {
            formData: observable,
            formValid: computed
        })
    }

    formData = {
        name: {
            label: 'Name',
            value: '',
            validator: val => /^[aA-Za-zА-Яа-яЁё ]{2,}$/.test(val),
            errorText: 'Имя должно быть более 2-ух символов',
            valid: null
        },
        email: {
            label: 'Email',
            value: '',
            validator: val => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val),
            errorText: 'Введите корректно email',
            valid: null
        },
        phone: {
            label: 'Phone',
            value: '',
            validator: val => /^[0-9]{9,15}/.test(val),
            errorText: 'Введите корректно телефон',
            valid: null
        }
    }

    get formValid(){
        return Object.values(this.formData).every(elem => elem.valid);
    }

    change(key, value){
        let field = this.formData[key];
        field.value = value;
        field.valid = field.validator(value);
    }
}

// export default new Order();