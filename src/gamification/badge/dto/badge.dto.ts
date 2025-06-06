export interface Badge {
  id: string;
  name: string;
  description: string;
  xpRequired: number;
  createdAt: Date;
  imagePath: string;
  isActive: boolean;
}

export interface BadgeEarned {
  id: string;
  userId: string;
  badgeId: string;
  earnedAt: Date;
  badge: Badge;
}

export interface SupabaseMutationResponse {
  error: { message: string } | null;
}
