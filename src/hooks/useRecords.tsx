import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordItem = {
  tagIds: number[]
  note: string
  category: '+' | '-'
  amount: number
  createdAt: string // ISO 8601
}
type newRecordItem = Omit<RecordItem, 'createdAt'>

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    let localRecords = JSON.parse(window.localStorage.getItem('records') || '[]');
    if (localRecords.length === 0) {
      localRecords = [{
        'tagIds': [1],
        'note': '牛仔裤',
        'category': '-',
        'amount': 120,
        'createdAt': '2022-06-16T23:52:42.156Z'
      }, {
        'tagIds': [2],
        'note': '黄焖鸡',
        'category': '-',
        'amount': 15,
        'createdAt': '2022-06-16T23:53:11.296Z'
      }, {
        'tagIds': [3],
        'note': '房租',
        'category': '-',
        'amount': 3000,
        'createdAt': '2022-06-16T23:53:29.414Z'
      }, {
        'tagIds': [4],
        'note': '打车',
        'category': '-',
        'amount': 20,
        'createdAt': '2022-06-16T23:53:50.401Z'
      }, {
        'tagIds': [5],
        'note': '工资',
        'category': '+',
        'amount': 5000,
        'createdAt': '2022-06-16T23:56:03.549Z'
      }, {
        'tagIds': [2],
        'note': '盐',
        'category': '-',
        'amount': 5,
        'createdAt': '2022-06-20T23:53:11.296Z'
      }];
    }
    setRecords(localRecords);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.amount <= 0) {
      alert('请输入金额');
      return false;
    }
    if (newRecord.tagIds.length === 0) {
      alert('请选择标签');
      return false;
    }
    const record = {...newRecord, createdAt: (new Date()).toISOString()};
    setRecords([...records, record]);
    return true;
  };


  return {records, addRecord};
  //记账信息有关接口
};