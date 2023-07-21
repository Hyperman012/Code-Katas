require_relative '../default'
require 'rspec'

describe Default do
  it 'returns 2' do
    default = Default.new
    expect(default.process(2)).to eq 2
  end

end
