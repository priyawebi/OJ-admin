import { useRouter } from 'next/router'

import ShippingTerms from '../components/weblightboxes/shippingTerms'
import DestinationsAndCurrencies from '../components/weblightboxes/destinationsAndCurrencies'
import ReturnPolicies from '../components/weblightboxes/returnPolicies'
import RemstoneCare from '../components/weblightboxes/gemstoneCare'
import PrivacyPolicy from '../components/weblightboxes/privacyPolicy'

function WebLightboxes() {
    const router = useRouter()
    return (
        <>
            {(router.query?.page == "shipping-terms") && <ShippingTerms />}
            {(router.query?.page == "destinations-and-currencies") && <DestinationsAndCurrencies />}
            {(router.query?.page == "return-policies") && <ReturnPolicies />}
            {(router.query?.page == "gemstone-care") && <RemstoneCare />}
            {(router.query?.page == "privacy-policy") && <PrivacyPolicy />}
        </>
    )
}

export default WebLightboxes;