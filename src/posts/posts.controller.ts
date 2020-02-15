import { Controller, Get, Post, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    @Get()
    @ApiOperation({summary:'显示博客列表'})
    index() {
        
        return [
            {id:1,title:'title'},
            {id:1,title:'title'},
            {id:1,title:'title'},
            {id:1,title:'title'},
        ]
    }

    @Post()
    @ApiOperation({summary:'创建帖子'})
    create() {
        return true
    }

    @Get(':id')
    detail(@Param() params) {

        return [
            {
                id: parseInt(params.id)
            }
        ]
    }
}
