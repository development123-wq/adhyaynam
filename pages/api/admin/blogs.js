import connectDb from '../../../middleware/mongodb'; 
import fs from 'fs/promises';
import path from 'path';
import cheerio from 'cheerio';
import Blog from '@/models/BlogSchema';

export default async function handler(req, res) {
    await connectDb();

    if (req.method === 'GET') {
        try {
            const blogs = await Blog.find(); 
            
            const publicDir = path.join(__dirname.split('.next')[0], 'public', 'uploads');

            const blogsWithImageUrls = await Promise.all(blogs.map(async (blog) => {
                const fileUrl = path.join(publicDir, blog.imagePath);
              
                try {
                    const imageData = await fs.readFile(fileUrl);
                  
                    const $ = cheerio.load(blog.content);
                  
                    const imgElements = $('img');
            
                    try{
                        for (let i = 0; i < imgElements.length; i++) {
                            const imgElement = imgElements.eq(i);
                            const src = imgElement.attr('src');
                            if (src && !src.startsWith('data:image/')) {
                                const imgFileUrl = path.join(publicDir, src);
                                const imgData = await fs.readFile(imgFileUrl);
                                imgElement.attr('src', 'data:image/jpeg;base64,' + imgData.toString('base64'));
                            }
                        }
                    }catch {
                        console.log('somthing went wrong')
                    }
                 

                    var updatedContent = $.html();
                    
                    return {
                        _id: blog._id,
                        title: blog.title,
                        content: updatedContent,
                        date: blog.date,
                        slug: blog.slug,
                        imgAtl:blog.imgAtl ,
                        metaDes:blog.metaDes ,
                        metaTitle:blog.metaTitle ,
                        imageUrl: 'data:image/jpeg;base64,' + imageData.toString('base64'),
                    };
                } catch (error) {
                    console.error('Error reading image:', error ,'and id', updatedContent);
                    return null;
                }
            }));

            const validBlogs = blogsWithImageUrls.filter((blog) => blog !== null);

            res.status(200).json(validBlogs);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while fetching blogs' });
        }
    } else {
        res.status(405).end();
    }
}
