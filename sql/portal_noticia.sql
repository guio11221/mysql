create database portal_noticia1;
use portal_noticia1;
create table noticias (id_noticia int not null primary key auto_increment, 
 titulo varchar(100), noticia text, 
 data_criação timestamp default current_timestamp);
 insert into noticias (titulo, noticia) values ("Primeira noticia", "O portal foi lançado");
 select * from noticias;
