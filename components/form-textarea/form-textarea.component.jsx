import React from 'react';

import { GroupContainer, FormTextareaContainer, FormTextareLabel } from './form-textarea.styles';

import { FormattedMessage } from 'react-intl';

const FormTextarea = ({ handleChange, label, ...props }) => (
    <GroupContainer>
        <FormTextareaContainer onChange={handleChange} {...props} rows="2" cols="50"/>
        {
            label ?
            (<FormTextareLabel className={props.value.length ? 'shrink' : ""}>
                {
                    props.required ?
                    <span style={{color:'red'}}>*</span>
                    :
                    null
                }
                <FormattedMessage id={`contact.${props.name}`}/>
            </FormTextareLabel>)
            : null
        }
    </GroupContainer>
)

export default FormTextarea;