//var utils  = require('course-utilities');
//var hello = utils.load('./hello.js', 'hello');
const sayHelloWorld = require('./hello');


describe('sayHi', () => {

	// Test 1
	it('expecting:', () => {
		expect(sayHelloWorld()).toContain('Hello World!');
	});
});
