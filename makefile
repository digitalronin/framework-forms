build:
	./node_modules/webpack/bin/webpack.js

deploy:
	git push heroku master

setup:
	heroku create framework-forms
