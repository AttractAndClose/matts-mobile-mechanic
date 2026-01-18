# Commit and Push to GitHub

Commit all changes and push to the remote repository.

## Steps

1. Run `git status` to see what files have changed
2. Run `git diff` to review the actual changes (staged and unstaged)
3. Run `git log --oneline -5` to see recent commit message style
4. Stage all changes with `git add -A`
5. Create a commit with a descriptive message summarizing the changes
6. Push to origin: `git push origin main`

## Commit Message Guidelines

- Use present tense ("Add feature" not "Added feature")
- First line should be concise (50 chars or less)
- If more detail needed, add blank line then bullet points
- End commit message with: `Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>`

## Remote Repository

Origin: https://github.com/AttractAndClose/matts-mobile-mechanic.git

If the remote isn't set up, run:
```bash
git remote add origin https://github.com/AttractAndClose/matts-mobile-mechanic.git
```

## Optional Argument

If a commit message is provided as $ARGUMENTS, use that as the commit message. Otherwise, analyze the changes and write an appropriate message.
