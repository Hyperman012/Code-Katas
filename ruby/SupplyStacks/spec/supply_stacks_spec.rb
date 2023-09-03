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
  it 'creates 1 Crate stacks of 1 length' do
    smaller_input = "[Z]
 1
"
    supply = SupplyStacks.new(smaller_input)
    expect(supply.stacks).to eq [%w[Z]]
  end

  it 'creates 3 Crate stacks of 1 length' do
    smaller_input = "[Z] [M] [P]
 1   2   3
"
    supply = SupplyStacks.new(smaller_input)
    expect(supply.stacks).to eq [%w[Z], %w[M], %w[P]]
  end

  it 'creates 3 Crate stacks of 2 length' do
    smaller_input = "[Z] [M] [P]
[X] [Y] [Z]
 1   2   3
"
    supply = SupplyStacks.new(smaller_input)
    expect(supply.stacks).to eq [%w[Z X], %w[M Y], %w[P Z]]
  end

  it 'creates 3 Crate stacks with one of length 2' do
    smaller_input = "[A]
[X] [Y] [Z]
 1   2   3
"
    supply = SupplyStacks.new(smaller_input)
    expect(supply.stacks).to eq [%w[A X], %w[Y], %w[Z]]
  end

  it 'creates 3 Crate stacks with one of length 2 in the middle' do
    smaller_input = "    [B]
[X] [Y] [Z]
 1   2   3
"
    supply = SupplyStacks.new(smaller_input)
    expect(supply.stacks).to eq [%w[X], %w[B Y], %w[Z]]
  end

  it 'creates 3 Crate stacks with one of length 2 at the end' do
    smaller_input = "        [B]
[X] [Y] [Z]
 1   2   3
"
    supply = SupplyStacks.new(smaller_input)
    expect(supply.stacks).to eq [%w[X], %w[Y], %w[B Z]]
  end

  it 'creates 4 Crate stacks' do
    smaller_input = "[X] [Y] [Z] [A]
 1   2   3   4
"
    supply = SupplyStacks.new(smaller_input)
    expect(supply.stacks).to eq [%w[X], %w[Y], %w[Z], %w[A]]
  end

  describe 'with instructions' do
    before do
      @smaller_input = "[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
"
      @supply = SupplyStacks.new(@smaller_input)
    end

    it 'creates 3 Crate stacks of 1 length' do
      expect(@supply.stacks).to eq [%w[Z], %w[M], %w[P]]
    end

    xit 'returns instructions' do
      expect(@supply.instructions).to eq(['move 1 from 2 to 1'])
    end
  end

end

