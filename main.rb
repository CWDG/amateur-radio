require 'sinatra'
require 'slim'

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
