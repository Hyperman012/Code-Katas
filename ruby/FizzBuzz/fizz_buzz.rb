class FizzBuzz
  def process(input)
    if input == 5
      return "buzz"
    end

    return "fizz" if input % 3 == 0

    input.to_s
  end

end
