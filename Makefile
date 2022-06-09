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
	npx htmlhint *.html ./src/pages/*.html
	npx stylelint ./src/styles/*.css ./src/styles/pages_styles/*.css

sync:
	npx browser-sync start -s  --files 'src/pages/*.html'

.PHONY: test
