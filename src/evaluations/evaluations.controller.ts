
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EvaluationsService } from './evaluations.service';
import { MakeEvaluationDto, ResponseOnCreateEvoluationDto } from './dto/makeEvaluation.dto';
import { Evaluations } from './evaluations.entity';

@ApiTags('Evaluations API')
@Controller('lessons/')
export class EvaluationsController {
    constructor(private readonly evaluationsService: EvaluationsService) {}
    

    @ApiResponse({
        status: 201,
        type: ResponseOnCreateEvoluationDto
    })
    @ApiParam({name: 'id', required: true, schema: { oneOf: [{type: 'string'}, {type: 'integer'}]}})
    @Post(':id/evaluations')
    async makeEvaluation(@Param('id') id, @Body() body: MakeEvaluationDto) {
        return this.evaluationsService.createEvaluations(id, body.sroce, body.user_id)
    }
}
