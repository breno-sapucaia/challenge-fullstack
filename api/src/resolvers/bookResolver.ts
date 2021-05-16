
import { Query, Resolver } from 'type-graphql';
import { Book } from '../schemas/Book';

@Resolver()
class BookResolver {
    @Query(() => [Book])
    books() {
        return Book
    }
}