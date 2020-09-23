class EmailRequestAnalyzer {
    constructor () {}

    init = ({campainId, }) => {
        this.campainId = campainId;
        this.requestMap = {} // Should be saved in db instead of in a hash map
    }

    getCampaignSnippet = () => {
        return (
            '<div><img src="http://localhost:8082/gotmail/campaignId/ido" /></div>'
        )
    }

    addRequest = (req, {campaignId, requestName} = {}) => {
        console.log(`${campaignId} ${requestName}`);
    }
}

module.exports = new EmailRequestAnalyzer();