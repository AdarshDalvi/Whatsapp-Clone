import { ReactElement, useState } from 'react';

export const useNewgroup = (steps: ReactElement[]) => {
    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

    function navigateTo(page: 1 | 2) {
        setCurrentStepIndex(page);
    }

    return {
        currentStepIndex,
        navigateTo,
        steps,
        step: steps[currentStepIndex],
    };
};