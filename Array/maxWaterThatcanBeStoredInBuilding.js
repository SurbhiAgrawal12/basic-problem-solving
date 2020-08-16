// Maximum water that can be stored between two buildings
// Given an integer array which represents the heights of N buildings, 
// the task is to delete N-2 buildings such that the water that can be trapped between the remaining two building is maximum. 
// Please note that the total water trapped between two buildings is gap between them (number of buildings removed) multiplied by height of the smaller building.


// Two pointer approach: Take two pointers i and j pointing to the first and the last building respectively and 
// calculate the water that can be stored between these two buildings. Now increment i if height[i] < height[j] else decrement j. 
// This is because the water that can be trapped is dependent on the height of the small building and moving from the greater height building 
// will just reduce the amount of water instead of maximizing it. 
// In the end, print the maximum amount of water calculated so far.