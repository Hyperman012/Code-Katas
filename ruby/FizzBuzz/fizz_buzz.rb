class FizzBuzz
  def process(input)
    return "fizzbuzz" if input % 5 == 0 && input % 3 == 0
    return "buzz" if input % 5 == 0
    return "fizz" if input % 3 == 0

    input.to_s
  end

end
