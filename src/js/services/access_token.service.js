function accessTokenFactory($q, $location, tokenFactory) {
    return {
        getTokenFromHash: function () {
            var tokenFormHash = $location.search().token;
            var memberIdFromHash = $location.search().member_id;

            alert(tokenFormHash);
            alert(memberIdFromHash);

            alert(tokenFactory.isTokenExists() && tokenFactory.isMemberIdExists());

            if (tokenFormHash !== undefined && memberIdFromHash !== undefined) {
                tokenFactory.setToken(tokenFormHash);
                tokenFactory.setMemberId(memberIdFromHash);

                $location.search('token', null);
                $location.search('member_id', null);

                return 'OK';
            }

            if (tokenFactory.isTokenExists() && tokenFactory.isMemberIdExists()) {
                return 'OK';
            }

            return $q.reject('NO_TOKEN');
        }
    };
}

accessTokenFactory.$inject = ['$q', '$location', 'tokenFactory'];

module.exports = {
    name: 'accessTokenFactory',
    fn: accessTokenFactory
};
