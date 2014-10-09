require 'sinatra'
require 'slim'

class App < Sinatra::Base
	register Sinatra::AssetPack
	assets do
		serve '/js', from: 'js'
		serve '/bower_components', from: 'bower_components'

		js :modernizr, [
			'/bower_components/modernizr/modernizr.js',
		]

		js :libs, [
			'/bower_components/jquery/dist/jquery.js',
			'/bower_components/foundation/js/foundation.js'
		]

		js :application, [
			'/js/app.js'
		]

		js_compression :jsmin
	end

	# Explicitly set the public directory
	set :public_folder, File.dirname(__FILE__) + '/public'

	# Set up assets
	before do
		cache_control :public, :must_revalidate, :max_age => 60
	end

	get '/' do
		slim :index
	end

	# Handle page not found requests nicely.
	not_found do
		status 404
		slim :oops
	end
end
