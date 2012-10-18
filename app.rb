require 'sinatra'

def calc(n)
    @numeros = []
    n.to_i.times do
        @numeros << Array(1..60).sample(6).sort
    end
    return @numeros
end

get '/' do
    erb :index, {:layout => :layout}
end

post '/sorte' do
    @numero = calc(params[:number])
    erb :show
end

get '/sorte' do
        erb :show, {:layout => :layout}
end



