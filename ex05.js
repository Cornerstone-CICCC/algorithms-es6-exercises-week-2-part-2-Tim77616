// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

# Creating an array with at least five numbers
numbers = [3, 7, 12, 19, 8]

# Checking if some of the numbers are even
even_numbers = [num for num in numbers if num % 2 == 0]

# Output the result
if even_numbers:
    print(f"Even numbers found: {even_numbers}")
else:
    print("No even numbers found.")
