create database urlshort;

use urlshort;

create table links(longurl varchar(255), shorturlid varchar (255), count int(11) default 0, id int  auto_increment primary key);

select * from  links;