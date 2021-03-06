#!/usr/bin/env python3


def abbr(word):
    if len(word) <= 10:
        return word
    return word[0] + str(len(word) - 2) + word[-1]


amount = int(input())


for i in range(0, amount):
    print(abbr(input()))
