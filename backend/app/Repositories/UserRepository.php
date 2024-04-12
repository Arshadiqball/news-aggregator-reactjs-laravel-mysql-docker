<?php

namespace App\Repositories;

use App\Models\User;
use App\Repositories\RepositoryInterface;

class UserRepository implements RepositoryInterface
{
    public $model;

    public function __construct(User $user)
    {
        $this->model = $user;
    }

    /**
     * @param array $data
     * @return mixed
     * @throws Exception
     */
    function create(array $data)
    {
        try {
            $result = $this->model->create($data);

            return [
                'bool' => true,
                'result' => $result
            ];
        } catch (Exception $exception) {
            return [
                'bool' => false,
                'message' => $exception->getMessage()
            ];
        }
    }

    /**
     * @param array $data
     * @param int $id
     * @return mixed
     * @throws Exception
     */
    function update(array $data, $id)
    {
        try {
            $result = $this->model->findOrFail($id)->update($data);

            return [
                'bool' => true,
                'result' => $result
            ];
        } catch (Exception $exception) {
            return [
                'bool' => false,
                'message' => $exception->getMessage()
            ];
        }
    }

    /**
     * @return mixed
     * @throws Exception
     */
    public function all()
    {
        try {
            $result = $this->model::all();

            return [
                'bool' => true,
                'result' => $result
            ];
        } catch (Exception $exception) {
            return [
                'bool' => false,
                'message' => $exception->getMessage()
            ];
        }
    }

    /**
     * @param $id
     *
     * @return array
     */
    public function find($id): array
    {

        try {
            $result = $this->model->with('role','community','bandCommunities')->whereId($id)->first();

            return [
                'bool' => true,
                'result' => $result
            ];
        } catch (Exception $exception) {
            return [
                'bool' => false,
                'message' => $exception->getMessage()
            ];
        }
    }

    /**
     * @param int $id
     * @return mixed
     * @throws Exception
     */
    public function delete($id)
    {
        try {
            $result = $this->model->destroy($id);

            return [
                'bool' => true,
                'result' => $result
            ];
        } catch (Exception $exception) {
            return [
                'bool' => false,
                'message' => $exception->getMessage()
            ];
        }
    }
}