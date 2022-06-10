develop:
	npx webpack serve

install:
	npm install

build:
	rm -rf dist
	NODE_ENV=production npx webpack

test:
	npm test

lint:
	npx eslint .

lint_css: 
	npx htmlhint *.html 
	npx stylelint ./src/*.css 

sync:
	npx browser-sync start -s   --files '*.html, src/*.css'

.PHONY: test
