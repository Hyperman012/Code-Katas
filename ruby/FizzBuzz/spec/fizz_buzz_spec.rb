require_relative '../fizz_buzz'
require 'rspec'

describe FizzBuzz do
  fb = FizzBuzz.new
  [1, 2].each { |x|
    it "return '#{x}' for #{x}" do
      expect(fb.process(x)).to eq x.to_s
    end
  }
  [3, 6].each { |x|
    it "return 'fizz' for #{x}" do
      expect(fb.process(x)).to eq 'fizz'
    end
  }

  [5, 10].each { |number|
    it "return 'buzz' for #{number}" do
      expect(fb.process(number)).to eq 'buzz'
    end
  }

  [15, 30].each { |number|
    it "return \"fizzbuzz\" for #{number}" do
      expect(fb.process(number)).to eq 'fizzbuzz'
    end
  }
end
