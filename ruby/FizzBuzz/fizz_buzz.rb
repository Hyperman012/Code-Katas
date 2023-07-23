class Integer
  def is_divisible_by(integer)
    self % integer == 0
  end

end

class FizzBuzz
  def process(input)
    return "fizzbuzz" if input.is_divisible_by(15)
    return "buzz" if input.is_divisible_by(5)
    return "fizz" if input.is_divisible_by(3)
    input.to_s
  end
end
