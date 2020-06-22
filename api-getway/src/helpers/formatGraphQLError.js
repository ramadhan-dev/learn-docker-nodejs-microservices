import _ from "lodash";


const formatGraphQLErrors = (error) => {
    const errorDetail = _.get(error, "message");
    try {
        if (errorDetail) {
            return errorDetail;
        }
    } catch (error) {
        return null;
    }
}

export default formatGraphQLErrors;