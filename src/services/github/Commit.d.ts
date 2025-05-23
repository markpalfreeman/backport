// Commit object selected from list or via commit sha
export interface CommitSelected {
  sha: string;
  message: string;
  pullNumber?: number;
}

// commit object displayed in list of prompt choices
export interface CommitChoice extends CommitSelected {
  existingBackports: {
    branch: string;
    state: 'OPEN' | 'CLOSED' | 'MERGED';
  }[];
}
