it("should contain the custom progres messages", function() {
	var data = require(__dirname + "/data");
	expect(data).toContain("optimizing");
	expect(data).toContain("optimizing|CustomPlugin");
	expect(data).toContain("optimizing|CustomPlugin|custom category|custom message");
});
