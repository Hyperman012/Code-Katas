require_relative '../fizz_buzz'
require 'rspec'

describe FizzBuzz do
  fb = FizzBuzz.new
  
  it 'return "1" for 1'  do
    expect(fb.process(1)).to eq '1'
  end

  it 'return "2" for 2'  do
    expect(fb.process(2)).to eq '2'
  end

  it 'return "fizz" for 3' do
    expect(fb.process(3)).to eq 'fizz'
  end

  it 'return "fizz" for 6' do
    expect(fb.process(6)).to eq 'fizz'
  end

  it 'return "buzz" for 5' do
    expect(fb.process(5)).to eq 'buzz'
  end

  it 'return "buzz" for 10' do
    expect(fb.process(10)).to eq 'buzz'
    end

  it 'return "fizzbuzz" for 15' do
    expect(fb.process(15)).to eq 'fizzbuzz'
    end

  it 'return "fizzbuzz" for 30' do
    expect(fb.process(30)).to eq 'fizzbuzz'
  end

end
