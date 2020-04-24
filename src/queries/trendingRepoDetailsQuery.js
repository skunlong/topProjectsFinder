import gql from 'graphql-tag'
export const TRENDING_REPO_DETAILS_QUERY = gql`
query SearchMostTop10Star($queryString: String!) {
  search(query: $queryString, type: REPOSITORY, first: 10) {
    edges {
      node {
        ... on Repository {
          owner {
            avatarUrl
            url
          }
          url
          name
          description
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
          watchers {
            totalCount
          }
          defaultBranchRef {
            target {
              ... on Commit {
                history(first:4) {
                  totalCount
                  edges {
                    node {
                      ... on Commit {
                        committedDate
                        messageHeadline
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`
