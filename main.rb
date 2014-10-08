require 'sinatra'

# Set haml to compile to html5
set :haml, :format => :html5

# Explicitly set the public directory
set :public_folder, File.dirname(__FILE__) + '/public'

# Set up assets
before do
  cache_control :public, :must_revalidate, :max_age => 60
end

get '/' do
  haml :index
end

# Handle page not found requests nicely.
not_found do
	status 404
	haml :oops
end
