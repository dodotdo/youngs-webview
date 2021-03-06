function tokenFactory($cookies) {
    var token = null;
    var memberId = null;

    return {
        setToken: function (newToken) {
            token = newToken;

            if (this.isTokenExists()) {
                $cookies.remove('token');
            }

            $cookies.put('token', token);
        },

        setMemberId: function (newMemberId) {
            memberId = newMemberId;

            if (this.isMemberIdExists()) {
                $cookies.remove('member_id');
            }

            $cookies.put('member_id', memberId);
        },

        getToken: function () {
            if (token === null && this.isTokenExists()) {
                this.setToken($cookies.get('token'));
            }
            return token;
        },

        getMemberId: function () {
            if (memberId === null && this.isMemberIdExists()) {
                this.setMemberId($cookies.get('member_id'));
            }
            return memberId;
        },

        removeCookies: function () {
            $cookies.remove('token');
            $cookies.remove('member_id');
        },

        isTokenExists: function () {
            return $cookies.get('token') !== undefined;
        },

        isMemberIdExists: function () {
            return $cookies.get('member_id') !== undefined;
        }
    };
}

tokenFactory.$inject = ['$cookies'];

module.exports = {
    name: 'tokenFactory',
    fn: tokenFactory
};
