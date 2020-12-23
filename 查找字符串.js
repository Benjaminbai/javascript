//1. indexOf()
    // str.indexOf(s) != -1 // true
    // indexOf() 方法可返回某个指定的字符串值在字符串中<首次>出现的位置。如果要检索的字符串值没有出现，则该方法返回 -1

    //2. search()
    // str.search(s) != -1 // true
    // search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。如果没有找到任何匹配的子串，则返回 -1

    // 3. test()
    // /s/.test(str) // true | false
    // test() 方法用于检索字符串中指定的值。返回 true 或 false
    // exec() 方法用于检索字符串中的正则表达式的匹配。返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null

    // 4. includes()
    // str.includes(s) // true | false