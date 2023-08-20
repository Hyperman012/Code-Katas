require_relative '../supply_stacks'
require 'rspec'


test_input = "
    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
"

describe SupplyStacks do
  it 'creates 3 Crate stacks' do
    smaller_input = "[Z] [M] [P]
 1   2   3
"
    supply = SupplyStacks.new(smaller_input)
    expect(supply.stacks).to eq [%w[Z], %w[M], %w[P]]
  end

  xit 'creates first CrateStack' do
    supply = SupplyStacks.new(test_input)
    expect(supply.stacks).to include %w[Z N]
  end

  xit 'creates a second CrateStack' do
    supply = SupplyStacks.new( test_input)
    expect(supply.stacks).to include %w[M C D]
  end
end

