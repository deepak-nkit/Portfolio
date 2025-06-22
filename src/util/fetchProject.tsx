const username = "deepak-nkit";
const token = import.meta.env.VITE_GITHUB_TOKEN;

export const fetchData = async () => {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status}`);
    }
    const respon = await res.json();
    console.log("Fetched repos: ", respon);
    return respon;
  } catch (error) {
    console.log("Error fetching repos: ", error);
    return [];
  }
};
