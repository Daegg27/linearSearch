array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    for i in range(0, len(array_to_search_through)):
        if array_to_search_through[i] == value_to_find:
            return array_to_search_through[i]
    return None
print(linear_search(4, [1, 3, 4]))