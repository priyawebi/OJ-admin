import { useRouter } from 'next/router'
import HomePage from '../components/webinfopages/homePage'
import OnlyJewels from '../components/webinfopages/onlyJewels'
import TheTeam from '../components/webinfopages/theTeam'
import News from '../components/webinfopages/news'
import ExlusiveSelections from '../components/webinfopages/exlusiveSelections'
import ShowroomsAndEditions from '../components/webinfopages/showroomsAndEditions'
import SpecialRequests from '../components/webinfopages/specialRequests'
import RegisteredCompanyDetails from '../components/webinfopages/registeredCompanyDetails'
import PrivacyAndDataSecurity from '../components/webinfopages/privacyAndDataSecurity'
import TermsOfUse from '../components/webinfopages/termsOfUse'
import VisitUs from '../components/webinfopages/visitUs'

function WebInfoPages() {
    const router = useRouter()
    return (
        <>
            {(router.query?.page == "home-page") && <HomePage />}
            {(router.query?.page == "only-jewels") && <OnlyJewels />}
            {(router.query?.page == "the-team") && <TheTeam />}
            {(router.query?.page == "news") && <News />}
            {(router.query?.page == "exlusive-selections") && <ExlusiveSelections />} 
            {(router.query?.page == "showrooms-and-editions") && <ShowroomsAndEditions />} 
            {(router.query?.page == "special-requests") && <SpecialRequests />} 
            {(router.query?.page == "registered-company-details") && <RegisteredCompanyDetails />} 
            {(router.query?.page == "privacy-and-data-security") && <PrivacyAndDataSecurity />} 
            {(router.query?.page == "terms-of-use") && <TermsOfUse />} 
            {(router.query?.page == "visit-us") && <VisitUs />} 

        </>
    )
}

export default WebInfoPages;