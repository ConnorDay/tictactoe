$branch = git rev-parse --abbrev-ref HEAD

if ($branch -eq "working") {
    git add *
    git status
    git commit -m "auto commit"
    git push -u origin working
}

docker compose up --build