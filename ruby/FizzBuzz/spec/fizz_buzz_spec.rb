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

  it 'return "fizz" for 3' do
    fb = FizzBuzz.new
    expect(fb.process(3)).to eq 'fizz'
  end

  it 'return "fizz" for 6' do
    fb = FizzBuzz.new
    expect(fb.process(6)).to eq 'fizz'
  end
  it 'return "buzz" for 5' do
    fb = FizzBuzz.new
    expect(fb.process(5)).to eq 'buzz'
  end

end
