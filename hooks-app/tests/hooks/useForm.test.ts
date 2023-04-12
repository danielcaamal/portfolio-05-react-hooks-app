import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../src/hooks/useForm';



describe('useForm tests', () => {

    const initialForm = {
        name: 'Fernando',
        email: 'email@email.com',
    }

    test('should return default values', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { formState, onInputChange, onResetForm } = result.current;
        expect(formState).toEqual({...initialForm, errors: []});
        expect(typeof onInputChange).toBe('function');
        expect(typeof onResetForm).toBe('function');
    });

    test('should change value of name', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const newName = 'Juan';
        const { onInputChange } = result.current;
        act(() => {
            onInputChange({target: {name: 'name', value: newName}});
        });
        const { formState } = result.current;
        expect(formState).toEqual({...initialForm, name: newName, errors: []});
    });

    test('should change value of email', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const newEmail = 'email@email.com'
        const { onInputChange } = result.current;
        act(() => {
            onInputChange({target: {name: 'email', value: newEmail}});
        });
        const { formState } = result.current;
        expect(formState).toEqual({...initialForm, email: newEmail, errors: []});
    });

    test('should reset form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const newName = 'Juan';
        const newEmail = 'email@email.com'
        const { onInputChange, onResetForm } = result.current;
        act(() => {
            onInputChange({target: {name: 'name', value: newName}});
            onInputChange({target: {name: 'email', value: newEmail}});
            onResetForm();
        });
        const { formState } = result.current;
        expect(formState).toEqual({...initialForm, errors: []});
    });
});