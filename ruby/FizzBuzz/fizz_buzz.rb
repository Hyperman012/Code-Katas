class Integer
  def isDivisibleBy(integer)
    self % integer == 0
  end

end

class FizzBuzz
  def process(input)
    return "fizzbuzz" if input.isDivisibleBy(15)
    return "buzz" if input.isDivisibleBy(5)
    return "fizz" if input.isDivisibleBy(3)
    input.to_s
  end
end
