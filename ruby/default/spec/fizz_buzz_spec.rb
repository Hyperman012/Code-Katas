require_relative '../default'
require 'rspec'

describe FizzBuzz do
  it 'returns 2' do
    default = FizzBuzz.new
    expect(default.process(2)).to eq 2
  end

end

