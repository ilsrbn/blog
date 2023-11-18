import { HOST_URL } from '../pocket-base.service';

export const makeFileUrl = (
  collectionId: string,
  entityId: string,
  fileName: string,
) => {
  return HOST_URL + `/api/files/${collectionId}/${entityId}/${fileName}`;
};
