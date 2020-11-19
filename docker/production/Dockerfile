# Version 2.6 is based on Debian8
FROM ruby:2.6.6-slim

# Install dependencies
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN apt-get install -y libpq-dev imagemagick libmagickwand-dev xfonts-75dpi xfonts-base
# Debian8 package version
# wkhtmltox can be downloaded from:
# https://downloads.wkhtmltopdf.org/0.12/0.12.5/wkhtmltox_0.12.5-1.jessie_amd64.deb
COPY wkhtmltox_0.12.5-1.stretch_amd64.deb /tmp
RUN dpkg -i /tmp/wkhtmltox_0.12.5-1.stretch_amd64.deb

# Set an environment variable where the Rails app is installed to inside of Docker image:
ENV RAILS_ROOT /var/www/logisys
RUN mkdir -p $RAILS_ROOT

# Set working directory, where the commands will be ran:
WORKDIR $RAILS_ROOT

# Setting env up
ENV RAILS_ENV='production'
ENV RAKE_ENV='production'

# Adding gems
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle install --jobs 20 --retry 10 --without development test

# Adding project files
ARG SECRET_KEY_BASE
COPY . .
RUN bundle exec rake assets:precompile

EXPOSE 3000
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]