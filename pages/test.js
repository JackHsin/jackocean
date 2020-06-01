import { FormattedMessage, injectIntl, formatMessage } from 'react-intl';

function Test( { intl: { formatMessage } } ) {
    return (
        <>
            <div>
                <p>FormattedMessage: <FormattedMessage id="site.fullname"/></p>
                <p>formatMessage: {formatMessage({ id: `site.fullname` })}</p>
            </div>
        </>
    )
}

export default injectIntl(Test);