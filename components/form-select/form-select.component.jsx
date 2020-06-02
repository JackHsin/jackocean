import React from 'react';

import { GroupContainer, FormSelectContainer, FormSelectOption } from './form-select.styles';

import { injectIntl } from "react-intl";

const FormSelect = ({ handleChange, list, intl: { formatMessage }, ...props }) => (
   
    <GroupContainer>
        <FormSelectContainer onChange={handleChange} {...props} >
        {
            list.map(item => (
                <FormSelectOption key={item} vlaue={item}>
                    {formatMessage({ id: `contact.select.${item}` })}
                </FormSelectOption>
            ))
        }
        </FormSelectContainer>
    </GroupContainer>
)

export default injectIntl(FormSelect);