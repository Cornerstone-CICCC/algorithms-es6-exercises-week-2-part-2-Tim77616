// IndexOf Exercise
// Instructions: Create an array of at least five different fruits as strings. Write code to find the index of the fruit "banana".

# Create an array of fruits
fruits = ["apple", "orange", "banana", "grape", "kiwi"]

# Find the index of the fruit "banana"
try:
    index_of_banana = fruits.index("banana")
    print(f"The index of 'banana' is: {index_of_banana}")
except ValueError:
    print("The fruit 'banana' is not in the list.")
