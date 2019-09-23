export const serverCommunicationChecking = () => console.log('dada') || ({
  type: 'SERVER_COMM_CHECK',
  request: '/'
})
