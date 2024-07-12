/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapui5-development-learning-journey-v1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
