mkdir public/thumb -p
rm -f public/thumb/*.png public/thumb/*.jpg
cp public/*.png public/*.jpg public/thumb/
mogrify -resize 1024x1024^ ./public/thumb/*.png ./public/thumb/*.jpg
