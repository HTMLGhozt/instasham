FROM ruby:2.6.3

RUN apt-get update && apt-get install -y \
  build-essential \
  nodejs \
  postgresql-client

# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

WORKDIR /usr/src/app
COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 5000
CMD ["rails", "server", "--port", "5000", "--binding", "0.0.0.0"]