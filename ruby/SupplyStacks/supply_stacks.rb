class SupplyStacks

  def initialize(input)
    @lines = input.split("\n")
  end

  def stacks
    lines = crate_lines
    stacks = create_empty_stacks

    lines.each do |line|
      strip_crate_line(line).each_with_index { |crate, index|
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
    @lines[index_of_stack_count].split(" ")
  end

  def number_of_stacks
    line_of_number_of_stacks.length
  end

  def crate_lines
    @lines.slice(0, index_of_stack_count)
  end

  def index_of_stack_count
    @lines.each_with_index do |line, index|
      return index if line.include? " 1"
    end
  end

  def strip_crate_line(row)
    crate_line = []
    (0..number_of_stacks - 1).each { |a|
      crate_line.push row[a * 4 + 1]
    }
    crate_line
  end

end
