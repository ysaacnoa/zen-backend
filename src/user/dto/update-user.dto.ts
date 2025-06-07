export interface UpdateUserDto {
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  bio?: string;
  location?: string;
  birthDate?: string;
  phoneNumber?: string;
  socialMediaLinks?: Record<string, string>;
}
