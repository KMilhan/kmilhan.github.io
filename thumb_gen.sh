mkdir public/thumb -p
rm -f public/thumb/*.png
cp public/*.png public/thumb/
mogrify -resize 1024x1024^ ./public/thumb/*.png
