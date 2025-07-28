import { createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FormState {
  name: string
  email: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    updateMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload
    },
    resetForm: (state) => {
      state.name = ''
      state.email = ''
      state.message = ''
    },
  },
})

export const { updateName, updateEmail, updateMessage, resetForm } = formSlice.actions

export default formSlice.reducer
