<?php require('./config.php');?>

<?php
error_reporting(E_ALL);
ini_set('display_error',1);
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Methods:*');
header('Access-Control-Allow-Origin:*');

$object = new crud;
$conn = $object->connect();

$method = $_SERVER['REQUEST_METHOD'];


switch($method){
    case "GET":

        $sql = "SELECT * FROM posts";
        $path = explode('/',$_SERVER['REQUEST_URI']);
        
        // print_r($path);break;
        if(isset($path[5])&&is_numeric($path[5])){

            $sql .= "   WHERE id = :id";
            $stmt =$conn->prepare($sql);
            $stmt->bindParam(':id', $path[5]);

            $stmt->execute();
            $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

        }else{

            $stmt =$conn->prepare($sql);
            $stmt->execute();
            $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        
        echo json_encode( $posts);
        break;




    case "POST":
        $post = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO posts ( id , name , title ,content ) VALUES ( null , :name, :title , :content)";
        $stmt =$conn->prepare($sql);
        $created_at = date('Y-m-d');
        $stmt->bindParam(':name', $post->name);
        $stmt->bindParam(':title', $post->title);
        $stmt->bindParam(':content', $post->content);
   
        if($stmt->execute()){
            $response = ['status'=>1,'message'=>'Record created successfully.'];
        }else{
            $response = ['status'=>0,'message'=>'Failed to created  record.'];

        }

        echo json_encode( $response);
        break;

         case "PUT":

        $post = json_decode(file_get_contents('php://input'));

        // print_r($post->id);break;
        $sql = "UPDATE  posts SET  name = :name, title = :title , content = :content  WHERE id = :id ";
        $stmt =$conn->prepare($sql);
        $updated_at = date('Y-m-d');
        $stmt->bindParam(':id', $post->id);
        $stmt->bindParam(':name', $post->name);
        $stmt->bindParam(':title', $post->title);
        $stmt->bindParam(':content', $post->content);
   
        if($stmt->execute()){
            $response = ['status'=>1,'message'=>'Record updated successfully.'];
        }else{
            $response = ['status'=>0,'message'=>'Failed to updated  record.'];

        }

        echo json_encode( $response);
        break;

        case "DELETE":

            $sql = "DELETE  FROM posts WHERE id = :id";
            $path = explode('/',$_SERVER['REQUEST_URI']);
            $stmt =$conn->prepare($sql);
            $stmt->bindParam(':id', $path[5]);
            $stmt->execute();

            // print_r($path);

            if($stmt->execute()){
                $response = ['status'=>1,'message'=>'Record deleted successfully.'];
            }else{
                $response = ['status'=>0,'message'=>'Failed to delete  record.'];
    
            }
            echo json_encode( $response);
            break;

    }