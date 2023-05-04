package ru.mirea.data;

import org.hibernate.dialect.MySQL57Dialect;

public class LocalMysqlDialect extends MySQL57Dialect {
    @Override
    public String getTableTypeString() {
        return " DEFAULT CHARSET=utf8";
    }
}