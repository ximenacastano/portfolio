function sendStatement(verb, verbId, object, objectId) {
	const player = GetPlayer();
	const uNamejs = player.GetVar("uName");
	const uEmailjs = player.GetVar("uEmail");
	const conf = {
		"endpoint": "https://dementia.lrs.io/xapi/",
		"auth": "Basic " + toBase64("sozime:jiusam")
	};
	ADL.XAPIWrapper.changeConfig(conf);
	const statement = {
		"actor": {
			"name": uNamejs,
			"mbox": "mailto:" + uEmailjs
		},
		"verb": {
			"id": verbId,
			"display": { "en-US": verb }
		},
		"object": {
			"id": objectId,
			"definition": {
				"name": {"en-US": object}
			}
		}
	};
	const result = ADL.XAPIWrapper.sendStatement(statement);
}