<?php
namespace Album\Model;

use Zend\Db\TableGateway\TableGateway;

class AlbumTable
{
    protected $_tableGateway;

    public function __construct(TableGateway $tableGateway)
    {
        $this->_tableGateway = $tableGateway;
    }

    public function fetchAll()
    {
        $resultSet = $this->_tableGateway->select();
        return $resultSet;
    }

    public function getAlbum($id)
    {
        $id = (int) $id;
        $rowset = $this->_tableGateway->select(
            array(
                'id' => $id
            )
        );
        $row = $rowset->current();
        if (! $row) {
            throw new \Exception("Could not find row $id");
        }
        return $row;
    }

    public function saveAlbum(Album $album)
    {
        $data = array(
            'artist' => $album->artist,
            'title' => $album->title
        );

        $id = (int) $album->id;
        if (empty($id)) {
            $this->_tableGateway->insert($data);
            $id = $this->_tableGateway->getLastInsertValue();
        } else {
            if ($this->getAlbum($id)) {
                $this->_tableGateway->update(
                    $data,
                    array(
                        'id' => $id
                    )
                );
            } else {
                throw new \Exception('Album id does not exist');
            }
        }
        return $id;
    }

    public function deleteAlbum($id)
    {
        $this->_tableGateway->delete(
            array(
                'id' => $id
            )
        );
    }
}