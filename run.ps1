$branch = git rev-parse --abbrev-ref HEAD

if ($branch -eq "working") {
    git add *
    git commit -m "auto commit"
    git push -u origin working
    git diff main --name-only
}

docker compose up --build