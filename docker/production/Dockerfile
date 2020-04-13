FROM phusion/passenger-ruby26:1.0.9
ENV HOME /root

CMD ["/sbin/my_init"]
RUN bash -lc 'rvm --default use ruby-2.6.5'


RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN rm /etc/nginx/sites-enabled/default
ADD ./docker/production/webapp.conf /etc/nginx/sites-enabled/webapp.conf
RUN mkdir /home/app/webapp

COPY --chown=app:app . /home/app/webapp

# ADD secret_key.conf /etc/nginx/main.d/secret_key.conf
# ADD gzip_max.conf /etc/nginx/conf.d/gzip_max.conf

RUN rm -f /etc/service/nginx/down

