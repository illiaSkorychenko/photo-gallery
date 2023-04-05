import { ResolutionEnum } from 'src/repos/image-repo/types/resolution.enum';

export interface CreateImageRepoInterface {
  userId: string;
  name: string;
  resolution: ResolutionEnum;
  format: string;
  duplicateNameId: number;
  description?: string;
  parentId?: string;
}
