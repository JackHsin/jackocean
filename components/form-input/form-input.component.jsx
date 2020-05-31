import React from 'react';

// import './form-input.styles.scss';
import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles';

import { FormattedMessage } from 'react-intl';

const FormInput = ({ handleChange, label, ...props }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...props} />
        {
            label ?
            (<FormInputLabel className={props.value.length ? 'shrink' : ""}>
                {
                    props.required ?
                    <span style={{color:'red'}}>*</span>
                    :
                    null
                }
                <FormattedMessage id={`contact.${props.name}`}/>
            </FormInputLabel>)
            : null
        }
    </GroupContainer>
)

export default FormInput;