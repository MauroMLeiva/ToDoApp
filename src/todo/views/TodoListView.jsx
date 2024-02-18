import { Masonry } from '@mui/lab';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from '@mui/material';

export const TodoListView = () => {
    return (
        <Masonry columns={{ xs: 1, columns: 2, columns3: 3 }} spacing={3}>
            <Card>
                <CardContent>
                    <Typography sx={{ mb: 2 }}>Title</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam dolorem esse nostrum unde iusto, eum quis beatae
                        porro similique, optio sint aut ducimus officia,
                        voluptatem harum fugiat delectus. Sapiente, nostrum!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>Edit</Button>
                    <Button>Check</Button>
                </CardActions>
            </Card>

            <Card>
                <CardContent>
                    <Typography sx={{ mb: 2 }}>Title</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi est magni aspernatur, ipsa aperiam obcaecati
                        iste error quam sunt, nostrum, nulla recusandae! Minus
                        architecto natus est a rerum. Aperiam cupiditate numquam
                        provident ipsum non? Dolores sed ab autem. Quaerat harum
                        dolorum recusandae deleniti earum sunt odit, aliquam
                        quasi sint rerum delectus quam saepe adipisci
                        exercitationem perferendis accusamus asperiores illo at!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>Edit</Button>
                    <Button>Check</Button>
                </CardActions>
            </Card>

            <Card>
                <CardContent>
                    <Typography sx={{ mb: 2 }}>Title</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam dolorem esse nostrum unde iusto, eum quis beatae
                        porro similique, optio sint aut ducimus officia,
                        voluptatem harum fugiat delectus. Sapiente, nostrum!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>Edit</Button>
                    <Button>Check</Button>
                </CardActions>
            </Card>

            <Card>
                <CardContent>
                    <Typography sx={{ mb: 2 }}>Title</Typography>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Assumenda voluptatum, dolore alias optio eum vel
                        minus? Repellendus reprehenderit ratione, repudiandae
                        excepturi aliquam illo eum libero magnam neque alias sed
                        unde odio maiores nesciunt delectus dolorum nulla
                        voluptatibus atque quos fuga quasi consequatur
                        necessitatibus amet accusamus? Asperiores harum corporis
                        eum aliquam laboriosam dicta magnam reprehenderit.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>Edit</Button>
                    <Button>Check</Button>
                </CardActions>
            </Card>
        </Masonry>
    );
};
