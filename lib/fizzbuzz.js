var FizzBuzz = function(max) {
  this.max = max;
  for (var i = 1; i <= max; i++) {
    console.log(this.replace(i));
  };
};

// object prototype
FizzBuzz.prototype.replace = function(num) {
  var str = [];
  var list = [{key:"Fizz", value:3},
              {key:"Buzz", value:5}
             ];

  list.map(function(obj){
    if ( num % obj.value == 0) { str += obj.key };
  });
  if (str.length == 0) { str = num };
  return str;
};

var FB = new FizzBuzz(1000);

module.exports = FizzBuzz;

// class Fixnum
//   def fizzbuzz(list = { Fizz: 3, Buzz: 5 })
//     str = list.map do |k, v|
//       k if modulo(v).zero?
//     end.join
//     str.empty? ? self : str
//   end
// end

// list = { Fizz: 3, Buzz: 5, Sivv: 7, Grrr: 13 }
// max = 50_000
// # puts((1..20).map(&:fizzbuzz).join(', '))
// puts((0..max).map { |n| n.fizzbuzz(list) }.join(', '))
// puts max, list
