require_relative '../supply_stacks'
require 'rspec'

describe SupplyStacks do
  it 'returns 2' do
    default = SupplyStacks.new
    expect(default.process(2)).to eq 2
  end

end

