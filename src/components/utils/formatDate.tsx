import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const formatTimeAgo = (dateString: string): string => {
  if (!dateString) {
    return '';
  }
  
  const date = new Date(dateString);
  
  return formatDistanceToNow(date, { 
    addSuffix: true,
    locale: enUS
  });
};