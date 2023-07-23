require_relative '../fizz_buzz'
require 'rspec'

describe FizzBuzz do
  it 'is applesauce' do
    fb = FizzBuzz.new
    expect(fb.process(1)).to eq 1
  end

end
