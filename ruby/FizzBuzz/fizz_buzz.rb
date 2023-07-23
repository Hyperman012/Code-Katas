class FizzBuzz
  def process(input)
    return "buzz" if input % 5 == 0
    return "fizz" if input % 3 == 0

    input.to_s
  end

end
