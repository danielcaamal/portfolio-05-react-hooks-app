import { useCounter } from '../../src/hooks/useCounter';
import { renderHook, act } from '@testing-library/react-hooks';


describe('useCounter tests', () => { 

    test('should return default values', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;
        expect(typeof increment).toBe('function');
        expect(typeof decrement).toBe('function');
        expect(typeof reset).toBe('function');
        expect(counter).toBe(0);
    });

    test('should return counter = 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    });

    test('should increment counter in 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;
        act(() => {
            increment();
        });
        const { counter } = result.current;
        expect(counter).toBe(101);
    });

    test('should decrement counter in 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;
        act(() => {
            decrement();
        });
        const { counter } = result.current;
        expect(counter).toBe(99);
    });

    test('should reset counter to 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment, reset } = result.current;
        act(() => {
            increment();
            reset();
        });
        const { counter } = result.current;
        expect(counter).toBe(100);
    });
});