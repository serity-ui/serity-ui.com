import React, { createContext, useContext, useState } from 'react'
import { Container, Input, List, ListItem } from './Styled'

interface Props {
  children: any
  value?: string
  theme?: string
}

interface TriggerProps {
  value?: string
  placeholder: string
}

const SelectContext = createContext<any>('')

export default function Select({ children, theme = 'light' }: Props) {
  const [toggle, setToggle] = useState(false)
  const [select, setSelect] = useState<string>('')

  return (
    <SelectContext.Provider value={{ theme, select, toggle, setSelect }}>
      <Container
        theme={theme}
        className={` ${toggle ? 'active' : ''}`}
        onClick={() => setToggle(!toggle)}
      >
        {children}
      </Container>
    </SelectContext.Provider>
  )
}

Select.Trigger = function SelectTrigger({ value, placeholder }: TriggerProps) {
  const { theme, select } = useContext(SelectContext)
  let valor = value
  if (select !== '') {
    valor = select
  }
  return (
    <Input
      theme={theme}
      type='text'
      placeholder={placeholder}
      value={valor}
      readOnly
    />
  )
}

Select.Content = function SelectContent({ children }: Props) {
  const { theme, toggle } = useContext(SelectContext)
  return (
    <List theme={theme} className={` ${toggle ? 'active' : ''}`}>
      {children}
    </List>
  )
}

export const SelectItem = ({ children, value }: Props) => {
  const { theme, setSelect } = useContext(SelectContext)
  return (
    <ListItem theme={theme} onClick={() => setSelect(value)}>
      {children}
    </ListItem>
  )
}
