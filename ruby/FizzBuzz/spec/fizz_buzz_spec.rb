require_relative '../fizz_buzz'
require 'rspec'

describe FizzBuzz do
  it 'return "1" for 1'  do
    fb = FizzBuzz.new
    expect(fb.process(1)).to eq '1'
  end

  it 'return "2" for 2'  do
    fb = FizzBuzz.new
    expect(fb.process(2)).to eq '2'
  end

end
