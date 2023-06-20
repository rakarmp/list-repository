import React, { useEffect, useState } from 'react';

function App() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReposData = () => {
    fetch('https://api.github.com/users/rakarmp/repos')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setRepos(data);
        setIsLoading(false);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchReposData();
  }, []);

  return (
    <>
      <main>
        <header>
          <h1>List Repository </h1>
        </header>
        <section>
          <p>
          list of github repositories and all my projects or training so far
          </p>

          <input readOnly id="toggle-pseudos" type="checkbox" />
          <label htmlFor="toggle-pseudos"><a href='https://github.com/rakarmp'>Rakarmp(⌐■_■)</a></label>

          <input id="highlight-pseudos" type="checkbox" />
          <label htmlFor="highlight-pseudos"><a href='https://github.com/rakarmp?tab=repositories'>List Repository(◉_◉)</a></label>

          <div className="container">
          {isLoading ? (
                <p>Memuat List Repository...</p> // Tampilkan pesan loading saat isLoading true
              ) : (
                <div>
          {repos.map(repo => (
            <section key={repo.id}>
              <a href={repo.html_url}><h2>{repo.full_name}</h2></a>
              <div>
              {repo.description ? (
                          <p>{repo.description}</p>
                        ) : (
                          <p>Description not set</p>
                        )}
              </div>
            </section>
            ))}
            </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
