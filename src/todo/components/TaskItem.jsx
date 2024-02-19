import { Delete, Done, Edit, Save } from '@mui/icons-material';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    FormControl,
    Input,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { setEditing } from '../../store/taskSlice';
import { startDeletingTask, startSavingTask } from '../../store/taskThunks';

export const TaskItem = ({ item }) => {
    const dispatch = useDispatch();
    const { editing, labels } = useSelector((state) => state.task);

    const { title, body, color, filter, formState, onInputChange } =
        useForm(item);

    const handleEdit = () => {
        dispatch(setEditing(item.id));
    };

    const handleDelete = () => {
        dispatch(startDeletingTask(item.id));
    };

    const handleSaveTask = () => {
        dispatch(startSavingTask(formState));
    };

    return (
        <Card
            sx={{
                backgroundColor: `labels.${color}`,
                boxShadow:
                    editing == item.id
                        ? '0px 0px 10px 2px #e65100'
                        : '0px 0px 10px 2px black',
            }}
        >
            <CardContent>
                {editing == item.id ? (
                    <>
                        <Input
                            onChange={onInputChange}
                            name='title'
                            value={title}
                            placeholder='Title'
                            variant='plain'
                            sx={{
                                display: 'flex',
                                marginBottom: 2,
                                '--Input-radius': '0px',

                                '&:hover': {
                                    borderColor: 'neutral.outlinedHoverBorder',
                                },
                                '&::before': {
                                    border: '1px solid var(--Input-focusedHighlight)',
                                    transform: 'scaleX(0)',
                                    left: 0,
                                    right: 0,
                                    bottom: '-2px',
                                    top: 'unset',
                                    transition:
                                        'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                                    borderRadius: 0,
                                },
                            }}
                        />

                        <Input
                            onChange={onInputChange}
                            name='body'
                            value={body}
                            placeholder='Task to complete...'
                            variant='plain'
                            multiline
                            rows={5}
                            sx={{
                                display: 'flex',
                                '--Input-radius': '0px',

                                '&:hover': {
                                    borderColor: 'neutral.outlinedHoverBorder',
                                },
                                '&::before': {
                                    border: '1px solid var(--Input-focusedHighlight)',
                                    transform: 'scaleX(0)',
                                    left: 0,
                                    right: 0,
                                    bottom: '-2px',
                                    top: 'unset',
                                    transition:
                                        'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                                    borderRadius: 0,
                                },
                            }}
                        />
                    </>
                ) : (
                    <>
                        <Typography sx={{ mb: 2 }}>{title}</Typography>
                        <Typography>{body}</Typography>
                    </>
                )}
            </CardContent>
            <CardActions
                sx={{
                    justifyContent: 'space-between',
                    flexDirection: { columns: 'column', md: 'row' },
                    alignItems: 'center',
                }}
            >
                {editing == item.id ? (
                    <>
                        <FormControl sx={{ minWidth: 80, alignSelf: 'center' }}>
                            <InputLabel id='demo-simple-select-standard-label'>
                                Color
                            </InputLabel>
                            <Select
                                labelId='demo-simple-select-standard-label'
                                id='demo-simple-select-standard'
                                value={color}
                                name='color'
                                onChange={onInputChange}
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem
                                    sx={{ backgroundColor: 'labels.teal' }}
                                    value={'teal'}
                                >
                                    Teal
                                </MenuItem>
                                <MenuItem
                                    sx={{ backgroundColor: 'labels.green' }}
                                    value={'green'}
                                >
                                    Green
                                </MenuItem>
                                <MenuItem
                                    sx={{ backgroundColor: 'labels.yellow' }}
                                    value={'yellow'}
                                >
                                    Yellow
                                </MenuItem>
                                <MenuItem
                                    sx={{ backgroundColor: 'labels.brown' }}
                                    value={'brown'}
                                >
                                    Brown
                                </MenuItem>
                                <MenuItem
                                    sx={{ backgroundColor: 'labels.grey' }}
                                    value={'grey'}
                                >
                                    Grey
                                </MenuItem>
                                <MenuItem
                                    sx={{ backgroundColor: 'labels.pink' }}
                                    value={'pink'}
                                >
                                    Pink
                                </MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl sx={{ minWidth: 80 }}>
                            <InputLabel id='demo-multiple-name-label'>
                                Labels
                            </InputLabel>
                            <Select
                                labelId='demo-multiple-name-label'
                                id='demo-multiple-name'
                                multiple
                                value={filter}
                                name='filter'
                                onChange={onInputChange}
                                input={<OutlinedInput label='Name' />}
                            >
                                {labels.map((label) => (
                                    <MenuItem
                                        key={label.id}
                                        value={label.label}
                                    >
                                        {label.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Button
                            onClick={handleSaveTask}
                            sx={{ color: 'black' }}
                        >
                            <Save sx={{ mr: '1px' }} />
                            Save
                        </Button>
                    </>
                ) : (
                    <>
                        <Button onClick={handleEdit} sx={{ color: 'black' }}>
                            <Edit sx={{ mr: '1px' }} />
                            Edit
                        </Button>

                        <Button sx={{ color: 'black' }}>
                            <Done sx={{ mr: '1px' }} />
                            Done
                        </Button>

                        <Button onClick={handleDelete} sx={{ color: 'black' }}>
                            <Delete sx={{ mr: '1px' }} />
                            Delete
                        </Button>
                    </>
                )}
            </CardActions>
        </Card>
    );
};
