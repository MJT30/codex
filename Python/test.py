# Question 1: Given the following Dictionary:
test_dict = {'link1': {'peer': '192.168.1.10', 'local': '10.0.0.10', 'interface': '2068'},
             'link2': {'peer': '192.168.1.11', 'local': '10.0.0.11', 'interface': '2067'},
             'link3': {'peer': '192.168.1.12', 'local': '10.0.0.12', 'interface': '1403'},
             'link4': {'peer': '192.168.1.14', 'local': '10.0.0.17', 'interface': '1065'},
             'link5': {'peer': '192.168.1.15', 'local': '10.0.0.14', 'interface': '3029'},
             'link6': {'peer': '192.168.1.13', 'local': '10.0.0.19', 'interface': '2206'},
             'link7': {'peer': '192.168.1.18', 'local': '10.0.0.21', 'interface': '2173'},
             'link8': {'peer': '192.168.1.9', 'local': '10.0.0.25', 'interface': '1948'},
             'link9': {'peer': '192.168.1.19', 'local': '10.0.0.13', 'interface': '1429'},
             'link10': {'peer': '192.168.1.20', 'local': '10.0.0.9', 'interface': '1834'}
             }


# 1a. Print only the peer associated with interface '2067'
print(test_dict['link1']['peer'])

# 1b. Make a list of just the "interface" ID's
for value in test_dict.values():
    print(value['interface'])


# 1c. Sort the resulting list in-place, in *descending* (higher value to lower) order
