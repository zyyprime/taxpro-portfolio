current_height=0
day=0
while current_height <=77:
    day+=1
    current_height+=7
   
    if current_height>=77:
        break
    else:        
        current_height-=5
        
print(day)
        
