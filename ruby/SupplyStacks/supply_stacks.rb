class SupplyStacks

  def initialize(input)
    @input = input;
  end

  def stacks
    lines = crate_lines
    last_row = @input.split("\n").pop
    lastLineList = last_row.split(" ")
    stacks = []
    for i in lastLineList
      stacks.push([])
    end

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
