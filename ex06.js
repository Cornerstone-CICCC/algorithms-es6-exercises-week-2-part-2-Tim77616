// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

# Create an array of numbers
numbers = [4, 9, 15, 22, 3]

# Check if every number in the array is positive
all_positive = all(num > 0 for num in numbers)

# Output the result
if all_positive:
    print("All numbers are positive.")
else:
    print("Not all numbers are positive.")
