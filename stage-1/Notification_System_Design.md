# Notification Priority System

## Priority Logic

Notifications are prioritised based on:

Placement > Result > Event

Weights:
- Placement = 3
- Result = 2
- Event = 1

If priorities are equal, latest notifications are shown first.

## Approach

1. Store notifications
2. Assign weights
3. Sort by:
   - priority
   - timestamp
4. Return top 10 notifications

## Time Complexity

O(n log n)

## Future Improvement

Priority Queue / Heap can be used for real-time notification systems.