require_relative '../fizz_buzz'
require 'rspec'

describe Default do
  it 'returns string 1 for 1' do
    fb= Default.new
    expect(fb.process(1)).to eq '1'
  end

  it 'returns string 2 for 2' do
    fb= Default.new
    expect(fb.process(2)).to eq '2'
  end

  it 'returns fizz for 3' do
    fb= Default.new
    expect(fb.process(3)).to eq 'fizz'
  end
end
