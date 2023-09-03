class SupplyStacks

  def initialize(input)
    @input = input;
  end

  def stacks
    lines = crate_lines
    stacks = create_empty_stacks

    lines.each do |line|
      strip_crate_line(line).each_with_index { |crate, index |
        stacks[index].push crate unless crate.nil? || crate == " "
      }
    end
    stacks
  end

  private

  def create_empty_stacks
    last_row = @input.split("\n").pop
    last_row.split(" ").map { |i|
      []
    }
  end

  def crate_lines
    split_lines = @input.split("\n")
    split_lines.slice(0, split_lines.length-1)
  end

  def strip_crate_line(row)
    last_row = @input.split("\n").pop
    number_of_lines = last_row.split(" ").length
    crate_line = []
    (0..number_of_lines - 1).each { |a|
      crate_line.push row[a * 4 + 1]
    }
    crate_line
  end

end
