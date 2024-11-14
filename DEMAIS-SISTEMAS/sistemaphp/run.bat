docker run -p 8000:80 -it ^
    --rm ^
    -v %cd%:/var/www/html ^
    --name sistemaphp ^
    sistemaphp
