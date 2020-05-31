import React, { useState } from 'react';
import axios from 'axios';

import { ContactContainerWrap, ContactContainer, ContactTitle, CloseButton} from '../styles/contact.styles';

import FormInput from '../components/form-input/form-input.component';
import FormTextarea from '../components/form-textarea/form-textarea.component';
import FormSelect from '../components/form-select/form-select.component';
import CustomButton from '../components/custom-button/custom-button.component';

// import { FormattedMessage, injectIntl } from 'react-intl';

const ContactPage = ({ setContactShow }) => {
    const initialContactState = { 
        name: '',
        email: '',
        phoneNumber: '',
        category: 'null',
        message: ''
    };
    const [ contactInfo, setContactData ] = useState(initialContactState);

    const { name, email, phoneNumber, category, message } = contactInfo;

    const handleSubmit = async event => {
        event.preventDefault();

        axios({
            method: "post", 
            url:"send", 
            data: {
                name: name,   
                email: email,
                phoneNumber: phoneNumber,
                category: category,
                message: message
            }
        }).then((response) => {
            if (response.data.status === 'success') {
                alert('success'); 
            } else if(response.data.status === 'fail') {
                alert('fail');
            }
            setContactData(initialContactState);
        })
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setContactData({ ...contactInfo, [name]: value });
    }

    return (
        <ContactContainerWrap>
            <ContactContainer>
                <CloseButton onClick={() => setContactShow(false)}>&#x2612;</CloseButton>
                <ContactTitle> Title </ContactTitle>
                <span> subtitle </span>
                <form id='contact-form' className='contact-form' onSubmit={handleSubmit} method="POST">
                    <FormInput
                        type='text' 
                        name='name'
                        value={name}
                        onChange={handleChange}
                        label='name'
                        required
                    />

                    <FormInput
                        type='email' 
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required
                    />

                    <FormInput
                        type='phone' 
                        name='phoneNumber'
                        value={phoneNumber}
                        onChange={handleChange}
                        label='Phone Number'
                        // required
                    />

                    <FormSelect
                        onChange={handleChange}
                        name='category'
                        list={['category', 'bike', 'hostel', 'activity', 'others']}
                    />

                    <FormTextarea
                        type='message' 
                        name='message'
                        value={message}
                        onChange={handleChange}
                        label='Message'
                        required
                    />

                    <CustomButton type='submit' style={{ backgroundColor:"LightBlue", width:'100%' }}>Submit</CustomButton>
                </form>
                
                
            </ContactContainer>
        </ContactContainerWrap>
    )
}

export default ContactPage;