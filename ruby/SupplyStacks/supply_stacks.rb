class SupplyStacks

  def initialize(input)
    @input = input;
  end

  def stacks
    lines = crate_lines

    first_row = lines[0]

    first_crate_line = strip_crate_line(first_row)

    first_crate_line.map { |crate| [crate]  }
  end

  private

  def crate_lines
    split_lines = @input.split("\n")
    split_lines.slice(0..split_lines.length-1)
  end

  def strip_crate_line(row)
    row.delete("[").delete("]").split(" ")
  end

end
