// Find Exercise
// Instructions: Create an array of at least five numbers. Write code to find the first element that is greater than 10.

# Creating an array with five numbers
array = [5, 8, 12, 3, 20]

# Finding the first element greater than 10
first_greater_than_10 = next((x for x in array if x > 10), None)

# Output the result
print(first_greater_than_10)
