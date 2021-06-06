FROM ruby:3.0.1

# Install dependencies
RUN apt-get update -qq && apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs yarn

# Set an environment variable where the Rails app is installed to inside of Docker image:
ENV RAILS_ROOT /var/www/blog
RUN mkdir -p $RAILS_ROOT

# Set working directory, where the commands will be ran:
WORKDIR $RAILS_ROOT

ENV RAILS_ENV production
ENV RACK_ENV production
ENV NODE_ENV='production' RAILS_ENV='production'
ENV RAILS_LOG_TO_STDOUT=true


# Adding gems
COPY Gemfile Gemfile.lock ./
RUN bundle install --jobs 20 --without development test --deployment
COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile --production

# Adding project files
COPY . .
RUN mkdir -p tmp/pids/

RUN bundle exec rake assets:precompile

EXPOSE 3000
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]