import config from "../config/config";
import { Client,  ID, Databases,Storage,Query } from "appwrite";

export class Service{
    client =new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appWriteUrl)
        .setProject(config.appWriteProjectId);

        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,{
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )

        }catch(error){
            throw error;
        }

    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,{
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )

        }catch(error){
            throw error;
        }

    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            )
            return true;

        }catch(error){
            throw error;
            return false;
        }

    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug

            )

        }catch(error){
            throw error;
            return false;
        }
            
        
    }

    async getPosts(queries=[Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                queries,

            )
        }catch(error){
            throw error;
        }


    }
    // file upload service

    async uploadFile(file){
        try{
           return  await this.bucket.createFile(
            config.appWriteBucketId,
            ID.unique(),
            file
           )

        }catch(error){
            console.log("Appwrite service :: uploadFile :: error",error);
            return false;
        }

    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                config.appWriteBucketId,
                ID.unique(),
                file
            )
            return true;
        }catch(error){
            throw error;
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appWriteBucketId,
            fileId
        )
    }

}


const service =new Service();
export default service; 