/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : zf2

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2013-12-23 11:24:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `album`
-- ----------------------------
DROP TABLE IF EXISTS `album`;
CREATE TABLE `album` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artist` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of album
-- ----------------------------
INSERT INTO `album` VALUES ('1', 'The  Military  Wives', 'In  My  Dreams');
INSERT INTO `album` VALUES ('2', 'Adele', '21');
INSERT INTO `album` VALUES ('3', 'Bruce  Springsteen', 'Wrecking Ball (Deluxe)');
INSERT INTO `album` VALUES ('4', 'Lana  Del  Rey', 'Born  To  Die');
INSERT INTO `album` VALUES ('5', 'Gotye', 'Making  Mirrors');
