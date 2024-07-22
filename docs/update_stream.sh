# quick push
cd ../
source .venv/bin/activate
cd docs
make html 
git add . 
git commit -m "update: stream"
git push origin main
