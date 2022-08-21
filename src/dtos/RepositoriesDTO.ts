interface Repository {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

export interface Edges {
  node: Repository;
}

export interface RepositoriesDTO {
  viewer: {
    repositories: {
      edges: Edges[];
    };
  };
}

export interface RepositoriesVars {
  first: number;
}
