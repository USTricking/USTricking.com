import hostLists from '@/data/hosts/hosts.json';

export default function handler(req, res) {
  res.status(200).json(hostLists);
}