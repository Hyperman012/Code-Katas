class SupplyStacks

  def initialize(input)
    @input = input;
  end

  def stacks
    lines = @input.split("\n")
    first_row = lines[0]
    foo = first_row.delete("[").delete("]")

    pants = foo.split(" ")
    pants.map { |crate| [crate]  }
  end

end
