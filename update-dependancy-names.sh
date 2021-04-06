find . -name "*.html" -type f -exec sed -i '' -e 's/main20210216.css/main20210331.css/g' {} \;
mv css/main20210216.css css/main20210331.css;

find . -name "*.html" -type f -exec sed -i '' -e 's/header20210216.css/header20210331.css/g' {} \;
mv css/header20210216.css css/header20210331.css;

find . -name "*.html" -type f -exec sed -i '' -e 's/footer20210216.css/footer20210331.css/g' {} \;
mv css/footer20210216.css css/footer20210331.css;

find . -name "*.html" -type f -exec sed -i '' -e 's/scripts20210216.js/scripts20210331.js/g' {} \;
mv js/scripts20210216.js js/scripts20210331.js;