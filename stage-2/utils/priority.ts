const priorityWeight = {
  Placement: 3,
  Result: 2,
  Event: 1,
} as const;

type NotificationType = keyof typeof priorityWeight;

export type CampusNotification = {
  id: number;
  type: NotificationType;
  message: string;
  timestamp: string;
};

export const sortNotifications = (
  notifications: CampusNotification[]
) => {
  return [...notifications].sort((a, b) => {
    const weightA = priorityWeight[a.type];
    const weightB = priorityWeight[b.type];

    if (weightA !== weightB) {
      return weightB - weightA;
    }

    return (
      new Date(b.timestamp).getTime() -
      new Date(a.timestamp).getTime()
    );
  });
};
