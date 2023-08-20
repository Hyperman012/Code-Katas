class SupplyStacks

  def initialize(input)
    @input = input;
  end

  def stacks
    lines = @input.split("\n")
    first_row = lines[0]

    first_crate_line = strip_crate_line(first_row)

    first_crate_line.map { |crate| [crate]  }
  end

  private

  def strip_crate_line(row)
    row.delete("[").delete("]").split(" ")
  end

end
