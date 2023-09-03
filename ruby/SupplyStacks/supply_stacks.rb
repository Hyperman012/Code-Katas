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
    line_of_number_of_stacks.map { |i|
      []
    }
  end

  def line_of_number_of_stacks
    @input.split("\n").each do |line|
      if line.include? " 1"
        return line.split(" ")
      end
    end
  end

  def crate_lines
    split_lines = @input.split("\n")
    index = 0

    @input.split("\n").each_with_index do |line, index2|
      if line.include? " 1"
        index = index2
        break
      end
    end

    split_lines.slice(0, index)
  end

  def strip_crate_line(row)
    crate_line = []
    (0..number_of_stacks - 1).each { |a|
      crate_line.push row[a * 4 + 1]
    }
    crate_line
  end

  def number_of_stacks
    line_of_number_of_stacks.length
  end

end
