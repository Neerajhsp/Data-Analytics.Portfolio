import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TbBrandGithub, TbUsers, TbGitFork, TbStar, TbSourceCode } from 'react-icons/tb';
import { profile } from '../../data/socials';
import { SectionHeading } from '../ui/SectionHeading';
import { Spinner } from '../ui/Loader';

interface GitHubUser {
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  html_url: string;
  bio: string | null;
}

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export function GitHubStats() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${profile.githubUsername}`),
          fetch(`https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=6`),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error');
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        if (!cancelled) {
          setUser(userData);
          setRepos(Array.isArray(reposData) ? reposData : []);
          setStatus('ready');
        }
      } catch {
        if (!cancelled) setStatus('error');
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const stats = [
    { label: 'Followers', value: user?.followers, icon: TbUsers },
    { label: 'Following', value: user?.following, icon: TbUsers },
    { label: 'Repositories', value: user?.public_repos, icon: TbSourceCode },
  ];

  return (
    <section id="github" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="GitHub" title="Live from GitHub" subtitle={`@${profile.githubUsername} — repositories update automatically.`} />

        {status === 'loading' && (
          <div className="flex justify-center py-10">
            <Spinner className="h-6 w-6" />
          </div>
        )}

        {status === 'error' && (
          <div className="glass mx-auto max-w-md rounded-2xl p-6 text-center text-sm text-white/50">
            GitHub stats are temporarily unavailable. Visit the profile directly instead.
            <div className="mt-4">
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[var(--color-accent)]">
                <TbBrandGithub className="h-4 w-4" /> github.com/{profile.githubUsername}
              </a>
            </div>
          </div>
        )}

        {status === 'ready' && (
          <>
            <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass flex items-center gap-4 rounded-2xl p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-white">{s.value ?? '—'}</div>
                    <div className="text-xs text-white/40">{s.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="glass block rounded-2xl p-5"
                >
                  <div className="mb-2 flex items-center gap-2 text-white/85">
                    <TbSourceCode className="h-4 w-4 text-[var(--color-accent)]" />
                    <h3 className="truncate font-display text-sm font-semibold">{repo.name}</h3>
                  </div>
                  <p className="line-clamp-2 min-h-[2.5rem] text-xs text-white/45">{repo.description ?? 'No description provided.'}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-white/40">
                    {repo.language && <span>{repo.language}</span>}
                    <span className="inline-flex items-center gap-1"><TbStar className="h-3.5 w-3.5" /> {repo.stargazers_count}</span>
                    <span className="inline-flex items-center gap-1"><TbGitFork className="h-3.5 w-3.5" /> {repo.forks_count}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
