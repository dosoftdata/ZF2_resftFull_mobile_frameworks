<?php
/**
 * testpqsql.php
 * @author: 王志昂<wangzhiangtony@qq.com>
 * @create: 2013-11-19 上午1:03:01
 * @note: 
 * @history: 
 * 2013-11-19 上午1:03:01 创建
 **/
chdir(dirname(__DIR__));

require 'init_autoloader.php';

$driverConfig = array(
    'driver' => 'Pdo_Pgsql',
    'username' => 'xxxxxx',
    'password' => 'xxxxxx',
    'dsn' => 'mysql:dbname=xxxx;host=xxxxx',
    'driver_options' => array(
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''
);

$adapter = new Zend\Db\Adapter\Adapter($driverConfig);

$qi = function($name) use ($adapter) { return $adapter->platform->quoteIdentifier($name); };
$fp = function($name) use ($adapter) { return $adapter->driver->formatParameterName($name); };

$sql = 'UPDATE ' . $qi('artist')
. ' SET ' . $qi('name') . ' = ' . $fp('name')
. ' WHERE ' . $qi('id') . ' = ' . $fp('id');

/** @var $statement Zend\Db\Adapter\Driver\StatementInterface */
$statement = $adapter->query($sql);

$parameters = array(
    'name' => 'Updated Artist',
    'id' => 1
);

$statement->execute($parameters);

// DATA INSERTED, NOW CHECK

/* @var $statement Zend\Db\Adapter\DriverStatementInterface */
$statement = $adapter->query('SELECT * FROM '
    . $qi('artist')
    . ' WHERE id = ' . $fp('id'));

/* @var $results Zend\Db\ResultSet\ResultSet */
$results = $statement->execute(array('id' => 1));

$row = $results->current();
$name = $row['name'];