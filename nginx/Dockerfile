FROM nginx:alpine
RUN rm /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY domain.cert.pem /etc/nginx/cert.pem
COPY private.key.pem /etc/nginx/key.pem
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
