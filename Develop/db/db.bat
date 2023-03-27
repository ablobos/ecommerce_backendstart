@ECHO OFF

SET BINPATH= "C:\Program Files\MySQL\MySQL Server 8.0\bin"

SET SQLPATH= "C:\Users\nxtlo\Desktop\ecommerce-backend_starter"

SET DB_NAME="test_db"

SET DB_USER= "root"

SET DB_PASSWORD= "Password#123"

CD "%BINPATH%"

mysql --user=%DB_USER% --password=%DB_PASSWORD% -e "drop database if exists %DB_NAME%; create database %DB_NAME%;"
mysql --user=%DB_USER% --password=%DB_PASSWORD% %DB_NAME% < %SQLPATH%\schema.sql
mysql --user=%DB_USER% --password=%DB_PASSWORD% -e "drop database if exists %DB_NAME%;"