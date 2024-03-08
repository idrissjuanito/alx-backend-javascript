"""
contains function for pascal triangle
"""


def pascal_triangle(n):
    """
    draw pascal's triangle using nested lists
    """
    triangle = list()
    prev = list()
    for i in range(n):
        inner = [1 if k == 0 or i == 1 or k == len(prev)
                 else prev[k-1] + prev[k] for k in range(i+1)]
        triangle.append(inner)
        prev = inner
    return triangle
