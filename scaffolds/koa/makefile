
TESTS = test/*.test.js
TIMEOUT = 100000

test:
	NODE_ENV=test ./node_modules/.bin/mocha --harmony --require co-mocha --timeout $(TIMEOUT) $(TESTS)

start:
	NODE_ENV=local pm2 start app.js --node-args='--harmony' --name koa --watch --ignore-watch ./views/partials/footer.html

deploy:
	NODE_ENV=production pm2 start app.js --node-args='--harmony' --name koa

.PHONY: test
