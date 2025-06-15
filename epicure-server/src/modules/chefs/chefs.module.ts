import { Module } from '@nestjs/common';
import { ChefsService } from './chefs.service';
import { ChefsController } from './chefs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Chef, ChefSchema } from './schemas/chef.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chef.name, schema: ChefSchema }]),
  ],
  controllers: [ChefsController],
  providers: [ChefsService],
})
export class ChefsModule {}
