
var exec = require('cordova/exec');

window.PromptToOpenWith = function(path, uti, success, fail) {
	exec(success, fail, "PromptToOpenWith", "openWith", [path, uti]);
}
