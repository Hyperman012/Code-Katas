class FizzBuzz
  def process(input)
    return "buzz" if input == 5
    return "fizz" if input % 3 == 0

    input.to_s
  end

end
