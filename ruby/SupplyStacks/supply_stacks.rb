class SupplyStacks

  def initialize(input)
    @input = input;
  end

  def stacks
    lines = crate_lines
    stacks = [[], [], []]
    lines.each do |line|
      strip_crate_line(line).each_with_index { |crate, index |
        stacks[index].push crate
      }

    end
    stacks
  end

  private

  def crate_lines
    split_lines = @input.split("\n")
    split_lines.slice(0, split_lines.length-1)
  end

  def strip_crate_line(row)
    row.delete("[").delete("]").split(" ")
  end

end
