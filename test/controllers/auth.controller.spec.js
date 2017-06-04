const assert = require('assert');
const authController = require('../../controllers/auth.controller');

describe('AuthController', function(){
    describe('isAuthorized', function(){
        it('should return false if not authorized', function(){
            assert.equal(false, authController.isAuthorized(['user', 'another_user'], 'admin'));
        });
        it('should return true if authorized', function(){
            assert.equal(true, authController.isAuthorized(['user', 'admin'], 'admin'));
        });

    });
    describe('isAuthorizedAsync', function(){
        it('should return false if not authorized', function(done){ // pass done, explanation below
            authController.isAuthorizedAsync(['user', 'another_user'], 'admin',
            function(isAuth) {
                assert.equal(true, isAuth); // should be true to pass
                done(); // should be added to tell mocha, that's the callback is done,
                // without done, the test will be passed
            });
        });
        it('should return true if authorized', function(){
            authController.isAuthorizedAsync(['user', 'admin'], 'admin',
            function(isAuth) {
                assert.equal(true,isAuth);
            });
        });

    });

});
