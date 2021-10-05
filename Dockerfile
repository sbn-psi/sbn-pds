FROM httpd:2.4
RUN mkdir /usr/local/apache2/htdocs/pds
COPY ./_site/ /usr/local/apache2/htdocs/pds/