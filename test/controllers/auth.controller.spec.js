const assert = require('assert');
const authController = require('../../controllers/auth.controller');

describe('AuthController', function(){
    beforeEach(function settingUpRoles(){
        console.log('running before each');
        authController.setRoles(['user', 'another_user']);
    });
    /*
     * document your functions like the one commented-out below, for easier debugging
    */
    // beforeEach('this function is erroring', function erroringFunction(){
    //     throw ({error: 'error'});
    // });

    describe('isAuthorized', function(){
        it('should return false if not authorized', function(){
            assert.equal(false, authController.isAuthorized('admin'));
        });
        it('should return true if authorized', function(){
            authController.setRoles(['user', 'admin']);
            assert.equal(true, authController.isAuthorized('admin'));
        });

    });
    describe('isAuthorizedAsync', function(){
        it('should return false if not authorized', function(done){ // pass done, explanation below
            this.timeout(2500); // the timeout should be added to execute the test after timeout, 'this' reffers to mocha
            authController.isAuthorizedAsync('admin',
            function(isAuth) {
                assert.equal(false, isAuth);
                done(); // should be added to tell mocha, that's the callback is done,
                // without done, the test will be passed
            });
        });
    });

});
