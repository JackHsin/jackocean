import React from 'react';

import { GroupContainer, FormSelectContainer, FormSelectOption } from './form-select.styles';

// import { injectIntl } from "react-intl";

const FormSelect = ({ handleChange, list, ...props }) => (
   
    <GroupContainer>
        <FormSelectContainer onChange={handleChange} {...props} >
        {
            list.map(item => (
                <FormSelectOption key={item} vlaue={item}>
                    {item}
                </FormSelectOption>
            ))
        }
        </FormSelectContainer>
    </GroupContainer>
)

export default FormSelect;