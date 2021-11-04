import { useState, useEffect } from 'react';
import InspirationClient from '../../../../clients/inspirations/inspirations.client';
import { usePaginatedInspirations } from '../../../../clients/inspirations/inspirations.hooks';
import { INSPIRATION_LIST_PAGE_SIZE } from '../../../../constants/inspiration-contants';
import { InspirationType } from '../../../../constants/types';
import { AlertContextHooks } from '../../../../contexts/AlertContext';
import InspirationList from '../InspirationList';

const { useAlertInspirationContext } = AlertContextHooks;

const INITIAL_PAGE = 1;

const InspirationListContainer: React.FC = () => {
  const [page, setPage] = useState<number>(INITIAL_PAGE);
  const { alertDispatch } = useAlertInspirationContext();
  const { data, isLoading, isError, refetch } = usePaginatedInspirations(page);
  const numberOfPages = Math.ceil(
    (data?.count ?? 0) / INSPIRATION_LIST_PAGE_SIZE,
  );

  useEffect(() => {
    if (isError) {
      alertDispatch.getInspirationsError();
    }
  }, [isError, alertDispatch]);

  /**
   * Handlers
   */
  const _handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    _scrollToTop();

    setPage(value);
  };

  const _handleRemoveClick = async (inspiration: InspirationType) => {
    try {
      if (!inspiration.id) {
        throw new Error(`[_handleRemoveClick] missing inspiration ID`);
      }

      alertDispatch.removeInspirationLoading(inspiration.name);

      await InspirationClient.removeInspirationById(inspiration.id);
      // refetch all inspirations to have a list
      // that does not include removed inspiration
      await refetch();

      setTimeout(() => {
        alertDispatch.removeInspiration(inspiration.name);
      }, 300);
    } catch (error) {
      alertDispatch.removeInspirationError(inspiration.name);

      throw error;
    }
  };

  /**
   * Getters and setters
   */
  const _scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <InspirationList
      isLoading={isLoading}
      isError={isError}
      inspirations={data?.inspirations}
      numberOfPages={numberOfPages}
      page={page}
      onPaginationChange={_handlePaginationChange}
      onRemoveClick={_handleRemoveClick}
    />
  );
};

export default InspirationListContainer;
