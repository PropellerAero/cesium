/*global define*/
define(['../ThirdParty/when'],
    function(URI) {
    "use strict";

    /**
     * Function for joining URLs. Improves upon URI.resolve() by combining the query
     * strings from both base and appendage URLs. This is useful when the base URL is
     * presigned and needs a path appeneded to it.
     * @param {String} first The base URL.
     * @param {String} second The URL path to join to the base URL.
     * @private
     */
    var joinUrls = function (first, second) {

        if (!first instanceof URI) {
            first = URI(first);
        }

        if (!second instanceof URI) {
            second = URI(second);
        }

        if(first.query && second.query) {
            second.query += '&' + first.query;
        } else if (first.query) {
            second.query = first.query;
        }

        if(first.fragment && !second.query) {
            second.fragment = first.fragment;
        }

        return second.resolve(first).toString();
    };

    return joinUrls;
});
