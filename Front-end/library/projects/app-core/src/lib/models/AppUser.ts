import { Role } from './Role';
import { UserProfile } from './UserProfile';

export interface AppUser {
  userInformation: UserProfile;
  roles: Role[];
  permissions: string[];
}
